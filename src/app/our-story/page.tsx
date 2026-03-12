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
        image="/images/hero-our-story.jpg"
      />

      {/* History Timeline - GREEN */}
      <ScrollReveal>
      <section className="bg-green-section py-24 relative overflow-hidden">
        <div className="relative max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <span className="inline-block text-white/60 text-sm font-semibold uppercase tracking-widest mb-3">
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
      </ScrollReveal>

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

      {/* CTA Section - GREEN with decorative icons */}
      <ScrollReveal>
      <section className="bg-green-section py-24 relative overflow-hidden">
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
              className="inline-flex items-center justify-center gap-2 bg-white text-primary px-8 py-4 rounded-lg font-bold text-lg shadow-lg hover:bg-light transition-all duration-200 btn-interact"
            >
              Get Directions
            </Link>
            <a
              href="tel:7722374907"
              className="inline-flex items-center justify-center gap-2 border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-primary transition-all duration-200 btn-interact"
            >
              Call (772) 237-4907
            </a>
          </div>
        </div>
      </section>
      </ScrollReveal>
    </>
  );
}
