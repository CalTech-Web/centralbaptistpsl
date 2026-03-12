"use client";

import Image from "next/image";

const images = [
  { src: "/images/slider/church-bus.jpg", alt: "Church Bus Ministry" },
  { src: "/images/slider/food-giveaway.jpg", alt: "Food Giveaway" },
  { src: "/images/slider/unity-sunday.jpg", alt: "Unity Sunday" },
  { src: "/images/slider/easter-eggstravaganza.jpg", alt: "Easter Eggstravaganza" },
  { src: "/images/slider/easter-sunday.jpg", alt: "Easter Sunday" },
  { src: "/images/slider/israel-trip.jpg", alt: "Israel Trip" },
  { src: "/images/slider/adult-bible-study.jpg", alt: "Adult Bible Study" },
  { src: "/images/slider/god-creator.jpg", alt: "God is the Creator" },
  { src: "/images/slider/promises.jpg", alt: "Promises" },
  { src: "/images/slider/wisdom-from-god.jpg", alt: "Wisdom from God" },
  { src: "/images/slider/adult-sunday-school.jpg", alt: "Adult Sunday School" },
  { src: "/images/slider/nursery.jpg", alt: "Nursery" },
  { src: "/images/slider/revelation.jpg", alt: "Revelation" },
  { src: "/images/slider/youtube.jpg", alt: "Watch on YouTube" },
];

// Duplicate the array so the loop is seamless
const doubledImages = [...images, ...images];

export default function ImageSlider() {
  return (
    <section className="relative overflow-hidden bg-dark py-4">
      <div className="slider-track flex gap-4">
        {doubledImages.map((img, i) => (
          <div
            key={`${img.src}-${i}`}
            className="flex-shrink-0 w-[300px] h-[200px] md:w-[400px] md:h-[260px] relative rounded-lg overflow-hidden shadow-lg"
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              className="object-cover hover:scale-105 transition-transform duration-500"
              sizes="(max-width: 768px) 300px, 400px"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
