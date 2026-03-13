import PageHero from "@/components/PageHero";
import ScrollReveal from "@/components/ScrollReveal";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Our Ministries",
  description:
    "Explore the ministries at Central Baptist Church of Port St. Lucie - Children's, Youth, Sunday School, Music, and more.",
};

const childrenYouth = [
  {
    title: "Children's Ministries",
    description:
      "We provide a safe, fun, and nurturing environment for children to learn about God's love. Our programs include nursery care for infants and toddlers, as well as kids' worship services during Sunday morning worship.",
    icon: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z",
    time: "Sunday Mornings",
  },
  {
    title: "Adventure Kids Bible Study",
    description:
      "Our Adventure Kids program is designed for children in grades K-5. Through engaging Bible lessons, activities, and fellowship, kids discover the adventure of following Jesus.",
    icon: "M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z",
    time: "Wed 7:00 PM",
  },
  {
    title: "Youth Groups",
    description:
      "Our youth ministry offers Bible study programs for middle and high school students (grades 6-12). We create a welcoming space where teens can grow in their faith and build lasting friendships.",
    icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z",
    time: "Wed 7:00 PM",
  },
];

const adults = [
  {
    title: "Sunday School",
    description:
      "We offer Sunday School classes for all age groups every Sunday at 9:30 AM. Our classes provide in-depth Bible study and fellowship in a small group setting.",
    icon: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253",
    time: "Sun 9:30 AM",
  },
  {
    title: "Adult Bible Study",
    description:
      "Join us Wednesday evenings for in-depth adult Bible study. We dive deep into Scripture together, growing in knowledge and understanding of God's Word.",
    icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
    time: "Wed 7:00 PM",
  },
  {
    title: "Women's Ministry",
    description:
      "Our Women's Ministry provides opportunities for women to grow in faith, build meaningful friendships, and support one another through Bible studies and fellowship events.",
    icon: "M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z",
  },
  {
    title: "Men's Ministry",
    description:
      "Our Men's Ministry brings men together for fellowship, accountability, and service. Through Bible studies and community outreach, men are encouraged to grow as spiritual leaders.",
    icon: "M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z",
  },
];

const worshipOutreach = [
  {
    title: "Music Programs",
    description:
      "Music is a vital part of our worship at Central Baptist. We sing hymns and have a great time worshiping God together through traditional and contemporary music.",
    icon: "M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3",
  },
  {
    title: "Mission Trips",
    description:
      "Central Baptist Church is committed to serving communities beyond our walls. We have completed mission trips to 17 locations since 2001, bringing help and hope across the Southeast United States.",
    icon: "M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
  },
];

export default function OurMinistries() {
  return (
    <>
      <PageHero
        title="Our Ministries"
        subtitle="Programs and activities for children, youth, and adults"
        image="/images/Ministry-Collage.jpg"
      />

      {/* Intro - WHITE */}
      <ScrollReveal>
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <div>
              <span className="inline-block text-primary text-sm font-semibold uppercase tracking-widest mb-3">
                Our Community
              </span>
              <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-playfair)] text-dark mb-4">
                Growing Together in Faith
              </h2>
              <div className="section-divider !mx-0 mb-6" />
              <p className="text-lg text-gray-warm leading-relaxed mb-6">
                At Central Baptist Church, we strive to be a community of faith
                banded together by our love, mission, and purpose to proclaim the
                gospel of Jesus Christ.
              </p>
              <p className="text-lg text-gray-warm leading-relaxed mb-8">
                Our ministries provide opportunities for every member to grow,
                serve, and connect in a safe and welcoming environment for people
                of all ages and backgrounds.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-lg font-bold shadow-md hover:shadow-lg hover:bg-primary-light transition-all btn-interact"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
                Get In Touch
              </Link>
            </div>
            <div className="rounded-xl overflow-hidden shadow-xl">
              <Image
                src="/images/Ministry-Collage.jpg"
                alt="Church ministries"
                width={600}
                height={400}
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>
      </ScrollReveal>

      {/* Children & Youth - GREEN */}
      <ScrollReveal>
      <section className="bg-green-section py-24 relative overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <span className="inline-block text-white/60 text-sm font-semibold uppercase tracking-widest mb-3">
              For the Young Ones
            </span>
            <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-playfair)] mb-4">
              Children &amp; Youth
            </h2>
            <div className="w-20 h-1 bg-white/60 mx-auto" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {childrenYouth.map((m) => (
              <div
                key={m.title}
                className="group bg-white/[0.08] backdrop-blur-sm rounded-2xl p-8 hover:bg-white/[0.16] transition-all duration-300 border border-white/20 hover:-translate-y-1 hover:shadow-lg hover:shadow-black/10"
              >
                <div className="w-14 h-14 bg-white/15 rounded-xl flex items-center justify-center mb-5 animate-icon-float group-hover:bg-white/25 group-hover:scale-110 transition-all duration-300">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={m.icon} />
                  </svg>
                </div>
                <h3 className="text-xl font-bold font-[family-name:var(--font-playfair)] mb-2">
                  {m.title}
                </h3>
                {m.time && (
                  <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-white/70 mb-3">
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {m.time}
                  </span>
                )}
                <p className="text-white/80 text-sm leading-relaxed">{m.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      </ScrollReveal>

      {/* Adult Ministries - WHITE */}
      <ScrollReveal>
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <span className="inline-block text-primary text-sm font-semibold uppercase tracking-widest mb-3">
              Grow Deeper
            </span>
            <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-playfair)] text-dark mb-4">
              Adult Ministries
            </h2>
            <div className="section-divider mb-6" />
            <p className="text-gray-warm text-lg max-w-2xl mx-auto">
              Whether through Bible study, fellowship, or service, our adult programs help you grow closer to God and one another.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {adults.map((m) => (
              <div
                key={m.title}
                className="group bg-white rounded-2xl p-8 border border-gray-100 hover:border-primary/15 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                <div className="flex items-start gap-5">
                  <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center shrink-0 animate-icon-float group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-7 h-7 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={m.icon} />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold font-[family-name:var(--font-playfair)] text-dark mb-1">
                      {m.title}
                    </h3>
                    {m.time && (
                      <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary mb-3">
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        {m.time}
                      </span>
                    )}
                    <p className="text-gray-warm text-sm leading-relaxed">{m.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      </ScrollReveal>

      {/* Worship & Outreach - GREEN */}
      <ScrollReveal>
      <section className="bg-green-section py-24 relative overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <span className="inline-block text-white/60 text-sm font-semibold uppercase tracking-widest mb-3">
              Serve &amp; Praise
            </span>
            <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-playfair)] mb-4">
              Worship &amp; Outreach
            </h2>
            <div className="w-20 h-1 bg-white/60 mx-auto" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {worshipOutreach.map((m) => (
              <div
                key={m.title}
                className="group bg-white/[0.08] backdrop-blur-sm rounded-2xl p-8 hover:bg-white/[0.16] transition-all duration-300 border border-white/20 hover:-translate-y-1 hover:shadow-lg hover:shadow-black/10"
              >
                <div className="w-14 h-14 bg-white/15 rounded-xl flex items-center justify-center mb-5 animate-icon-float group-hover:bg-white/25 group-hover:scale-110 transition-all duration-300">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={m.icon} />
                  </svg>
                </div>
                <h3 className="text-xl font-bold font-[family-name:var(--font-playfair)] mb-3">
                  {m.title}
                </h3>
                <p className="text-white/80 text-sm leading-relaxed">{m.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      </ScrollReveal>

      {/* CTA - Image background with green overlay */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 animate-ken-burns">
          <Image src="/images/hero-contact.jpg" alt="" fill className="object-cover" aria-hidden="true" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-[#2a5435]/90 via-primary/85 to-[#2a5435]/90" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center text-white">
          <span className="inline-block text-white/70 text-sm font-semibold uppercase tracking-widest mb-4">Join Our Family</span>
          <h2 className="text-4xl md:text-5xl font-bold font-[family-name:var(--font-playfair)] mb-6 leading-tight">Want to Get Involved?</h2>
          <p className="text-xl mb-10 text-white/90 max-w-2xl mx-auto leading-relaxed">
            Contact us to learn more about any of our ministries or to find the right fit for you and your family.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="inline-flex items-center justify-center gap-2 bg-white text-primary px-10 py-4 rounded-lg font-bold text-lg shadow-lg btn-interact">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
              Contact Us
            </Link>
            <a href="tel:7722374907" className="inline-flex items-center justify-center gap-2 border-2 border-white text-white px-10 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-primary transition-colors duration-200 btn-interact">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
              Call (772) 237-4907
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
