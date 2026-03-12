"use client";

import Image from "next/image";
import Link from "next/link";
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

const events = [
  { title: "Easter Eggstravaganza", color: "bg-pink-100 text-pink-800", dot: "bg-pink-500" },
  { title: "Easter Sunday", color: "bg-purple-100 text-purple-800", dot: "bg-purple-500" },
  { title: "Unity Sunday", color: "bg-blue-100 text-blue-800", dot: "bg-blue-500" },
  { title: "Israel Trip", color: "bg-amber-100 text-amber-800", dot: "bg-amber-500" },
  { title: "Food Giveaway", color: "bg-green-100 text-green-800", dot: "bg-green-500" },
  { title: "Church Bus Ministry", color: "bg-teal-100 text-teal-800", dot: "bg-teal-500" },
  { title: "Adult Bible Study", color: "bg-indigo-100 text-indigo-800", dot: "bg-indigo-500" },
  { title: "God is the Creator", color: "bg-orange-100 text-orange-800", dot: "bg-orange-500" },
  { title: "Promises", color: "bg-rose-100 text-rose-800", dot: "bg-rose-500" },
  { title: "Wisdom from God", color: "bg-sky-100 text-sky-800", dot: "bg-sky-500" },
  { title: "Adult Sunday School", color: "bg-violet-100 text-violet-800", dot: "bg-violet-500" },
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

      {/* Upcoming Events - WHITE */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-10">
            <span className="inline-block text-primary text-sm font-semibold uppercase tracking-widest mb-3">
              What&apos;s Coming Up
            </span>
            <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-playfair)] text-dark mb-4">
              Upcoming Events
            </h2>
            <div className="section-divider mb-6" />
            <p className="text-gray-warm text-lg leading-relaxed max-w-2xl mx-auto">
              Join us for exciting events throughout the year! From community
              outreach and fellowship to Bible study and worship, there&apos;s
              always something meaningful happening at Central Baptist Church.
            </p>
          </div>

          {/* Event Tags */}
          <div className="flex flex-wrap justify-center gap-2.5 mb-12">
            {events.map((event) => (
              <div
                key={event.title}
                className={`inline-flex items-center gap-2 px-3.5 py-2 rounded-full ${event.color} font-semibold text-sm shadow-sm`}
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

          {/* Image Gallery */}
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
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-3">
                  <p className="text-white text-sm font-semibold">{img.alt}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Weekly Schedule - GREEN */}
      <section className="bg-green-section py-20 relative overflow-hidden">
        {/* Decorative background icons */}
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <svg className="absolute top-8 right-[8%] w-14 h-14 text-white/[0.06] animate-icon-float" fill="none" stroke="currentColor" strokeWidth={1} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          <svg className="absolute bottom-10 left-[6%] w-10 h-10 text-white/[0.05] animate-icon-pulse" fill="currentColor" viewBox="0 0 24 24">
            <path d="M11 2h2v7h7v2h-7v11h-2V11H4V9h7z" />
          </svg>
          <svg className="absolute top-1/2 right-[3%] w-8 h-8 text-white/[0.05] animate-icon-bounce" style={{ animationDelay: '0.6s' }} fill="none" stroke="currentColor" strokeWidth={1} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>

        <div className="relative max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <span className="inline-block text-white/60 text-sm font-semibold uppercase tracking-widest mb-3">
              Every Week
            </span>
            <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-playfair)] mb-4">
              Weekly Schedule
            </h2>
            <div className="w-20 h-1 bg-white/60 mx-auto mb-6" />
            <p className="text-white/80 text-lg max-w-2xl mx-auto">
              In addition to special events, we gather regularly for worship,
              study, and fellowship. All are welcome.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Sunday Card */}
            <div className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="bg-gradient-to-r from-primary-dark to-dark px-8 py-5 text-center">
                <div className="flex items-center justify-center gap-3">
                  <svg className="w-7 h-7 text-white/80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                  <h3 className="text-2xl font-bold font-[family-name:var(--font-playfair)] text-white">Sunday</h3>
                </div>
              </div>
              <div className="p-8">
                <div className="space-y-4 text-gray-warm">
                  <div className="flex justify-between items-center border-b border-gray-100 pb-4">
                    <div>
                      <span className="font-semibold text-dark block">Sunday School</span>
                      <span className="text-sm text-gray-warm">All ages welcome</span>
                    </div>
                    <span className="text-primary font-bold bg-primary/5 px-3 py-1 rounded-full text-sm shrink-0">9:30 AM</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-gray-100 pb-4">
                    <div>
                      <span className="font-semibold text-dark block">Morning Worship</span>
                      <span className="text-sm text-gray-warm">Main service</span>
                    </div>
                    <span className="text-primary font-bold bg-primary/5 px-3 py-1 rounded-full text-sm shrink-0">11:00 AM</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <div>
                      <span className="font-semibold text-dark block">Evening Worship</span>
                      <span className="text-sm text-gray-warm">Evening fellowship</span>
                    </div>
                    <span className="text-primary font-bold bg-primary/5 px-3 py-1 rounded-full text-sm shrink-0">6:00 PM</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Wednesday Card */}
            <div className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="bg-gradient-to-r from-primary-dark to-dark px-8 py-5 text-center">
                <div className="flex items-center justify-center gap-3">
                  <svg className="w-7 h-7 text-white/80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                  <h3 className="text-2xl font-bold font-[family-name:var(--font-playfair)] text-white">Wednesday</h3>
                </div>
              </div>
              <div className="p-8">
                <div className="space-y-4 text-gray-warm">
                  <div className="flex justify-between items-center border-b border-gray-100 pb-4">
                    <div>
                      <span className="font-semibold text-dark block">Prayer Meeting</span>
                      <span className="text-sm text-gray-warm">Gather in prayer</span>
                    </div>
                    <span className="text-primary font-bold bg-primary/5 px-3 py-1 rounded-full text-sm shrink-0">6:30 PM</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-gray-100 pb-4">
                    <div>
                      <span className="font-semibold text-dark block">Kids Bible Study</span>
                      <span className="text-sm text-gray-warm">5K&ndash;5th Grade</span>
                    </div>
                    <span className="text-primary font-bold bg-primary/5 px-3 py-1 rounded-full text-sm shrink-0">7:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-gray-100 pb-4">
                    <div>
                      <span className="font-semibold text-dark block">Youth Bible Study</span>
                      <span className="text-sm text-gray-warm">6th&ndash;12th Grade</span>
                    </div>
                    <span className="text-primary font-bold bg-primary/5 px-3 py-1 rounded-full text-sm shrink-0">7:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <div>
                      <span className="font-semibold text-dark block">Adult Bible Study</span>
                      <span className="text-sm text-gray-warm">In-depth study</span>
                    </div>
                    <span className="text-primary font-bold bg-primary/5 px-3 py-1 rounded-full text-sm shrink-0">7:00 PM</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ways to Connect - CREAM */}
      <section className="py-20 bg-light relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/[0.03] rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-5xl mx-auto px-4">
          <div className="text-center mb-14">
            <span className="inline-block text-primary text-sm font-semibold uppercase tracking-widest mb-3">
              Get Involved
            </span>
            <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-playfair)] text-dark mb-4">
              Ways to Connect
            </h2>
            <div className="section-divider mb-6" />
            <p className="text-gray-warm text-lg max-w-2xl mx-auto">
              There&apos;s a place for everyone at Central Baptist. Here are some
              ways you can get connected with our church family.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Watch Online",
                desc: "Can't make it in person? Watch our services live on YouTube every Sunday.",
                icon: "M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
                href: "https://www.youtube.com/@CBCPSL/streams",
                label: "Watch Live",
                external: true,
              },
              {
                title: "Prayer Request",
                desc: "Share your prayer needs with our church family. We'd love to pray for you.",
                icon: "M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z",
                href: "https://forms.gle/QRk1FSUSFnjAVumv7",
                label: "Submit Request",
                external: true,
              },
              {
                title: "Visit Us",
                desc: "We'd love to meet you! Come as you are and experience our warm fellowship.",
                icon: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z",
                href: "/contact",
                label: "Get Directions",
                external: false,
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-primary/20 hover:-translate-y-1 flex flex-col"
              >
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-5">
                  <svg
                    className="w-7 h-7 text-primary"
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
                <h3 className="text-xl font-bold font-[family-name:var(--font-playfair)] text-dark mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-warm leading-relaxed mb-6 flex-1">
                  {item.desc}
                </p>
                {item.external ? (
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-primary font-bold hover:text-primary-light transition-colors"
                  >
                    {item.label} &rarr;
                  </a>
                ) : (
                  <Link
                    href={item.href}
                    className="inline-flex items-center gap-1 text-primary font-bold hover:text-primary-light transition-colors"
                  >
                    {item.label} &rarr;
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA - GREEN */}
      <section className="bg-green-section py-20 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <svg className="absolute top-6 left-[8%] w-16 h-16 text-white/[0.07] animate-icon-float" fill="currentColor" viewBox="0 0 24 24">
            <path d="M11 2h2v7h7v2h-7v11h-2V11H4V9h7z" />
          </svg>
          <svg className="absolute bottom-8 right-[10%] w-14 h-14 text-white/[0.06] animate-icon-bounce" style={{ animationDelay: '0.5s' }} fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
          </svg>
        </div>

        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-playfair)] mb-6">
            Join Us This Sunday
          </h2>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            We would love to welcome you and your family to Central Baptist
            Church. Come experience our warm fellowship and worship with us.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-primary px-8 py-4 rounded font-bold text-lg hover:bg-light transition-colors duration-200"
            >
              Get Directions
            </Link>
            <a
              href="tel:7722374907"
              className="border-2 border-white text-white px-8 py-4 rounded font-bold text-lg hover:bg-white hover:text-primary transition-colors duration-200"
            >
              Call (772) 237-4907
            </a>
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
