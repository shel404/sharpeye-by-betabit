"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";

// Dynamically import the Framer brand logos component
const BrandLogos = dynamic(
  () => import("../../../framer/brand-logos.jsx").then((mod) => mod.default),
  {
    ssr: false,
    loading: () => (
      <div className="w-[172px] h-[88px] bg-gray-800 animate-pulse rounded" />
    ),
  }
);

// Sample brand logos - you can replace these with actual brand logos
const brandLogos = [
  {
    src: "https://framerusercontent.com/images/gk7QZqkTE0Z8JusfQWLflnjHLdU.svg",
    alt: "Brand Partner 1",
  },
  {
    src: "https://framerusercontent.com/images/gk7QZqkTE0Z8JusfQWLflnjHLdU.svg",
    alt: "Brand Partner 2",
  },
  {
    src: "https://framerusercontent.com/images/gk7QZqkTE0Z8JusfQWLflnjHLdU.svg",
    alt: "Brand Partner 3",
  },
  {
    src: "https://framerusercontent.com/images/gk7QZqkTE0Z8JusfQWLflnjHLdU.svg",
    alt: "Brand Partner 4",
  },
  {
    src: "https://framerusercontent.com/images/gk7QZqkTE0Z8JusfQWLflnjHLdU.svg",
    alt: "Brand Partner 5",
  },
];

export default function BrandPartnersSection() {
  // Duplicate logos for seamless loop
  const duplicatedLogos = [...brandLogos, ...brandLogos, ...brandLogos];

  return (
    <section className="py-20 px-6 bg-[#0d0d0d]">
      {/* Centered Wrapper for Entire Section */}
      <div className="w-full flex flex-col items-center justify-center min-h-[400px]">
        <div className="w-full max-w-7xl mx-auto flex flex-col items-center">
          {/* Section Title - Smaller */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}>
            <h2 className="font-[family-name:var(--font-syne)] text-2xl md:text-3xl lg:text-4xl font-bold text-white text-center tracking-[-0.02em] leading-[1.1em]">
              Standing Tall with Our{" "}
              <span className="bg-[linear-gradient(132deg,#ffffff_11.68%,rgba(0,0,0,0)_100%)] bg-clip-text text-transparent">
                Esteemed Brand Partners
              </span>
            </h2>
          </motion.div>

          {/* Spacer for Gap */}
          <div className="h-12"></div>

          {/* Brand Logos Carousel Container - Wider */}
          <motion.div
            className="relative flex justify-center items-center w-full"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}>
            {/* Rounded Container with Border - Much Wider */}
            <div className="relative rounded-[60px] border border-white/30 bg-transparent backdrop-blur-sm p-8 overflow-hidden w-full max-w-6xl">
              {/* Seamless Scrolling Carousel */}
              <div className="flex items-center justify-center">
                <motion.div
                  className="flex items-center gap-8 whitespace-nowrap"
                  animate={{
                    x: [0, -172 * brandLogos.length - 32 * brandLogos.length], // Move by width of logos + gaps
                  }}
                  transition={{
                    x: {
                      repeat: Infinity,
                      repeatType: "loop",
                      duration: 20, // Adjust speed here
                      ease: "linear",
                    },
                  }}>
                  {duplicatedLogos.map((logo, index) => (
                    <div key={index} className="flex-shrink-0">
                      <BrandLogos
                        variant="Horizontal"
                        image={{
                          src: logo.src,
                          alt: logo.alt,
                        }}
                      />
                    </div>
                  ))}
                </motion.div>
              </div>

              {/* Fade edges for seamless effect */}
              <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-[#0d0d0d] to-transparent pointer-events-none z-10" />
              <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-[#0d0d0d] to-transparent pointer-events-none z-10" />
            </div>

            {/* Background Glow Effect */}
            <div className="absolute inset-0 rounded-[60px] bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-50 pointer-events-none" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
