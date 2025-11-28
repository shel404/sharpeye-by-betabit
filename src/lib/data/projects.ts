export interface Project {
  id: string;
  title: string;
  slug: string;
  description: string;
  longDescription: string;
  category: string;
  tags: string[];
  image: string;
  gallery: string[];
  videoUrl?: string;
  client: string;
  duration: string;
  completedAt: string;
  services: string[];
  testimonial?: {
    quote: string;
    author: string;
    position: string;
    company: string;
  };
}

export const projects: Project[] = [
  {
    id: "1",
    title: "Whispers in the Mist",
    slug: "whispers-in-the-mist",
    description:
      "A haunting short film exploring themes of memory and loss through atmospheric cinematography.",
    longDescription: `"Whispers in the Mist" is a deeply atmospheric short film that explores the delicate boundary between memory and reality. Set against the backdrop of a fog-shrouded coastal town, the film follows Sarah, a woman returning to her childhood home after years of absence.

Through carefully crafted cinematography and sound design, we created an immersive experience that draws viewers into Sarah's psychological journey. The film employs practical effects and natural lighting to achieve its ethereal quality, with the mist serving as both a visual metaphor and a character in its own right.

The project challenged us to tell a complete story in just 15 minutes, requiring precise pacing and visual storytelling. Every frame was meticulously planned to contribute to the overall narrative arc, from the opening shots of the empty house to the final revelation that recontextualizes everything that came before.

The film has been selected for several independent film festivals and has received praise for its innovative approach to psychological storytelling and its masterful use of atmosphere to convey emotion.`,
    category: "Short Film",
    tags: ["Drama", "Psychological", "Atmospheric", "Independent"],
    image: "/images/placeholder.svg",
    gallery: [
      "/images/placeholder.svg",
      "/images/placeholder.svg",
      "/images/placeholder.svg",
      "/images/placeholder.svg",
    ],
    videoUrl: "https://vimeo.com/example1",
    client: "Independent Production",
    duration: "15 minutes",
    completedAt: "2024-01-15",
    services: [
      "Direction",
      "Cinematography",
      "Post-Production",
      "Sound Design",
    ],
    testimonial: {
      quote:
        "The team brought our vision to life in ways we never imagined. Their attention to detail and creative approach made this project truly special.",
      author: "Emma Thompson",
      position: "Producer",
      company: "Mist Films",
    },
  },
  {
    id: "2",
    title: "TechConnect Expo 2023",
    slug: "techconnect-expo-2023",
    description:
      "Comprehensive event coverage showcasing the latest innovations in technology and digital transformation.",
    longDescription: `TechConnect Expo 2023 was one of the year's most significant technology conferences, bringing together industry leaders, innovators, and visionaries from around the world. Our team was tasked with creating comprehensive video coverage that would capture not just the presentations, but the energy and excitement of this groundbreaking event.

Over three days, we deployed multiple camera crews to cover keynote presentations, panel discussions, product demonstrations, and networking sessions. Our approach focused on creating content that would serve multiple purposes: live streaming for remote attendees, highlight reels for social media, and comprehensive documentation for future reference.

The technical challenges were significant. We needed to ensure seamless live streaming while simultaneously capturing high-quality footage for post-production. Our team coordinated with the event's technical staff to integrate our equipment with the venue's existing AV systems, ensuring minimal disruption to the proceedings.

The final deliverables included a 30-minute highlight reel, individual presentation videos, social media content packages, and a comprehensive documentary-style recap of the entire event. The content has been viewed over 500,000 times across various platforms and has become a valuable resource for the tech community.`,
    category: "Event",
    tags: ["Conference", "Technology", "Live Streaming", "Corporate"],
    image: "/images/placeholder.svg",
    gallery: [
      "/images/placeholder.svg",
      "/images/placeholder.svg",
      "/images/placeholder.svg",
      "/images/placeholder.svg",
    ],
    videoUrl: "https://vimeo.com/example2",
    client: "TechConnect Inc.",
    duration: "3 days coverage",
    completedAt: "2023-11-20",
    services: [
      "Event Coverage",
      "Live Streaming",
      "Multi-Camera Production",
      "Post-Production",
    ],
    testimonial: {
      quote:
        "Their professional approach and technical expertise made our event coverage seamless. The final videos exceeded our expectations and perfectly captured the spirit of our conference.",
      author: "David Chen",
      position: "Event Director",
      company: "TechConnect Inc.",
    },
  },
  {
    id: "3",
    title: "SunnySip Beverage Commercial",
    slug: "sunnysip-beverage-commercial",
    description:
      "Vibrant commercial campaign showcasing the refreshing qualities of SunnySip's new summer drink line.",
    longDescription: `The SunnySip commercial campaign was designed to capture the essence of summer refreshment and position the brand as the perfect companion for outdoor adventures and social gatherings. Our creative team developed a concept that would resonate with the target demographic of active, health-conscious consumers aged 18-35.

The commercial features a series of vignettes showcasing people enjoying SunnySip beverages in various summer settings: beach volleyball games, rooftop parties, hiking adventures, and poolside relaxation. Each scene was carefully crafted to highlight the product's natural ingredients and refreshing qualities while maintaining an authentic, lifestyle-focused approach.

Production took place over five days across multiple locations in Southern California. We utilized a combination of handheld and stabilized camera work to create dynamic, energetic footage that matches the brand's youthful energy. Special attention was paid to lighting and color grading to enhance the vibrant, sunny aesthetic that defines the SunnySip brand.

The campaign included a 30-second television spot, 15-second social media versions, and behind-the-scenes content for the brand's digital channels. The commercial has been highly successful, contributing to a 25% increase in brand awareness and a 15% boost in sales during the summer season.`,
    category: "Commercial",
    tags: ["Beverage", "Lifestyle", "Summer", "Brand Campaign"],
    image: "/images/placeholder.svg",
    gallery: [
      "/images/placeholder.svg",
      "/images/placeholder.svg",
      "/images/placeholder.svg",
      "/images/placeholder.svg",
    ],
    videoUrl: "https://vimeo.com/example3",
    client: "SunnySip Beverages",
    duration: "30 seconds",
    completedAt: "2023-08-10",
    services: [
      "Creative Development",
      "Production",
      "Post-Production",
      "Color Grading",
    ],
    testimonial: {
      quote:
        "The commercial perfectly captures our brand's spirit and has been incredibly effective in reaching our target audience. The production quality is outstanding.",
      author: "Maria Rodriguez",
      position: "Marketing Director",
      company: "SunnySip Beverages",
    },
  },
  {
    id: "4",
    title: "ElevateCorp Corporate Video",
    slug: "elevatecorp-corporate-video",
    description:
      "Professional corporate video highlighting ElevateCorp's company culture, values, and industry leadership.",
    longDescription: `ElevateCorp approached us to create a comprehensive corporate video that would serve multiple purposes: recruiting top talent, communicating with stakeholders, and showcasing their company culture to potential clients. The challenge was to create content that felt authentic and engaging while maintaining the professional tone appropriate for a Fortune 500 company.

Our approach focused on storytelling through the experiences of real employees. Rather than relying on scripted testimonials, we conducted in-depth interviews with team members across all levels of the organization, from recent graduates to C-suite executives. This allowed us to capture genuine insights about what makes ElevateCorp unique as an employer and business partner.

The production spanned multiple office locations across three states, requiring careful coordination and consistent visual treatment to maintain brand cohesion. We utilized a documentary-style approach, combining formal interviews with candid footage of employees at work, team meetings, and company events.

The final video successfully balances professionalism with personality, showcasing ElevateCorp's innovative culture while highlighting their impressive track record of client success. The video has become a cornerstone of their recruitment efforts and has been instrumental in several major client acquisitions.`,
    category: "Corporate",
    tags: [
      "Company Culture",
      "Recruitment",
      "Professional",
      "Documentary Style",
    ],
    image: "/images/placeholder.svg",
    gallery: [
      "/images/placeholder.svg",
      "/images/placeholder.svg",
      "/images/placeholder.svg",
      "/images/placeholder.svg",
    ],
    videoUrl: "https://vimeo.com/example4",
    client: "ElevateCorp",
    duration: "8 minutes",
    completedAt: "2023-09-15",
    services: [
      "Corporate Video",
      "Interview Production",
      "Multi-Location Filming",
      "Brand Integration",
    ],
    testimonial: {
      quote:
        "This video has transformed how we present our company to both potential employees and clients. It authentically represents who we are and what we stand for.",
      author: "James Wilson",
      position: "Chief Marketing Officer",
      company: "ElevateCorp",
    },
  },
  {
    id: "5",
    title: "The Future of Automation VFX",
    slug: "the-future-of-automation-vfx",
    description:
      "Cutting-edge visual effects showcase demonstrating advanced automation technologies and their impact on industry.",
    longDescription: `"The Future of Automation" was an ambitious project that pushed the boundaries of what's possible with visual effects and motion graphics. Created for a leading automation technology company, this piece needed to visualize complex industrial processes and futuristic concepts in a way that was both technically accurate and visually compelling.

The project required extensive collaboration with engineers and technical experts to ensure that our visual representations accurately reflected the real-world applications of the technology. We developed custom 3D models of industrial equipment, created detailed animations of automated processes, and designed futuristic environments that showcase the potential of next-generation automation.

Our VFX team utilized the latest software and rendering techniques to achieve photorealistic results. The project included complex particle simulations, advanced lighting setups, and seamless integration of live-action footage with computer-generated elements. Every frame was meticulously crafted to maintain the highest standards of visual quality.

The final piece serves as both an educational tool and a marketing asset, helping the client communicate complex technical concepts to diverse audiences. The video has been featured at industry conferences, used in sales presentations, and has garnered significant attention on social media platforms.`,
    category: "VFX",
    tags: [
      "Visual Effects",
      "Animation",
      "3D Modeling",
      "Technology",
      "Industrial",
    ],
    image: "/images/placeholder.svg",
    gallery: [
      "/images/placeholder.svg",
      "/images/placeholder.svg",
      "/images/placeholder.svg",
      "/images/placeholder.svg",
    ],
    videoUrl: "https://vimeo.com/example5",
    client: "AutoTech Industries",
    duration: "5 minutes",
    completedAt: "2023-12-01",
    services: [
      "Visual Effects",
      "3D Animation",
      "Motion Graphics",
      "Technical Visualization",
    ],
    testimonial: {
      quote:
        "The visual effects work exceeded our wildest expectations. They made our complex technology accessible and exciting to audiences who had never seen anything like it.",
      author: "Dr. Sarah Kim",
      position: "Chief Technology Officer",
      company: "AutoTech Industries",
    },
  },
];

export const categories = [
  "All",
  "Short Film",
  "Commercial",
  "Corporate",
  "Event",
  "VFX",
  "Documentary",
  "Music Video",
  "Social Media",
];

export function getProject(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

export function getProjects(): Project[] {
  return projects.sort(
    (a, b) =>
      new Date(b.completedAt).getTime() - new Date(a.completedAt).getTime()
  );
}

export function getProjectsByCategory(category: string): Project[] {
  if (category === "All") return projects;
  return projects.filter((project) => project.category === category);
}

export function getFeaturedProjects(limit: number = 6): Project[] {
  return projects.slice(0, limit);
}
