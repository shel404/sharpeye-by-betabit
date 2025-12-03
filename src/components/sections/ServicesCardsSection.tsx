"use client";

import React from "react";
import HomepageService from "../../../framer/homepage-service";
import ButtonGradient from "../../../framer/button-gradient";

const ServicesCardsSection: React.FC = () => {
  const services = [
    {
      title: "Pre-Production",
      description:
        "Pre-production serves as the pivotal phase in any creative endeavor, encompassing planning, idea refinement, budgeting, schedule creation, and the meticulous organization of logistical details.",
      image: {
        src: "https://framerusercontent.com/images/cU8i3FwPr0fkSH5zeivVz7Q3AY.jpg?scale-down-to=1024",
        srcSet:
          "https://framerusercontent.com/images/cU8i3FwPr0fkSH5zeivVz7Q3AY.jpg?scale-down-to=1024 682w,https://framerusercontent.com/images/cU8i3FwPr0fkSH5zeivVz7Q3AY.jpg?scale-down-to=2048 1365w,https://framerusercontent.com/images/cU8i3FwPr0fkSH5zeivVz7Q3AY.jpg 2334w",
      },
      row1: "Concept Development\nScriptwriting\nStoryboarding",
      row2: "Location Scouting\nCasting\nPlanning",
    },
    {
      title: "Production",
      description:
        "Production represents the dynamic phase of a creative project, where the plans from pre-production spring to life, with cameras rolling, actors delivering their performances, and the realization of the creative vision.",
      image: {
        src: "https://framerusercontent.com/images/cU8i3FwPr0fkSH5zeivVz7Q3AY.jpg?scale-down-to=1024",
        srcSet:
          "https://framerusercontent.com/images/cU8i3FwPr0fkSH5zeivVz7Q3AY.jpg?scale-down-to=1024 682w,https://framerusercontent.com/images/cU8i3FwPr0fkSH5zeivVz7Q3AY.jpg?scale-down-to=2048 1365w,https://framerusercontent.com/images/cU8i3FwPr0fkSH5zeivVz7Q3AY.jpg 2334w",
      },
      row1: "Camera Operation\nDirecting\nLighting Setup",
      row2: "Audio Recording\nSet Management\nB-Roll Capture",
    },
    {
      title: "Post-Production",
      description:
        "Post-production emerges as the pivotal phase in creative projects, wherein raw content undergoes a transformation into its refined, polished state where editing, sound design, visual effects, and essential adjustments to breathe life into the project.",
      image: {
        src: "https://framerusercontent.com/images/cU8i3FwPr0fkSH5zeivVz7Q3AY.jpg?scale-down-to=1024",
        srcSet:
          "https://framerusercontent.com/images/cU8i3FwPr0fkSH5zeivVz7Q3AY.jpg?scale-down-to=1024 682w,https://framerusercontent.com/images/cU8i3FwPr0fkSH5zeivVz7Q3AY.jpg?scale-down-to=2048 1365w,https://framerusercontent.com/images/cU8i3FwPr0fkSH5zeivVz7Q3AY.jpg 2334w",
      },
      row1: "Video Editing\nColor Grading\nSound Design",
      row2: "Motion Graphics\nVisual Effects\nFinal Delivery",
    },
  ];

  return (
    <>
      <section className="py-20 px-4 md:px-8 bg-black w-full">
        <div className="w-full relative pb-24">
          {/* Two Column Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 xl:gap-16 items-start w-full">
            {/* Left Column - Title and Button */}
            <div className="lg:col-span-4 flex flex-col">
              {/* Title Section */}
              <div className="mb-8">
                <h2 className="text-3xl md:text-4xl lg:text-4xl font-bold leading-tight mb-6">
                  <span className="text-white block">
                    From Concept To Completion:
                  </span>
                  <span
                    className="text-transparent bg-clip-text block"
                    style={{
                      backgroundImage:
                        "linear-gradient(90deg, rgb(255, 171, 66) 0%, rgb(255, 99, 111) 100%)",
                    }}>
                    We&apos;ve Got You Covered!
                  </span>
                </h2>
                <p className="text-sm md:text-base text-white/70 leading-relaxed max-w-sm">
                  Our comprehensive video production process ensures every
                  project is handled with expertise and creativity from start to
                  finish.
                </p>
              </div>
            </div>

            {/* Right Column - Service Cards */}
            <div className="lg:col-span-8 flex flex-col gap-6">
              {services.map((service, index) => (
                <div key={index} className="w-full service-card-wrapper">
                  <HomepageService
                    title={service.title}
                    description={service.description}
                    image={service.image}
                    row1={service.row1}
                    row2={service.row2}
                    variant="Collapsed"
                    width="100%"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Button - Absolutely positioned at bottom left of blue container */}
          <div className="absolute bottom-0 left-4 md:left-8 pb-8">
            <ButtonGradient
              title="Explore Services"
              link="/services"
              variant="Variant 1"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default ServicesCardsSection;
