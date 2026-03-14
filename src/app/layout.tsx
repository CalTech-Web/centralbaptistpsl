import type { Metadata } from "next";
import { Lora, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import EasterBanner from "@/components/EasterBanner"; // EASTER SEASON — remove after April 12, 2026

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://centralbaptistpsl.com"),
  title: {
    default: "Central Baptist Church | Port St. Lucie, FL",
    template: "%s | Central Baptist Church",
  },
  description:
    "Central Baptist Church of Port St. Lucie - One Family, Called by Christ, Sent to Serve. A multi-ethnic, traditional church with contemporary values. Sunday School 9:30 AM, Worship 11:00 AM.",
  keywords: [
    "Central Baptist Church",
    "Port St. Lucie church",
    "Baptist church Florida",
    "PSL church",
    "Sunday worship",
    "Bible study",
    "church near me",
  ],
  authors: [{ name: "Central Baptist Church of Port St. Lucie" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://centralbaptistpsl.com",
    siteName: "Central Baptist Church",
    title: "Central Baptist Church | Port St. Lucie, FL",
    description:
      "One Family, Called by Christ, Sent to Serve. Join us for Sunday School at 9:30 AM and Morning Worship at 11:00 AM.",
    images: [
      {
        url: "/images/hero-our-story.jpg",
        width: 1200,
        height: 630,
        alt: "Central Baptist Church of Port St. Lucie",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@CentralPSL",
    title: "Central Baptist Church | Port St. Lucie, FL",
    description:
      "One Family, Called by Christ, Sent to Serve. Join us for Sunday School at 9:30 AM and Morning Worship at 11:00 AM.",
    images: ["/images/hero-our-story.jpg"],
  },
  icons: {
    icon: "/images/Central-Logo-300x182-1.png",
    apple: "/images/Central-Logo-300x182-1.png",
  },
  other: {
    "theme-color": "#4E7C5B",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Church",
  name: "Central Baptist Church",
  alternateName: "Central Baptist Church of Port St. Lucie",
  url: "https://centralbaptistpsl.com",
  logo: "https://centralbaptistpsl.com/images/Central-Logo-300x182-1.png",
  image: "https://centralbaptistpsl.com/images/hero-our-story.jpg",
  description:
    "One Family, Called by Christ, Sent to Serve. A multi-ethnic, traditional Baptist church with contemporary values in Port St. Lucie, Florida.",
  telephone: "+1-772-237-4907",
  email: "centralbaptist2018@gmail.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "202 SW Tulip Blvd",
    addressLocality: "Port St. Lucie",
    addressRegion: "FL",
    postalCode: "34953",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 27.2678,
    longitude: -80.3585,
  },
  sameAs: [
    "https://www.youtube.com/channel/UCPj0sGrj03Dymk25ABXXpIQ",
    "https://www.instagram.com/centralbaptistofpsl/",
    "https://twitter.com/CentralPSL",
  ],
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Sunday",
      opens: "09:30",
      closes: "19:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Wednesday",
      opens: "18:30",
      closes: "20:00",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${lora.variable} ${playfair.variable} antialiased`}>
        <Navbar />
        <EasterBanner /> {/* EASTER SEASON — remove after April 12, 2026 */}
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
