import Link from "next/link";
import Image from "next/image";
import LatestSermon from "@/components/LatestSermon";
import HeroSection from "@/components/HeroSection";
import UpcomingEventsSection from "@/components/UpcomingEventsSection";
import PrayerRequestSection from "@/components/PrayerRequestSection";
import ServiceTimesSection from "@/components/ServiceTimesSection";
import ScrollReveal from "@/components/ScrollReveal";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <HeroSection />

      {/* Upcoming Events Section */}
      <ScrollReveal>
        <UpcomingEventsSection />
      </ScrollReveal>

      {/* Welcome Section - GREEN */}
      <section className="bg-green-section py-20">
        <ScrollReveal>
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-playfair)] mb-4">
                Welcome to
                <br />
                Central Baptist Church
              </h2>
              <div className="w-20 h-1 bg-white/60 mb-8" />
              <p className="text-lg leading-relaxed mb-6 text-white/90">
                We want you to feel welcome at Central Baptist Church. We
                don&apos;t care how old you are. We don&apos;t care where
                you&apos;re from. We don&apos;t care about your bank balance. We
                don&apos;t care what you wear. We just care about you.
              </p>
              <p className="text-lg leading-relaxed mb-8 text-white/90">
                We are a community of faith banded together by our love,
                mission and purpose, to proclaim the gospel of Jesus Christ.
              </p>
              <Link
                href="/contact"
                className="inline-block bg-white text-primary px-6 py-3 rounded font-bold hover:bg-light transition-all btn-interact"
              >
                Visit Us This Sunday
              </Link>
            </div>
            <div className="relative rounded-xl overflow-hidden shadow-xl">
              <Image
                src="/images/Ministry-Collage.jpg"
                alt="Church ministries and activities"
                width={600}
                height={400}
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
        </ScrollReveal>
      </section>

      {/* Prayer Request Section */}
      <ScrollReveal>
        <PrayerRequestSection />
      </ScrollReveal>

      {/* Bible Reading - GREEN */}
      <section className="bg-green-section py-20 relative overflow-hidden">
        {/* Decorative background icons */}
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <svg className="absolute top-8 right-[8%] w-14 h-14 text-white/[0.06] animate-icon-float" fill="none" stroke="currentColor" strokeWidth={1} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
          </svg>
          <svg className="absolute bottom-10 left-[6%] w-10 h-10 text-white/[0.05] animate-icon-pulse" fill="currentColor" viewBox="0 0 24 24">
            <path d="M11 2h2v7h7v2h-7v11h-2V11H4V9h7z" />
          </svg>
          <svg className="absolute top-1/2 right-[3%] w-8 h-8 text-white/[0.05] animate-icon-bounce" style={{ animationDelay: '0.6s' }} fill="currentColor" viewBox="0 0 24 24">
            <path d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
          </svg>
        </div>

        <ScrollReveal>
        <div className="relative max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Left - Text */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-playfair)] mb-4">
                Read the Bible in a Year
              </h2>
              <div className="w-20 h-1 bg-white/60 mb-8" />
              <p className="text-lg leading-relaxed mb-6 text-white/90">
                One of the best ways to know God is to become acquainted with the
                full counsel of His written Word. We offer three 365-day Bible
                reading plans to help you engage with Scripture throughout the year.
              </p>
              <Link
                href="/bible-reading"
                className="inline-block bg-white text-primary px-6 py-3 rounded font-bold hover:bg-light transition-all btn-interact"
              >
                View Reading Plans
              </Link>
            </div>

            {/* Right - Icon Feature Cards */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 flex flex-col items-center text-center hover:bg-white/15 transition-colors">
                <svg className="w-10 h-10 text-white mb-3" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
                <span className="text-sm font-bold">3 Reading Plans</span>
                <span className="text-xs text-white/70 mt-1">Choose your pace</span>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 flex flex-col items-center text-center hover:bg-white/15 transition-colors">
                <svg className="w-10 h-10 text-white mb-3" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span className="text-sm font-bold">365 Days</span>
                <span className="text-xs text-white/70 mt-1">Daily readings</span>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 flex flex-col items-center text-center hover:bg-white/15 transition-colors">
                <svg className="w-10 h-10 text-white mb-3" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                </svg>
                <span className="text-sm font-bold">Old &amp; New Testament</span>
                <span className="text-xs text-white/70 mt-1">Cover to cover</span>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 flex flex-col items-center text-center hover:bg-white/15 transition-colors">
                <svg className="w-10 h-10 text-white mb-3" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                <span className="text-sm font-bold">Read Together</span>
                <span className="text-xs text-white/70 mt-1">Join our church family</span>
              </div>
            </div>
          </div>
        </div>
        </ScrollReveal>
      </section>

      {/* Pastor Section */}
      <section className="py-20 bg-light relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/[0.03] rounded-full blur-3xl translate-x-1/2 -translate-y-1/4" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary/[0.03] rounded-full blur-3xl -translate-x-1/3 translate-y-1/4" />
        </div>

        <ScrollReveal>
        <div className="relative max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <span className="inline-block text-primary text-sm font-semibold uppercase tracking-widest mb-3">
              Meet Our Leader
            </span>
            <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-playfair)] text-dark mb-4">
              Our Pastor
            </h2>
            <div className="section-divider" />
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-14 items-center">
              {/* Photo */}
              <div className="relative group">
                <div className="absolute -inset-3 bg-gradient-to-br from-primary/20 via-primary/10 to-transparent rounded-2xl blur-sm group-hover:from-primary/30 transition-all duration-500" />
                <div className="relative rounded-2xl overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.12)]">
                  <Image
                    src="/images/pastor-1030x771-1-1024x767.jpg"
                    alt="Dr. Nick Manzie"
                    width={600}
                    height={450}
                    className="w-full h-auto group-hover:scale-[1.02] transition-transform duration-700"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/50 to-transparent p-6">
                    <p className="text-white/90 text-sm font-medium italic">
                      &ldquo;We just care about you.&rdquo;
                    </p>
                  </div>
                </div>
              </div>

              {/* Info */}
              <div>
                <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-semibold mb-5">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                  </svg>
                  Serving Since 2003
                </div>
                <h3 className="text-3xl font-bold font-[family-name:var(--font-playfair)] text-dark mb-1">
                  Dr. Nick Manzie
                </h3>
                <p className="text-primary font-semibold text-lg mb-6">
                  &ldquo;Brother Nick&rdquo;
                </p>
                <p className="text-gray-warm leading-relaxed mb-4">
                  Dr. Nick Manzie has faithfully led Central Baptist Church since
                  2003. He began his ministry as a Chaplain with Christian
                  Motorsports International and has been dedicated to serving the
                  Port St. Lucie community.
                </p>
                <p className="text-gray-warm leading-relaxed mb-8">
                  His heart for people and passion for God&apos;s Word has guided our
                  congregation through seasons of growth, fellowship, and faithful
                  worship for over two decades.
                </p>
                <Link
                  href="/our-story"
                  className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-lg font-bold hover:bg-primary-light transition-all duration-200 btn-interact"
                >
                  Read Our Story
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
        </ScrollReveal>
      </section>

      {/* Latest Sermon - GREEN */}
      <ScrollReveal>
        <LatestSermon />
      </ScrollReveal>

      {/* Service Times */}
      <ScrollReveal>
        <ServiceTimesSection variant="light" />
      </ScrollReveal>

      {/* Ministries Overview - WHITE */}
      <section className="py-20 bg-white">
        <ScrollReveal>
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-playfair)] text-dark mb-4">Our Ministries</h2>
            <div className="section-divider mb-5" />
            <p className="text-gray-warm text-lg max-w-2xl mx-auto">
              There is a place for everyone at Central Baptist. Explore the many ways you can grow, serve, and connect.
            </p>
          </div>
          <ScrollReveal stagger>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7 max-w-5xl mx-auto">
            {[
              { title: "Children's Ministries", desc: "Nursery care and kids worship services for our youngest members.", icon: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z", color: "text-rose-500", bg: "bg-rose-50", border: "border-rose-300" },
              { title: "Youth Groups", desc: "Bible study programs for middle and high school students.", icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z", color: "text-blue-500", bg: "bg-blue-50", border: "border-blue-300" },
              { title: "Sunday School", desc: "Classes for all age groups to study God's Word together.", icon: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253", color: "text-amber-500", bg: "bg-amber-50", border: "border-amber-300" },
              { title: "Music Programs", desc: "Traditional hymns and worship music to glorify God.", icon: "M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3", color: "text-purple-500", bg: "bg-purple-50", border: "border-purple-300" },
              { title: "Men's & Women's Groups", desc: "Fellowship and ministry opportunities for adults.", icon: "M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z", color: "text-teal-500", bg: "bg-teal-50", border: "border-teal-300" },
              { title: "Mission Trips", desc: "Serving communities across the Southeast United States.", icon: "M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z", color: "text-emerald-500", bg: "bg-emerald-50", border: "border-emerald-300" },
            ].map((ministry) => (
              <div key={ministry.title} className={`group bg-white rounded-2xl p-8 border ${ministry.border} hover:border-transparent hover:-translate-y-1 hover:shadow-xl transition-all duration-300`}>
                <div className={`w-14 h-14 rounded-full ${ministry.bg} flex items-center justify-center mb-5 group-hover:scale-110 transition-all duration-300`}>
                  <svg className={`w-7 h-7 ${ministry.color} icon-breathe`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={ministry.icon} />
                  </svg>
                </div>
                <h3 className="text-lg font-bold font-[family-name:var(--font-playfair)] text-dark mb-2">{ministry.title}</h3>
                <p className="text-gray-warm text-sm leading-relaxed">{ministry.desc}</p>
              </div>
            ))}
          </div>
          </ScrollReveal>
          <div className="text-center mt-12">
            <Link href="/our-ministries" className="inline-block bg-primary text-white px-8 py-3.5 rounded-lg font-bold hover:bg-primary-light transition-all duration-200 btn-interact">
              Explore Our Ministries
            </Link>
          </div>
        </div>
        </ScrollReveal>
      </section>

      {/* CTA Section - GREEN with decorative icons */}
      <section className="bg-green-section py-20 relative overflow-hidden">
        {/* Decorative Hanging Icons */}
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          {/* Cross - top left */}
          <svg className="absolute top-6 left-[8%] w-16 h-16 text-white/[0.07] animate-icon-swing" fill="currentColor" viewBox="0 0 24 24">
            <path d="M11 2h2v7h7v2h-7v11h-2V11H4V9h7z" />
          </svg>
          {/* Bible - top right */}
          <svg className="absolute top-10 right-[10%] w-14 h-14 text-white/[0.07] animate-icon-swing" style={{ animationDelay: '0.6s' }} fill="none" stroke="currentColor" strokeWidth={1.2} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
          </svg>
          {/* Heart - mid left */}
          <svg className="absolute top-1/2 -translate-y-1/2 left-[4%] w-20 h-20 text-white/[0.06] animate-icon-swing" style={{ animationDelay: '1.2s' }} fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
          </svg>
          {/* Dove - mid right */}
          <svg className="absolute top-[40%] right-[5%] w-[4.5rem] h-[4.5rem] text-white/[0.06] animate-icon-swing" style={{ animationDelay: '1.8s' }} fill="currentColor" viewBox="0 0 24 24">
            <path d="M12.5 2C9.64 2 8 4.14 8 6c0 .6.13 1.17.38 1.68L2 14l5 .5L8.5 19l3.04-4.57c.46.07.94.07 1.42 0L16 19l1.5-4.5L22 14l-6.38-6.32C15.87 7.17 16 6.6 16 6c0-1.86-1.64-4-3.5-4z" />
          </svg>
          {/* Music note - bottom left */}
          <svg className="absolute bottom-8 left-[12%] w-12 h-12 text-white/[0.07] animate-icon-swing" style={{ animationDelay: '2.4s' }} fill="none" stroke="currentColor" strokeWidth={1.2} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
          </svg>
          {/* Community / people - bottom right */}
          <svg className="absolute bottom-6 right-[12%] w-14 h-14 text-white/[0.07] animate-icon-swing" style={{ animationDelay: '3s' }} fill="none" stroke="currentColor" strokeWidth={1.2} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
          {/* Small cross - bottom center */}
          <svg className="absolute bottom-12 left-1/2 -translate-x-1/2 w-10 h-10 text-white/[0.05] animate-icon-swing" style={{ animationDelay: '0.3s' }} fill="currentColor" viewBox="0 0 24 24">
            <path d="M11 2h2v7h7v2h-7v11h-2V11H4V9h7z" />
          </svg>
          {/* Globe / missions - top center */}
          <svg className="absolute top-8 left-1/2 -translate-x-[3rem] w-12 h-12 text-white/[0.06] animate-icon-swing" style={{ animationDelay: '1.5s' }} fill="none" stroke="currentColor" strokeWidth={1.2} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>

        <ScrollReveal>
        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-playfair)] mb-6">
            Join Us This Sunday
          </h2>
          <p className="text-xl mb-8 text-white/90">
            We would love to welcome you and your family to Central Baptist
            Church. Come experience our warm fellowship and worship with us.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-primary px-8 py-4 rounded font-bold text-lg hover:bg-light transition-all duration-200 btn-interact"
            >
              Get Directions
            </Link>
            <a
              href="tel:7722374907"
              className="border-2 border-white text-white px-8 py-4 rounded font-bold text-lg hover:bg-white hover:text-primary transition-all duration-200 btn-interact"
            >
              Call (772) 237-4907
            </a>
          </div>
        </div>
        </ScrollReveal>
      </section>
    </>
  );
}
