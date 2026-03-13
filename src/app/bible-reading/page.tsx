import Link from "next/link";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata = {
  title: "Bible Reading Plans - Central Baptist Church",
  description:
    "365-day Bible reading plans from Central Baptist Church - Cover to Cover, Chronological, and Old & New Testament daily plans.",
};

const plans = [
  {
    title: "Cover to Cover",
    subtitle: "Genesis to Revelation",
    description:
      "Read through all 66 books of the Bible in their traditional order. Perfect for those who want to understand the flow of Scripture as it was compiled.",
    icon: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253",
  },
  {
    title: "Chronological",
    subtitle: "Events in Historical Order",
    description:
      "Experience the Bible as an unfolding story. Events, prophets, and kings are presented in the order they occurred historically, revealing how it all connects.",
    icon: "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z",
  },
  {
    title: "Old & New Testament",
    subtitle: "Daily Balanced Reading",
    description:
      "Alternate between the Old and New Testaments each day for a balanced reading. See how the Old Testament points to and is fulfilled in the New.",
    icon: "M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z",
  },
];

const steps = [
  {
    number: "01",
    title: "Choose Your Plan",
    description: "Pick the reading plan that matches your style — sequential, chronological, or balanced.",
    icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4",
  },
  {
    number: "02",
    title: "Read Daily",
    description: "Set aside time each day. Even 15 minutes of consistent reading makes a difference.",
    icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
  },
  {
    number: "03",
    title: "Grow Together",
    description: "Join others in your church family who are reading along. Share what you learn on Sundays.",
    icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z",
  },
];

export default function BibleReading() {
  return (
    <>
      <PageHero
        title="Bible Reading Plans"
        subtitle="One of the best ways to know God is to become acquainted with the full counsel of His written Word"
        image="/images/hero-bible-reading.jpg"
      />

      {/* Introduction Section - WHITE */}
      <ScrollReveal>
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/[0.03] rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center max-w-6xl mx-auto">
            <div>
              <span className="inline-block text-primary text-sm font-semibold uppercase tracking-widest mb-3">
                Why Read the Bible?
              </span>
              <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-playfair)] text-dark mb-4">
                Know God Through
                <br />
                His Word
              </h2>
              <div className="section-divider !mx-0 mb-8" />
              <p className="text-lg leading-relaxed mb-6 text-gray-warm">
                The Bible is God&apos;s living Word — it teaches, corrects, and equips us for every
                good work. Reading through the entire Bible gives you the complete picture of
                God&apos;s love, His plan for humanity, and His promises for your life.
              </p>
              <p className="text-lg leading-relaxed mb-8 text-gray-warm">
                We offer three 365-day reading plans to help you engage with Scripture
                throughout the year. Choose the plan that best fits your reading style and
                begin your journey through God&apos;s Word today.
              </p>
              <Link
                href="#plans"
                className="inline-block bg-primary text-white px-6 py-3 rounded-lg font-bold shadow-md hover:shadow-lg hover:bg-primary-dark transition-all btn-interact"
              >
                Explore the Plans
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="group bg-light rounded-2xl p-6 border border-gray-100 flex flex-col items-center text-center shadow-sm hover:shadow-lg hover:border-primary/15 hover:-translate-y-1 transition-all duration-300">
                <svg className="w-7 h-7 text-primary mb-3" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
                <span className="text-sm font-bold text-dark">3 Reading Plans</span>
                <span className="text-xs text-gray-warm mt-1">Choose your pace</span>
              </div>
              <div className="group bg-light rounded-2xl p-6 border border-gray-100 flex flex-col items-center text-center shadow-sm hover:shadow-lg hover:border-primary/15 hover:-translate-y-1 transition-all duration-300">
                <svg className="w-7 h-7 text-primary mb-3" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span className="text-sm font-bold text-dark">365 Days</span>
                <span className="text-xs text-gray-warm mt-1">Daily readings</span>
              </div>
              <div className="group bg-light rounded-2xl p-6 border border-gray-100 flex flex-col items-center text-center shadow-sm hover:shadow-lg hover:border-primary/15 hover:-translate-y-1 transition-all duration-300">
                <svg className="w-7 h-7 text-primary mb-3" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                </svg>
                <span className="text-sm font-bold text-dark">Old &amp; New Testament</span>
                <span className="text-xs text-gray-warm mt-1">Cover to cover</span>
              </div>
              <div className="group bg-light rounded-2xl p-6 border border-gray-100 flex flex-col items-center text-center shadow-sm hover:shadow-lg hover:border-primary/15 hover:-translate-y-1 transition-all duration-300">
                <svg className="w-7 h-7 text-primary mb-3" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                <span className="text-sm font-bold text-dark">Read Together</span>
                <span className="text-xs text-gray-warm mt-1">Join our church family</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      </ScrollReveal>

      {/* Scripture Quote Section - Image Backed Two-Column */}
      <ScrollReveal>
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 animate-ken-burns">
          <Image
            src="/images/lamp-to-your-feet.jpg"
            alt="Bible"
            fill
            className="object-cover"
            sizes="100vw"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-black/85 via-black/70 to-black/50" />
        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left - Text Content */}
            <div>
              <span className="inline-block text-primary-light text-sm font-semibold uppercase tracking-widest mb-4">
                The Power of Scripture
              </span>
              <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-playfair)] text-white mb-6 leading-tight">
                A Lamp to Your Feet
              </h2>
              <p className="text-lg text-white/85 leading-relaxed mb-8">
                God&apos;s Word illuminates our path, guides our decisions, and transforms our hearts. Through daily reading, we draw closer to Him and discover His purpose for our lives.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="#plans"
                  className="inline-flex items-center justify-center gap-2 bg-white text-primary px-8 py-4 rounded-lg font-bold text-lg shadow-lg btn-interact"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                  Start Reading Today
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-primary transition-colors duration-200 btn-interact"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Request a Plan
                </Link>
              </div>
            </div>

            {/* Right - Scripture Glass Cards */}
            <div className="space-y-6">
              <div className="bg-white/[0.08] backdrop-blur-md rounded-2xl p-8 border border-white/20 animate-soft-glow">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-white/15 flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                  <h3 className="text-white font-bold text-lg font-[family-name:var(--font-playfair)]">Light for the Path</h3>
                </div>
                <blockquote>
                  <p className="text-white/90 italic text-lg leading-relaxed">
                    &ldquo;Your word is a lamp for my feet, a light on my path.&rdquo;
                  </p>
                </blockquote>
                <div className="flex items-center gap-3 mt-4">
                  <div className="w-8 h-[2px] bg-primary-light/60" />
                  <cite className="text-primary-light text-sm not-italic font-semibold">Psalm 119:105</cite>
                </div>
              </div>

              <div className="bg-white/[0.08] backdrop-blur-md rounded-2xl p-8 border border-white/20">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-white/15 flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                  <h3 className="text-white font-bold text-lg font-[family-name:var(--font-playfair)]">God-Breathed Word</h3>
                </div>
                <blockquote>
                  <p className="text-white/90 italic text-lg leading-relaxed">
                    &ldquo;All Scripture is God-breathed and is useful for teaching, rebuking,
                    correcting and training in righteousness, so that the servant of God may be
                    thoroughly equipped for every good work.&rdquo;
                  </p>
                </blockquote>
                <div className="flex items-center gap-3 mt-4">
                  <div className="w-8 h-[2px] bg-primary-light/60" />
                  <cite className="text-primary-light text-sm not-italic font-semibold">2 Timothy 3:16-17</cite>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      </ScrollReveal>

      {/* Reading Plans Section - GREEN */}
      <ScrollReveal>
      <section id="plans" className="bg-green-section py-20 relative overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <span className="inline-block text-white/60 text-sm font-semibold uppercase tracking-widest mb-3">
              365-Day Plans
            </span>
            <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-playfair)] mb-4">
              Choose Your Reading Plan
            </h2>
            <div className="w-20 h-1 bg-white/60 mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {plans.map((plan) => (
              <div
                key={plan.title}
                className="group bg-white/[0.08] backdrop-blur-sm rounded-2xl overflow-hidden border border-white/20 hover:bg-white/[0.16] hover:-translate-y-1 hover:shadow-lg hover:shadow-black/10 transition-all duration-300"
              >
                <div className="p-8 text-center">
                  <div className="w-14 h-14 bg-white/15 rounded-xl flex items-center justify-center mx-auto mb-5 animate-icon-float group-hover:bg-white/25 group-hover:scale-110 transition-all duration-300">
                    <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={plan.icon} />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold font-[family-name:var(--font-playfair)] mb-1">
                    {plan.title}
                  </h3>
                  <p className="text-primary-light text-sm font-semibold mb-4">
                    {plan.subtitle}
                  </p>
                  <p className="text-white/80 text-sm leading-relaxed">
                    {plan.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      </ScrollReveal>

      {/* How to Get Started - CREAM */}
      <ScrollReveal>
      <section className="py-24 bg-light">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <span className="inline-block text-primary text-sm font-semibold uppercase tracking-widest mb-3">
              Getting Started
            </span>
            <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-playfair)] text-dark mb-4">
              How It Works
            </h2>
            <div className="section-divider" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {steps.map((step) => (
              <div
                key={step.number}
                className="group bg-white rounded-2xl p-8 text-center shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-primary/15 hover:-translate-y-1"
              >
                <span className="inline-block text-primary/20 text-5xl font-bold font-[family-name:var(--font-playfair)] mb-3">
                  {step.number}
                </span>
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-5 animate-icon-float group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-7 h-7 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={step.icon} />
                  </svg>
                </div>
                <h3 className="text-lg font-bold font-[family-name:var(--font-playfair)] text-dark mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-warm text-sm leading-relaxed">
                  {step.description}
                </p>
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
          <span className="inline-block text-white/70 text-sm font-semibold uppercase tracking-widest mb-4">Begin Your Journey</span>
          <h2 className="text-4xl md:text-5xl font-bold font-[family-name:var(--font-playfair)] mb-6 leading-tight">Start Reading Today</h2>
          <p className="text-xl mb-10 text-white/90 max-w-2xl mx-auto leading-relaxed">
            Contact the church office to receive a printed copy of any reading plan, or visit us on Sunday to pick one up. We&apos;d love to read alongside you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="mailto:centralbaptist2018@gmail.com" className="inline-flex items-center justify-center gap-2 bg-white text-primary px-10 py-4 rounded-lg font-bold text-lg shadow-lg btn-interact">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
              Request a Reading Plan
            </a>
            <Link href="/contact" className="inline-flex items-center justify-center gap-2 border-2 border-white text-white px-10 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-primary transition-colors duration-200 btn-interact">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
              Visit Us Sunday
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
