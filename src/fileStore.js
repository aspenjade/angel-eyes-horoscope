// fileStore.js
import { promises as fs } from "fs";
import path from "path";

const DATA_DIR = path.join(process.cwd(), "data");

function todayLA() {
  return new Date().toLocaleDateString("en-CA", { timeZone: "America/Los_Angeles" }); // YYYY-MM-DD
}

function filePathFor(dateStr) {
  return path.join(DATA_DIR, `${dateStr}.json`);
}

export async function ensureDir() {
  await fs.mkdir(DATA_DIR, { recursive: true });
}

export function todayStr() {
  return todayLA();
}

// read file for date; return {} if missing
export async function readDay(dateStr) {
  try {
    const p = filePathFor(dateStr);
    const buf = await fs.readFile(p);
    return JSON.parse(buf.toString());
  } catch {
    return {};
  }
}

// atomic-ish write: write to temp then rename
export async function writeDay(dateStr, obj) {
  const p = filePathFor(dateStr);
  const tmp = `${p}.tmp`;
  await fs.writeFile(tmp, JSON.stringify(obj, null, 2), "utf8");
  await fs.rename(tmp, p);
}
