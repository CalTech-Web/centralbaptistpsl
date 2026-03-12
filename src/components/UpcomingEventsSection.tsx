"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useCallback } from "react";

// Images ordered: date events → day/recurring events → YouTube last
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

const events = [
  { title: "Easter Eggstravaganza", color: "bg-pink-100 text-pink-800", dot: "bg-pink-500" },
  { title: "Easter Sunday", color: "bg-purple-100 text-purple-800", dot: "bg-purple-500" },
  { title: "Unity Sunday", color: "bg-blue-100 text-blue-800", dot: "bg-blue-500" },
  { title: "Israel Trip", color: "bg-amber-100 text-amber-800", dot: "bg-amber-500" },
  { title: "Food Giveaway", color: "bg-green-100 text-green-800", dot: "bg-green-500" },
  { title: "Church Bus", color: "bg-teal-100 text-teal-800", dot: "bg-teal-500" },
  { title: "Adult Bible Study", color: "bg-indigo-100 text-indigo-800", dot: "bg-indigo-500" },
  { title: "God is the Creator", color: "bg-orange-100 text-orange-800", dot: "bg-orange-500" },
  { title: "Promises", color: "bg-rose-100 text-rose-800", dot: "bg-rose-500" },
  { title: "Wisdom from God", color: "bg-sky-100 text-sky-800", dot: "bg-sky-500" },
  { title: "Adult Sunday School", color: "bg-violet-100 text-violet-800", dot: "bg-violet-500" },
];

export default function UpcomingEventsSection() {
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
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left Side - Image Gallery */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {images.map((img, i) => (
                <div
                  key={img.src}
                  className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-md cursor-pointer group"
                  onClick={() => setLightboxIndex(i)}
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 200px"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                </div>
              ))}
            </div>

            {/* Right Side - Upcoming Events */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-playfair)] text-dark mb-2">
                Upcoming Events
              </h2>
              <p className="text-lg text-primary font-semibold mb-4">
                What&apos;s Happening at Central Baptist
              </p>
              <div className="section-divider !mx-0 mb-6" />
              <p className="text-gray-warm leading-relaxed mb-8">
                Join us for exciting events throughout the year! From community outreach
                and fellowship to Bible study and worship, there&apos;s always something
                meaningful happening at Central Baptist Church. We invite you and your
                family to be part of what God is doing in our community.
              </p>

              {/* Event Cards */}
              <div className="flex flex-wrap gap-3 mb-10">
                {events.map((event) => (
                  <div
                    key={event.title}
                    className={`inline-flex items-center gap-2.5 px-4 py-2.5 rounded-full ${event.color} font-semibold text-sm shadow-sm`}
                  >
                    <span className="relative flex h-2.5 w-2.5">
                      <span
                        className={`animate-pulse-dot absolute inline-flex h-full w-full rounded-full ${event.dot} opacity-75`}
                      />
                      <span
                        className={`relative inline-flex rounded-full h-2.5 w-2.5 ${event.dot}`}
                      />
                    </span>
                    {event.title}
                  </div>
                ))}
              </div>

              {/* CTA */}
              <div className="bg-light rounded-xl p-6">
                <p className="text-dark font-semibold text-lg mb-4">
                  Interested in one of the upcoming events?
                </p>
                <Link
                  href="/contact"
                  className="inline-block bg-primary text-white px-8 py-3 rounded font-bold hover:bg-primary-light transition-colors duration-200"
                >
                  Contact Us
                </Link>
              </div>
            </div>
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
