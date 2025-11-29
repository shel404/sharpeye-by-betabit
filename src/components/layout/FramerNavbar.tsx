"use client";

import { usePathname } from "next/navigation";
import dynamic from "next/dynamic";
import { useMemo } from "react";

// Dynamically import the Framer navbar to avoid SSR issues
const FramerNavBar = dynamic(
  () => import("../../../framer/nav-bar.jsx").then((mod) => mod.default),
  {
    ssr: false,
    loading: () => (
      <nav className="fixed top-0 left-0 right-0 z-50 h-20 bg-[rgba(13,13,13,0.2)] backdrop-blur-[9px]" />
    ),
  }
);

// Map Next.js routes to Framer activePage prop
const routeToActivePage: Record<string, "Home" | "Projects" | "Albums" | "About" | "Contact us" | "Services" | "Blogs"> = {
  "/": "Home",
  "/projects": "Projects",
  "/photo-albums": "Albums",
  "/about": "About",
  "/contact": "Contact us",
  "/services": "Services",
  "/blogs": "Blogs",
};

export default function FramerNavbar() {
  const pathname = usePathname();

  // Determine active page based on current route
  const activePage = useMemo(() => {
    // Check exact matches first
    if (routeToActivePage[pathname]) {
      return routeToActivePage[pathname];
    }

    // Check for dynamic routes (e.g., /projects/[slug], /blogs/[slug])
    if (pathname.startsWith("/projects")) {
      return "Projects";
    }
    if (pathname.startsWith("/blogs")) {
      return "Blogs";
    }
    if (pathname.startsWith("/photo-albums")) {
      return "Albums";
    }

    // Default to Home
    return "Home";
  }, [pathname]);

  return (
    <div className="fixed top-0 left-1/2 -translate-x-1/2 z-50 w-full max-w-[1520px] flex justify-center">
      <FramerNavBar activePage={activePage} />
    </div>
  );
}

