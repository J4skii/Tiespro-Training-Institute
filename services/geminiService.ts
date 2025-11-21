import { GoogleGenAI } from "@google/genai";

const getClient = () => {
    const apiKey = process.env.API_KEY;
    if (!apiKey) {
        console.error("API Key is missing. Gemini features will not work.");
        return null;
    }
    return new GoogleGenAI({ apiKey });
};

export const getTrainingRecommendations = async (userQuery: string): Promise<string> => {
  const ai = getClient();
  if (!ai) return "AI Service is currently unavailable. Please contact support directly.";

  try {
    const systemInstruction = `
      You are a Senior Training Consultant for 'Tiespro Training Institute', a South African training provider specializing in Transport, Logistics, and Supply Chain Management.
      
      Your goal is to analyze the user's request and recommend accredited training interventions from Tiespro's catalogue.
      
      Tiespro Catalogue Highlights:
      1. DRIVER TRAINING: Professional Driving (SAQA 50285), Truck Driver (SAQA 93793), Bus Driver (SAQA 94202), Taxi Driver (SAQA 94024).
      2. LOGISTICS OPS: Freight Handling (SAQA 57831), Freight Handler (SAQA 96396), Transport Clerk (SAQA 94025).
      3. MANAGEMENT: Supply Chain Practitioner (SAQA 110942), Clearing & Forwarding Agent (SAQA 96368).
      4. COMPLIANCE: Dangerous Goods, First Aid, Fire Fighting.
      
      Use the following tone: Professional, Industrial, Compliance-focused, Helpful.
      
      Keep the response concise (under 150 words).
      Structure:
      1. Identify the operational need (e.g., "For compliance..." or "To upskill drivers...").
      2. Recommend the specific Qualification (Use the SAQA ID if possible).
      3. Mention the benefit (e.g., "Improves safety," "Ensures TETA compliance").
      4. Call to action: "Contact our Durban office at 031 205 0384."
      
      Format the output in clean Markdown.
    `;

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: userQuery,
      config: {
        systemInstruction: systemInstruction,
        temperature: 0.5, // Lower temperature for more factual/consistent responses
        topK: 40,
      }
    });

    return response.text || "I couldn't generate a recommendation at this time. Please contact our office at 031 205 0384.";
  } catch (error) {
    console.error("Error querying Gemini:", error);
    return "An error occurred while analyzing your request. Please try again later.";
  }
};