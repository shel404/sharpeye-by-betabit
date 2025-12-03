import { generateSEOMetadata } from "@/lib/metadata";
import CinematicScrollContainer from "@/components/sections/CinematicScrollContainer";
import BrandPartnersSection from "@/components/sections/BrandPartnersSection";
import PortfolioCarouselSection from "@/components/sections/PortfolioCarouselSection";
import ServicesCardsSection from "@/components/sections/ServicesCardsSection";
import ServicesGrid from "@/components/sections/ServicesGrid";
import ProjectsGrid from "@/components/sections/ProjectsGrid";
import FAQSection from "@/components/sections/FAQSection";

export const metadata = generateSEOMetadata({
  title: "SharpEye Films - Professional Videographer Portfolio",
  description:
    "Turning Video into Vibrant Conversations. We're your friendly video wizards creating fantastic commercials, corporate videos, social ads and many more.",
  url: "/",
});

export default function HomePage() {
  return (
    <div className="ml-8">
      {/* Cinematic Scroll Container - Hero and Showreel with scroll animations */}
      <CinematicScrollContainer />

      {/* Brand Partners Section */}
      <BrandPartnersSection />

      {/* Portfolio Carousel Section - Scroll-based horizontal carousel */}
      <PortfolioCarouselSection />

      {/* Services Cards Section - Interactive service cards */}
      <ServicesCardsSection />

      {/* Featured Projects */}
      <ProjectsGrid />

      {/* FAQ Section */}
      <div className="bg-[var(--color-dark)]">
        <FAQSection />
      </div>
    </div>
  );
}
