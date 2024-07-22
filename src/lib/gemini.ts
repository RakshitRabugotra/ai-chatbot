import { GoogleGenerativeAI } from "@google/generative-ai";

/**
 * Initialize the instance of the model
 */
const genAI = new GoogleGenerativeAI(process.env.NEXT_PUBLIC_GEMINI_API_KEY!);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

const chat = model.startChat({
  history: [
    {
      role: "user",
      parts: [{ text: "Hello, You will answer to my prompts." }],
    },
    {
      role: "model",
      parts: [{ text: "Great to meet you. What would you like to know?" }],
    },
  ],
  generationConfig: {
    maxOutputTokens: 1000,
  },
});

export const sendMessage = async (prompt: string) => {
  const result = await chat.sendMessageStream(prompt);
  return result;
};

export const getHistory = chat.getHistory;
