import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Photo gallery of Central Baptist Church of Port St. Lucie — worship services, fellowship events, youth activities, and community outreach.",
};

export default function GalleryLayout({ children }: { children: React.ReactNode }) {
  return children;
}
