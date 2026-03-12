"use client";

import PageHero from "@/components/PageHero";
import ScrollReveal from "@/components/ScrollReveal";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useCallback } from "react";

const galleryImages = [
  { src: "/images/com-involve-1.jpg", alt: "Community outreach event" },
  { src: "/images/com-involve-2.jpg", alt: "Volunteering in the community" },
  { src: "/images/com-involve-3.jpg", alt: "Food giveaway ministry" },
  { src: "/images/com-involve-4.jpg", alt: "Serving our neighbors" },
  { src: "/images/com-involve-5.jpg", alt: "Community fellowship" },
  { src: "/images/com-involve-6.jpg", alt: "Local mission work" },
  { src: "/images/com-involve-7.jpg", alt: "Helping those in need" },
  { src: "/images/com-involve-8.jpg", alt: "Community gathering" },
  { src: "/images/com-involve-9.jpg", alt: "Serving with love" },
];

const serviceCards = [
  {
    title: "Men's & Women's Groups",
    desc: "Our men's and women's ministry groups focus on local mission work, building relationships within the community and providing support to those in need through organized outreach efforts.",
    icon: "M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z",
  },
  {
    title: "Volunteerism & Donations",
    desc: "We provide meaningful opportunities for our members to give back through both their time and resources, supporting local families, individuals, and organizations in the Port St. Lucie community.",
    icon: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z",
  },
  {
    title: "Mission Trips",
    desc: "Since 2001, our church has completed mission trips to 17 locations across the Southeast United States, helping communities recover from disasters and sharing God's love.",
    icon: "M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
  },
  {
    title: "Youth & Children Programs",
    desc: "Our youth outreach and children's mission programs engage the next generation in community service, teaching them the value of giving back and serving others.",
    icon: "M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z",
  },
];

export default function CommunityInvolvement() {
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
        title="Community Involvement"
        subtitle="Dedicated to serving our community through love and action"
        image="/images/hero-community.jpg"
      />

      {/* Mission Statement - bridge section */}
      <ScrollReveal>
      <section className="py-14 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <span className="inline-block text-primary text-sm font-semibold uppercase tracking-widest mb-3">
            Our Mission
          </span>
          <h2 className="text-2xl md:text-3xl font-bold font-[family-name:var(--font-playfair)] text-dark mb-5 leading-tight">
            Serving Port St. Lucie
          </h2>
          <p className="text-lg text-gray-warm leading-relaxed mb-8 max-w-2xl mx-auto">
            Central Baptist Church is dedicated to providing strong community
            involvement through its various ministries. We strive to provide
            meaningful opportunities for our members to give back through
            donations and volunteerism.
          </p>
          <blockquote className="relative max-w-xl mx-auto bg-light rounded-xl px-8 py-6 border-l-4 border-primary">
            <p className="text-dark/80 italic text-lg leading-relaxed">
              &ldquo;Each of you should use whatever gift you have received to
              serve others, as faithful stewards of God&apos;s grace.&rdquo;
            </p>
            <cite className="text-primary text-sm not-italic font-semibold mt-3 block">
              1 Peter 4:10
            </cite>
          </blockquote>
        </div>
      </section>
      </ScrollReveal>

      {/* Impact Stats */}
      <ScrollReveal>
      <section className="py-16 bg-light relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/[0.03] rounded-full blur-3xl" />
        <div className="relative max-w-5xl mx-auto px-4">
          <div className="text-center mb-10">
            <span className="inline-block text-primary text-sm font-semibold uppercase tracking-widest mb-3">
              Our Impact
            </span>
            <h2 className="text-2xl md:text-3xl font-bold font-[family-name:var(--font-playfair)] text-dark">
              Making a Difference Since 1978
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { value: "45+", label: "Years Serving", icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" },
              { value: "17", label: "Mission Locations", icon: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" },
              { value: "4", label: "Active Ministries", icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" },
              { value: "1978", label: "Established", icon: "M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="group bg-white rounded-2xl p-6 text-center shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-primary/20 hover:-translate-y-1"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={stat.icon} />
                  </svg>
                </div>
                <p className="text-3xl md:text-4xl font-bold text-primary mb-1">
                  {stat.value}
                </p>
                <p className="text-sm text-gray-warm uppercase tracking-wider">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      </ScrollReveal>

      {/* How We Serve - GREEN glass cards matching homepage ministries */}
      <ScrollReveal>
      <section className="bg-green-section py-20 relative overflow-hidden">
        <div className="relative max-w-5xl mx-auto px-4 z-10">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-playfair)] mb-4">
              How We Serve
            </h2>
            <div className="w-20 h-1 bg-white/60 mx-auto mb-5" />
            <p className="text-white/80 text-lg max-w-2xl mx-auto">
              From local outreach to international missions, there are many ways to make a difference at Central Baptist.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
            {serviceCards.map((item) => (
              <div
                key={item.title}
                className="group bg-white/[0.07] backdrop-blur-sm rounded-2xl p-8 border border-white/15 hover:bg-white/[0.15] hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(0,0,0,0.15)] transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-full bg-white/15 flex items-center justify-center mb-5 group-hover:bg-white/25 group-hover:scale-110 transition-all duration-300">
                  <svg
                    className="w-7 h-7 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d={item.icon}
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-bold font-[family-name:var(--font-playfair)] mb-2">
                  {item.title}
                </h3>
                <p className="text-white/75 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      </ScrollReveal>

      {/* Photo Gallery with Lightbox */}
      <ScrollReveal>
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <span className="inline-block text-primary text-sm font-semibold uppercase tracking-widest mb-3">
              See the Impact
            </span>
            <h2 className="text-3xl font-bold font-[family-name:var(--font-playfair)] text-dark mb-4">
              Our Community in Action
            </h2>
            <div className="section-divider mb-6" />
            <p className="text-gray-warm text-lg max-w-2xl mx-auto">
              A glimpse into how Central Baptist Church serves and connects with the Port St. Lucie community.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {galleryImages.map((img, i) => (
              <div
                key={i}
                className={`rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer group hover:-translate-y-1 ${
                  i === 0 || i === 5
                    ? "md:row-span-2 md:h-full"
                    : ""
                }`}
                onClick={() => setLightboxIndex(i)}
              >
                <div className="relative w-full h-48 md:h-56 overflow-hidden"
                  style={i === 0 || i === 5 ? { height: "100%", minHeight: "280px" } : {}}
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
                    <svg
                      className="w-10 h-10 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      </ScrollReveal>

      {/* CTA - GREEN with decorative icons */}
      <ScrollReveal>
      <section className="bg-green-section py-20 relative overflow-hidden">
        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold font-[family-name:var(--font-playfair)] mb-4">
            Get Involved Today
          </h2>
          <p className="text-white/90 mb-8 text-lg leading-relaxed max-w-2xl mx-auto">
            There are many ways to serve at Central Baptist Church. Whether
            through volunteering, donations, or joining one of our ministry
            groups, your help makes a difference.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-white text-primary px-8 py-4 rounded font-bold text-lg hover:bg-light transition-colors duration-200 btn-interact"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Contact Us
            </Link>
            <Link
              href="/mission-trips"
              className="inline-flex items-center justify-center gap-2 border-2 border-white text-white px-8 py-4 rounded font-bold text-lg hover:bg-white hover:text-primary transition-colors duration-200 btn-interact"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              View Mission Trips
            </Link>
          </div>
        </div>
      </section>
      </ScrollReveal>

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
            onClick={(e) => {
              e.stopPropagation();
              goPrev();
            }}
            aria-label="Previous image"
          >
            &#8249;
          </button>

          <div
            className="relative w-[90vw] h-[80vh] max-w-5xl"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={galleryImages[lightboxIndex].src}
              alt={galleryImages[lightboxIndex].alt}
              fill
              className="object-contain"
              sizes="90vw"
              priority
            />
          </div>

          <button
            className="absolute right-4 text-white text-5xl font-light hover:text-gray-300 transition-colors z-10 select-none"
            onClick={(e) => {
              e.stopPropagation();
              goNext();
            }}
            aria-label="Next image"
          >
            &#8250;
          </button>

          <p className="absolute bottom-6 text-white text-lg font-medium">
            {galleryImages[lightboxIndex].alt}
          </p>
        </div>
      )}
    </>
  );
}
