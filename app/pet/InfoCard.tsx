"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faImage,
  faRobot,
  faInfoCircle,
} from "@fortawesome/free-solid-svg-icons"; // Import Font Awesome icons

export default function InfoCards() {
  return (
    <div className="bg-pink-300 py-8 mt-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="bg-pink-200 rounded-lg shadow-lg p-6 text-center text-pink-600">
            <div className="flex justify-center mb-4">
              <FontAwesomeIcon
                icon={faImage}
                className="h-12 w-12 text-pink-600"
              />
            </div>
            <h2 className="text-2xl font-semibold mb-2">Upload Image</h2>
            <p className="text-pink-400">Easily upload your pet images.</p>
          </div>

          {/* Card 2 */}
          <div className="bg-pink-200 rounded-lg shadow-lg p-6 text-center text-pink-600">
            <div className="flex justify-center mb-4">
              <FontAwesomeIcon
                icon={faRobot}
                className="h-12 w-12 text-pink-600"
              />
            </div>
            <h2 className="text-2xl font-semibold mb-2">AI Analysis</h2>
            <p className="text-pink-400">
              Get instant analysis of your pet image.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-pink-200 rounded-lg shadow-lg p-6 text-center text-pink-600">
            <div className="flex justify-center mb-4">
              <FontAwesomeIcon
                icon={faInfoCircle}
                className="h-12 w-12 text-pink-600"
              />
            </div>
            <h2 className="text-2xl font-semibold mb-2">Get Information</h2>
            <p className="text-pink-400">
              Receive detailed information about your pet.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
