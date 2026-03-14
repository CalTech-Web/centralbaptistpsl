// EASTER SEASON — remove after April 12, 2026

const activities = [
  {
    label: "7:00 AM — Sunrise Service",
    color: "bg-amber-100 text-amber-800",
    dot: "bg-amber-500",
    calendarUrl:
      "https://calendar.google.com/calendar/event?action=TEMPLATE&text=Easter+Sunrise+Service+-+Central+Baptist+Church&dates=20260405T070000/20260405T080000&ctz=America/New_York&location=Central+Baptist+Church%2C+202+SW+Tulip+Blvd%2C+Port+St.+Lucie%2C+FL+34953&details=Easter+Sunday+Sunrise+Service+at+Central+Baptist+Church",
  },
  {
    label: "9:30 AM — Sunday School",
    color: "bg-sky-100 text-sky-800",
    dot: "bg-sky-500",
    calendarUrl:
      "https://calendar.google.com/calendar/event?action=TEMPLATE&text=Easter+Sunday+School+-+Central+Baptist+Church&dates=20260405T093000/20260405T103000&ctz=America/New_York&location=Central+Baptist+Church%2C+202+SW+Tulip+Blvd%2C+Port+St.+Lucie%2C+FL+34953&details=Easter+Sunday+School+-+All+Ages+Welcome",
  },
  {
    label: "11:00 AM — Morning Worship",
    color: "bg-emerald-100 text-emerald-800",
    dot: "bg-emerald-500",
    calendarUrl:
      "https://calendar.google.com/calendar/event?action=TEMPLATE&text=Easter+Morning+Worship+-+Central+Baptist+Church&dates=20260405T110000/20260405T120000&ctz=America/New_York&location=Central+Baptist+Church%2C+202+SW+Tulip+Blvd%2C+Port+St.+Lucie%2C+FL+34953&details=Easter+Sunday+Morning+Worship+Service",
  },
];

export default function EasterSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-[#f8f4ff] via-[#fdf8f0] to-[#f0f7f0] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          {/* LEFT — Content */}
          <div>
            <span className="inline-block text-[#7B6BF5] text-sm font-semibold uppercase tracking-widest mb-4">
              April 5, 2026
            </span>
            <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-playfair)] text-dark mb-3">
              Celebrate Easter With Us
            </h2>
            <p className="text-lg text-[#9B6BF5] font-semibold mb-4">
              Rejoice in the Risen King
            </p>
            <div className="section-divider !mx-0 mb-8" />

            <blockquote className="border-l-4 border-[#C855D4] pl-6 ml-1 mb-10">
              <p className="text-gray-warm italic text-lg leading-relaxed font-[family-name:var(--font-playfair)]">
                &ldquo;He is not here; he has risen, just as he said. Come and
                see the place where he lay.&rdquo;
              </p>
              <cite className="text-[#9B6BF5] text-sm not-italic font-bold block mt-3">
                — Matthew 28:6
              </cite>
            </blockquote>

            {/* Activity Pills */}
            <p className="text-sm text-gray-warm font-semibold uppercase tracking-wider mb-5">
              Easter Sunday Schedule
            </p>
            <div className="flex flex-wrap gap-3">
              {activities.map((activity) => (
                <a
                  key={activity.label}
                  href={activity.calendarUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Add to Google Calendar"
                  className={`inline-flex items-center gap-2.5 px-4 py-2.5 rounded-full ${activity.color} font-semibold text-sm shadow-sm hover:shadow-md hover:scale-[1.03] transition-all duration-200 cursor-pointer`}
                >
                  <span className="relative flex h-2.5 w-2.5">
                    <span
                      className={`animate-pulse-dot absolute inline-flex h-full w-full rounded-full ${activity.dot} opacity-75`}
                    />
                    <span
                      className={`relative inline-flex rounded-full h-2.5 w-2.5 ${activity.dot}`}
                    />
                  </span>
                  {activity.label}
                  <svg
                    className="w-3.5 h-3.5 opacity-50"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* RIGHT — Visual */}
          <div className="relative flex items-center justify-center min-h-[340px] md:min-h-[420px]">
            {/* Yellow spotlight */}
            <div className="absolute top-1/2 left-1/2 -translate-x-[60%] -translate-y-[40%] w-[300px] h-[300px] md:w-[400px] md:h-[400px] bg-[#f5e6a0]/40 rounded-full blur-[80px] pointer-events-none" />
            {/* Purple spotlight */}
            <div className="absolute top-1/2 left-1/2 -translate-x-[30%] -translate-y-[60%] w-[280px] h-[280px] md:w-[360px] md:h-[360px] bg-[#d4b4f5]/35 rounded-full blur-[80px] pointer-events-none" />

            {/* HE IS RISEN text */}
            <div className="relative select-none text-center">
              <h3
                className="text-7xl md:text-8xl lg:text-9xl font-bold font-[family-name:var(--font-playfair)] leading-[0.9] tracking-tight easter-gradient-text"
                aria-label="He is Risen"
              >
                HE IS
                <br />
                RISEN
              </h3>

              {/* EASTER SUNDAY SERVICE arc — small, tight arc at upper-right of "IS" */}
              <div className="absolute -top-[10px] right-[5px] md:-top-[14px] md:right-[0px] w-[140px] h-[180px] md:w-[160px] md:h-[200px] hazard-flash pointer-events-none">
                <svg
                  viewBox="0 0 140 180"
                  className="w-full h-full overflow-visible"
                  aria-label="Easter Sunday Service"
                >
                  <defs>
                    <path
                      id="easterArc"
                      d="M 45,20 A 65,65 0 0,1 45,160"
                      fill="none"
                    />
                  </defs>
                  <text
                    className="fill-[#7B6BF5]"
                    fontSize="10.5"
                    fontWeight="500"
                    letterSpacing="3.5"
                    fontFamily="serif"
                  >
                    <textPath href="#easterArc" startOffset="0">
                      EASTER SUNDAY SERVICE
                    </textPath>
                  </text>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
