import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Events",
  description:
    "Upcoming events at Central Baptist Church of Port St. Lucie — Easter services, community outreach, Bible studies, and more. See what's happening and join us.",
};

export default function EventsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
