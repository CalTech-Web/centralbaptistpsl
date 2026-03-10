import Image from "next/image";

interface PageHeroProps {
  title: string;
  subtitle?: string;
}

export default function PageHero({ title, subtitle }: PageHeroProps) {
  return (
    <section className="relative min-h-[40vh] flex items-center justify-center">
      <Image
        src="/images/central-church-aerial.jpg"
        alt=""
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-br from-primary-dark/90 via-primary/80 to-primary-dark/90" />
      <div className="relative max-w-7xl mx-auto px-4 py-20 text-center text-white">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-[family-name:var(--font-playfair)] mb-4 animate-fade-in-up">
          {title}
        </h1>
        {subtitle && (
          <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto animate-fade-in-up-delay">
            {subtitle}
          </p>
        )}
        <div className="section-divider mt-6 animate-fade-in-up-delay-2" />
      </div>
    </section>
  );
}
