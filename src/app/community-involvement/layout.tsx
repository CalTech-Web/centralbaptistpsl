import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Community Involvement",
  description:
    "Central Baptist Church serves the Port St. Lucie community through food giveaways, outreach programs, and partnerships across 17 locations since 2001.",
};

export default function CommunityLayout({ children }: { children: React.ReactNode }) {
  return children;
}
