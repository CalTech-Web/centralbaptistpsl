"use client";

import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/our-story", label: "Our Story" },
  { href: "/our-ministries", label: "Our Ministries" },
  { href: "/community-involvement", label: "Community Involvement" },
  { href: "/mission-trips", label: "Mission Trips" },
  { href: "/bible-reading", label: "Bible Reading" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-primary text-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          {/* Logo / Church Name */}
          <Link href="/" className="flex items-center space-x-3">
            <div className="flex flex-col">
              <span className="text-xl font-bold tracking-wide font-[family-name:var(--font-playfair)]">
                Central Baptist Church
              </span>
              <span className="text-xs text-secondary tracking-widest uppercase">
                Port St. Lucie, FL
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-3 py-2 text-sm font-medium hover:text-secondary transition-colors duration-200"
              >
                {link.label}
              </Link>
            ))}
            <a
              href="https://tithe.ly/give?c=1379702"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-3 bg-secondary text-primary-dark px-5 py-2 rounded text-sm font-bold hover:bg-secondary-light transition-colors duration-200"
            >
              Give Online
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded hover:bg-primary-light transition-colors"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Nav */}
        {isOpen && (
          <div className="lg:hidden pb-4 border-t border-primary-light">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-4 py-3 text-sm hover:bg-primary-light hover:text-secondary transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <a
              href="https://tithe.ly/give?c=1379702"
              target="_blank"
              rel="noopener noreferrer"
              className="block mx-4 mt-3 bg-secondary text-primary-dark px-5 py-2 rounded text-sm font-bold text-center hover:bg-secondary-light transition-colors"
            >
              Give Online
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}
