"use client";

import Image from "next/image";
import PageHero from "@/components/PageHero";
import { useState, useEffect, useCallback } from "react";

const galleryImages = [
  { src: "/images/CBPSL-image-2.jpg", alt: "Church gathering" },
  { src: "/images/cbpsl-image.jpg", alt: "Church fellowship" },
  { src: "/images/Youth-Group.jpeg", alt: "Youth Group" },
  { src: "/images/Kids-Ministry.jpg", alt: "Kids Ministry" },
  { src: "/images/Linda-Odom-1.jpg", alt: "Mission work" },
  { src: "/images/Linda-Odom-2.jpg", alt: "Mission outreach" },
  { src: "/images/Linda-Odom-3.jpg", alt: "Community service" },
  { src: "/images/Linda-Odom-4.jpg", alt: "Serving together" },
  { src: "/images/com-involve-1.jpg", alt: "Community outreach event" },
  { src: "/images/com-involve-2.jpg", alt: "Volunteering in the community" },
  { src: "/images/com-involve-3.jpg", alt: "Food giveaway ministry" },
  { src: "/images/com-involve-4.jpg", alt: "Serving our neighbors" },
  { src: "/images/com-involve-5.jpg", alt: "Community fellowship" },
  { src: "/images/com-involve-6.jpg", alt: "Local mission work" },
  { src: "/images/com-involve-7.jpg", alt: "Helping those in need" },
  { src: "/images/com-involve-8.jpg", alt: "Community gathering" },
  { src: "/images/com-involve-9.jpg", alt: "Serving with love" },
  { src: "/images/IMG_20200118_095014.jpg", alt: "Church event" },
  { src: "/images/central-baptist-church-trailer.jpg", alt: "Church trailer ministry" },
  { src: "/images/sign.jpg", alt: "Church sign" },
  { src: "/images/CBPSL-image-1.jpg", alt: "Church worship" },
  { src: "/images/CBPSL-image-10.jpg", alt: "Church family" },
  { src: "/images/CBPSL-image-9.jpg", alt: "Church building" },
  { src: "/images/CBPSL-image-8.jpg", alt: "Church exterior" },
  { src: "/images/CBPSL-image-7.jpg", alt: "Church campus" },
  { src: "/images/CBPSL-image-6.jpg", alt: "Church sanctuary" },
  { src: "/images/CBPSL-image-5.jpg", alt: "Church grounds" },
  { src: "/images/CBPSL-image-3-1.jpg", alt: "Church activities" },
];

export default function GalleryPage() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const closeLightbox = useCallback(() => setLightboxIndex(null), []);

  const goNext = useCallback(
    () =>
      setLightboxIndex((prev) =>
        prev !== null ? (prev + 1) % galleryImages.length : null
      ),
    []
  );

  const goPrev = useCallback(
    () =>
      setLightboxIndex((prev) =>
        prev !== null
          ? (prev - 1 + galleryImages.length) % galleryImages.length
          : null
      ),
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
        title="Gallery"
        subtitle="A glimpse into the life of Central Baptist Church"
        image="/images/hero-gallery.jpg"
      />

      {/* Intro Section - GREEN */}
      <section className="bg-green-section py-20 relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-playfair)] mb-4">
            Our Church Family in Action
          </h2>
          <div className="w-20 h-1 bg-white/60 mx-auto mb-6" />
          <p className="text-lg text-white/85 leading-relaxed max-w-2xl mx-auto">
            From Sunday worship to community outreach, mission trips to youth activities — these
            moments capture the heart of Central Baptist Church. We are one family, called by
            Christ, sent to serve.
          </p>
        </div>
      </section>

      {/* Photo Gallery - WHITE */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <span className="inline-block text-primary text-sm font-semibold uppercase tracking-widest mb-3">
              Photos
            </span>
            <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-playfair)] text-dark mb-4">
              Browse Our Gallery
            </h2>
            <div className="section-divider" />
          </div>

          <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
            {galleryImages.map((image, index) => (
              <div
                key={image.src}
                className="break-inside-avoid group cursor-pointer rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                onClick={() => setLightboxIndex(index)}
              >
                <div className="relative">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={600}
                    height={400}
                    className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                    <svg
                      className="w-10 h-10 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                    </svg>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - GREEN */}
      <section className="bg-green-section py-24 relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-playfair)] mb-6">
            Be Part of the Story
          </h2>
          <p className="text-xl mb-8 text-white/90">
            We would love to welcome you and your family to Central Baptist Church.
            Come experience our warm fellowship and worship with us.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-white text-primary px-8 py-4 rounded-lg font-bold text-lg shadow-lg hover:bg-light transition-all duration-200 btn-interact"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              Plan Your Visit
            </a>
            <a
              href="tel:7722374907"
              className="inline-flex items-center justify-center gap-2 border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-primary transition-all duration-200 btn-interact"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Call (772) 237-4907
            </a>
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 text-white/70 hover:text-white transition-colors z-10"
            aria-label="Close lightbox"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <button
            onClick={(e) => { e.stopPropagation(); goPrev(); }}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white bg-black/30 hover:bg-black/50 rounded-full p-2 transition-all z-10"
            aria-label="Previous image"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={(e) => { e.stopPropagation(); goNext(); }}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white bg-black/30 hover:bg-black/50 rounded-full p-2 transition-all z-10"
            aria-label="Next image"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          <div
            className="relative max-w-5xl max-h-[85vh] w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={galleryImages[lightboxIndex].src}
              alt={galleryImages[lightboxIndex].alt}
              width={1200}
              height={800}
              className="w-full h-auto max-h-[85vh] object-contain rounded-lg"
            />
            <p className="text-white/70 text-center mt-3 text-sm">
              {galleryImages[lightboxIndex].alt} &mdash; {lightboxIndex + 1} of {galleryImages.length}
            </p>
          </div>
        </div>
      )}
    </>
  );
}
