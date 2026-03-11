"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/our-story", label: "Our Story" },
  { href: "/our-ministries", label: "Ministries" },
  { href: "/community-involvement", label: "Community" },
  { href: "/mission-trips", label: "Missions" },
  { href: "/bible-reading", label: "Bible Reading" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white/95 backdrop-blur-sm shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/images/Central-Logo-300x182-1.png"
              alt="Central Baptist Church"
              width={50}
              height={30}
              className="w-auto h-10"
            />
            <div className="hidden sm:flex flex-col">
              <span className="text-lg font-bold tracking-wide text-dark font-[family-name:var(--font-playfair)]">
                Central Baptist Church
              </span>
              <span className="text-xs text-primary tracking-widest uppercase">
                Port St. Lucie, FL
              </span>
            </div>
          </Link>

          <div className="hidden xl:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-3 py-2 text-sm font-medium text-dark hover:text-primary transition-colors duration-200 rounded"
              >
                {link.label}
              </Link>
            ))}
            <a
              href="https://tithe.ly/give?c=1379702"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-3 bg-primary text-white px-5 py-2.5 rounded text-sm font-bold hover:bg-primary-dark transition-colors duration-200"
            >
              Give Online
            </a>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="xl:hidden p-2 rounded text-dark hover:bg-light transition-colors"
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

        {isOpen && (
          <div className="xl:hidden pb-4 border-t border-gray-200">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-4 py-3 text-sm text-dark hover:bg-primary/10 hover:text-primary transition-colors rounded"
              >
                {link.label}
              </Link>
            ))}
            <a
              href="https://tithe.ly/give?c=1379702"
              target="_blank"
              rel="noopener noreferrer"
              className="block mx-4 mt-3 bg-primary text-white px-5 py-2.5 rounded text-sm font-bold text-center hover:bg-primary-dark transition-colors"
            >
              Give Online
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}
