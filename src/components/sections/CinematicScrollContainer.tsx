"use client";

import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import HeroSection from "./HeroSection";
import FramerShowreelSection from "./FramerShowreel";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

export default function CinematicScrollContainer() {
  const containerRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const showreelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const hero = heroRef.current;
    const showreel = showreelRef.current;

    if (!container || !hero || !showreel) return;

    // Create main timeline
    const mainTl = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        start: "top top",
        end: "bottom bottom",
        scrub: 1,
        pin: false,
      },
    });

    // Set initial states
    gsap.set(hero, { scale: 1, opacity: 1, zIndex: 1 });
    gsap.set(showreel, { y: "100vh", opacity: 0, zIndex: 10 });

    // PHASE 1: Hero scales down and fades (0% - 50%)
    mainTl.to(
      hero,
      {
        scale: 0.8,
        opacity: 0.3,
        duration: 0.5,
        ease: "power2.out",
      },
      0
    );

    // PHASE 2: Showreel slides up and overlaps hero (5% - 45%) - Much earlier!
    mainTl.to(
      showreel,
      {
        y: "0vh",
        opacity: 1,
        duration: 0.4,
        ease: "power2.out",
      },
      0.05 // Changed from 0.2 to 0.05 - showreel appears much earlier
    );

    // Wait for Framer elements to load and animate them
    const animateFramerElements = () => {
      // Find the text element (SHOWREEL text)
      const textElement = showreel.querySelector(
        ".framer-9bvh77"
      ) as HTMLElement;
      // Find the video container element
      const videoElement = showreel.querySelector(
        ".framer-tpvi5m"
      ) as HTMLElement;

      console.log("Text element found:", textElement);
      console.log("Video element found:", videoElement);

      if (textElement) {
        // Set initial state for text - visible with showreel
        gsap.set(textElement, { opacity: 1, scale: 1, zIndex: 15 });

        // PHASE 3: Text stays visible longer, then scales down (70% - 90%)
        mainTl.to(
          textElement,
          {
            opacity: 0.3,
            scale: 0.8,
            duration: 0.2,
            ease: "power2.out",
          },
          0.7
        );
      }

      if (videoElement) {
        // Disable Framer's built-in scroll transforms first
        videoElement.style.setProperty("transform", "scale(0.3)", "important");
        videoElement.style.setProperty("animation", "none", "important");
        videoElement.style.setProperty("transition", "none", "important");

        // Set initial state for video - start moderately small, under the text
        gsap.set(videoElement, {
          opacity: 1,
          scale: 0.3, // Larger initial scale - more visible
          zIndex: 20,
          transformOrigin: "center center",
          force3D: true,
        });

        // PHASE 3: Video scales up gradually and smoothly with scroll (25% - 80%)
        mainTl.to(
          videoElement,
          {
            scale: 1.0, // Scale up to normal size
            duration: 0.55, // Longer duration for smoother animation
            ease: "power1.inOut", // Smoother easing
            force3D: true,
            transformOrigin: "center center",
            onUpdate: function () {
              // Force override any Framer transforms during animation
              const currentScale = gsap.getProperty(videoElement, "scale");
              videoElement.style.setProperty(
                "transform",
                `scale(${currentScale})`,
                "important"
              );
            },
          },
          0.25 // Start scaling after showreel text is visible
        );

        // Continuously override Framer transforms
        const overrideFramerTransforms = () => {
          if (videoElement) {
            const currentScale = gsap.getProperty(videoElement, "scale") || 0.3;
            videoElement.style.setProperty(
              "transform",
              `scale(${currentScale})`,
              "important"
            );
          }
        };

        // Override transforms every frame
        gsap.ticker.add(overrideFramerTransforms);
      }

      // If elements not found, retry
      if (!textElement || !videoElement) {
        setTimeout(animateFramerElements, 200);
      }
    };

    // Start checking for Framer elements after showreel appears
    setTimeout(animateFramerElements, 1000);

    // Cleanup
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full"
      style={{ height: "400vh" }}>
      {/* Container for all fixed layers */}
      <div className="sticky top-0 w-full h-screen overflow-hidden">
        {/* LAYER 1: Hero Section */}
        <div
          ref={heroRef}
          className="absolute inset-0 w-full h-full framer-hero-wrapper">
          <HeroSection />
        </div>

        {/* LAYER 2: Framer Showreel Section */}
        <div
          ref={showreelRef}
          className="absolute inset-0 w-full h-full framer-showreel-wrapper flex items-center justify-center"
          style={{
            transform: "translateY(100vh)",
            opacity: 0,
          }}>
          <FramerShowreelSection />
        </div>
      </div>

      {/* Override Framer transforms and fix video styling */}
      <style jsx global>{`
        .framer-tpvi5m {
          animation: none !important;
          transition: none !important;
          border-radius: 40px !important; /* Ensure proper rounded rectangle, not circle */
        }

        /* Disable Framer's scroll-based transforms */
        .framer-tpvi5m[style*="transform"] {
          transform: scale(0.3) !important;
        }

        /* Fix video container border radius */
        .framer-19exss5-container,
        .framer-19exss5-container video {
          border-radius: 40px !important;
        }
      `}</style>
    </div>
  );
}
