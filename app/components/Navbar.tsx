"use client";

import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-green-800 text-white py-4 px-8">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold">
          <Link href="/" className="hover:text-green-300">
            PlantEye
          </Link>
        </div>
        <div className="space-x-4">
          <Link href="/" className="hover:text-green-300">
            Home
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
