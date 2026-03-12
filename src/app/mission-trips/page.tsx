import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/PageHero";

export const metadata = {
  title: "Mission Trips - Central Baptist Church",
  description:
    "Central Baptist Church has completed mission trips to 17 locations since 2001, serving communities across the Southeast United States.",
};

const missionTrips = [
  { location: "Anniston, AL", trips: "Multiple trips", state: "Alabama" },
  { location: "Savannah, GA", trips: "Multiple trips", state: "Georgia" },
  { location: "Walterboro, SC", trips: "Multiple trips", state: "South Carolina" },
  { location: "Hattiesburg, MS", trips: "Single trip", state: "Mississippi" },
  { location: "Gastonia, NC", trips: "Single trip", state: "North Carolina" },
  { location: "Augusta, GA", trips: "Single trip", state: "Georgia" },
  { location: "Vero Beach, FL", trips: "Single trip", state: "Florida" },
  { location: "Fair Bluff, NC", trips: "Most recent (2021)", state: "North Carolina" },
];

export default function MissionTrips() {
  return (
    <>
      <PageHero
        title="Mission Trips"
        subtitle="Serving communities across the Southeast since 2001"
        image="/images/slider/israel-trip.jpg"
      />

      {/* Intro Section - GREEN */}
      <section className="bg-green-section py-20 relative overflow-hidden">
        {/* Decorative background icons */}
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <svg className="absolute top-8 right-[8%] w-14 h-14 text-white/[0.06] animate-icon-float" fill="none" stroke="currentColor" strokeWidth={1} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <svg className="absolute bottom-10 left-[6%] w-10 h-10 text-white/[0.05] animate-icon-pulse" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
          </svg>
          <svg className="absolute top-1/2 right-[3%] w-8 h-8 text-white/[0.05] animate-icon-bounce" style={{ animationDelay: '0.6s' }} fill="currentColor" viewBox="0 0 24 24">
            <path d="M11 2h2v7h7v2h-7v11h-2V11H4V9h7z" />
          </svg>
        </div>

        <div className="relative max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Left - Text */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-playfair)] mb-4">
                Bringing Hope to <br />Communities in Need
              </h2>
              <div className="w-20 h-1 bg-white/60 mb-8" />
              <p className="text-lg leading-relaxed mb-6 text-white/90">
                Central Baptist Church is proud of the many mission trips and
                activities that its members have accomplished. Since 2001, we have
                completed missions in 17 locations, bringing help, hope, and the
                love of Christ to communities in need across the Southeast United
                States.
              </p>
              <p className="text-lg leading-relaxed mb-8 text-white/90">
                Our missions focus on disaster relief, community rebuilding, and
                sharing the Gospel with those we serve.
              </p>
              <a
                href="mailto:centralbaptist2018@gmail.com"
                className="inline-block bg-white text-primary px-6 py-3 rounded font-bold hover:bg-light transition-colors"
              >
                Join Our Next Mission
              </a>
            </div>

            {/* Right - Feature Cards */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 flex flex-col items-center text-center hover:bg-white/15 transition-colors">
                <svg className="w-10 h-10 text-white mb-3 animate-icon-pulse" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-sm font-bold">6 States</span>
                <span className="text-xs text-white/70 mt-1">Across the Southeast</span>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 flex flex-col items-center text-center hover:bg-white/15 transition-colors">
                <svg className="w-10 h-10 text-white mb-3 animate-icon-float" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-sm font-bold">17 Locations</span>
                <span className="text-xs text-white/70 mt-1">Communities served</span>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 flex flex-col items-center text-center hover:bg-white/15 transition-colors">
                <svg className="w-10 h-10 text-white mb-3 animate-icon-bounce" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span className="text-sm font-bold">20+ Years</span>
                <span className="text-xs text-white/70 mt-1">Of faithful service</span>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 flex flex-col items-center text-center hover:bg-white/15 transition-colors">
                <svg className="w-10 h-10 text-white mb-3 animate-icon-pulse" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
                <span className="text-sm font-bold">Lives Changed</span>
                <span className="text-xs text-white/70 mt-1">Through Christ&apos;s love</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Scripture Section - Image Backed */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/com-involve-3.jpg"
            alt="Mission work"
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4">
          <div className="max-w-2xl">
            <span className="inline-block text-primary-light text-sm font-semibold uppercase tracking-widest mb-4">
              Our Calling
            </span>
            <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-playfair)] text-white mb-6 leading-tight">
              Called to Serve
            </h2>
            <p className="text-lg text-white/85 leading-relaxed mb-4">
              Mission trips are at the heart of what we do. We believe that
              faith is best expressed through action — rebuilding homes,
              feeding the hungry, and sharing the hope of Christ with those
              who need it most.
            </p>
            <blockquote className="border-l-4 border-primary-light pl-4 mb-8">
              <p className="text-white/75 italic text-base leading-relaxed">
                &ldquo;Therefore go and make disciples of all nations, baptizing
                them in the name of the Father and of the Son and of the Holy
                Spirit.&rdquo;
              </p>
              <cite className="text-primary-light text-sm not-italic font-semibold mt-2 block">
                Matthew 28:19
              </cite>
            </blockquote>
            <Link
              href="/community-involvement"
              className="inline-flex items-center gap-2 bg-primary text-white px-8 py-4 rounded font-bold text-lg hover:bg-primary-light transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              See Our Community Work
            </Link>
          </div>
        </div>
      </section>

      {/* Mission Locations - CREAM */}
      <section className="py-20 bg-light relative overflow-hidden">
        {/* Subtle decorative background */}
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/[0.03] rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <span className="inline-block text-primary text-sm font-semibold uppercase tracking-widest mb-3">
              Where We&apos;ve Served
            </span>
            <h2 className="text-2xl md:text-4xl font-bold font-[family-name:var(--font-playfair)] text-dark mb-4">
              Mission Locations
            </h2>
            <div className="section-divider mb-6" />
            <p className="text-gray-warm text-lg max-w-2xl mx-auto">
              From Florida to Mississippi, our church family has served communities across the Southeast United States.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-4xl mx-auto">
            {missionTrips.map((trip) => (
              <div
                key={trip.location}
                className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-primary/20 hover:-translate-y-1"
              >
                <div className="flex items-center gap-4 p-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary-dark rounded-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-md">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-bold text-dark text-lg">{trip.location}</h3>
                    <p className="text-sm text-gray-warm">{trip.trips}</p>
                  </div>
                  <span className="text-primary font-bold bg-primary/5 px-3 py-1 rounded-full text-xs shrink-0">
                    {trip.state}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Do - GREEN */}
      <section className="bg-green-section py-20 relative overflow-hidden">
        {/* Decorative background icons */}
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <svg className="absolute top-6 left-[8%] w-16 h-16 text-white/[0.07] animate-icon-float" fill="currentColor" viewBox="0 0 24 24">
            <path d="M11 2h2v7h7v2h-7v11h-2V11H4V9h7z" />
          </svg>
          <svg className="absolute top-10 right-[10%] w-14 h-14 text-white/[0.07] animate-icon-bounce" fill="none" stroke="currentColor" strokeWidth={1.2} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <svg className="absolute bottom-8 left-[12%] w-12 h-12 text-white/[0.07] animate-icon-pulse" style={{ animationDelay: '0.5s' }} fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
          </svg>
          <svg className="absolute bottom-6 right-[12%] w-14 h-14 text-white/[0.07] animate-icon-spin-slow" fill="none" stroke="currentColor" strokeWidth={1.2} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
          </svg>
        </div>

        <div className="relative max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-playfair)] mb-4">How We Serve</h2>
            <div className="w-20 h-1 bg-white/60 mx-auto" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              { title: "Disaster Relief", desc: "Responding to natural disasters by rebuilding homes and restoring communities.", icon: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6", anim: "animate-icon-float" },
              { title: "Community Building", desc: "Working alongside local churches and organizations to strengthen neighborhoods.", icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z", anim: "animate-icon-pulse" },
              { title: "Sharing the Gospel", desc: "Spreading the love of Jesus Christ through word and deed wherever we go.", icon: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253", anim: "animate-icon-bounce" },
              { title: "Hands-On Service", desc: "Physical labor including construction, cleanup, and restoration projects.", icon: "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z M15 12a3 3 0 11-6 0 3 3 0 016 0z", anim: "animate-icon-spin-slow" },
              { title: "Prayer & Worship", desc: "Lifting up the communities we serve through prayer and worship gatherings.", icon: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z", anim: "animate-icon-pulse" },
              { title: "Fellowship", desc: "Building bonds between our members while serving others together.", icon: "M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z", anim: "animate-icon-float" },
            ].map((item) => (
              <div key={item.title} className="group bg-white/10 rounded-2xl p-7 hover:bg-white/20 transition-all duration-300 border border-white/20 hover:border-white/40 hover:-translate-y-1 hover:shadow-lg hover:shadow-black/10">
                <div className="w-14 h-14 bg-white/15 rounded-xl flex items-center justify-center mb-5 group-hover:bg-white/25 transition-all duration-300">
                  <svg className={`w-8 h-8 text-white ${item.anim}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={item.icon} />
                  </svg>
                </div>
                <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                <p className="text-white/80 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - GREEN with decorative icons */}
      <section className="bg-green-section py-20 relative overflow-hidden">
        {/* Decorative Background Icons */}
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <svg className="absolute top-6 left-[8%] w-16 h-16 text-white/[0.07] animate-icon-float" fill="none" stroke="currentColor" strokeWidth={1.2} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <svg className="absolute top-1/2 -translate-y-1/2 right-[5%] w-20 h-20 text-white/[0.06] animate-icon-pulse" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
          </svg>
          <svg className="absolute bottom-8 left-1/2 -translate-x-1/2 w-10 h-10 text-white/[0.05] animate-icon-spin-slow" fill="currentColor" viewBox="0 0 24 24">
            <path d="M11 2h2v7h7v2h-7v11h-2V11H4V9h7z" />
          </svg>
        </div>

        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-playfair)] mb-6">
            Join Our Next Mission
          </h2>
          <p className="text-xl mb-8 text-white/90">
            We are always looking for volunteers to join us on our mission
            trips. Whether you can serve for a day or a week, your help makes
            a difference in someone&apos;s life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:centralbaptist2018@gmail.com"
              className="inline-flex items-center justify-center gap-2 bg-white text-primary px-8 py-4 rounded font-bold text-lg hover:bg-light transition-colors duration-200"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Contact Us to Volunteer
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 border-2 border-white text-white px-8 py-4 rounded font-bold text-lg hover:bg-white hover:text-primary transition-colors duration-200"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              Visit Us This Sunday
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
