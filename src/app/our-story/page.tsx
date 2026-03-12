import PageHero from "@/components/PageHero";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Our Story - Central Baptist Church",
  description:
    "Learn about the history of Central Baptist Church of Port St. Lucie, from our humble beginnings in 1978 to today.",
};

const timeline = [
  {
    year: "February 1978",
    title: "Humble Beginnings",
    text: "Central Baptist Church traces its beginning to February 1978, when 6 couples and three friends gathered in a private home in Windmill Point. What started as a small Bible study group would grow into a vibrant church family.",
  },
  {
    year: "August 1979",
    title: "Growing in Faith",
    text: "The growing congregation relocated to a recreation hall and received mission status with sponsorship from First Baptist Church of Fort Pierce.",
  },
  {
    year: "February 22, 1981",
    title: "Groundbreaking",
    text: "A groundbreaking ceremony was held at the current location on 202 SW Tulip Blvd in Port Saint Lucie, marking the beginning of construction on the church's permanent home.",
  },
  {
    year: "October 4, 1981",
    title: "First Service",
    text: "The building was opened for services, and the congregation finally had a permanent place to worship together.",
  },
  {
    year: "November 1, 1981",
    title: "Formal Dedication",
    text: "The church building was formally dedicated to the glory of God, marking a milestone in the congregation's journey.",
  },
  {
    year: "September 30, 1984",
    title: "Full Church Status",
    text: "Central Baptist Church received full church status, completing its transition from a mission church to a fully autonomous congregation.",
  },
  {
    year: "2003",
    title: "New Leadership",
    text: "Dr. Nick Manzie (Brother Nick) began his role as pastor, bringing his experience as a Chaplain with Christian Motorsports International to lead the congregation.",
  },
  {
    year: "2023",
    title: "Recent Expansion",
    text: "A new addition was completed, providing fellowship and children's worship space to accommodate the growing needs of the church family.",
  },
];

export default function OurStory() {
  return (
    <>
      <PageHero
        title="Our Story"
        subtitle="From six couples in a living room to a thriving church family"
      />

      {/* History Timeline - GREEN */}
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

        <div className="relative max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <span className="inline-block text-white/70 text-sm font-semibold uppercase tracking-widest mb-3">
              Our Heritage
            </span>
            <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-playfair)] mb-4 animate-fade-in-up">
              History
            </h2>
            <div className="w-20 h-1 bg-white/60 mx-auto animate-fade-in-up-delay" />
          </div>

          <div className="relative border-l-4 border-white/30 pl-8 space-y-10">
            {timeline.map((event) => (
              <div key={event.year} className="timeline-item relative group cursor-default">
                <div className="absolute -left-[2.85rem] top-1 w-5 h-5 bg-white rounded-full border-4 border-[#4E7C5B] transition-transform duration-300 group-hover:scale-125" />
                <div className="transition-transform duration-300 group-hover:translate-x-2">
                  <span className="text-white/70 font-bold text-sm tracking-wider uppercase">
                    {event.year}
                  </span>
                  <h3 className="text-xl font-bold text-white mt-1 mb-2 font-[family-name:var(--font-playfair)]">
                    {event.title}
                  </h3>
                  <p className="text-white/85 leading-relaxed text-lg">{event.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pastor Section */}
      <section className="py-20 bg-light">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-12">
            <span className="inline-block text-primary text-sm font-semibold uppercase tracking-widest mb-3">
              Our Leadership
            </span>
            <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-playfair)] text-dark mb-4 animate-fade-in-up">
              Our Pastor
            </h2>
            <div className="section-divider animate-fade-in-up-delay" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div className="rounded-xl overflow-hidden shadow-lg ring-4 ring-primary/20 hover:ring-primary/40 transition-all duration-300 hover:shadow-xl">
              <Image
                src="/images/pastor-1030x771-1-1024x767.jpg"
                alt="Dr. Nick Manzie"
                width={600}
                height={450}
                className="w-full h-auto transition-transform duration-500 hover:scale-105"
              />
            </div>
            <div>
              <h3 className="text-2xl font-bold font-[family-name:var(--font-playfair)] text-dark mb-1">
                Dr. Nick Manzie
              </h3>
              <div className="section-divider !mx-0 mb-6 mt-3" />
              <p className="text-primary font-semibold italic mb-6">
                &ldquo;Brother Nick&rdquo; &middot; Senior Pastor since 2003
              </p>
              <p className="text-gray-warm leading-relaxed text-lg mb-4">
                Dr. Nick Manzie has faithfully led Central Baptist Church since
                2003. He began his ministry as a Chaplain with Christian
                Motorsports International and has since dedicated his life to
                serving the Port St. Lucie community.
              </p>
              <p className="text-gray-warm leading-relaxed mb-6">
                Born in Newark, NJ to parents of Puerto Rican and Italian heritage. Married to Jessica with five adult children and four grandchildren. He also serves as Chaplain at the Port St. Lucie Police Department.
              </p>
              <div className="space-y-1 text-sm text-gray-warm">
                <p>
                  <span className="font-semibold">Email:</span>{" "}
                  <a href="mailto:nickmanzie@centralbaptistpsl.com" className="text-primary hover:text-primary-light transition-colors">
                    nickmanzie@centralbaptistpsl.com
                  </a>
                </p>
                <p>
                  <span className="font-semibold">Phone:</span>{" "}
                  <a href="tel:7722492463" className="text-primary hover:text-primary-light transition-colors">
                    (772) 249-2463
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Staff Section */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-12">
            <span className="inline-block text-primary text-sm font-semibold uppercase tracking-widest mb-3">
              Our Team
            </span>
            <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-playfair)] text-dark mb-4 animate-fade-in-up">
              Our Staff
            </h2>
            <div className="section-divider animate-fade-in-up-delay" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100 hover:border-primary/20">
              <div className="aspect-square relative">
                <Image
                  src="/images/Pastor-Nick.jpg"
                  alt="Dr. Nick Manzie"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="bg-gradient-to-r from-primary to-primary-dark px-6 py-3 text-center">
                <h3 className="text-lg font-bold font-[family-name:var(--font-playfair)] text-white">
                  Dr. Nick Manzie
                </h3>
                <p className="text-white/80 text-sm font-semibold">Senior Pastor</p>
              </div>
            </div>

            <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100 hover:border-primary/20">
              <div className="aspect-square relative">
                <Image
                  src="/images/don-reid.jpg"
                  alt="Pastor Don Reid"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="bg-gradient-to-r from-primary to-primary-dark px-6 py-3 text-center">
                <h3 className="text-lg font-bold font-[family-name:var(--font-playfair)] text-white">
                  Don Reid
                </h3>
                <p className="text-white/80 text-sm font-semibold">Missions Pastor</p>
              </div>
              <div className="px-6 py-3 text-center">
                <p className="text-xs text-gray-warm">
                  <a href="mailto:donreid@centralbaptistpsl.com" className="hover:text-primary transition-colors">
                    donreid@centralbaptistpsl.com
                  </a>
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100 hover:border-primary/20">
              <div className="aspect-square relative">
                <Image
                  src="/images/jessica-manzie.jpg"
                  alt="Jessica Manzie"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="bg-gradient-to-r from-primary to-primary-dark px-6 py-3 text-center">
                <h3 className="text-lg font-bold font-[family-name:var(--font-playfair)] text-white">
                  Jessica Manzie
                </h3>
                <p className="text-white/80 text-sm font-semibold">Director of Children &amp; Youth</p>
              </div>
              <div className="px-6 py-3 text-center">
                <p className="text-xs text-gray-warm">
                  <a href="mailto:cbcpslstudentministry@gmail.com" className="hover:text-primary transition-colors">
                    cbcpslstudentministry@gmail.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - GREEN with decorative icons */}
      <section className="bg-green-section py-20 relative overflow-hidden">
        {/* Decorative Background Icons */}
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <svg className="absolute top-6 left-[8%] w-16 h-16 text-white/[0.07] animate-icon-float" fill="currentColor" viewBox="0 0 24 24">
            <path d="M11 2h2v7h7v2h-7v11h-2V11H4V9h7z" />
          </svg>
          <svg className="absolute top-10 right-[10%] w-14 h-14 text-white/[0.07] animate-icon-bounce" fill="none" stroke="currentColor" strokeWidth={1.2} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
          </svg>
          <svg className="absolute top-1/2 -translate-y-1/2 left-[4%] w-20 h-20 text-white/[0.06] animate-icon-pulse" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
          </svg>
          <svg className="absolute top-[40%] right-[5%] w-[4.5rem] h-[4.5rem] text-white/[0.06] animate-icon-float" style={{ animationDelay: '1s' }} fill="currentColor" viewBox="0 0 24 24">
            <path d="M12.5 2C9.64 2 8 4.14 8 6c0 .6.13 1.17.38 1.68L2 14l5 .5L8.5 19l3.04-4.57c.46.07.94.07 1.42 0L16 19l1.5-4.5L22 14l-6.38-6.32C15.87 7.17 16 6.6 16 6c0-1.86-1.64-4-3.5-4z" />
          </svg>
          <svg className="absolute bottom-8 left-[12%] w-12 h-12 text-white/[0.07] animate-icon-bounce" style={{ animationDelay: '0.5s' }} fill="none" stroke="currentColor" strokeWidth={1.2} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
          </svg>
          <svg className="absolute bottom-6 right-[12%] w-14 h-14 text-white/[0.07] animate-icon-pulse" style={{ animationDelay: '0.8s' }} fill="none" stroke="currentColor" strokeWidth={1.2} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
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
