import Link from "next/link";

export default function NotFound() {
  return (
    <section className="min-h-[70vh] flex items-center justify-center bg-light">
      <div className="max-w-lg mx-auto px-4 text-center">
        <h1 className="text-8xl font-bold font-[family-name:var(--font-playfair)] text-primary mb-4">
          404
        </h1>
        <h2 className="text-2xl md:text-3xl font-bold font-[family-name:var(--font-playfair)] text-dark mb-4">
          Page Not Found
        </h2>
        <p className="text-gray-warm text-lg leading-relaxed mb-8">
          Sorry, the page you&apos;re looking for doesn&apos;t exist or has been
          moved. Let us help you find your way.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 bg-primary text-white px-8 py-3 rounded-lg font-bold shadow-md hover:bg-primary-dark transition-colors btn-interact"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
            Go Home
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 border-2 border-primary text-primary px-8 py-3 rounded-lg font-bold hover:bg-primary hover:text-white transition-colors btn-interact"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}
