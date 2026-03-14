"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

// ORDER: 1) Dated events (earliest first) → 2) Recurring by day (Mon→Sun) then time (earliest first) → 3) No day/time → 4) YouTube last
const images = [
  // --- Dated events (earliest first) ---
  { src: "/images/slider/food-giveaway.jpg", alt: "Food Giveaway", gradient: "from-green-600/85" },
  { src: "/images/slider/unity-sunday.jpg", alt: "Unity Sunday", gradient: "from-blue-600/85" },
  { src: "/images/slider/easter-eggstravaganza.jpg", alt: "Easter Eggstravaganza", gradient: "from-pink-600/85" },
  { src: "/images/slider/easter-sunday.jpg", alt: "Easter Sunday", gradient: "from-purple-600/85" },
  { src: "/images/slider/israel-trip.jpg", alt: "Israel Trip", gradient: "from-amber-600/85" },
  // --- Recurring: Sunday (by time, earliest first) ---
  { src: "/images/slider/god-creator.jpg", alt: "God is the Creator", gradient: "from-orange-600/85" },
  { src: "/images/slider/promises.jpg", alt: "Promises", gradient: "from-rose-600/85" },
  { src: "/images/slider/wisdom-from-god.jpg", alt: "Wisdom from God", gradient: "from-sky-600/85" },
  { src: "/images/slider/adult-sunday-school.jpg", alt: "Adult Sunday School", gradient: "from-violet-600/85" },
  { src: "/images/slider/nursery.jpg", alt: "Nursery", gradient: "from-emerald-600/85" },
  { src: "/images/slider/revelation.jpg", alt: "Revelation", gradient: "from-red-600/85" },
  // --- Recurring: Wednesday ---
  { src: "/images/slider/adult-bible-study.jpg", alt: "Adult Bible Study", gradient: "from-indigo-600/85" },
  // --- No specific day/time ---
  { src: "/images/slider/church-bus.jpg", alt: "Church Bus Ministry", gradient: "from-teal-600/85" },
  // --- YouTube (always last) ---
  { src: "/images/slider/youtube.jpg", alt: "Watch on YouTube", gradient: "from-red-600/85" },
];

const previewImages = images.slice(0, 6);

export default function UpcomingEventsSection() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  useEffect(() => {
    if (lightboxIndex !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [lightboxIndex]);

  useEffect(() => {
    if (lightboxIndex === null) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightboxIndex(null);
      if (e.key === "ArrowRight") setLightboxIndex((i) => (i !== null ? (i + 1) % previewImages.length : null));
      if (e.key === "ArrowLeft") setLightboxIndex((i) => (i !== null ? (i - 1 + previewImages.length) % previewImages.length : null));
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [lightboxIndex]);

  return (
    <>
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-playfair)] text-dark mb-2">
              Upcoming Events
            </h2>
            <p className="text-lg text-primary font-semibold mb-3">
              What&apos;s Happening at Central Baptist
            </p>
            <div className="section-divider mb-4" />
            <p className="text-gray-warm leading-relaxed max-w-2xl mx-auto">
              Join us for exciting events throughout the year! From community outreach
              and fellowship to Bible study and worship, there&apos;s always something
              meaningful happening at Central Baptist Church.
            </p>
          </div>

          {/* Image Grid - 3 columns, 2 rows */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-5 mb-10">
            {previewImages.map((img, index) => (
              <button
                key={img.src}
                onClick={() => setLightboxIndex(index)}
                className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-sm group bg-gray-100 cursor-pointer"
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-contain group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 50vw, 400px"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                <div className={`absolute bottom-0 left-0 right-0 bg-gradient-to-t ${img.gradient} to-transparent p-3`}>
                  <p className="text-white text-sm font-semibold">{img.alt}</p>
                </div>
              </button>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center">
            <Link
              href="/events"
              className="inline-block bg-primary text-white px-8 py-3 rounded-lg font-bold hover:bg-primary-light transition-colors duration-200 btn-interact"
            >
              View All Events
            </Link>
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4"
          onClick={() => setLightboxIndex(null)}
        >
          {/* Close button */}
          <button
            onClick={() => setLightboxIndex(null)}
            className="absolute top-6 right-6 text-white hover:text-gray-300 transition-colors z-10"
            aria-label="Close lightbox"
          >
            <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Prev button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              setLightboxIndex((lightboxIndex - 1 + previewImages.length) % previewImages.length);
            }}
            className="absolute left-4 md:left-8 text-white hover:text-gray-300 transition-colors z-10"
            aria-label="Previous image"
          >
            <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Next button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              setLightboxIndex((lightboxIndex + 1) % previewImages.length);
            }}
            className="absolute right-4 md:right-8 text-white hover:text-gray-300 transition-colors z-10"
            aria-label="Next image"
          >
            <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Image */}
          <div
            className="relative w-full max-w-4xl max-h-[85vh] aspect-video"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={previewImages[lightboxIndex].src}
              alt={previewImages[lightboxIndex].alt}
              fill
              className="object-contain"
              sizes="100vw"
            />
            <p className="absolute bottom-0 left-0 right-0 text-center text-white font-semibold text-lg py-3 bg-black/40">
              {previewImages[lightboxIndex].alt}
            </p>
          </div>
        </div>
      )}
    </>
  );
}
