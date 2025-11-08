// api/cron.js
import { generateToday } from "../src/backend.js";

export default async function handler(req, res) {
  try {
    await generateToday();
    res.status(200).json({ ok: true });
  } catch (err) {
    console.error("[api/cron] error:", err);
    res.status(500).json({ error: err.message });
  }
}
