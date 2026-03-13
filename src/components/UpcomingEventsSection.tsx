import Image from "next/image";
import Link from "next/link";

// Images ordered: date events → day/recurring events → YouTube last
const images = [
  { src: "/images/slider/easter-eggstravaganza.jpg", alt: "Easter Eggstravaganza", gradient: "from-pink-600/85" },
  { src: "/images/slider/easter-sunday.jpg", alt: "Easter Sunday", gradient: "from-purple-600/85" },
  { src: "/images/slider/unity-sunday.jpg", alt: "Unity Sunday", gradient: "from-blue-600/85" },
  { src: "/images/slider/israel-trip.jpg", alt: "Israel Trip", gradient: "from-amber-600/85" },
  { src: "/images/slider/food-giveaway.jpg", alt: "Food Giveaway", gradient: "from-green-600/85" },
  { src: "/images/slider/church-bus.jpg", alt: "Church Bus Ministry", gradient: "from-teal-600/85" },
  { src: "/images/slider/adult-bible-study.jpg", alt: "Adult Bible Study", gradient: "from-indigo-600/85" },
  { src: "/images/slider/god-creator.jpg", alt: "God is the Creator", gradient: "from-orange-600/85" },
  { src: "/images/slider/promises.jpg", alt: "Promises", gradient: "from-rose-600/85" },
  { src: "/images/slider/wisdom-from-god.jpg", alt: "Wisdom from God", gradient: "from-sky-600/85" },
  { src: "/images/slider/adult-sunday-school.jpg", alt: "Adult Sunday School", gradient: "from-violet-600/85" },
  { src: "/images/slider/nursery.jpg", alt: "Nursery", gradient: "from-emerald-600/85" },
  { src: "/images/slider/revelation.jpg", alt: "Revelation", gradient: "from-red-600/85" },
  { src: "/images/slider/youtube.jpg", alt: "Watch on YouTube", gradient: "from-red-600/85" },
];

const events = [
  { title: "Easter Eggstravaganza", color: "bg-pink-100 text-pink-800", dot: "bg-pink-500" },
  { title: "Easter Sunday", color: "bg-purple-100 text-purple-800", dot: "bg-purple-500" },
  { title: "Unity Sunday", color: "bg-blue-100 text-blue-800", dot: "bg-blue-500" },
  { title: "Israel Trip", color: "bg-amber-100 text-amber-800", dot: "bg-amber-500" },
  { title: "Food Giveaway", color: "bg-green-100 text-green-800", dot: "bg-green-500" },
  { title: "Church Bus", color: "bg-teal-100 text-teal-800", dot: "bg-teal-500" },
  { title: "Adult Bible Study", color: "bg-indigo-100 text-indigo-800", dot: "bg-indigo-500" },
  { title: "God is the Creator", color: "bg-orange-100 text-orange-800", dot: "bg-orange-500" },
  { title: "Promises", color: "bg-rose-100 text-rose-800", dot: "bg-rose-500" },
  { title: "Wisdom from God", color: "bg-sky-100 text-sky-800", dot: "bg-sky-500" },
  { title: "Adult Sunday School", color: "bg-violet-100 text-violet-800", dot: "bg-violet-500" },
];

const previewImages = images.slice(0, 6);

export default function UpcomingEventsSection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-playfair)] text-dark mb-2">
            Upcoming Events
          </h2>
          <p className="text-lg text-primary font-semibold mb-3">
            What&apos;s Happening at Central Baptist
          </p>
          <div className="section-divider mb-4" />
          <p className="text-gray-warm leading-relaxed max-w-2xl mx-auto">
            Join us for exciting events throughout the year! From community outreach
            and fellowship to Bible study and worship, there&apos;s always something
            meaningful happening at Central Baptist Church.
          </p>
        </div>

        {/* Event Tags */}
        <div className="flex flex-wrap justify-center gap-2.5 mb-10">
          {events.map((event) => (
            <div
              key={event.title}
              className={`inline-flex items-center gap-2 px-3.5 py-2 rounded-full ${event.color} font-semibold text-sm shadow-sm`}
            >
              <span className="relative flex h-2.5 w-2.5">
                <span
                  className={`animate-pulse-dot absolute inline-flex h-full w-full rounded-full ${event.dot} opacity-75`}
                />
                <span
                  className={`relative inline-flex rounded-full h-2.5 w-2.5 ${event.dot}`}
                />
              </span>
              {event.title}
            </div>
          ))}
        </div>

        {/* Image Grid - 3 columns, 2 rows */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-5 mb-10">
          {previewImages.map((img) => (
            <div
              key={img.src}
              className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-sm group bg-gray-100"
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-contain group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 768px) 50vw, 400px"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
              <div className={`absolute bottom-0 left-0 right-0 bg-gradient-to-t ${img.gradient} to-transparent p-3`}>
                <p className="text-white text-sm font-semibold">{img.alt}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link
            href="/events"
            className="inline-block bg-primary text-white px-8 py-3 rounded-lg font-bold hover:bg-primary-light transition-colors duration-200 btn-interact"
          >
            View All Events
          </Link>
        </div>
      </div>
    </section>
  );
}
