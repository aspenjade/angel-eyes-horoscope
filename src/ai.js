// ai.js
import OpenAI from "openai";
export const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

const SIGNS = [
  "aries","taurus","gemini","cancer","leo","virgo",
  "libra","scorpio","sagittarius","capricorn","aquarius","pisces"
];

export { SIGNS };

export async function generateHoroscope(sign) {

  const prompt1 = `write a horoscope for sign ${sign}, keep it about 80 words.  No medical advice or financial advice. Make it clear, don't use cryptic language`
  const prompt2 = `write a horoscope for sign ${sign}, keep it about 80 words.  No medical advice or financial advice. talk about dreams/goals and how the person can get there.  Include words "eyes" and "angel" I dont want it to be poetic or cheesy, keep it straight forward :)`
  const prompt3 = `write a horoscope for sign ${sign}, keep it about 80 words.  No medical advice or financial advice. keep it mostly about relationships, either friendships, family or romantic"`

  const prompts = [prompt1, prompt2, prompt3];
  const randomIndex = Math.floor(Math.random() * prompts.length);
  const prompt = prompts[randomIndex];


  // Responses API (current OpenAI docs)
  const res = await openai.responses.create({
  model: "gpt-5-mini",
  input: prompt,
  reasoning: { effort: "low" },     // reduce reasoning token spend
  max_output_tokens: 350            // give enough room for text to appear
});
  console.log("[generateHoroscope] raw response:", res);

// log the extracted text so you can see what will be returned
  console.log("[generateHoroscope] output_text:", res.output_text);

  // Convenience field per docs
  return res.output_text?.trim() || "FAILED 🌟";
}
