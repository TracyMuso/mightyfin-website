"use client";

import { navLinks } from "@/constants/data/navmenu";
import { useState, useRef, useEffect } from "react";

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div className="md:hidden" ref={navRef}>
      {/* Hamburger button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 text-gray-700 focus:outline-none absolute top-5 right-5 z-250"
        aria-label="Toggle menu"
      >
        {isOpen ? (
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        ) : (
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        )}
      </button>

      {/* Mobile menu */}
      <div
        className={`absolute top-0 left-0 right-0 bg-purple-100 py-12 shadow-md transition-all duration-300 ease-in-out ${
          isOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-2 pointer-events-none"
        }`}
      >
        <nav className="flex flex-col w-full items-center px-4">
          {navLinks.map((item, idx) => (
            <a
              key={idx}
              href={item.url}
              className="w-full text-center py-3 text-gray-800 hover:bg-purple-200 border-b border-gray-900"
              onClick={() => setIsOpen(false)}
            >
              {item.title}
            </a>
          ))}
        </nav>
      </div>
    </div>
  );
}
