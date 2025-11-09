import { Injectable } from '@angular/core';
import { GoogleGenerativeAI } from '@google/generative-ai';
import { environment } from '../../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})

export class GeminiService {
  private ai: GoogleGenerativeAI;
  private modelName = 'gemini-2.5-flash';

  // System instruction to guide the model's persona and knowledge base.
  private systemInstruction = `
    You are the Cab Helper, a friendly and concise assistant for a cab booking application. 
    You must base your answers on the following facts and your general knowledge.
    FACT: The fixed cost for all cab bookings is $25.
    FACT: The fixed cost for all cab bookings is $25.
    FACT: The company was built in 2025.
    FACT: The company turnover is 500 million.
    FACT: The CEO of cab booking is Pradeep Shankar Srivastav.
    FACT: The CEO's age is 25 years.
    FACT: The CEO's wife is Priya Srivastav.
    If you don't know the answer, politely state that you only assist with cab-related queries.
  `;

  constructor() {
    // Initialize the Gemini client using the API key from the environment
    this.ai = new GoogleGenerativeAI(environment.geminiApiKey);
  }

  /**
   * Generates content from the Gemini model using the system instruction.
   * @param userPrompt The user's query string.
   * @returns A Promise that resolves to the generated text string.
   */
  async generateContent(userPrompt: string): Promise<string> {
    // 1. Get the specific model instance
    const model = this.ai.getGenerativeModel({ model: this.modelName });

    try {
      // 2. Call the API with the content and system instruction
      const result = await model.generateContent({
        contents: [{ role: 'user', parts: [{ text: userPrompt }] }],
        // FIX TS2345: Move systemInstruction out of generationConfig
        systemInstruction: this.systemInstruction, // <-- NOW AT TOP LEVEL
        generationConfig: {
          // No other generation parameters needed here right now
        }
      });
      
      // 3. Robustly extract the text.
      // 3. Robustly extract the text and ensure it is a string.
      const responseValue = result?.response?.candidates?.[0]?.content?.parts?.[0]?.text;
      
      // FIX TypeError: Use String() constructor for guaranteed string conversion.
      const finalResponseText = String(responseValue ?? ''); 
      
      return finalResponseText.trim() || "Sorry, I couldn't generate a meaningful response for that query.";
    } catch (error) {
      console.error('Gemini API call failed:', error);
      // Throw a user-friendly error message to be caught by the component
      throw new Error(`Gemini API call failed: ${error}`);
    }
  }
}

