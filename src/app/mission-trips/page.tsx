import PageHero from "@/components/PageHero";

export const metadata = {
  title: "Mission Trips - Central Baptist Church",
  description:
    "Central Baptist Church has completed mission trips to 17 locations since 2001, serving communities across the Southeast United States.",
};

const missionTrips = [
  { location: "Anniston, AL", trips: "Multiple trips" },
  { location: "Savannah, GA", trips: "Multiple trips" },
  { location: "Walterboro, SC", trips: "Multiple trips" },
  { location: "Hattiesburg, MS", trips: "Single trip" },
  { location: "Gastonia, NC", trips: "Single trip" },
  { location: "Augusta, GA", trips: "Single trip" },
  { location: "Vero Beach, FL", trips: "Single trip" },
  { location: "Fair Bluff, NC", trips: "Most recent (2021)" },
];

export default function MissionTrips() {
  return (
    <>
      <PageHero
        title="Mission Trips"
        subtitle="Serving communities across the Southeast since 2001"
      />

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-lg text-gray-warm leading-relaxed max-w-3xl mx-auto">
              Central Baptist Church is proud of the many mission trips and
              activities that its members have accomplished. Since 2001, we have
              completed missions in 17 locations, bringing help, hope, and the
              love of Christ to communities in need across the Southeast United
              States.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-16">
            <div className="bg-primary text-white rounded-lg p-8 text-center">
              <p className="text-4xl font-bold text-secondary mb-2">17</p>
              <p className="text-sm uppercase tracking-wider">
                Locations Served
              </p>
            </div>
            <div className="bg-primary text-white rounded-lg p-8 text-center">
              <p className="text-4xl font-bold text-secondary mb-2">20+</p>
              <p className="text-sm uppercase tracking-wider">Years of Service</p>
            </div>
            <div className="bg-primary text-white rounded-lg p-8 text-center">
              <p className="text-4xl font-bold text-secondary mb-2">6</p>
              <p className="text-sm uppercase tracking-wider">
                States Reached
              </p>
            </div>
          </div>

          {/* Mission Locations */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold font-[family-name:var(--font-playfair)] text-primary-dark mb-4 text-center">
              Mission Locations
            </h2>
            <div className="section-divider mb-10" />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {missionTrips.map((trip) => (
                <div
                  key={trip.location}
                  className="bg-light rounded-lg p-6 flex items-center space-x-4 hover:shadow-md transition-shadow"
                >
                  <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center shrink-0">
                    <svg
                      className="w-5 h-5 text-secondary"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-primary-dark">
                      {trip.location}
                    </h3>
                    <p className="text-sm text-gray-warm">{trip.trips}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Get Involved */}
          <div className="bg-primary-dark text-white rounded-lg p-10 text-center">
            <h2 className="text-2xl font-bold font-[family-name:var(--font-playfair)] mb-4">
              Join Our Next Mission
            </h2>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              We are always looking for volunteers to join us on our mission
              trips. Whether you can serve for a day or a week, your help makes
              a difference.
            </p>
            <a
              href="mailto:centralbaptist2018@gmail.com"
              className="inline-block bg-secondary text-primary-dark px-8 py-3 rounded font-bold hover:bg-secondary-light transition-colors"
            >
              Contact Us to Volunteer
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
