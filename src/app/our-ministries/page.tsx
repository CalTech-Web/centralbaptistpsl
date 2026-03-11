import PageHero from "@/components/PageHero";
import Image from "next/image";

export const metadata = {
  title: "Our Ministries - Central Baptist Church",
  description:
    "Explore the ministries at Central Baptist Church of Port St. Lucie - Children's, Youth, Sunday School, Music, and more.",
};

const ministries = [
  {
    title: "Children's Ministries",
    description:
      "We provide a safe, fun, and nurturing environment for children to learn about God's love. Our programs include nursery care for infants and toddlers, as well as kids' worship services during Sunday morning worship.",
    icon: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z",
  },
  {
    title: "Adventure Kids Bible Study",
    description:
      "Our Adventure Kids program is designed for children in grades K-5. Through engaging Bible lessons, activities, and fellowship, kids discover the adventure of following Jesus. Meets Wednesday evenings at 7:00 PM.",
    icon: "M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z",
  },
  {
    title: "Youth Groups",
    description:
      "Our youth ministry offers Bible study programs for middle and high school students (grades 6-12). We create a welcoming space where teens can grow in their faith, build lasting friendships, and serve their community.",
    icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z",
  },
  {
    title: "Sunday School",
    description:
      "We offer Sunday School classes for all age groups every Sunday at 9:30 AM. Our classes provide in-depth Bible study and fellowship in a small group setting, helping members grow deeper in their understanding of God's Word.",
    icon: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253",
  },
  {
    title: "Music Programs",
    description:
      "Music is a vital part of our worship at Central Baptist. We sing hymns and have a great time worshiping God together through traditional and contemporary music that glorifies His name.",
    icon: "M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3",
  },
  {
    title: "Women's Ministry",
    description:
      "Our Women's Ministry provides opportunities for women to grow in faith, build meaningful friendships, and support one another through Bible studies, fellowship events, and local mission work.",
    icon: "M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z",
  },
  {
    title: "Men's Ministry",
    description:
      "Our Men's Ministry brings men together for fellowship, accountability, and service. Through Bible studies and community outreach, men are encouraged to grow as spiritual leaders in their homes and church.",
    icon: "M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z",
  },
  {
    title: "Adult Bible Study",
    description:
      "Join us Wednesday evenings at 7:00 PM for in-depth adult Bible study. We dive deep into Scripture together, growing in knowledge and understanding of God's Word and its application to daily life.",
    icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
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
      />

      {/* Intro with Image */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <p className="text-lg text-gray-warm leading-relaxed mb-6">
                At Central Baptist Church, we strive to be a community of faith
                banded together by our love, mission, and purpose to proclaim the
                gospel of Jesus Christ.
              </p>
              <p className="text-lg text-gray-warm leading-relaxed">
                Our ministries provide opportunities for every member to grow,
                serve, and connect in a safe and welcoming environment for people
                of all ages and backgrounds.
              </p>
            </div>
            <div className="rounded-xl overflow-hidden shadow-lg">
              <Image
                src="/images/Ministry-Collage.jpg"
                alt="Church ministries"
                width={600}
                height={400}
                className="w-full h-auto"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ministries.map((ministry) => (
              <div
                key={ministry.title}
                className="bg-light rounded-xl p-8 hover:shadow-lg transition-shadow duration-300 group"
              >
                <div className="w-14 h-14 bg-primary rounded-full flex items-center justify-center mb-5 group-hover:bg-primary-dark transition-colors duration-300">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={ministry.icon} />
                  </svg>
                </div>
                <h3 className="text-xl font-bold font-[family-name:var(--font-playfair)] text-dark mb-3">
                  {ministry.title}
                </h3>
                <p className="text-gray-warm leading-relaxed text-sm">{ministry.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary text-white text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold font-[family-name:var(--font-playfair)] mb-4">
            Want to Get Involved?
          </h2>
          <p className="text-gray-300 mb-6">
            Contact us to learn more about any of our ministries or to find the
            right fit for you and your family.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:centralbaptist2018@gmail.com"
              className="bg-white text-primary px-8 py-3 rounded font-bold hover:bg-light transition-colors"
            >
              Email Us
            </a>
            <a
              href="tel:7722374907"
              className="border-2 border-white px-8 py-3 rounded font-bold hover:bg-white hover:text-primary transition-colors"
            >
              Call (772) 237-4907
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
