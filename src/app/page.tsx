import Link from "next/link";
import Image from "next/image";
import LatestSermon from "@/components/LatestSermon";
import HeroSection from "@/components/HeroSection";
import UpcomingEventsSection from "@/components/UpcomingEventsSection";
import ScrollReveal from "@/components/ScrollReveal";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <HeroSection />

      {/* Upcoming Events Section */}
      <UpcomingEventsSection />

      {/* Welcome Section - GREEN */}
      <section className="bg-green-section py-20">
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
                className="btn-interact inline-block bg-white text-primary px-7 py-3.5 rounded-lg font-bold shadow-md hover:shadow-lg hover:bg-light transition-colors"
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
      </section>

      {/* Prayer Request Section */}
      <ScrollReveal>
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/prayer-request.jpg"
            alt="Prayer"
            fill
            className="object-cover animate-ken-burns"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/75 to-black/55" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left — CTA */}
            <div>
              <span className="inline-block text-primary-light text-sm font-semibold uppercase tracking-widest mb-4">
                We&apos;re Here for You
              </span>
              <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-playfair)] text-white mb-6 leading-tight">
                Share Your Prayer Request
              </h2>
              <p className="text-lg text-white/85 leading-relaxed mb-8">
                We believe in the power of prayer. Whether you&apos;re facing a
                challenge, celebrating a blessing, or simply need someone to pray
                with you — our church family is here.
              </p>
              <a
                href="https://forms.gle/QRk1FSUSFnjAVumv7"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-interact inline-flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-lg font-bold text-lg shadow-lg hover:shadow-xl hover:bg-primary-light"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                </svg>
                Submit a Prayer Request
              </a>
            </div>

            {/* Right — Scripture Card */}
            <div className="bg-white/[0.08] backdrop-blur-md border border-white/20 rounded-2xl p-8 md:p-10 animate-soft-glow">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-primary-light/20 rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-primary-light" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <span className="text-white/60 text-sm font-semibold uppercase tracking-wider">Scripture</span>
              </div>
              <blockquote className="border-l-4 border-primary-light pl-5 mb-6">
                <p className="text-white/90 italic text-lg leading-relaxed">
                  &ldquo;Do not be anxious about anything, but in every situation,
                  by prayer and petition, with thanksgiving, present your requests
                  to God.&rdquo;
                </p>
              </blockquote>
              <cite className="text-primary-light text-sm not-italic font-bold block">
                — Philippians 4:6
              </cite>
            </div>
          </div>
        </div>
      </section>
      </ScrollReveal>

      {/* Bible Reading - GREEN */}
      <ScrollReveal>
      <section className="bg-green-section py-24 relative overflow-hidden">
        {/* Subtle radial glow */}
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div className="absolute -top-24 -right-24 w-[500px] h-[500px] bg-white/[0.04] rounded-full blur-3xl" />
          <div className="absolute -bottom-32 -left-16 w-[400px] h-[400px] bg-white/[0.03] rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            {/* Left - Text */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-playfair)] mb-6">
                Read the Bible in a Year
              </h2>
              <div className="w-20 h-1 bg-white/60 mb-10" />
              <p className="text-lg leading-relaxed mb-8 text-white/90">
                One of the best ways to know God is to become acquainted with the
                full counsel of His written Word. We offer three 365-day Bible
                reading plans to help you engage with Scripture throughout the year.
              </p>
              <Link
                href="/bible-reading"
                className="btn-interact inline-block bg-white text-primary px-7 py-3.5 rounded-lg font-bold shadow-md hover:shadow-lg hover:bg-light"
              >
                View Reading Plans
              </Link>
            </div>

            {/* Right - Icon Feature Cards */}
            <ScrollReveal stagger>
            <div className="grid grid-cols-2 gap-5">
              <div className="group bg-white/[0.08] backdrop-blur-sm rounded-2xl p-8 border border-white/20 flex flex-col items-center text-center hover:bg-white/[0.16] hover:-translate-y-1 hover:shadow-lg hover:shadow-black/10 transition-all duration-300">
                <svg className="w-11 h-11 text-white mb-4 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
                <span className="text-sm font-bold">3 Reading Plans</span>
                <span className="text-xs text-white/60 mt-1">Choose your pace</span>
              </div>
              <div className="group bg-white/[0.08] backdrop-blur-sm rounded-2xl p-8 border border-white/20 flex flex-col items-center text-center hover:bg-white/[0.16] hover:-translate-y-1 hover:shadow-lg hover:shadow-black/10 transition-all duration-300">
                <svg className="w-11 h-11 text-white mb-4 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span className="text-sm font-bold">365 Days</span>
                <span className="text-xs text-white/60 mt-1">Daily readings</span>
              </div>
              <div className="group bg-white/[0.08] backdrop-blur-sm rounded-2xl p-8 border border-white/20 flex flex-col items-center text-center hover:bg-white/[0.16] hover:-translate-y-1 hover:shadow-lg hover:shadow-black/10 transition-all duration-300">
                <svg className="w-11 h-11 text-white mb-4 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                </svg>
                <span className="text-sm font-bold">Old &amp; New Testament</span>
                <span className="text-xs text-white/60 mt-1">Cover to cover</span>
              </div>
              <div className="group bg-white/[0.08] backdrop-blur-sm rounded-2xl p-8 border border-white/20 flex flex-col items-center text-center hover:bg-white/[0.16] hover:-translate-y-1 hover:shadow-lg hover:shadow-black/10 transition-all duration-300">
                <svg className="w-11 h-11 text-white mb-4 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                <span className="text-sm font-bold">Read Together</span>
                <span className="text-xs text-white/60 mt-1">Join our church family</span>
              </div>
            </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
      </ScrollReveal>

      {/* Pastor Section - WHITE */}
      <ScrollReveal>
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/[0.03] rounded-full blur-3xl -translate-y-1/4 translate-x-1/4" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary/[0.03] rounded-full blur-3xl translate-y-1/4 -translate-x-1/4" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-14 items-center">
              <div className="group relative">
                <div className="rounded-2xl overflow-hidden shadow-xl ring-4 ring-primary/10">
                  <Image
                    src="/images/pastor-1030x771-1-1024x767.jpg"
                    alt="Dr. Nick Manzie"
                    width={600}
                    height={450}
                    className="w-full h-auto group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
              <div>
                <span className="inline-block text-primary text-sm font-semibold uppercase tracking-widest mb-3">
                  Our Leadership
                </span>
                <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-playfair)] text-dark mb-4">
                  Our Pastor
                </h2>
                <div className="section-divider !mx-0 mb-6" />
                <h3 className="text-2xl font-bold font-[family-name:var(--font-playfair)] text-dark mb-1">
                  Dr. Nick Manzie
                </h3>
                <div className="flex items-center gap-3 mb-5">
                  <p className="text-primary font-semibold">
                    &ldquo;Brother Nick&rdquo;
                  </p>
                  <span className="bg-primary/10 text-primary text-xs font-semibold px-3 py-1 rounded-full">
                    Serving Since 2003
                  </span>
                </div>
                <p className="text-gray-warm leading-relaxed mb-8">
                  Dr. Nick Manzie has faithfully led Central Baptist Church since
                  2003. He began his ministry as a Chaplain with Christian
                  Motorsports International and has been dedicated to serving the
                  Port St. Lucie community and guiding our congregation in faith
                  and worship.
                </p>
                <Link
                  href="/our-story"
                  className="btn-interact inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-lg font-bold shadow-md hover:shadow-lg hover:bg-primary-light"
                >
                  Meet Our Pastor
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      </ScrollReveal>

      {/* Latest Sermon - GREEN */}
      <LatestSermon />

      {/* Service Times - CREAM */}
      <ScrollReveal>
      <section className="py-24 bg-light relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-primary/[0.04] rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <span className="inline-block text-primary text-sm font-semibold uppercase tracking-widest mb-3">
              Plan Your Visit
            </span>
            <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-playfair)] text-dark mb-4">
              Visit Us at One of Our Services
            </h2>
            <div className="section-divider mb-6" />
            <p className="text-gray-warm text-lg max-w-2xl mx-auto">
              Whether it&apos;s your first time or you&apos;re looking for a church home, we&apos;d love to see you. Come as you are.
            </p>
          </div>

          <ScrollReveal stagger>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Sunday Card */}
            <div className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-primary/15 hover:-translate-y-1">
              <div className="bg-gradient-to-r from-primary to-primary-dark px-8 py-6 text-center">
                <div className="flex items-center justify-center gap-3">
                  <svg className="w-7 h-7 text-white/80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                  <h3 className="text-2xl font-bold font-[family-name:var(--font-playfair)] text-white">Sunday</h3>
                </div>
              </div>
              <div className="p-8">
                <div className="space-y-4 text-gray-warm">
                  <div className="flex items-center gap-3 border-b border-gray-100 pb-4">
                    <svg className="w-4 h-4 text-primary/50 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>
                    <div className="flex-1">
                      <span className="font-semibold text-dark block">Sunday School</span>
                      <span className="text-sm text-gray-warm">All ages welcome</span>
                    </div>
                    <span className="text-primary font-bold bg-primary/[0.08] px-4 py-1.5 rounded-full text-sm shrink-0">9:30 AM</span>
                  </div>
                  <div className="flex items-center gap-3 border-b border-gray-100 pb-4">
                    <svg className="w-4 h-4 text-primary/50 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" /></svg>
                    <div className="flex-1">
                      <span className="font-semibold text-dark block">Morning Worship</span>
                      <span className="text-sm text-gray-warm">Main service</span>
                    </div>
                    <span className="text-primary font-bold bg-primary/[0.08] px-4 py-1.5 rounded-full text-sm shrink-0">11:00 AM</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <svg className="w-4 h-4 text-primary/50 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" /></svg>
                    <div className="flex-1">
                      <span className="font-semibold text-dark block">Evening Worship</span>
                      <span className="text-sm text-gray-warm">Evening fellowship</span>
                    </div>
                    <span className="text-primary font-bold bg-primary/[0.08] px-4 py-1.5 rounded-full text-sm shrink-0">6:00 PM</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Wednesday Card */}
            <div className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-primary/15 hover:-translate-y-1">
              <div className="bg-gradient-to-r from-primary to-primary-dark px-8 py-6 text-center">
                <div className="flex items-center justify-center gap-3">
                  <svg className="w-7 h-7 text-white/80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                  <h3 className="text-2xl font-bold font-[family-name:var(--font-playfair)] text-white">Wednesday</h3>
                </div>
              </div>
              <div className="p-8">
                <div className="space-y-4 text-gray-warm">
                  <div className="flex items-center gap-3 border-b border-gray-100 pb-4">
                    <svg className="w-4 h-4 text-primary/50 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
                    <div className="flex-1">
                      <span className="font-semibold text-dark block">Prayer Meeting</span>
                      <span className="text-sm text-gray-warm">Gather in prayer</span>
                    </div>
                    <span className="text-primary font-bold bg-primary/[0.08] px-4 py-1.5 rounded-full text-sm shrink-0">6:30 PM</span>
                  </div>
                  <div className="flex items-center gap-3 border-b border-gray-100 pb-4">
                    <svg className="w-4 h-4 text-primary/50 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
                    <div className="flex-1">
                      <span className="font-semibold text-dark block">Kids Bible Study</span>
                      <span className="text-sm text-gray-warm">Ages 4&ndash;12</span>
                    </div>
                    <span className="text-primary font-bold bg-primary/[0.08] px-4 py-1.5 rounded-full text-sm shrink-0">7:00 PM</span>
                  </div>
                  <div className="flex items-center gap-3 border-b border-gray-100 pb-4">
                    <svg className="w-4 h-4 text-primary/50 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                    <div className="flex-1">
                      <span className="font-semibold text-dark block">Youth Bible Study</span>
                      <span className="text-sm text-gray-warm">Teens</span>
                    </div>
                    <span className="text-primary font-bold bg-primary/[0.08] px-4 py-1.5 rounded-full text-sm shrink-0">7:00 PM</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <svg className="w-4 h-4 text-primary/50 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>
                    <div className="flex-1">
                      <span className="font-semibold text-dark block">Adult Bible Study</span>
                      <span className="text-sm text-gray-warm">In-depth study</span>
                    </div>
                    <span className="text-primary font-bold bg-primary/[0.08] px-4 py-1.5 rounded-full text-sm shrink-0">7:00 PM</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          </ScrollReveal>

          {/* Location Card & CTA */}
          <div className="mt-14 max-w-2xl mx-auto">
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 mb-8">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <span className="text-dark font-bold block">Central Baptist Church</span>
                  <span className="text-gray-warm text-sm">1400 SE Lyngate Dr, Port St. Lucie, FL 34952</span>
                </div>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="btn-interact inline-flex items-center justify-center gap-2 bg-primary text-white px-8 py-4 rounded-lg font-bold text-lg shadow-md hover:shadow-xl hover:bg-primary-dark"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                </svg>
                Get Directions
              </Link>
              <a
                href="tel:7722374907"
                className="btn-interact inline-flex items-center justify-center gap-2 border-2 border-primary text-primary px-8 py-4 rounded-lg font-bold text-lg hover:bg-primary hover:text-white shadow-sm hover:shadow-md"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Call (772) 237-4907
              </a>
            </div>
          </div>
        </div>
      </section>
      </ScrollReveal>

      {/* Ministries Overview - WHITE */}
      <ScrollReveal>
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <span className="inline-block text-primary text-sm font-semibold uppercase tracking-widest mb-3">
              Get Involved
            </span>
            <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-playfair)] text-dark mb-4">Our Ministries</h2>
            <div className="section-divider mb-6" />
            <p className="text-gray-warm text-lg max-w-2xl mx-auto">
              There is a place for everyone at Central Baptist. Explore the many ways you can grow, serve, and connect.
            </p>
          </div>
          <ScrollReveal stagger>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7 max-w-5xl mx-auto">
            {[
              { title: "Children's Ministries", desc: "Nursery care and kids worship services for our youngest members.", icon: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z", color: "text-rose-500", bg: "bg-rose-50", border: "border-rose-200" },
              { title: "Youth Groups", desc: "Bible study programs for middle and high school students.", icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z", color: "text-blue-500", bg: "bg-blue-50", border: "border-blue-200" },
              { title: "Sunday School", desc: "Classes for all age groups to study God's Word together.", icon: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253", color: "text-amber-500", bg: "bg-amber-50", border: "border-amber-200" },
              { title: "Music Programs", desc: "Traditional hymns and worship music to glorify God.", icon: "M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3", color: "text-purple-500", bg: "bg-purple-50", border: "border-purple-200" },
              { title: "Men's & Women's Groups", desc: "Fellowship and ministry opportunities for adults.", icon: "M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z", color: "text-teal-500", bg: "bg-teal-50", border: "border-teal-200" },
              { title: "Mission Trips", desc: "Serving communities across the Southeast United States.", icon: "M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z", color: "text-emerald-500", bg: "bg-emerald-50", border: "border-emerald-200" },
            ].map((ministry) => (
              <div key={ministry.title} className={`group bg-white rounded-2xl p-8 border ${ministry.border} hover:-translate-y-1 hover:shadow-lg transition-all duration-300`}>
                <div className={`w-14 h-14 rounded-xl ${ministry.bg} flex items-center justify-center mb-5 animate-icon-float group-hover:scale-110 transition-transform duration-300`}>
                  <svg className={`w-7 h-7 ${ministry.color}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
            <Link href="/our-ministries" className="btn-interact inline-block bg-primary text-white px-8 py-3.5 rounded-lg font-bold shadow-md hover:shadow-lg hover:bg-primary-light transition-all duration-200">
              Explore Our Ministries
            </Link>
          </div>
        </div>
      </section>
      </ScrollReveal>

      {/* CTA Section - Image background with green overlay */}
      <section className="relative py-24 overflow-hidden">
        {/* Background image with Ken Burns */}
        <div className="absolute inset-0 animate-ken-burns">
          <Image
            src="/images/hero-contact.jpg"
            alt=""
            fill
            className="object-cover"
            aria-hidden="true"
          />
        </div>
        {/* Dark green overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#2a5435]/90 via-primary/85 to-[#2a5435]/90" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center text-white">
          <span className="inline-block text-white/70 text-sm font-semibold uppercase tracking-widest mb-4">
            You&apos;re Invited
          </span>
          <h2 className="text-4xl md:text-5xl font-bold font-[family-name:var(--font-playfair)] mb-6 leading-tight">
            Join Us This Sunday
          </h2>
          <p className="text-xl mb-10 text-white/90 max-w-2xl mx-auto leading-relaxed">
            We would love to welcome you and your family to Central Baptist
            Church. Come experience our warm fellowship and worship with us.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-white text-primary px-10 py-4 rounded-lg font-bold text-lg shadow-lg btn-interact"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              Get Directions
            </Link>
            <a
              href="tel:7722374907"
              className="inline-flex items-center justify-center gap-2 border-2 border-white text-white px-10 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-primary transition-colors duration-200 btn-interact"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Call (772) 237-4907
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
