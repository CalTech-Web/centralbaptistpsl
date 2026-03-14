import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <h3 className="text-xl font-bold mb-4 font-[family-name:var(--font-playfair)]">
              Central Baptist Church
            </h3>
            <p className="text-white/80 text-sm italic mb-4">
              &ldquo;One Family, Called by Christ, Sent to Serve&rdquo;
            </p>
            {/* EASTER SEASON — remove after April 12, 2026 */}
            <p className="text-white/60 text-xs italic mb-5">
              ✝ Celebrating the Resurrection of Christ &mdash; Easter 2026
            </p>
            <p className="text-white/75 text-sm leading-relaxed mb-6">
              A multi-ethnic, traditional church with contemporary values
              serving the Port St. Lucie community since 1978.
            </p>
            <div className="flex gap-3">
              <a
                href="https://www.youtube.com/channel/UCPj0sGrj03Dymk25ABXXpIQ"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
                aria-label="YouTube"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0C.488 3.45.029 5.804 0 12c.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0C23.512 20.55 23.971 18.196 24 12c-.029-6.185-.484-8.549-4.385-8.816zM9 16V8l8 4-8 4z" />
                </svg>
              </a>
              <a
                href="https://www.instagram.com/centralbaptistofpsl/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
                aria-label="Instagram"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </a>
              <a
                href="https://twitter.com/CentralPSL"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
                aria-label="Twitter"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4 font-[family-name:var(--font-playfair)]">
              Service Times
            </h3>
            <div className="space-y-3 text-sm text-white/75">
              <div>
                <p className="font-semibold text-white">Sunday</p>
                <p>9:30 AM - Sunday School</p>
                <p>11:00 AM - Morning Worship</p>
                <p>6:00 PM - Evening Worship</p>
              </div>
              <div>
                <p className="font-semibold text-white">Wednesday</p>
                <p>6:30 PM - Prayer Meeting</p>
                <p>7:00 PM - Bible Studies</p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4 font-[family-name:var(--font-playfair)]">
              Quick Links
            </h3>
            <ul className="space-y-2 text-sm text-white/75">
              {[
                { href: "/our-story", label: "Our Story" },
                { href: "/our-ministries", label: "Our Ministries" },
                { href: "/community-involvement", label: "Community" },
                { href: "/mission-trips", label: "Mission Trips" },
                { href: "/bible-reading", label: "Bible Reading" },
                { href: "/contact", label: "Contact Us" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4 font-[family-name:var(--font-playfair)]">
              Contact Info
            </h3>
            <div className="space-y-3 text-sm text-white/75">
              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 text-white/80 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>202 SW Tulip Blvd<br />Port St. Lucie, FL 34953</span>
              </div>
              <div className="flex items-center gap-3">
                <svg className="w-5 h-5 text-white/80 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a href="tel:7722374907" className="hover:text-white transition-colors">(772) 237-4907</a>
              </div>
              <div className="flex items-center gap-3">
                <svg className="w-5 h-5 text-white/80 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:centralbaptist2018@gmail.com" className="hover:text-white transition-colors">centralbaptist2018@gmail.com</a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/20 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-white/60">
          <p>&copy; {new Date().getFullYear()} Central Baptist Church of Port St. Lucie. All rights reserved.</p>
          <span>
            Built by{" "}
            <a
              href="https://caltechweb.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors underline"
            >
              CalTech Web
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}
