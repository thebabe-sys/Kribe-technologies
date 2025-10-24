"use client";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-white shadow sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-blue-600">
          Kribe Technologies
        </Link>
        <div className="hidden md:flex gap-4">
          <a href="#about" className="text-gray-700 hover:bg-blue-600 hover:text-white rounded-md px-4 py-2 font-medium transition">About</a>
          <a href="#services" className="text-gray-700 hover:bg-blue-600 hover:text-white rounded-md px-4 py-2 font-medium transition">Services</a>
          <a href="#contact" className="text-gray-700 hover:bg-blue-600 hover:text-white rounded-md px-4 py-2 font-medium transition">Contact</a>
        </div>
      </div>
    </nav>
  );
}