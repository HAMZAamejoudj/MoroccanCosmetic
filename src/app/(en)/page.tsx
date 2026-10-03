import type { Metadata } from "next";
import { getLatestGuidePosts } from "@/lib/blog";
import { buildHomeMetadata } from "@/lib/homeMetadata";
import HomePageShell from "@/components/home/HomePageShell";

export const metadata: Metadata = buildHomeMetadata("en");

export default function Home() {
  const latestGuides = getLatestGuidePosts(3);
  return <HomePageShell locale="en" latestGuides={latestGuides} />;
}
