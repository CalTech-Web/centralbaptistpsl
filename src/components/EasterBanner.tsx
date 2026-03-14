// EASTER SEASON — remove after April 12, 2026

export default function EasterBanner() {
  return (
    <div className="easter-banner relative z-40 py-2.5 px-4 text-center">
      <div className="easter-accent-line mb-2.5" />

      <p className="text-sm md:text-base font-[family-name:var(--font-playfair)] text-[#4E7C5B] tracking-wide">
        <span className="easter-cross" aria-hidden="true" />
        <span className="font-semibold text-[#3A6147]">He is Risen!</span>
        {" "}
        <span className="text-[#5a5a5a]">
          Join us Easter Sunday &mdash; April 5
        </span>
      </p>

      <div className="easter-accent-line mt-2.5" />
    </div>
  );
}
