"use client";

import dynamic from "next/dynamic";

// Dynamically import the Framer showreel to avoid SSR issues
const FramerShowreel = dynamic(
  () =>
    import("../../../framer/section-showreel.jsx").then((mod) => mod.default),
  {
    ssr: false,
    loading: () => (
      <div className="w-full h-screen flex items-center justify-center bg-[#0d0d0d]">
        <div className="text-white text-center">
          <div className="animate-pulse text-xl">Loading Showreel...</div>
        </div>
      </div>
    ),
  }
);

export default function FramerShowreelSection() {
  return (
    <div
      className="w-full h-full framer-showreel-wrapper"
      style={{
        width: "100vw",
        height: "100vh",
        backgroundColor: "#0d0d0d",
      }}>
      <div
        className="w-full h-full flex items-center justify-center"
        style={{
          backgroundColor: "#0d0d0d",
          width: "100vw",
          height: "100vh",
        }}>
        <FramerShowreel width="100vw" height="100vh" />
      </div>
    </div>
  );
}
