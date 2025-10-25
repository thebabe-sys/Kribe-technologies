"use client";
import Link from "next/link";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-blue-600">
          Kribe Technologies
        </Link>
        {/* Desktop Nav */}
        <div className="hidden md:flex gap-4">
          <a href="#about" className="text-gray-700 hover:bg-blue-600 hover:text-white rounded-md px-4 py-2 font-medium transition">About</a>
          <a href="#services" className="text-gray-700 hover:bg-blue-600 hover:text-white rounded-md px-4 py-2 font-medium transition">Services</a>
          <a href="#contact" className="text-gray-700 hover:bg-blue-600 hover:text-white rounded-md px-4 py-2 font-medium transition">Contact</a>
        </div>
        {/* Hamburger Icon */}
        <button
          className="md:hidden text-blue-600 text-2xl"
          onClick={() => setMenuOpen(true)}
          aria-label="Open menu"
        >
          <FaBars />
        </button>
      </div>
      {/* Mobile Menu */}
      {menuOpen && (
        <div className="fixed inset-0 bg-rgba(0,0,0,0.6) bg-opacity-40 z-50 flex flex-col">
          <div className="bg-white shadow-md p-6 flex flex-col gap-4 absolute top-0 right-0 w-3/4 h-full">
            <button
              className="self-end text-blue-600 text-2xl mb-6"
              onClick={() => setMenuOpen(false)}
              aria-label="Close menu"
            >
              <FaTimes />
            </button>
            <a
              href="#about"
              className="text-gray-700 hover:bg-blue-600 hover:text-white rounded-md px-4 py-2 font-medium transition"
              onClick={() => setMenuOpen(false)}
            >
              About
            </a>
            <a
              href="#services"
              className="text-gray-700 hover:bg-blue-600 hover:text-white rounded-md px-4 py-2 font-medium transition"
              onClick={() => setMenuOpen(false)}
            >
              Services
            </a>
            <a
              href="#contact"
              className="text-gray-700 hover:bg-blue-600 hover:text-white rounded-md px-4 py-2 font-medium transition"
              onClick={() => setMenuOpen(false)}
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}