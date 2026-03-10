interface PageHeroProps {
  title: string;
  subtitle?: string;
}

export default function PageHero({ title, subtitle }: PageHeroProps) {
  return (
    <section className="relative bg-primary py-20 md:py-28">
      <div className="absolute inset-0 bg-gradient-to-br from-primary-dark to-primary opacity-90" />
      <div className="relative max-w-7xl mx-auto px-4 text-center text-white">
        <h1 className="text-4xl md:text-5xl font-bold font-[family-name:var(--font-playfair)] mb-4">
          {title}
        </h1>
        {subtitle && (
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
            {subtitle}
          </p>
        )}
        <div className="section-divider mt-6" />
      </div>
    </section>
  );
}
