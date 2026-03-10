import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-primary-dark text-white">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Church Info */}
          <div>
            <h3 className="text-xl font-bold mb-4 font-[family-name:var(--font-playfair)]">
              Central Baptist Church
            </h3>
            <p className="text-secondary text-sm italic mb-4">
              &ldquo;One Family, Called by Christ, Sent to Serve&rdquo;
            </p>
            <p className="text-gray-300 text-sm leading-relaxed">
              A multi-ethnic, traditional church with contemporary values. We
              sing hymns and have a great time worshiping God together.
            </p>
          </div>

          {/* Service Times */}
          <div>
            <h3 className="text-lg font-bold mb-4 font-[family-name:var(--font-playfair)]">
              Service Times
            </h3>
            <div className="space-y-3 text-sm text-gray-300">
              <div>
                <p className="font-semibold text-secondary">Sunday</p>
                <p>9:30 AM - Sunday School</p>
                <p>11:00 AM - Morning Worship</p>
                <p>6:00 PM - Evening Worship</p>
              </div>
              <div>
                <p className="font-semibold text-secondary">Wednesday</p>
                <p>6:30 PM - Prayer Meeting</p>
                <p>7:00 PM - Bible Studies</p>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4 font-[family-name:var(--font-playfair)]">
              Quick Links
            </h3>
            <ul className="space-y-2 text-sm text-gray-300">
              {[
                { href: "/our-story", label: "Our Story" },
                { href: "/our-ministries", label: "Our Ministries" },
                { href: "/community-involvement", label: "Community Involvement" },
                { href: "/mission-trips", label: "Mission Trips" },
                { href: "/bible-reading", label: "Bible Reading" },
                { href: "/contact", label: "Contact Us" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="hover:text-secondary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-4 font-[family-name:var(--font-playfair)]">
              Contact Info
            </h3>
            <div className="space-y-3 text-sm text-gray-300">
              <div className="flex items-start space-x-3">
                <svg
                  className="w-5 h-5 text-secondary mt-0.5 shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <span>
                  202 SW Tulip Blvd
                  <br />
                  Port St. Lucie, FL 34953
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <svg
                  className="w-5 h-5 text-secondary shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <a
                  href="tel:7722374907"
                  className="hover:text-secondary transition-colors"
                >
                  (772) 237-4907
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <svg
                  className="w-5 h-5 text-secondary shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <a
                  href="mailto:centralbaptist2018@gmail.com"
                  className="hover:text-secondary transition-colors"
                >
                  centralbaptist2018@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-primary-light text-center text-sm text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} Central Baptist Church of Port St.
            Lucie. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
