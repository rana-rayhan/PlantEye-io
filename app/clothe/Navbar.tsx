"use client";

import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-yellow-400 text-gray-900 py-4 px-8">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold">
          <Link href="/" className="hover:text-gray-700">
            PlantEye
          </Link>
        </div>
        <div className="space-x-4">
          <Link href="/" className="hover:text-gray-700 text-md font-bold">
            PlantEye
          </Link>
          <Link href="/pet" className="hover:text-gray-700 text-md font-bold">
            Pet
          </Link>
          <Link
            href="/clothe"
            className="hover:text-gray-700 text-md font-bold"
          >
            Clothe
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
