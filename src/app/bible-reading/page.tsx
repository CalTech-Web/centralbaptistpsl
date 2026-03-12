import Link from "next/link";
import Image from "next/image";
import PageHero from "@/components/PageHero";

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
    anim: "animate-icon-float",
  },
  {
    title: "Chronological",
    subtitle: "Events in Historical Order",
    description:
      "Experience the Bible as an unfolding story. Events, prophets, and kings are presented in the order they occurred historically, revealing how it all connects.",
    icon: "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z",
    anim: "animate-icon-bounce",
  },
  {
    title: "Old & New Testament",
    subtitle: "Daily Balanced Reading",
    description:
      "Alternate between the Old and New Testaments each day for a balanced reading. See how the Old Testament points to and is fulfilled in the New.",
    icon: "M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z",
    anim: "animate-icon-pulse",
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
        image="/images/slider/adult-bible-study.jpg"
      />

      {/* Introduction Section - WHITE */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
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
                className="inline-block bg-primary text-white px-6 py-3 rounded font-bold hover:bg-primary-dark transition-colors"
              >
                Explore the Plans
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-light rounded-xl p-6 border border-gray-100 flex flex-col items-center text-center hover:shadow-lg transition-all duration-300">
                <svg className="w-10 h-10 text-primary mb-3 animate-icon-float" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
                <span className="text-sm font-bold text-dark">3 Reading Plans</span>
                <span className="text-xs text-gray-warm mt-1">Choose your pace</span>
              </div>
              <div className="bg-light rounded-xl p-6 border border-gray-100 flex flex-col items-center text-center hover:shadow-lg transition-all duration-300">
                <svg className="w-10 h-10 text-primary mb-3 animate-icon-bounce" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span className="text-sm font-bold text-dark">365 Days</span>
                <span className="text-xs text-gray-warm mt-1">Daily readings</span>
              </div>
              <div className="bg-light rounded-xl p-6 border border-gray-100 flex flex-col items-center text-center hover:shadow-lg transition-all duration-300">
                <svg className="w-10 h-10 text-primary mb-3 animate-icon-pulse" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                </svg>
                <span className="text-sm font-bold text-dark">Old &amp; New Testament</span>
                <span className="text-xs text-gray-warm mt-1">Cover to cover</span>
              </div>
              <div className="bg-light rounded-xl p-6 border border-gray-100 flex flex-col items-center text-center hover:shadow-lg transition-all duration-300">
                <svg className="w-10 h-10 text-primary mb-3 animate-icon-float" style={{ animationDelay: "0.5s" }} fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                <span className="text-sm font-bold text-dark">Read Together</span>
                <span className="text-xs text-gray-warm mt-1">Join our church family</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Scripture Quote Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/prayer-request.jpg"
            alt="Bible"
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4">
          <div className="max-w-2xl">
            <span className="inline-block text-primary-light text-sm font-semibold uppercase tracking-widest mb-4">
              The Power of Scripture
            </span>
            <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-playfair)] text-white mb-6 leading-tight">
              A Lamp to Your Feet
            </h2>
            <blockquote className="border-l-4 border-primary-light pl-4 mb-6">
              <p className="text-white/85 italic text-lg leading-relaxed">
                &ldquo;Your word is a lamp for my feet, a light on my path.&rdquo;
              </p>
              <cite className="text-primary-light text-sm not-italic font-semibold mt-2 block">
                Psalm 119:105
              </cite>
            </blockquote>
            <blockquote className="border-l-4 border-primary-light pl-4 mb-8">
              <p className="text-white/85 italic text-lg leading-relaxed">
                &ldquo;All Scripture is God-breathed and is useful for teaching, rebuking,
                correcting and training in righteousness, so that the servant of God may be
                thoroughly equipped for every good work.&rdquo;
              </p>
              <cite className="text-primary-light text-sm not-italic font-semibold mt-2 block">
                2 Timothy 3:16-17
              </cite>
            </blockquote>
          </div>
        </div>
      </section>

      {/* Reading Plans Section - GREEN */}
      <section id="plans" className="bg-green-section py-20 relative overflow-hidden">
        {/* Decorative background icons */}
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <svg className="absolute top-8 right-[8%] w-14 h-14 text-white/[0.06] animate-icon-float" fill="none" stroke="currentColor" strokeWidth={1} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
          </svg>
          <svg className="absolute bottom-10 left-[6%] w-10 h-10 text-white/[0.05] animate-icon-pulse" fill="currentColor" viewBox="0 0 24 24">
            <path d="M11 2h2v7h7v2h-7v11h-2V11H4V9h7z" />
          </svg>
          <svg className="absolute top-1/2 right-[3%] w-8 h-8 text-white/[0.05] animate-icon-bounce" style={{ animationDelay: "0.6s" }} fill="currentColor" viewBox="0 0 24 24">
            <path d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
          </svg>
        </div>

        <div className="relative max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <span className="inline-block text-white/70 text-sm font-semibold uppercase tracking-widest mb-3">
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
                className="group bg-white/10 rounded-2xl overflow-hidden border border-white/20 hover:bg-white/20 hover:border-white/40 hover:-translate-y-1 hover:shadow-lg hover:shadow-black/10 transition-all duration-300"
              >
                <div className="p-8 text-center">
                  <div className="w-16 h-16 bg-white/15 rounded-full flex items-center justify-center mx-auto mb-5 group-hover:bg-white/25 transition-all duration-300">
                    <svg className={`w-8 h-8 text-white ${plan.anim}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
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

      {/* How to Get Started - CREAM */}
      <section className="py-20 bg-light">
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
                className="group bg-white rounded-2xl p-8 text-center shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-primary/20 hover:-translate-y-1"
              >
                <span className="inline-block text-primary/20 text-5xl font-bold font-[family-name:var(--font-playfair)] mb-3">
                  {step.number}
                </span>
                <div className="w-14 h-14 bg-gradient-to-br from-primary to-primary-dark rounded-full flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
          <svg className="absolute bottom-8 left-[12%] w-12 h-12 text-white/[0.07] animate-icon-pulse" style={{ animationDelay: "0.5s" }} fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
          </svg>
          <svg className="absolute bottom-6 right-[12%] w-14 h-14 text-white/[0.07] animate-icon-bounce" style={{ animationDelay: "0.8s" }} fill="none" stroke="currentColor" strokeWidth={1.2} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
          </svg>
        </div>

        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-playfair)] mb-6">
            Start Reading Today
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Contact the church office to receive a printed copy of any reading plan,
            or visit us on Sunday to pick one up. We&apos;d love to read alongside you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:centralbaptist2018@gmail.com"
              className="inline-flex items-center justify-center gap-2 bg-white text-primary px-8 py-4 rounded font-bold text-lg hover:bg-light transition-colors duration-200"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Request a Reading Plan
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 border-2 border-white text-white px-8 py-4 rounded font-bold text-lg hover:bg-white hover:text-primary transition-colors duration-200"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              Visit Us Sunday
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
