import PageHero from "@/components/PageHero";
import ScrollReveal from "@/components/ScrollReveal";
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
    icon: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6",
  },
  {
    year: "August 1979",
    title: "Growing in Faith",
    text: "The growing congregation relocated to a recreation hall and received mission status with sponsorship from First Baptist Church of Fort Pierce.",
    icon: "M13 7h8m0 0v8m0-8l-8 8-4-4-6 6",
  },
  {
    year: "February 22, 1981",
    title: "Groundbreaking",
    text: "A groundbreaking ceremony was held at the current location on 202 SW Tulip Blvd in Port Saint Lucie, marking the beginning of construction on the church's permanent home.",
    icon: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z",
  },
  {
    year: "October 4, 1981",
    title: "First Service",
    text: "The building was opened for services, and the congregation finally had a permanent place to worship together.",
    icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4",
  },
  {
    year: "November 1, 1981",
    title: "Formal Dedication",
    text: "The church building was formally dedicated to the glory of God, marking a milestone in the congregation's journey.",
    icon: "M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z",
  },
  {
    year: "September 30, 1984",
    title: "Full Church Status",
    text: "Central Baptist Church received full church status, completing its transition from a mission church to a fully autonomous congregation.",
    icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
  },
  {
    year: "2003",
    title: "New Leadership",
    text: "Dr. Nick Manzie (Brother Nick) began his role as pastor, bringing his experience as a Chaplain with Christian Motorsports International to lead the congregation.",
    icon: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z",
  },
  {
    year: "2023",
    title: "Recent Expansion",
    text: "A new addition was completed, providing fellowship and children's worship space to accommodate the growing needs of the church family.",
    icon: "M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4",
  },
];

export default function OurStory() {
  return (
    <>
      <PageHero
        title="Our Story"
        subtitle="From six couples in a living room to a thriving church family"
        image="/images/hero-our-story.jpg"
      />

      {/* History Timeline - WHITE with centered timeline */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-primary/[0.03] rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-5xl mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block text-primary text-sm font-semibold uppercase tracking-widest mb-3">
              Our Heritage
            </span>
            <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-playfair)] text-dark mb-4">
              A Journey of Faith
            </h2>
            <div className="section-divider mb-6" />
            <p className="text-gray-warm text-lg max-w-2xl mx-auto">
              From a living room Bible study to a thriving church family — see how God has been at work through every chapter of our story.
            </p>
          </div>

          {/* Center line */}
          <div className="relative">
            <div className="absolute left-4 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-0.5 bg-primary/15" />

            <div className="space-y-8 md:space-y-12">
              {timeline.map((event, i) => (
                <ScrollReveal key={event.year}>
                <div className={`relative flex items-start gap-6 md:gap-10 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
                  {/* Card */}
                  <div className={`flex-1 ml-12 md:ml-0 ${i % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                    <div className="group bg-white rounded-2xl p-6 md:p-8 border border-gray-100 hover:border-primary/15 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                      <span className="inline-block text-primary font-bold text-sm tracking-wider uppercase mb-2">
                        {event.year}
                      </span>
                      <h3 className="text-xl font-bold text-dark mb-3 font-[family-name:var(--font-playfair)]">
                        {event.title}
                      </h3>
                      <p className="text-gray-warm leading-relaxed">{event.text}</p>
                    </div>
                  </div>

                  {/* Center icon dot */}
                  <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 top-6 z-10">
                    <div className="w-9 h-9 bg-primary rounded-full flex items-center justify-center shadow-md ring-4 ring-white">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={event.icon} />
                      </svg>
                    </div>
                  </div>

                  {/* Spacer for opposite side */}
                  <div className="hidden md:block flex-1" />
                </div>
                </ScrollReveal>
              ))}
            </div>

            {/* End dot */}
            <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 -bottom-2">
              <div className="w-4 h-4 bg-primary/30 rounded-full ring-4 ring-white" />
            </div>
          </div>
        </div>
      </section>

      {/* Pastor Section */}
      <ScrollReveal>
      <section className="py-24 bg-light relative overflow-hidden">
        {/* Decorative background */}
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/[0.03] rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-5xl mx-auto px-4">
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
            <div className="rounded-xl overflow-hidden shadow-lg ring-4 ring-primary/10 transition-all duration-300 hover:shadow-lg">
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
      </ScrollReveal>

      {/* Staff Section */}
      <ScrollReveal>
      <section className="py-24 bg-white relative overflow-hidden">
        {/* Decorative background */}
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-primary/[0.03] rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-5xl mx-auto px-4">
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
            <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-gray-100 hover:border-primary/15">
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
              <div className="px-6 py-3 text-center">
                <a href="mailto:nickmanzie@centralbaptistpsl.com" className="text-xs text-gray-warm hover:text-primary transition-colors">
                  nickmanzie@centralbaptistpsl.com
                </a>
              </div>
            </div>

            <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-gray-100 hover:border-primary/15">
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

            <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-gray-100 hover:border-primary/15">
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
      </ScrollReveal>

      {/* CTA Section - Image background with green overlay */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 animate-ken-burns">
          <Image
            src="/images/hero-contact.jpg"
            alt=""
            fill
            className="object-cover"
            aria-hidden="true"
          />
        </div>
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
