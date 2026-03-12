"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

const VIDEO_ID = "LydQe3cCBao";

export default function HeroSection() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (lightboxOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [lightboxOpen]);

  return (
    <>
      <section className="relative min-h-[90vh] flex items-center overflow-hidden pt-[75px]">
        {/* YouTube Background Video */}
        {mounted && (
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <iframe
              src={`https://www.youtube.com/embed/${VIDEO_ID}?autoplay=1&mute=1&loop=1&playlist=${VIDEO_ID}&controls=0&showinfo=0&rel=0&modestbranding=1&playsinline=1&enablejsapi=1&iv_load_policy=3&disablekb=1`}
              title="Background video"
              allow="autoplay; encrypted-media"
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
              style={{ border: 0, width: 'calc(100vh * 16 / 9)', height: 'calc(100vw * 9 / 16)', minWidth: '100%', minHeight: '100%' }}
            />
          </div>
        )}

        {/* Black/Green Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-[#2a5e3a]/70 to-[#2a5e3a]/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30" />

        {/* Scrolling Ticker */}
        <div className="absolute bottom-0 left-0 right-0 z-10 bg-black/50 backdrop-blur-sm overflow-hidden">
          <div className="ticker-track flex items-center whitespace-nowrap py-3">
            {[...Array(10)].map((_, i) => (
              <div key={i} className="flex items-center shrink-0">
                <a
                  href="https://www.youtube.com/channel/UCPj0sGrj03Dymk25ABXXpIQ"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 text-white hover:text-yellow-300 transition-colors duration-200"
                >
                  <span className="w-2 h-2 rounded-full bg-red-500 shrink-0" />
                  <span className="font-semibold text-sm tracking-wide uppercase">Watch</span>
                </a>
                <a
                  href="https://tithe.ly/give?c=1379702"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 text-white hover:text-yellow-300 transition-colors duration-200"
                >
                  <span className="w-2 h-2 rounded-full bg-green-500 shrink-0" />
                  <span className="font-semibold text-sm tracking-wide uppercase">Give</span>
                </a>
                <a
                  href="https://forms.gle/QRk1FSUSFnjAVumv7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 text-white hover:text-yellow-300 transition-colors duration-200"
                >
                  <span className="w-2 h-2 rounded-full bg-blue-500 shrink-0" />
                  <span className="font-semibold text-sm tracking-wide uppercase">Prayer</span>
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Content Grid */}
        <div className="relative w-full max-w-7xl mx-auto px-4 py-20 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center min-h-[90vh]">
          {/* Left Side - Text */}
          <div className="text-left text-white">
            <p className="tracking-[0.3em] uppercase text-sm md:text-base mb-6 font-semibold animate-fade-in-up">
              Welcome to
            </p>
            <h1 className="text-5xl md:text-7xl font-bold font-[family-name:var(--font-playfair)] mb-6 leading-tight animate-fade-in-up-delay">
              Central Baptist
              <br />
              Church
            </h1>
            <div className="section-divider !mx-0 mb-8 animate-fade-in-up-delay" />
            <p className="text-xl md:text-2xl text-gray-200 italic mb-10 font-[family-name:var(--font-playfair)] animate-fade-in-up-delay-2">
              &ldquo;One Family, Called by Christ, Sent to Serve&rdquo;
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up-delay-2">
              <Link
                href="/our-story"
                className="bg-primary text-white px-8 py-4 rounded font-bold text-lg hover:bg-primary-light transition-colors duration-200 text-center"
              >
                Learn More
              </Link>
              <Link
                href="/contact"
                className="border-2 border-white text-white px-8 py-4 rounded font-bold text-lg hover:bg-white hover:text-primary transition-colors duration-200 text-center"
              >
                Plan Your Visit
              </Link>
            </div>
          </div>

          {/* Right Side - Play Button */}
          <div className="flex items-center justify-center animate-fade-in-up-delay-2">
            <button
              onClick={() => setLightboxOpen(true)}
              className="group relative flex items-center justify-center"
              aria-label="Play video"
            >
              {/* Pulsing rings */}
              <span className="absolute w-32 h-32 rounded-full bg-white/10 animate-[heroPulse_2s_ease-out_infinite]" />
              <span className="absolute w-24 h-24 rounded-full bg-white/15 animate-[heroPulse_2s_ease-out_0.4s_infinite]" />

              {/* Play button */}
              <span className="relative w-20 h-20 rounded-full bg-white/20 backdrop-blur-sm border-2 border-white/60 flex items-center justify-center group-hover:bg-white/30 group-hover:scale-110 transition-all duration-300 cursor-pointer">
                <svg
                  className="w-8 h-8 text-white ml-1"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </span>
            </button>
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxOpen && (
        <div
          className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4"
          onClick={() => setLightboxOpen(false)}
        >
          <button
            onClick={() => setLightboxOpen(false)}
            className="absolute top-6 right-6 text-white hover:text-gray-300 transition-colors z-10"
            aria-label="Close video"
          >
            <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <div
            className="w-full max-w-5xl aspect-video"
            onClick={(e) => e.stopPropagation()}
          >
            <iframe
              src={`https://www.youtube.com/embed/${VIDEO_ID}?autoplay=1&rel=0`}
              title="Pastor video"
              allow="autoplay; encrypted-media; fullscreen"
              allowFullScreen
              className="w-full h-full rounded-xl"
              style={{ border: 0 }}
            />
          </div>
        </div>
      )}
    </>
  );
}
