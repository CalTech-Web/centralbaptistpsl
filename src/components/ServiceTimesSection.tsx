import Link from "next/link";
import Image from "next/image";

interface ServiceTimesSectionProps {
  /** "light" for cream background (homepage), "green" for green background (events page) */
  variant?: "light" | "green";
}

const sundayServices = [
  { name: "Sunday School", detail: "All age groups", time: "9:30 AM" },
  { name: "Morning Worship", detail: "Nursery & Kids Worship available", time: "11:00 AM" },
  { name: "Evening Worship", detail: "Evening fellowship", time: "6:00 PM" },
];

const wednesdayServices = [
  { name: "Prayer Meeting", detail: "Gather in prayer", time: "6:30 PM" },
  { name: "Adventure Kids Bible Study", detail: "5K\u20135th Grade", time: "7:00 PM" },
  { name: "Youth Group Bible Study", detail: "6th\u201312th Grade", time: "7:00 PM" },
  { name: "Adult Bible Study", detail: "In-depth study", time: "7:00 PM" },
];

export default function ServiceTimesSection({ variant = "light" }: ServiceTimesSectionProps) {
  const isGreen = variant === "green";

  return (
    <section className={`py-20 relative overflow-hidden ${isGreen ? "bg-green-section" : "bg-light"}`}>
      {/* Background */}
      {isGreen ? (
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <svg className="absolute top-8 right-[8%] w-14 h-14 text-white/[0.06] animate-icon-float" fill="none" stroke="currentColor" strokeWidth={1} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          <svg className="absolute bottom-10 left-[6%] w-10 h-10 text-white/[0.05] animate-icon-pulse" fill="currentColor" viewBox="0 0 24 24">
            <path d="M11 2h2v7h7v2h-7v11h-2V11H4V9h7z" />
          </svg>
          <svg className="absolute top-1/2 right-[3%] w-8 h-8 text-white/[0.05] animate-icon-bounce" style={{ animationDelay: "0.6s" }} fill="none" stroke="currentColor" strokeWidth={1} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
      ) : (
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/[0.03] rounded-full blur-3xl" />
        </div>
      )}

      <div className="relative max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-14">
          <span className={`inline-block text-sm font-semibold uppercase tracking-widest mb-3 ${isGreen ? "text-white/60" : "text-primary"}`}>
            Plan Your Visit
          </span>
          <h2 className={`text-3xl md:text-4xl font-bold font-[family-name:var(--font-playfair)] mb-4 ${isGreen ? "text-white" : "text-dark"}`}>
            Service Times
          </h2>
          {isGreen ? (
            <div className="w-20 h-1 bg-white/60 mx-auto mb-6" />
          ) : (
            <div className="section-divider mb-6" />
          )}
          <p className={`text-lg max-w-2xl mx-auto ${isGreen ? "text-white/80" : "text-gray-warm"}`}>
            Whether it&apos;s your first time or you&apos;re looking for a
            church home, we&apos;d love to see you. Come as you are.
          </p>
        </div>

        {/* 3-column layout: Sunday | Location | Wednesday */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto items-start">
          {/* Sunday Card */}
          <div className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-primary/20 hover:-translate-y-1">
            <div className="bg-gradient-to-r from-primary to-primary-dark px-6 py-5 text-center">
              <div className="flex items-center justify-center gap-3">
                <svg className="w-7 h-7 text-white/80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
                <h3 className="text-2xl font-bold font-[family-name:var(--font-playfair)] text-white">
                  Sunday
                </h3>
              </div>
            </div>
            <div className="p-6">
              <div className="space-y-4 text-gray-warm">
                {sundayServices.map((s, i) => (
                  <div
                    key={s.name}
                    className={`flex justify-between items-center gap-3 ${i < sundayServices.length - 1 ? "border-b border-gray-100 pb-4" : ""}`}
                  >
                    <div className="min-w-0">
                      <span className="font-semibold text-dark block">{s.name}</span>
                      <span className="text-sm text-gray-warm">{s.detail}</span>
                    </div>
                    <span className="text-primary font-bold bg-primary/5 px-3 py-1 rounded-full text-sm shrink-0">
                      {s.time}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Center – Location & Info */}
          <div className="flex flex-col gap-6 lg:pt-2">
            {/* Church Image */}
            <div className="rounded-2xl overflow-hidden shadow-md">
              <Image
                src="/images/central-church-aerial.jpg"
                alt="Central Baptist Church"
                width={500}
                height={300}
                className="w-full h-48 object-cover"
              />
            </div>

            {/* Address Card */}
            <div className={`rounded-2xl p-6 text-center ${isGreen ? "bg-white/10 backdrop-blur-sm border border-white/20" : "bg-white border border-gray-100 shadow-sm"}`}>
              <div className={`w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3 ${isGreen ? "bg-white/15" : "bg-primary/10"}`}>
                <svg className={`w-6 h-6 ${isGreen ? "text-white" : "text-primary"}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <p className={`font-semibold mb-1 ${isGreen ? "text-white" : "text-dark"}`}>
                202 SW Tulip Blvd
              </p>
              <p className={`text-sm mb-4 ${isGreen ? "text-white/70" : "text-gray-warm"}`}>
                Port St. Lucie, FL 34953
              </p>
              <a
                href="https://goo.gl/maps/xi48Sdxveus9EhH69"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-primary font-bold text-sm hover:text-primary-light transition-colors"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                </svg>
                Open in Google Maps
              </a>
            </div>

            {/* Contact Info */}
            <div className={`rounded-2xl p-6 text-center ${isGreen ? "bg-white/10 backdrop-blur-sm border border-white/20" : "bg-white border border-gray-100 shadow-sm"}`}>
              <div className={`w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3 ${isGreen ? "bg-white/15" : "bg-primary/10"}`}>
                <svg className={`w-6 h-6 ${isGreen ? "text-white" : "text-primary"}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <a
                href="tel:7722374907"
                className={`font-semibold block mb-1 hover:text-primary-light transition-colors ${isGreen ? "text-white" : "text-dark"}`}
              >
                (772) 237-4907
              </a>
              <a
                href="mailto:centralbaptist2018@gmail.com"
                className={`text-sm hover:text-primary-light transition-colors ${isGreen ? "text-white/70" : "text-gray-warm"}`}
              >
                centralbaptist2018@gmail.com
              </a>
            </div>
          </div>

          {/* Wednesday Card */}
          <div className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-primary/20 hover:-translate-y-1">
            <div className="bg-gradient-to-r from-primary to-primary-dark px-6 py-5 text-center">
              <div className="flex items-center justify-center gap-3">
                <svg className="w-7 h-7 text-white/80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
                <h3 className="text-2xl font-bold font-[family-name:var(--font-playfair)] text-white">
                  Wednesday
                </h3>
              </div>
            </div>
            <div className="p-6">
              <div className="space-y-4 text-gray-warm">
                {wednesdayServices.map((s, i) => (
                  <div
                    key={s.name}
                    className={`flex justify-between items-center gap-3 ${i < wednesdayServices.length - 1 ? "border-b border-gray-100 pb-4" : ""}`}
                  >
                    <div className="min-w-0">
                      <span className="font-semibold text-dark block">{s.name}</span>
                      <span className="text-sm text-gray-warm">{s.detail}</span>
                    </div>
                    <span className="text-primary font-bold bg-primary/5 px-3 py-1 rounded-full text-sm shrink-0">
                      {s.time}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="mt-14 flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/contact"
            className={`inline-flex items-center justify-center gap-2 px-8 py-4 rounded font-bold text-lg transition-colors duration-200 ${
              isGreen
                ? "bg-white text-primary hover:bg-light"
                : "bg-primary text-white hover:bg-primary-dark"
            } btn-interact`}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
            </svg>
            Get Directions
          </Link>
          <a
            href="tel:7722374907"
            className={`inline-flex items-center justify-center gap-2 border-2 px-8 py-4 rounded font-bold text-lg transition-colors duration-200 ${
              isGreen
                ? "border-white text-white hover:bg-white hover:text-primary"
                : "border-primary text-primary hover:bg-primary hover:text-white"
            } btn-interact`}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            Call (772) 237-4907
          </a>
        </div>
      </div>
    </section>
  );
}
