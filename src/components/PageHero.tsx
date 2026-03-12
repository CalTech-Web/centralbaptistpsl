import Image from "next/image";

interface PageHeroProps {
  title: string;
  subtitle?: string;
}

export default function PageHero({ title, subtitle }: PageHeroProps) {
  return (
    <section className="relative h-[400px] flex items-center justify-center">
      <Image
        src="/images/central-church-aerial.jpg"
        alt=""
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary/75 to-primary/90" />
      <div className="relative max-w-7xl mx-auto px-4 pt-24 pb-10 text-center text-white">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-[family-name:var(--font-playfair)] mb-4 animate-fade-in-up">
          {title}
        </h1>
        {subtitle && (
          <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto animate-fade-in-up-delay">
            {subtitle}
          </p>
        )}
        <div className="section-divider mt-6 animate-fade-in-up-delay-2" />
      </div>
    </section>
  );
}
