"use client";

import dynamic from "next/dynamic";

// Dynamically import the Framer hero to avoid SSR issues
const FramerHero = dynamic(
  () => import("../../../framer/hero.jsx").then((mod) => mod.default),
  {
    ssr: false,
    loading: () => (
      <section className="min-h-screen flex items-center justify-center bg-[#0d0d0d]">
        <div className="text-white text-center">
          <div className="animate-pulse">Loading...</div>
        </div>
      </section>
    ),
  }
);

export default function FramerHeroSection() {
  return (
    <div className="w-full framer-hero-wrapper" style={{ minHeight: "100vh" }}>
      <FramerHero />
    </div>
  );
}
