import PageHero from "@/components/PageHero";
import Link from "next/link";

export const metadata = {
  title: "Community Involvement - Central Baptist Church",
  description:
    "Central Baptist Church is dedicated to providing strong community involvement through its various ministries in Port St. Lucie, FL.",
};

export default function CommunityInvolvement() {
  return (
    <>
      <PageHero
        title="Community Involvement"
        subtitle="Dedicated to serving our community through love and action"
      />

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-lg text-gray-warm leading-relaxed">
              Central Baptist Church in Port St. Lucie, Florida is dedicated to
              providing strong community involvement through its various
              ministries. We provide meaningful opportunities for our members to
              give back to their communities through donations and volunteerism.
            </p>
          </div>

          <div className="space-y-12">
            <div className="bg-light rounded-lg p-10">
              <h2 className="text-2xl font-bold font-[family-name:var(--font-playfair)] text-primary-dark mb-4">
                Our Community Mission
              </h2>
              <div className="section-divider !mx-0 mb-6" />
              <p className="text-gray-warm leading-relaxed mb-4">
                We are a community of faith who are banded together by our love,
                mission and purpose, to proclaim the gospel of Jesus Christ. Our
                church provides a wide range of programs and activities for
                children, youth, and adults that extend beyond our church walls
                and into the community.
              </p>
              <p className="text-gray-warm leading-relaxed">
                Through our various ministries, we reach out to those in need,
                providing support, encouragement, and practical help to families
                and individuals throughout the Port St. Lucie area and beyond.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-light rounded-lg p-8">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mb-4">
                  <svg
                    className="w-6 h-6 text-secondary"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold font-[family-name:var(--font-playfair)] text-primary-dark mb-3">
                  Men&apos;s & Women&apos;s Groups
                </h3>
                <p className="text-gray-warm text-sm leading-relaxed">
                  Our men&apos;s and women&apos;s ministry groups focus on local
                  mission work, building relationships within the community and
                  providing support to those in need through organized outreach
                  efforts.
                </p>
              </div>

              <div className="bg-light rounded-lg p-8">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mb-4">
                  <svg
                    className="w-6 h-6 text-secondary"
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
                <h3 className="text-xl font-bold font-[family-name:var(--font-playfair)] text-primary-dark mb-3">
                  Volunteerism & Donations
                </h3>
                <p className="text-gray-warm text-sm leading-relaxed">
                  We provide meaningful opportunities for our members to give
                  back through both their time and resources, supporting local
                  families, individuals, and organizations in the Port St. Lucie
                  community.
                </p>
              </div>

              <div className="bg-light rounded-lg p-8">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mb-4">
                  <svg
                    className="w-6 h-6 text-secondary"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold font-[family-name:var(--font-playfair)] text-primary-dark mb-3">
                  Mission Trips
                </h3>
                <p className="text-gray-warm text-sm leading-relaxed">
                  Since 2001, our church has completed mission trips to 17
                  locations across the Southeast United States, helping
                  communities recover from disasters and sharing God&apos;s love.
                </p>
              </div>

              <div className="bg-light rounded-lg p-8">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mb-4">
                  <svg
                    className="w-6 h-6 text-secondary"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold font-[family-name:var(--font-playfair)] text-primary-dark mb-3">
                  Youth & Children Programs
                </h3>
                <p className="text-gray-warm text-sm leading-relaxed">
                  Our youth outreach and children&apos;s mission programs engage
                  the next generation in community service, teaching them the
                  value of giving back and serving others.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-accent text-white text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold font-[family-name:var(--font-playfair)] mb-4">
            Get Involved Today
          </h2>
          <p className="text-gray-200 mb-8">
            There are many ways to serve at Central Baptist Church. Join us and
            make a difference in our community.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-accent px-8 py-3 rounded font-bold hover:bg-gray-100 transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </>
  );
}
