import PageHero from "@/components/PageHero";

export const metadata = {
  title: "Our Story - Central Baptist Church",
  description:
    "Learn about the history of Central Baptist Church of Port St. Lucie, from our humble beginnings in 1978 to today.",
};

export default function OurStory() {
  return (
    <>
      <PageHero
        title="Our Story"
        subtitle="From six couples in a living room to a thriving church family"
      />

      {/* History Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold font-[family-name:var(--font-playfair)] text-primary-dark mb-4 text-center">
            History
          </h2>
          <div className="section-divider mb-12" />

          <div className="space-y-8 text-gray-warm leading-relaxed text-lg">
            {/* Timeline */}
            <div className="relative border-l-4 border-secondary pl-8 space-y-10">
              {[
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
              ].map((event) => (
                <div key={event.year} className="relative">
                  <div className="absolute -left-[2.85rem] top-1 w-5 h-5 bg-secondary rounded-full border-4 border-white" />
                  <span className="text-secondary font-bold text-sm tracking-wider uppercase">
                    {event.year}
                  </span>
                  <h3 className="text-xl font-bold text-primary-dark mt-1 mb-2 font-[family-name:var(--font-playfair)]">
                    {event.title}
                  </h3>
                  <p>{event.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pastor Section */}
      <section className="py-20 bg-light">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold font-[family-name:var(--font-playfair)] text-primary-dark mb-4 text-center">
            Our Pastor
          </h2>
          <div className="section-divider mb-12" />

          <div className="bg-white rounded-lg shadow-sm p-10 text-center">
            <div className="w-32 h-32 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
              <svg
                className="w-16 h-16 text-secondary"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
            </div>
            <h3 className="text-2xl font-bold font-[family-name:var(--font-playfair)] text-primary-dark mb-1">
              Dr. Nick Manzie
            </h3>
            <p className="text-secondary font-semibold italic mb-6">
              &ldquo;Brother Nick&rdquo; — Senior Pastor since 2003
            </p>
            <p className="text-gray-warm leading-relaxed text-lg max-w-2xl mx-auto mb-4">
              Dr. Nick Manzie has faithfully led Central Baptist Church since
              2003. He began his ministry as a Chaplain with Christian
              Motorsports International and has since dedicated his life to
              serving the Port St. Lucie community.
            </p>
            <div className="mt-6 space-y-1 text-sm text-gray-warm">
              <p>
                <span className="font-semibold">Email:</span>{" "}
                <a
                  href="mailto:nickmanzie@centralbaptistpsl.com"
                  className="text-primary hover:text-secondary transition-colors"
                >
                  nickmanzie@centralbaptistpsl.com
                </a>
              </p>
              <p>
                <span className="font-semibold">Phone:</span>{" "}
                <a
                  href="tel:7722492463"
                  className="text-primary hover:text-secondary transition-colors"
                >
                  (772) 249-2463
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Staff Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold font-[family-name:var(--font-playfair)] text-primary-dark mb-4 text-center">
            Our Staff
          </h2>
          <div className="section-divider mb-12" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-light rounded-lg p-8 text-center">
              <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-10 h-10 text-secondary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold font-[family-name:var(--font-playfair)] text-primary-dark mb-1">
                Pastor Don Reid
              </h3>
              <p className="text-secondary text-sm font-semibold mb-3">
                Associate Pastor / Emergency Contact
              </p>
              <p className="text-sm text-gray-warm">
                <a
                  href="mailto:donreid@centralbaptistpsl.com"
                  className="hover:text-secondary transition-colors"
                >
                  donreid@centralbaptistpsl.com
                </a>
              </p>
              <p className="text-sm text-gray-warm">
                <a
                  href="tel:7728123947"
                  className="hover:text-secondary transition-colors"
                >
                  (772) 812-3947
                </a>
              </p>
            </div>

            <div className="bg-light rounded-lg p-8 text-center">
              <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-10 h-10 text-secondary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold font-[family-name:var(--font-playfair)] text-primary-dark mb-1">
                Irene Conley
              </h3>
              <p className="text-secondary text-sm font-semibold mb-3">
                Prayer Concerns Coordinator
              </p>
              <p className="text-sm text-gray-warm">
                <a
                  href="tel:7728739446"
                  className="hover:text-secondary transition-colors"
                >
                  (772) 873-9446
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
