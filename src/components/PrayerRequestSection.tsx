import Image from "next/image";

export default function PrayerRequestSection() {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/prayer-request.jpg"
          alt="Prayer"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black/85 via-black/70 to-primary-dark/60" />
      </div>

      <div className="relative max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left - Content */}
          <div>
            <span className="inline-block text-primary-light text-sm font-semibold uppercase tracking-widest mb-4">
              We&apos;re Here for You
            </span>
            <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-playfair)] text-white mb-6 leading-tight">
              Share Your Prayer Request
            </h2>
            <p className="text-lg text-white/80 leading-relaxed mb-8">
              We believe in the power of prayer. Whether you&apos;re facing a
              challenge, celebrating a blessing, or simply need someone to pray
              with you — our church family is here.
            </p>

            {/* Trust highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
              <div className="flex items-center gap-3 bg-white/[0.08] backdrop-blur-sm rounded-xl px-4 py-3 border border-white/10">
                <div className="w-9 h-9 rounded-full bg-primary-light/20 flex items-center justify-center shrink-0">
                  <svg
                    className="w-4.5 h-4.5 text-primary-light"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                    />
                  </svg>
                </div>
                <span className="text-white/90 text-sm font-medium">
                  Confidential
                </span>
              </div>
              <div className="flex items-center gap-3 bg-white/[0.08] backdrop-blur-sm rounded-xl px-4 py-3 border border-white/10">
                <div className="w-9 h-9 rounded-full bg-primary-light/20 flex items-center justify-center shrink-0">
                  <svg
                    className="w-4.5 h-4.5 text-primary-light"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                </div>
                <span className="text-white/90 text-sm font-medium">
                  We Pray Together
                </span>
              </div>
              <div className="flex items-center gap-3 bg-white/[0.08] backdrop-blur-sm rounded-xl px-4 py-3 border border-white/10">
                <div className="w-9 h-9 rounded-full bg-primary-light/20 flex items-center justify-center shrink-0">
                  <svg
                    className="w-4.5 h-4.5 text-primary-light"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    />
                  </svg>
                </div>
                <span className="text-white/90 text-sm font-medium">
                  Every Request Heard
                </span>
              </div>
            </div>

            <a
              href="https://forms.gle/QRk1FSUSFnjAVumv7"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-primary text-white px-8 py-4 rounded font-bold text-lg hover:bg-primary-light hover:-translate-y-0.5 hover:shadow-lg transition-all duration-200 btn-interact"
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

          {/* Right - Scripture Card */}
          <div className="relative">
            <div className="bg-white/[0.08] backdrop-blur-md rounded-2xl p-8 md:p-10 border border-white/15 shadow-2xl">
              {/* Decorative quote mark */}
              <svg
                className="w-12 h-12 text-primary-light/30 mb-4"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zM0 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151C7.546 6.068 5.983 8.789 5.983 11H10v10H0z" />
              </svg>

              <p className="text-white/90 italic text-xl md:text-2xl leading-relaxed font-[family-name:var(--font-playfair)] mb-6">
                Do not be anxious about anything, but in every situation, by
                prayer and petition, with thanksgiving, present your requests to
                God.
              </p>

              <div className="flex items-center gap-4">
                <div className="w-12 h-[2px] bg-primary-light/50" />
                <div>
                  <p className="text-primary-light font-bold text-base">
                    Philippians 4:6
                  </p>
                  <p className="text-white/50 text-sm">New International Version</p>
                </div>
              </div>

              {/* Second verse */}
              <div className="mt-8 pt-8 border-t border-white/10">
                <p className="text-white/75 italic text-base leading-relaxed font-[family-name:var(--font-playfair)] mb-4">
                  And the peace of God, which transcends all understanding, will
                  guard your hearts and your minds in Christ Jesus.
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-8 h-[2px] bg-primary-light/30" />
                  <p className="text-primary-light/70 font-semibold text-sm">
                    Philippians 4:7
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
