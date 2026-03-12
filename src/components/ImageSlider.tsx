"use client";

import Image from "next/image";
import { useState, useEffect, useCallback } from "react";

const images = [
  { src: "/images/slider/church-bus.jpg", alt: "Church Bus Ministry" },
  { src: "/images/slider/food-giveaway.jpg", alt: "Food Giveaway" },
  { src: "/images/slider/unity-sunday.jpg", alt: "Unity Sunday" },
  { src: "/images/slider/easter-eggstravaganza.jpg", alt: "Easter Eggstravaganza" },
  { src: "/images/slider/easter-sunday.jpg", alt: "Easter Sunday" },
  { src: "/images/slider/israel-trip.jpg", alt: "Israel Trip" },
  { src: "/images/slider/adult-bible-study.jpg", alt: "Adult Bible Study" },
  { src: "/images/slider/god-creator.jpg", alt: "God is the Creator" },
  { src: "/images/slider/promises.jpg", alt: "Promises" },
  { src: "/images/slider/wisdom-from-god.jpg", alt: "Wisdom from God" },
  { src: "/images/slider/adult-sunday-school.jpg", alt: "Adult Sunday School" },
  { src: "/images/slider/nursery.jpg", alt: "Nursery" },
  { src: "/images/slider/revelation.jpg", alt: "Revelation" },
  { src: "/images/slider/youtube.jpg", alt: "Watch on YouTube" },
];

// Duplicate the array so the loop is seamless
const doubledImages = [...images, ...images];

export default function ImageSlider() {
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
      <section className="relative overflow-hidden bg-gradient-to-r from-black/90 via-[#2a5e3a]/80 to-[#2a5e3a]/60 py-4">
        <div className="slider-track flex gap-4">
          {doubledImages.map((img, i) => (
            <div
              key={`${img.src}-${i}`}
              className="flex-shrink-0 w-[300px] h-[200px] md:w-[400px] md:h-[260px] relative rounded-lg overflow-hidden shadow-lg cursor-pointer"
              onClick={() => setLightboxIndex(i % images.length)}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 768px) 300px, 400px"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90"
          onClick={closeLightbox}
        >
          {/* Close button */}
          <button
            className="absolute top-4 right-4 text-white text-4xl font-light hover:text-gray-300 transition-colors z-10"
            onClick={closeLightbox}
            aria-label="Close lightbox"
          >
            &times;
          </button>

          {/* Previous button */}
          <button
            className="absolute left-4 text-white text-5xl font-light hover:text-gray-300 transition-colors z-10 select-none"
            onClick={(e) => { e.stopPropagation(); goPrev(); }}
            aria-label="Previous image"
          >
            &#8249;
          </button>

          {/* Image */}
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

          {/* Next button */}
          <button
            className="absolute right-4 text-white text-5xl font-light hover:text-gray-300 transition-colors z-10 select-none"
            onClick={(e) => { e.stopPropagation(); goNext(); }}
            aria-label="Next image"
          >
            &#8250;
          </button>

          {/* Caption */}
          <p className="absolute bottom-6 text-white text-lg font-medium">
            {images[lightboxIndex].alt}
          </p>
        </div>
      )}
    </>
  );
}
