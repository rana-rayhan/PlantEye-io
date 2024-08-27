"use client";

import { useState } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(
  process.env.NEXT_PUBLIC_GOOGLE_GEMINI_API_KEY!
);

interface ImageUploadProps {
  setPlantInfo: (info: string) => void;
  setImageUrl: (url: string) => void;
}

export default function ImageUpload({
  setPlantInfo,
  setImageUrl,
}: ImageUploadProps) {
  const [loading, setLoading] = useState(false);

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setLoading(true);

    try {
      const imageData = await readFileAsBase64(file);
      setImageUrl(URL.createObjectURL(file));

      const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

      const prompt =
        "Identify this plant and provide the following information in a structured format: common name, scientific name, brief description, origin, sunlight requirements, watering needs, soil type, and any special care instructions.";

      const result = await model.generateContent([
        prompt,
        {
          inlineData: {
            mimeType: file.type,
            data: imageData,
          },
        },
      ]);

      const response = await result.response;
      console.log(response);
      const plantInfo = await response.text()
        .replace("## ", "")
        .replace(/\*\*([^*]+)\*\*/g, "$1")
        .replace(/\n/g, "\n");

      setPlantInfo(plantInfo);
    } catch (error) {
      console.error("Error identifying plant:", error);
      const errorMessage = error instanceof Error ? error.message : "Unknown error";
      setPlantInfo(`Error identifying plant: ${errorMessage}`);
    }

    setLoading(false);
  };

  const readFileAsBase64 = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => {
        if (typeof reader.result === "string") {
          resolve(reader.result.split(",")[1]);
        } else {
          reject(new Error("Failed to read file"));
        }
      };
      reader.onerror = (error) => reject(error);
      reader.readAsDataURL(file);
    });
  };

  return (
    <div className="mb-8">
      <label className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-full cursor-pointer transition-colors text-lg">
        {loading ? "Identifying..." : "📷 Upload Plant Image"}
        <input
          type="file"
          accept="image/*"
          onChange={handleImageUpload}
          className="hidden"
          disabled={loading}
        />
      </label>
    </div>
  );
}
