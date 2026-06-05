import { GoogleGenerativeAI } from "@google/generative-ai";

// Ensure the API key is available
const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY || "";
const genAI = new GoogleGenerativeAI(apiKey);

// We initialize the model inside the functions to allow fallback if needed.
const getModel = (modelName: string) => genAI.getGenerativeModel({ model: modelName });

export async function generateSummary(jobTitle: string, experience: any[], skills: any[]) {
  if (!apiKey) {
    throw new Error("Gemini API key is not set. Please add it to .env.local");
  }

  const prompt = `
    You are an expert resume writer. 
    Generate a professional summary for a resume. 
    The user is a ${jobTitle}.
    Their skills include: ${skills.map(s => s.name).join(", ")}.
    Their experience includes: ${experience.map(e => `${e.position} at ${e.company}`).join(", ")}.
    
    Write 3-4 impactful sentences. Do not use generic buzzwords. Focus on value, achievements, and technical expertise.
    Output only the summary text without quotes or markdown formatting.
  `;

  try {
    try {
      const model = getModel("gemini-flash-latest");
      const result = await model.generateContent(prompt);
      return result.response.text().trim();
    } catch (e: any) {
      if (e.message && e.message.includes("404")) {
        const fallbackModel = getModel("gemini-pro-latest");
        const result = await fallbackModel.generateContent(prompt);
        return result.response.text().trim();
      }
      throw e;
    }
  } catch (error) {
    console.error("Gemini API Error:", error);
    throw error;
  }
}

export async function improveBulletPoint(bullet: string, position: string) {
  if (!apiKey) {
    throw new Error("Gemini API key is not set. Please add it to .env.local");
  }

  const prompt = `
    You are an expert resume writer. 
    Improve the following resume bullet point for a ${position} role. 
    Make it more impactful, use action verbs, and quantify results where possible.
    
    Original bullet: "${bullet}"
    
    Output ONLY the improved bullet point text without quotes, markdown, or bullet characters.
  `;

  try {
    try {
      const model = getModel("gemini-flash-latest");
      const result = await model.generateContent(prompt);
      let improved = result.response.text().trim();
      if (improved.startsWith("• ") || improved.startsWith("- ")) {
        improved = improved.substring(2);
      }
      return improved;
    } catch (e: any) {
      if (e.message && e.message.includes("404")) {
        const fallbackModel = getModel("gemini-pro-latest");
        const result = await fallbackModel.generateContent(prompt);
        let improved = result.response.text().trim();
        if (improved.startsWith("• ") || improved.startsWith("- ")) {
          improved = improved.substring(2);
        }
        return improved;
      }
      throw e;
    }
  } catch (error) {
    console.error("Gemini API Error:", error);
    throw error;
  }
}
