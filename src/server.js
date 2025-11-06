// server.js
import "dotenv/config";
import express from "express";
import cron from "node-cron";
import { SIGNS, generateHoroscope } from "./ai.js";
import { ensureDir, todayStr, readDay, writeDay } from "./fileStore.js";
import "dotenv/config";
const app = express();
import path from "path";
import { fileURLToPath } from "url";
import fs from "fs/promises";


// generate for a given date if any sign is missing
async function ensureDailyHoroscopes(dateStr) {
  await ensureDir();
  const current = await readDay(dateStr); // { aries: "...", ... }
  let changed = false;

  for (const sign of SIGNS) {
    if (!current[sign]) {
      current[sign] = await generateHoroscope(sign);
         console.log("Generated horoscope for", sign);
      changed = true;
    }
  }
  if (changed) await writeDay(dateStr, current);
  return current;
}


// ---------- helpers ----------
export async function getFileDataAsJson(dateStr) {
  await ensureDir();

  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  const filePath = path.join(__dirname, "../data", `${dateStr}.json`);
  console.log(`filepath: ${filePath}`);

  let data = {};
  try {
    const content = await fs.readFile(filePath, "utf8");
    console.log("[verify] read OK, bytes:", content.length);
    try {
      data = JSON.parse(content);
      return data;
    } catch (parseErr) {
      console.error("[verify] JSON parse error:", parseErr.message);
      console.error("[verify] first 120 chars:", content.slice(0, 120));
      return {};
    }
  } catch (err) {
    if (err.code === "ENOENT") {
      console.warn(`[verify] No existing file for ${dateStr}, creating new.`);
      return {};
    } else {
      console.error("[verify] readFile error:", err);
      throw err;
    }
  }
}

// sync is fine here
export function isHoroscopeComplete(data) {
  for (const sign of SIGNS) {
    const value = data[sign];
    if (!value || (typeof value === "string" && value.includes("FAILED"))) {
      return false;
    }
  }
  return true;
}

// ---------- main verifier ----------
export async function verifyDailyHoroscopes(dateStr) {
  let data = await getFileDataAsJson(dateStr);

  let changed = false;
  let complete = isHoroscopeComplete(data);

  // avoid infinite loop: try up to 3 passes
  let attempts = 0;
  const MAX_ATTEMPTS = 3;

  while (!complete && attempts < MAX_ATTEMPTS) {
    attempts += 1;
    console.log(`[verify] pass ${attempts}: filling missing/failed signs...`);

    for (const sign of SIGNS) {
      const value = data[sign];
      if (!value || (typeof value === "string" && value.includes("FAILED"))) {
        console.log(`[verify] regenerating ${sign}...`);
        try {
          const horoscope = await generateHoroscope(sign);
          data[sign] = horoscope;
          changed = true;
        } catch (err) {
          console.error(`[verify] failed to regenerate ${sign}:`, err);
        }
      }
    }

    complete = isHoroscopeComplete(data);
    console.log(`DATA is complete?: ${complete}...`);
  }

  if (!complete) {
    console.warn("[verify] Still incomplete after retries.");
  }

  if (changed) {
    await writeDay(dateStr, data);
    console.log(`[verify] ✅ updated ${dateStr}.json`);
  } else {
    console.log(`[verify] ✅ all horoscopes look good for ${dateStr}`);
  }

  return { complete, attempts };
}



// cron: midnight LA time
cron.schedule("0 0 * * *", async () => {
  const d = todayStr();
  try {
    await ensureDailyHoroscopes(d);
    console.log(`[cron] generated ${d}`);
  } catch (e) {
    console.error("[cron] error", e);
  }
}, { timezone: "America/Los_Angeles" });

// warm start
console.log("[warm-start] checking today's horoscopes...");

ensureDailyHoroscopes(todayStr())
  .then(async () => {
    console.log("[warm-start] ✅ horoscopes ready for", todayStr());
    console.log("[verify] starting integrity check...");
    try {
      await verifyDailyHoroscopes(todayStr());
      console.log("[verify] ✅ verification complete");
    } catch (verifyErr) {
      console.error("[verify] ❌ verification error:", verifyErr);
    }
  })
  .catch((err) => {
    console.error("[warm-start] ❌ error generating horoscopes:", err);
  });

// API: get today’s horoscope for a sign
app.get("/api/horoscope/:sign", async (req, res) => {
  const sign = String(req.params.sign || "").toLowerCase();
  if (!SIGNS.includes(sign)) return res.status(400).json({ error: "unknown sign" });
  const d = todayStr();
  const data = await ensureDailyHoroscopes(d);
  if (!data[sign]) return res.status(404).json({ error: "not found" });
  res.json({ sign, date: d, horoscope: data[sign] });
});

// optional: admin force-regenerate (protect behind a secret if you expose it)
app.post("/api/admin/regenerate", async (_req, res) => {
  const d = todayStr();
  const result = {};
  for (const sign of SIGNS) {
    result[sign] = await generateHoroscope(sign);
  }
  await writeDay(d, result);
  res.json({ ok: true, date: d });
});

const port = process.env.PORT || 3001;
app.listen(port, () => console.log(`API listening on :${port}`));
