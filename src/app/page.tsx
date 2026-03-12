import Link from "next/link";
import Image from "next/image";
import LatestSermon from "@/components/LatestSermon";
import HeroSection from "@/components/HeroSection";
import UpcomingEventsSection from "@/components/UpcomingEventsSection";

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
                className="inline-block bg-white text-primary px-6 py-3 rounded font-bold hover:bg-light transition-colors"
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
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/prayer-request.jpg"
            alt="Prayer"
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4">
          <div className="max-w-2xl">
            <span className="inline-block text-primary-light text-sm font-semibold uppercase tracking-widest mb-4">
              We&apos;re Here for You
            </span>
            <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-playfair)] text-white mb-6 leading-tight">
              Share Your Prayer Request
            </h2>
            <p className="text-lg text-white/85 leading-relaxed mb-4">
              We believe in the power of prayer. Whether you&apos;re facing a
              challenge, celebrating a blessing, or simply need someone to pray
              with you — our church family is here.
            </p>
            <blockquote className="border-l-4 border-primary-light pl-4 mb-8">
              <p className="text-white/75 italic text-base leading-relaxed">
                &ldquo;Do not be anxious about anything, but in every situation,
                by prayer and petition, with thanksgiving, present your requests
                to God.&rdquo;
              </p>
              <cite className="text-primary-light text-sm not-italic font-semibold mt-2 block">
                Philippians 4:6
              </cite>
            </blockquote>
            <a
              href="https://forms.gle/QRk1FSUSFnjAVumv7"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-primary text-white px-8 py-4 rounded font-bold text-lg hover:bg-primary-light transition-colors"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                />
              </svg>
              Submit a Prayer Request
            </a>
          </div>
        </div>
      </section>

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
                className="inline-block bg-white text-primary px-6 py-3 rounded font-bold hover:bg-light transition-colors"
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
      </section>

      {/* Pastor Section - WHITE */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="rounded-xl overflow-hidden shadow-xl">
                <Image
                  src="/images/pastor-1030x771-1-1024x767.jpg"
                  alt="Dr. Nick Manzie"
                  width={600}
                  height={450}
                  className="w-full h-auto"
                />
              </div>
              <div>
                <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-playfair)] text-dark mb-4">
                  Our Pastor
                </h2>
                <div className="section-divider !mx-0 mb-6" />
                <h3 className="text-2xl font-bold font-[family-name:var(--font-playfair)] text-dark mb-1">
                  Dr. Nick Manzie
                </h3>
                <p className="text-primary font-semibold mb-4">
                  &ldquo;Brother Nick&rdquo;
                </p>
                <p className="text-gray-warm leading-relaxed mb-6">
                  Dr. Nick Manzie has faithfully led Central Baptist Church since
                  2003. He began his ministry as a Chaplain with Christian
                  Motorsports International and has been dedicated to serving the
                  Port St. Lucie community and guiding our congregation in faith
                  and worship.
                </p>
                <Link
                  href="/our-story"
                  className="inline-block text-primary font-bold hover:text-primary-light transition-colors"
                >
                  Read More &rarr;
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Sermon - GREEN */}
      <LatestSermon />

      {/* Service Times - CREAM */}
      <section className="py-20 bg-light relative overflow-hidden">
        {/* Subtle decorative background */}
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/[0.03] rounded-full blur-3xl" />
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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Sunday Card */}
            <div className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-primary/20 hover:-translate-y-1">
              <div className="bg-gradient-to-r from-primary to-primary-dark px-8 py-5 text-center">
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
            <div className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-primary/20 hover:-translate-y-1">
              <div className="bg-gradient-to-r from-primary to-primary-dark px-8 py-5 text-center">
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
                      <span className="text-sm text-gray-warm">Ages 4&ndash;12</span>
                    </div>
                    <span className="text-primary font-bold bg-primary/5 px-3 py-1 rounded-full text-sm shrink-0">7:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-gray-100 pb-4">
                    <div>
                      <span className="font-semibold text-dark block">Youth Bible Study</span>
                      <span className="text-sm text-gray-warm">Teens</span>
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

          {/* Location & CTA */}
          <div className="mt-14 text-center">
            <div className="inline-flex items-center gap-2 text-gray-warm mb-6">
              <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span className="text-dark font-semibold">1400 SE Lyngate Dr, Port St. Lucie, FL 34952</span>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-primary text-white px-8 py-4 rounded font-bold text-lg hover:bg-primary-dark transition-colors duration-200"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                </svg>
                Get Directions
              </Link>
              <a
                href="tel:7722374907"
                className="inline-flex items-center justify-center gap-2 border-2 border-primary text-primary px-8 py-4 rounded font-bold text-lg hover:bg-primary hover:text-white transition-colors duration-200"
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

      {/* Ministries Overview - GREEN */}
      <section className="bg-green-section py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-playfair)] mb-4">Our Ministries</h2>
            <div className="w-20 h-1 bg-white/60 mx-auto" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              { title: "Children's Ministries", desc: "Nursery care and kids worship services for our youngest members.", icon: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z", anim: "animate-icon-pulse" },
              { title: "Youth Groups", desc: "Bible study programs for middle and high school students.", icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z", anim: "animate-icon-float" },
              { title: "Sunday School", desc: "Classes for all age groups to study God's Word together.", icon: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253", anim: "animate-icon-float" },
              { title: "Music Programs", desc: "Traditional hymns and worship music to glorify God.", icon: "M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3", anim: "animate-icon-bounce" },
              { title: "Men's & Women's Groups", desc: "Fellowship and ministry opportunities for adults.", icon: "M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z", anim: "animate-icon-pulse" },
              { title: "Mission Trips", desc: "Serving communities across the Southeast United States.", icon: "M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z", anim: "animate-icon-spin-slow" },
            ].map((ministry) => (
              <div key={ministry.title} className="group bg-white/10 rounded-2xl p-7 hover:bg-white/20 transition-all duration-300 border border-white/20 hover:border-white/40 hover:-translate-y-1 hover:shadow-lg hover:shadow-black/10">
                <div className="w-14 h-14 bg-white/15 rounded-xl flex items-center justify-center mb-5 group-hover:bg-white/25 transition-all duration-300">
                  <svg className={`w-8 h-8 text-white ${ministry.anim}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={ministry.icon} />
                  </svg>
                </div>
                <h3 className="text-lg font-bold mb-2">{ministry.title}</h3>
                <p className="text-white/80 text-sm leading-relaxed">{ministry.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/our-ministries" className="inline-block bg-white text-primary px-8 py-3 rounded font-bold hover:bg-light transition-colors duration-200">
              Explore Our Ministries
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section - GREEN with decorative icons */}
      <section className="bg-green-section py-20 relative overflow-hidden">
        {/* Decorative Background Icons */}
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          {/* Cross - top left */}
          <svg className="absolute top-6 left-[8%] w-16 h-16 text-white/[0.07] animate-icon-float" fill="currentColor" viewBox="0 0 24 24">
            <path d="M11 2h2v7h7v2h-7v11h-2V11H4V9h7z" />
          </svg>
          {/* Bible - top right */}
          <svg className="absolute top-10 right-[10%] w-14 h-14 text-white/[0.07] animate-icon-bounce" fill="none" stroke="currentColor" strokeWidth={1.2} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
          </svg>
          {/* Heart - mid left */}
          <svg className="absolute top-1/2 -translate-y-1/2 left-[4%] w-20 h-20 text-white/[0.06] animate-icon-pulse" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
          </svg>
          {/* Dove - mid right */}
          <svg className="absolute top-[40%] right-[5%] w-[4.5rem] h-[4.5rem] text-white/[0.06] animate-icon-float" style={{ animationDelay: '1s' }} fill="currentColor" viewBox="0 0 24 24">
            <path d="M12.5 2C9.64 2 8 4.14 8 6c0 .6.13 1.17.38 1.68L2 14l5 .5L8.5 19l3.04-4.57c.46.07.94.07 1.42 0L16 19l1.5-4.5L22 14l-6.38-6.32C15.87 7.17 16 6.6 16 6c0-1.86-1.64-4-3.5-4z" />
          </svg>
          {/* Music note - bottom left */}
          <svg className="absolute bottom-8 left-[12%] w-12 h-12 text-white/[0.07] animate-icon-bounce" style={{ animationDelay: '0.5s' }} fill="none" stroke="currentColor" strokeWidth={1.2} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
          </svg>
          {/* Community / people - bottom right */}
          <svg className="absolute bottom-6 right-[12%] w-14 h-14 text-white/[0.07] animate-icon-pulse" style={{ animationDelay: '0.8s' }} fill="none" stroke="currentColor" strokeWidth={1.2} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
          {/* Small cross - bottom center */}
          <svg className="absolute bottom-12 left-1/2 -translate-x-1/2 w-10 h-10 text-white/[0.05] animate-icon-spin-slow" fill="currentColor" viewBox="0 0 24 24">
            <path d="M11 2h2v7h7v2h-7v11h-2V11H4V9h7z" />
          </svg>
          {/* Globe / missions - top center */}
          <svg className="absolute top-8 left-1/2 -translate-x-[3rem] w-12 h-12 text-white/[0.06] animate-icon-float" style={{ animationDelay: '1.5s' }} fill="none" stroke="currentColor" strokeWidth={1.2} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>

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
    </>
  );
}
