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

      {/* Prayer Request Section - WHITE */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-playfair)] text-dark mb-4">
              Prayer Request
            </h2>
            <div className="section-divider" />
          </div>
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-lg text-gray-warm leading-relaxed mb-8">
              We believe in the power of prayer. If you have a prayer request, we would love to pray for you and your family. Our church family is here to support you through every season of life.
            </p>
            <a
              href="https://forms.gle/QRk1FSUSFnjAVumv7"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-primary text-white px-8 py-4 rounded font-bold text-lg hover:bg-primary-light transition-colors"
            >
              Submit a Prayer Request
            </a>
          </div>
        </div>
      </section>

      {/* Bible Reading - GREEN */}
      <section className="bg-green-section py-20">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
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
            <div className="relative rounded-xl overflow-hidden shadow-xl">
              <Image
                src="/images/what-we-believe.jpg"
                alt="Bible reading"
                width={600}
                height={400}
                className="w-full h-auto"
              />
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
      <section className="py-20 bg-light">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-playfair)] text-dark mb-4">
              Visit Us at One of Our Services
            </h2>
            <div className="section-divider" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="group bg-white rounded-2xl p-8 text-center shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-primary/20 hover:-translate-y-1">
              <div className="w-18 h-18 bg-gradient-to-br from-primary to-primary-dark rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <svg className="w-9 h-9 text-white animate-icon-spin-slow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold font-[family-name:var(--font-playfair)] text-dark mb-6">Sunday</h3>
              <div className="space-y-3 text-gray-warm">
                <div className="flex justify-between items-center border-b border-gray-100 pb-3">
                  <span className="font-semibold">Sunday School</span>
                  <span className="text-primary font-bold bg-primary/5 px-3 py-1 rounded-full text-sm">9:30 AM</span>
                </div>
                <div className="flex justify-between items-center border-b border-gray-100 pb-3">
                  <span className="font-semibold">Morning Worship</span>
                  <span className="text-primary font-bold bg-primary/5 px-3 py-1 rounded-full text-sm">11:00 AM</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-semibold">Evening Worship</span>
                  <span className="text-primary font-bold bg-primary/5 px-3 py-1 rounded-full text-sm">6:00 PM</span>
                </div>
              </div>
            </div>

            <div className="group bg-white rounded-2xl p-8 text-center shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-primary/20 hover:-translate-y-1">
              <div className="w-18 h-18 bg-gradient-to-br from-primary to-primary-dark rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <svg className="w-9 h-9 text-white animate-icon-float" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold font-[family-name:var(--font-playfair)] text-dark mb-6">Wednesday</h3>
              <div className="space-y-3 text-gray-warm">
                <div className="flex justify-between items-center border-b border-gray-100 pb-3">
                  <span className="font-semibold">Prayer Meeting</span>
                  <span className="text-primary font-bold bg-primary/5 px-3 py-1 rounded-full text-sm">6:30 PM</span>
                </div>
                <div className="flex justify-between items-center border-b border-gray-100 pb-3">
                  <span className="font-semibold">Kids Bible Study</span>
                  <span className="text-primary font-bold bg-primary/5 px-3 py-1 rounded-full text-sm">7:00 PM</span>
                </div>
                <div className="flex justify-between items-center border-b border-gray-100 pb-3">
                  <span className="font-semibold">Youth Bible Study</span>
                  <span className="text-primary font-bold bg-primary/5 px-3 py-1 rounded-full text-sm">7:00 PM</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-semibold">Adult Bible Study</span>
                  <span className="text-primary font-bold bg-primary/5 px-3 py-1 rounded-full text-sm">7:00 PM</span>
                </div>
              </div>
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
