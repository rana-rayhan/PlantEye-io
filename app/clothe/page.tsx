"use client";

import { useState } from "react";
import ImageUpload from "./ImageUpload";
import PlantInfo from "./PlantInfo";
import Navbar from "./Navbar";
import InfoCards from "./InfoCard";
import Footer from "./Footer";

export default function Home() {
  const [plantInfo, setPlantInfo] = useState<string | null>(null);
  const [imageUrl, setImageUrl] = useState<string | null>(null);

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-yellow-200 from-green-50 to-emerald-100 flex flex-col items-center justify-start p-8">
        <h1 className="text-5xl font-bold mb-4 text-gray-700">
          Clothe Identifier
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Discover and learn about clothes with AI-powered identification
        </p>
        <ImageUpload setPlantInfo={setPlantInfo} setImageUrl={setImageUrl} />
        {imageUrl && (
          <div className="mt-8 mb-8">
            <img
              src={imageUrl}
              alt="Uploaded plant"
              className="max-w-md rounded-lg shadow-lg"
            />
          </div>
        )}
        {plantInfo && <PlantInfo plantInfo={plantInfo} />}
        <InfoCards />
      </main>
      <Footer />
    </>
  );
}
