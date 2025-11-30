"use client";

import { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import React from "react";

// Dynamically import the Framer components
const FeaturedVideoCard = dynamic(
  () =>
    import("../../../framer/featured-video-card.jsx").then(
      (mod) => mod.default
    ),
  {
    ssr: false,
    loading: () => (
      <div className="w-[400px] h-[400px] bg-gray-800 animate-pulse rounded-[51px]" />
    ),
  }
);

const ButtonGradient = dynamic(
  () =>
    import("../../../framer/button-gradient.jsx").then((mod) => mod.default),
  {
    ssr: false,
    loading: () => (
      <div className="w-[200px] h-[50px] bg-orange-500 animate-pulse rounded-full" />
    ),
  }
);

const Cursor = dynamic(
  () => import("../../../framer/cursor.jsx").then((mod) => mod.default),
  {
    ssr: false,
  }
);

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

// Sample featured video data - replace with actual project data
const featuredVideos = [
  {
    id: 1,
    title: "GreenWaves",
    client: "Eco-Warriors",
    file: "https://framerusercontent.com/assets/kdKvBb6UyIpSR2GIP2Bq6hhmuA.mp4",
    youtubeUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
  },
  {
    id: 2,
    title: "Mystic Horizons",
    client: "MysticFilms",
    file: "https://framerusercontent.com/assets/bgV91nNB6Z3ceiDRXgcxB9r5NLg.mp4",
    youtubeUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
  },
  {
    id: 3,
    title: "Urban Pulse",
    client: "CityScape",
    file: "https://framerusercontent.com/assets/kdKvBb6UyIpSR2GIP2Bq6hhmuA.mp4",
    youtubeUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
  },
  {
    id: 4,
    title: "Digital Dreams",
    client: "TechVision",
    file: "https://framerusercontent.com/assets/bgV91nNB6Z3ceiDRXgcxB9r5NLg.mp4",
    youtubeUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
  },
  {
    id: 5,
    title: "Nature's Call",
    client: "WildLife Pro",
    file: "https://framerusercontent.com/assets/kdKvBb6UyIpSR2GIP2Bq6hhmuA.mp4",
    youtubeUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
  },
];

export default function PortfolioCarouselSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const carouselRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [showCursor, setShowCursor] = useState(false);
  const [hoveredVideo, setHoveredVideo] = useState<number | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    const carousel = carouselRef.current;

    if (!container || !carousel) return;

    // Calculate total scroll distance - smaller cards like Framer site
    const cardWidth = 420; // Smaller cards to match screenshot
    const gap = 12; // Increased gap between cards
    const totalWidth = (cardWidth + gap) * featuredVideos.length;
    const scrollDistance = totalWidth - window.innerWidth + 300; // Extra padding

    // Apply padding only to the header
    const header = headerRef.current;
    if (header) {
      gsap.set(header, { paddingLeft: "2rem", paddingRight: "2rem" });
    }

    // Create horizontal scroll animation - pin higher in viewport
    const scrollTl = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        start: "top 15%", // Pin when top of section reaches 15% from top of viewport
        end: `+=${scrollDistance * 2}`, // Double the scroll distance for slower animation
        scrub: 1.5, // Slower, more controlled scrub animation
        pin: true,
        anticipatePin: 1,
        // pinSpacing: true is default - this creates proper spacing to prevent overlap
      },
    });

    // Animate the carousel horizontally with gradual movement
    scrollTl.to(carousel, {
      x: -scrollDistance,
      ease: "none",
    });

    // Cleanup
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  // Handle mouse movement for custom cursor
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };

    if (showCursor) {
      document.addEventListener("mousemove", handleMouseMove);
    }

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, [showCursor]);

  const openYouTubeModal = (youtubeUrl: string) => {
    // Extract video ID from YouTube URL
    const videoId = youtubeUrl.split("v=")[1]?.split("&")[0];
    if (videoId) {
      // Create modal with YouTube embed
      const modal = document.createElement("div");
      modal.className =
        "fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50";
      modal.innerHTML = `
        <div class="relative w-full max-w-4xl mx-4">
          <button class="absolute -top-12 right-0 text-white text-2xl hover:text-gray-300" onclick="this.parentElement.parentElement.remove()">
            ✕
          </button>
          <div class="relative pb-[56.25%] h-0">
            <iframe 
              src="https://www.youtube.com/embed/${videoId}?autoplay=1" 
              class="absolute top-0 left-0 w-full h-full rounded-lg"
              frameborder="0" 
              allowfullscreen
              allow="autoplay; encrypted-media">
            </iframe>
          </div>
        </div>
      `;

      // Close modal on background click
      modal.addEventListener("click", (e) => {
        if (e.target === modal) {
          modal.remove();
        }
      });

      document.body.appendChild(modal);
    }
  };

  return (
    <section
      ref={containerRef}
      className="relative bg-[#0d0d0d] overflow-hidden px-8">
      {/* Section Header - Inside pinned area */}
      <div ref={headerRef} className="w-full pt-16 pb-8">
        <div className="w-full">
          <div className="flex justify-between items-center mb-0 w-full px-8">
            <motion.h2
              className="font-[family-name:var(--font-syne)] text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-[-0.02em] leading-[1.1em]"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true }}>
              Our Handpicked{" "}
              <span className="bg-[linear-gradient(132deg,#ffffff_11.68%,rgba(0,0,0,0)_100%)] bg-clip-text text-transparent">
                Featured Portfolio
              </span>
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.2,
                ease: [0.16, 1, 0.3, 1],
              }}
              viewport={{ once: true }}>
              <ButtonGradient
                variant="Variant 1"
                title="See All Projects"
                link="/projects"
              />
            </motion.div>
          </div>
        </div>
      </div>

      {/* Horizontal Scrolling Carousel */}
      <div
        className="relative flex items-center overflow-hidden"
        style={{ height: "calc(100vh - 400px)" }}>
        {/* Initial positioning - start from right side showing 1-2 cards */}
        <div
          ref={carouselRef}
          className="flex items-center"
          style={{
            width: `${(420 + 8) * featuredVideos.length + 100}px`, // Smaller cards sizing
            transform: `translateX(calc(100vw - 700px))`, // Position to show 1.5-2 cards from right
            willChange: "transform", // Optimize for animations
          }}>
          {featuredVideos.map((video, index) => (
            <motion.div
              key={video.id}
              className="shrink-0 relative"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: index * 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
              viewport={{ once: true }}
              onMouseEnter={() => {
                setShowCursor(true);
                setHoveredVideo(video.id);
              }}
              onMouseLeave={() => {
                setShowCursor(false);
                setHoveredVideo(null);
              }}
              onClick={() => openYouTubeModal(video.youtubeUrl)}
              style={{
                cursor: "none",
                width: "400px", // Smaller size like screenshot
                height: "400px", // Smaller size like screenshot
                marginRight: "12px", // Increased gap between cards
                flexShrink: 0, // Prevent shrinking
              }}>
              <div className="w-full h-full overflow-hidden rounded-[51px]">
                <FeaturedVideoCard
                  variant="Variant 1"
                  title={video.title}
                  client={video.client}
                  file={video.file}
                  tap={() => openYouTubeModal(video.youtubeUrl)}
                  width={420} // Override the default 580px width
                  height={420} // Override the default 580px height
                  style={{
                    width: "420px !important", // Force override Framer's fixed width
                    height: "420px !important", // Force override Framer's fixed height
                    maxWidth: "420px",
                    maxHeight: "420px",
                  }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Custom Cursor */}
      {showCursor && hoveredVideo && (
        <div
          className="fixed pointer-events-none z-50"
          style={{
            left: cursorPosition.x - 60,
            top: cursorPosition.y - 60,
            transform: "translate(-50%, -50%)",
          }}>
          <Cursor variant="Project" />
        </div>
      )}

      {/* Scroll Indicator */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2">
        <div className="flex items-center gap-2 text-white/60 text-sm">
          <span>Scroll to explore</span>
          <div className="w-6 h-1 bg-white/20 rounded-full overflow-hidden">
            <div className="w-2 h-full bg-white/60 rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
