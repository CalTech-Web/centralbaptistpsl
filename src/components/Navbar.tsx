"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/our-story", label: "Our Story" },
  { href: "/events", label: "Events" },
  { href: "/our-ministries", label: "Ministries" },
  { href: "/community-involvement", label: "Community" },
  { href: "/mission-trips", label: "Missions" },
  { href: "/bible-reading", label: "Bible Reading" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 backdrop-blur-md shadow-md"
          : "bg-white/10 backdrop-blur-[2px]"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          <Link href="/" className="flex flex-col items-start justify-center">
            <Image
              src="/images/Central-Logo-300x182-1.png"
              alt="Central Baptist Church"
              width={50}
              height={30}
              className={`w-auto h-10 transition-all duration-300 ${
                scrolled ? "" : "brightness-0 invert drop-shadow-lg"
              }`}
            />
            <span className="hidden sm:block text-[10px] font-semibold tracking-wide mt-0.5">
              <span
                className={`transition-colors duration-300 ${
                  scrolled ? "text-dark" : "text-white"
                }`}
              >
                One Family,{" "}
              </span>
              <span
                className={`transition-colors duration-300 ${
                  scrolled ? "text-[#7B1A1A]" : "text-yellow-300"
                }`}
              >
                Called by Christ
              </span>
              <span
                className={`transition-colors duration-300 ${
                  scrolled ? "text-dark" : "text-white"
                }`}
              >
                , Sent to Serve
              </span>
            </span>
          </Link>

          <div className="hidden xl:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-3 py-2 text-sm font-medium transition-colors duration-300 rounded ${
                  scrolled
                    ? "text-dark hover:text-primary"
                    : "text-white/90 hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="https://tithe.ly/give?c=1379702"
              target="_blank"
              rel="noopener noreferrer"
              className={`ml-3 px-5 py-2.5 rounded text-sm font-bold transition-all duration-300 ${
                scrolled
                  ? "bg-primary text-white hover:bg-primary-light"
                  : "bg-white/20 text-white border border-white/40 hover:bg-white/30"
              }`}
            >
              Give Online
            </a>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`xl:hidden p-3 rounded transition-colors duration-300 ${
              scrolled
                ? "text-dark hover:bg-light"
                : "text-white hover:bg-white/20"
            }`}
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
          <div
            className={`xl:hidden pb-4 border-t transition-colors duration-300 ${
              scrolled
                ? "border-gray-200 bg-white/80 backdrop-blur-md"
                : "border-white/20 bg-black/40 backdrop-blur-md rounded-b-xl"
            }`}
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`block px-4 py-3 text-sm rounded transition-colors ${
                  scrolled
                    ? "text-dark hover:bg-primary/10 hover:text-primary"
                    : "text-white hover:bg-white/10"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="https://tithe.ly/give?c=1379702"
              target="_blank"
              rel="noopener noreferrer"
              className={`block mx-4 mt-3 px-5 py-2.5 rounded text-sm font-bold text-center transition-colors ${
                scrolled
                  ? "bg-primary text-white hover:bg-primary-light"
                  : "bg-white/20 text-white border border-white/40 hover:bg-white/30"
              }`}
            >
              Give Online
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}
