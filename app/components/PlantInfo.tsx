import React from 'react';

interface PlantInfoProps {
  plantInfo: string;
}

interface PlantInfo {
  [key: string]: string | string[];
}

const PlantInfo = ({ plantInfo }: PlantInfoProps) => {
  const lines = plantInfo.split("\n").filter((line) => line.trim() !== "");

  const plantObject: PlantInfo = {};
  let currentKey = "Description";

  lines.forEach((line) => {
    const parts = line.split(":");

    if (parts.length === 2) {
      // It's a key-value pair
      const key = parts[0].trim();
      const value = parts[1].trim();
      plantObject[key] = value;
      currentKey = key;
    } else if (line.startsWith("-")) {
      // It's a special case under "Special Care Instructions"
      if (currentKey === "Special Care Instructions") {
        if (!plantObject[currentKey]) {
          plantObject[currentKey] = [];
        }
        (plantObject[currentKey] as string[]).push(line.trim());
      }
    } else {
      // It's part of a previous value (e.g., Description)
      if (!plantObject[currentKey]) {
        plantObject[currentKey] = line.trim();
      } else {
        plantObject[currentKey] += ` ${line.trim()}`;
      }
    }
  });

  return (
    <div className="bg-white rounded-lg shadow-md p-6 max-w-md w-full">
      <h2 className="text-2xl font-semibold mb-4 text-green-700">
        Plant Information
      </h2>
      {Object.entries(plantObject).map(([key, value]) => (
        <div key={key} className="mb-4">
          <h3 className="text-lg font-medium text-gray-900">{key}:</h3>
          {Array.isArray(value) ? (
            <ul className="list-disc pl-5 text-gray-700">
              {value.map((item, index) => (
                <li key={index} className="ml-2">{item}</li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-700">{value}</p>
          )}
        </div>
      ))}
    </div>
  );
};

export default PlantInfo;
