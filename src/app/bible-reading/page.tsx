import PageHero from "@/components/PageHero";

export const metadata = {
  title: "Bible Reading Plans - Central Baptist Church",
  description:
    "365-day Bible reading plans from Central Baptist Church - Cover to Cover, Chronological, and Old & New Testament daily plans.",
};

const plans = [
  {
    title: "Cover to Cover Bible Reading Plan",
    description:
      "This plan guides you through all 66 books of the Bible sequentially, from Genesis to Revelation. Perfect for those who want to read the Bible in its traditional order and understand the flow of Scripture as it was compiled.",
    icon: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253",
  },
  {
    title: "Chronological Bible Reading Plan",
    description:
      "This plan presents biblical events in the order they occurred historically. Experience the Bible as an unfolding story, seeing how events, prophets, and kings interrelate in their historical context.",
    icon: "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z",
  },
  {
    title: "Old and New Testament Daily Reading Plan",
    description:
      "This plan alternates between the Old and New Testaments each day, giving you a balanced daily reading from both parts of Scripture. A great way to see how the Old Testament points to and is fulfilled in the New.",
    icon: "M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z",
  },
];

export default function BibleReading() {
  return (
    <>
      <PageHero
        title="Bible Reading Plans"
        subtitle="One of the best ways to know God is to become acquainted with the full counsel of His written Word"
      />

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-lg text-gray-warm leading-relaxed">
              We offer three 365-day Bible reading plans to help you engage with
              Scripture throughout the year. Choose the plan that best fits your
              reading style and begin your journey through God&apos;s Word today.
            </p>
          </div>

          <div className="space-y-8">
            {plans.map((plan) => (
              <div
                key={plan.title}
                className="bg-light rounded-xl p-8 md:p-10 flex flex-col md:flex-row items-start gap-6 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center shrink-0">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={plan.icon} />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold font-[family-name:var(--font-playfair)] text-dark mb-3">
                    {plan.title}
                  </h3>
                  <p className="text-gray-warm leading-relaxed">{plan.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 bg-primary text-white rounded-xl p-10 text-center">
            <h2 className="text-2xl font-bold font-[family-name:var(--font-playfair)] mb-4">
              Start Reading Today
            </h2>
            <p className="text-gray-300 mb-6">
              Contact the church office to receive a printed copy of any of
              these reading plans, or visit us on Sunday to pick one up.
            </p>
            <a
              href="mailto:centralbaptist2018@gmail.com"
              className="inline-block bg-white text-primary px-8 py-3 rounded font-bold hover:bg-light transition-colors"
            >
              Request a Reading Plan
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
