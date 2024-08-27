"use client";

import { useState } from "react";
import ImageUpload from "./components/ImageUpload";
import PlantInfo from "./components/PlantInfo";
import Navbar from "./components/Navbar";
import InfoCards from "./components/InfoCard";
import Footer from "./components/Footer";

export default function Home() {
  const [plantInfo, setPlantInfo] = useState<string | null>(null);
  const [imageUrl, setImageUrl] = useState<string | null>(null);

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100 flex flex-col items-center justify-start p-8">
        <h1 className="text-5xl font-bold mb-4 text-emerald-700">PlantEye</h1>
        <p className="text-xl text-emerald-600 mb-8">
          Discover and learn about plants with AI-powered identification
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
