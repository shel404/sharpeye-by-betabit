"use client";

import { motion } from "framer-motion";
import VideoPlayer from "@/components/ui/VideoPlayer";

export default function ShowreelSection() {
  return (
    <section className="py-20 px-6" id="showreel">
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}>
          <motion.h2
            className="font-[family-name:var(--font-syne)] text-[80px] font-bold text-white mb-4 tracking-[-0.05em] leading-[1em]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}>
            <span className="bg-[linear-gradient(132deg,#ffffff_11.68%,rgba(0,0,0,0)_100%)] bg-clip-text text-transparent">
              SHOWREEL
            </span>
          </motion.h2>
        </motion.div>

        {/* Video Player Container */}
        <motion.div
          className="relative rounded-[104px] overflow-hidden bg-[rgba(255,255,255,0.16)] backdrop-blur-[5px] p-0"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.02 }}>
          <div className="aspect-video overflow-hidden relative group cursor-pointer">
            <VideoPlayer
              src="/videos/showreel.mp4"
              poster="/images/hero-image.jpg"
              title="SharpEye Films Showreel 2024"
            />

            {/* Play Button Overlay */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="bg-white/10 backdrop-blur-md rounded-full px-8 py-4 border border-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="font-[family-name:var(--font-syne)] font-bold text-white tracking-wider">
                  PLAY SHOWREEL
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
