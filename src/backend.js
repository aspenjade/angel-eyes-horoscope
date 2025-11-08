// src/backend.js
import { todayStr } from "./fileStore.js";
import { ensureDailyHoroscopes, verifyDailyHoroscopes } from "./server.js";

export async function generateToday() {
  const today = todayStr();
  console.log(`[cron] generating ${today}`);
  await ensureDailyHoroscopes(today);
  await verifyDailyHoroscopes(today);
  console.log(`[cron] ✅ generation complete for ${today}`);
}
