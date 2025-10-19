import { GoogleGenAI, Type } from "@google/genai";
import { TattooIdea } from '../types';

// FIX: Use process.env.API_KEY as per the guidelines, which resolves the error on import.meta.env.
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const generateTattooIdea = async (prompt: string): Promise<TattooIdea | null> => {
  if (!prompt.trim()) {
    return null;
  }

  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: `Analiza esta idea para un tatuaje: "${prompt}"`,
      config: {
        systemInstruction: "Eres un experto consultor de tatuajes. Tu rol es tomar la idea base de un usuario y desarrollarla en un concepto más descriptivo y artístico. Debes analizar el estilo y sugerir las mejores ubicaciones en el cuerpo. Responde en un tono creativo, alentador y artístico. Tu respuesta debe ser siempre en español y en formato JSON.",
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            description: {
              type: Type.STRING,
              description: 'Una descripción detallada y artística de la idea del tatuaje.'
            },
            styleAnalysis: {
              type: Type.STRING,
              description: 'Un análisis del estilo de tatuaje mencionado o implícito.'
            },
            placements: {
              type: Type.ARRAY,
              items: {
                type: Type.OBJECT,
                properties: {
                  name: {
                    type: Type.STRING,
                    description: 'El nombre de la ubicación en el cuerpo (ej. Antebrazo, Espalda, Costillas).'
                  },
                  reason: {
                    type: Type.STRING,
                    description: 'La razón por la cual esta ubicación es adecuada para el diseño.'
                  }
                },
                required: ['name', 'reason']
              }
            }
          },
          required: ['description', 'styleAnalysis', 'placements']
        },
      },
    });

    const jsonString = response.text.trim();
    const parsedJson = JSON.parse(jsonString);
    return parsedJson as TattooIdea;

  } catch (error) {
    console.error("Error generating tattoo idea:", error);
    throw new Error("No se pudo generar la idea. Inténtalo de nuevo.");
  }
};
