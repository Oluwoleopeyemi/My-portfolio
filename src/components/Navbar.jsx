"use client";
import { useState } from "react";
import { Link } from "react-scroll";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: "Home", to: "hero" },
    { name: "Projects", to: "work" },
    { name: "Contact", to: "footer" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-blue-600/90 backdrop-blur-md shadow-md z-50">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Brand Name */}
        <div className="text-2xl font-extrabold bg-gradient-to-r from-white via-orange-400 to-white bg-clip-text text-transparent animate-text-shimmer bg-[length:200%_100%]">
          Oluwole Emmanuel
        </div>

        {/* Desktop Nav */}
        <ul className="hidden md:flex space-x-6 text-base md:text-lg font-semibold bg-gradient-to-r from-white via-orange-400 to-white bg-clip-text text-transparent animate-text-shimmer bg-[length:200%_100%]">
          {links.map((link) => (
            <li key={link.name}>
              <Link
                to={link.to}
                spy={true}
                smooth={true}
                duration={500}
                className="cursor-pointer hover:underline"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white bg-blue-800 p-2 rounded-md"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
    {isOpen && (
  <div className="md:hidden bg-blue-600 px-6 pb-4 space-y-2">
    {links.map((link) => (
      <Link
        key={link.name}
        to={link.to}
        spy={true}
        smooth={true}
        duration={500}
        onClick={() => setIsOpen(false)}
        className="block py-2 text-lg font-semibold bg-gradient-to-r from-white via-orange-400 to-white bg-clip-text text-transparent animate-text-shimmer bg-[length:200%_100%]"
      >
        {link.name}
      </Link>
    ))}
  </div>
)}
    </nav>
  );
}
