"use client";

import Image from "next/image";
import Link from "next/link";
import { events, downloadICS } from "@/lib/calendar";

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
  return (
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

        {/* Event Tags */}
        <div className="flex flex-wrap justify-center gap-2.5 mb-10">
          {events.map((event) =>
            event.href ? (
              <a
                key={event.title}
                href={event.href}
                className={`inline-flex items-center gap-2 px-3.5 py-2 rounded-full ${event.color} font-semibold text-sm shadow-sm cursor-pointer hover:shadow-md hover:scale-105 transition-all duration-200`}
                title={event.title}
              >
                <span className="relative flex h-2.5 w-2.5">
                  <span className={`animate-pulse-dot absolute inline-flex h-full w-full rounded-full ${event.dot} opacity-75`} />
                  <span className={`relative inline-flex rounded-full h-2.5 w-2.5 ${event.dot}`} />
                </span>
                {event.title}
                <svg className="w-3.5 h-3.5 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </a>
            ) : (
              <button
                key={event.title}
                onClick={() => downloadICS(event)}
                className={`inline-flex items-center gap-2 px-3.5 py-2 rounded-full ${event.color} font-semibold text-sm shadow-sm cursor-pointer hover:shadow-md hover:scale-105 transition-all duration-200`}
                title={`Add "${event.title}" to your calendar`}
              >
                <span className="relative flex h-2.5 w-2.5">
                  <span className={`animate-pulse-dot absolute inline-flex h-full w-full rounded-full ${event.dot} opacity-75`} />
                  <span className={`relative inline-flex rounded-full h-2.5 w-2.5 ${event.dot}`} />
                </span>
                {event.title}
                <svg className="w-3.5 h-3.5 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </button>
            )
          )}
        </div>

        {/* Image Grid - 3 columns, 2 rows */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-5 mb-10">
          {previewImages.map((img) => (
            <div
              key={img.src}
              className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-sm group bg-gray-100"
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
            </div>
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
  );
}
