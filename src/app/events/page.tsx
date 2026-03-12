"use client";

import Image from "next/image";
import PageHero from "@/components/PageHero";
import { useState, useEffect, useCallback } from "react";

const images = [
  { src: "/images/slider/easter-eggstravaganza.jpg", alt: "Easter Eggstravaganza" },
  { src: "/images/slider/easter-sunday.jpg", alt: "Easter Sunday" },
  { src: "/images/slider/unity-sunday.jpg", alt: "Unity Sunday" },
  { src: "/images/slider/israel-trip.jpg", alt: "Israel Trip" },
  { src: "/images/slider/food-giveaway.jpg", alt: "Food Giveaway" },
  { src: "/images/slider/church-bus.jpg", alt: "Church Bus Ministry" },
  { src: "/images/slider/adult-bible-study.jpg", alt: "Adult Bible Study" },
  { src: "/images/slider/god-creator.jpg", alt: "God is the Creator" },
  { src: "/images/slider/promises.jpg", alt: "Promises" },
  { src: "/images/slider/wisdom-from-god.jpg", alt: "Wisdom from God" },
  { src: "/images/slider/adult-sunday-school.jpg", alt: "Adult Sunday School" },
  { src: "/images/slider/nursery.jpg", alt: "Nursery" },
  { src: "/images/slider/revelation.jpg", alt: "Revelation" },
  { src: "/images/slider/youtube.jpg", alt: "Watch on YouTube" },
];

export default function EventsPage() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const closeLightbox = useCallback(() => setLightboxIndex(null), []);

  const goNext = useCallback(
    () => setLightboxIndex((prev) => (prev !== null ? (prev + 1) % images.length : null)),
    []
  );

  const goPrev = useCallback(
    () => setLightboxIndex((prev) => (prev !== null ? (prev - 1 + images.length) % images.length : null)),
    []
  );

  useEffect(() => {
    if (lightboxIndex === null) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") goNext();
      if (e.key === "ArrowLeft") goPrev();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKey);
    };
  }, [lightboxIndex, closeLightbox, goNext, goPrev]);

  return (
    <>
      <PageHero
        title="Events"
        subtitle="See what's happening at Central Baptist Church"
      />

      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
            {images.map((img, i) => (
              <div
                key={img.src}
                className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.15)] cursor-pointer group"
                onClick={() => setLightboxIndex(i)}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 300px"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-3">
                  <p className="text-white text-sm font-semibold">{img.alt}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90"
          onClick={closeLightbox}
        >
          <button
            className="absolute top-4 right-4 text-white text-4xl font-light hover:text-gray-300 transition-colors z-10"
            onClick={closeLightbox}
            aria-label="Close lightbox"
          >
            &times;
          </button>
          <button
            className="absolute left-4 text-white text-5xl font-light hover:text-gray-300 transition-colors z-10 select-none"
            onClick={(e) => { e.stopPropagation(); goPrev(); }}
            aria-label="Previous image"
          >
            &#8249;
          </button>
          <div
            className="relative w-[90vw] h-[80vh] max-w-5xl"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={images[lightboxIndex].src}
              alt={images[lightboxIndex].alt}
              fill
              className="object-contain"
              sizes="90vw"
              priority
            />
          </div>
          <button
            className="absolute right-4 text-white text-5xl font-light hover:text-gray-300 transition-colors z-10 select-none"
            onClick={(e) => { e.stopPropagation(); goNext(); }}
            aria-label="Next image"
          >
            &#8250;
          </button>
          <p className="absolute bottom-6 text-white text-lg font-medium">
            {images[lightboxIndex].alt}
          </p>
        </div>
      )}
    </>
  );
}
