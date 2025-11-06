// ai.js
import OpenAI from "openai";
export const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

const SIGNS = [
  "aries","taurus","gemini","cancer","leo","virgo",
  "libra","scorpio","sagittarius","capricorn","aquarius","pisces"
];

export { SIGNS };

export async function generateHoroscope(sign) {
//    const prompts = [
//     `You are an astrologer. Write a concise, original, *today-only* horoscope for the ${sign} sign.
// Tone:  encouraging, specific ; avoid medical/financial advice; 70–120 words.
// Include a subtle, specific action suggestion.  Please ground the horoscope around "dreams" or "goals". 
//  do not include the sign name or the date anywhere in the text.
//      Just write the message itself!
// `,

//     `Write a cinematic horoscope for ${sign}.
//      Use vivid imagery and sensory language, but do not include the sign name or today's date.
//      Start directly with the message. Limit to 120 words.`,

//     `Write an empowering, magnetic horoscope for ${sign}.
//      Tone: confident, modern mystic. Do not mention ${sign} by name or include a date.
//      Begin directly with the advice. About 120 words.`,

//     `Write a minimalist horoscope for ${sign} that reads like a daily mantra.
//      Do not include a title, the sign name, or the date — only the message text itself.
//      Keep it subtle, under 120 words.`
//   ];

  // Pick a random one
  // const randomPrompt = prompts[Math.floor(Math.random() * prompts.length)];
  const prompt = `write a horoscope for sign ${sign}, keep it about 80 words.  No medical advice or financial advice`

//   const prompt = `
// You are an astrologer. Write a concise, original, *today-only* horoscope for the ${sign} sign.
// Tone:  encouraging, specific ; avoid medical/financial advice; 70–120 words.
// Include a subtle, specific action suggestion.  Please ground the horoscope around "dreams" or "goals".  
// `;

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
