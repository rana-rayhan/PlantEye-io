"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faFacebook,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <footer className="bg-pink-600 text-white py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row justify-between items-center">
          {/* About Section */}
          <div className="mb-4 lg:mb-0">
            <h3 className="text-xl font-semibold mb-2">About PlantEye</h3>
            <p className="text-gray-200">
              PlantEye helps you identify and learn about plants through
              AI-powered image analysis.
            </p>
          </div>

          {/* Contact Section */}
          <div className="mb-4 lg:mb-0">
            <h3 className="text-xl font-semibold mb-2">Contact Us</h3>
            <p className="text-gray-200">Email: email****@gmail.com</p>
            <p className="text-gray-200">Phone: +358 00000****</p>
          </div>

          {/* Social Media Links */}
          <div>
            <h3 className="text-xl font-semibold mb-2">Follow Us</h3>
            <div className="container mx-auto flex justify-center space-x-4">
              <a
                className="hover:text-white cursor-pointer"
                aria-label="Twitter"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faTwitter} size="2x" />
              </a>
              <a
                className="hover:text-white cursor-pointer"
                aria-label="Facebook"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faFacebook} size="2x" />
              </a>
              <a
                className="hover:text-white cursor-pointer"
                aria-label="Instagram"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faInstagram} size="2x" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-6 border-t border-gray-700 pt-4 text-center">
          <p className="text-gray-300 text-sm">
            © 2024 PlantEye. All rights reserved by Ryan.
          </p>
        </div>
      </div>
    </footer>
  );
}
