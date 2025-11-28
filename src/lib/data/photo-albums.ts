export interface PhotoAlbum {
  id: string;
  title: string;
  slug: string;
  description: string;
  coverImage: string;
  images: {
    url: string;
    caption?: string;
  }[];
  location: string;
  date: string;
  photographer: string;
  category: string;
  tags: string[];
}

export const photoAlbums: PhotoAlbum[] = [
  {
    id: "1",
    title: "Urban Chronicles",
    slug: "urban-chronicles",
    description:
      "A visual journey through the bustling streets and hidden corners of metropolitan life, capturing the essence of urban culture and architecture.",
    coverImage: "/images/placeholder.svg",
    images: [
      {
        url: "/images/placeholder.svg",
        caption: "Downtown skyline at golden hour",
      },
      {
        url: "/images/placeholder.svg",
        caption: "Street art in the arts district",
      },
      {
        url: "/images/placeholder.svg",
        caption: "Busy intersection during rush hour",
      },
      {
        url: "/images/placeholder.svg",
        caption: "Architectural details of modern buildings",
      },
      {
        url: "/images/placeholder.svg",
        caption: "Night lights reflecting on wet streets",
      },
      {
        url: "/images/placeholder.svg",
        caption: "Local market vendors at work",
      },
      {
        url: "/images/placeholder.svg",
        caption: "Underground subway station",
      },
      {
        url: "/images/placeholder.svg",
        caption: "Rooftop view of the city",
      },
    ],
    location: "New York City, USA",
    date: "2024-01-15",
    photographer: "Alex Thompson",
    category: "Urban",
    tags: ["Street Photography", "Architecture", "City Life", "Documentary"],
  },
  {
    id: "2",
    title: "Thailand: A Photographic Odyssey",
    slug: "thailand-a-photographic-odyssey",
    description:
      "An immersive exploration of Thailand's rich culture, stunning landscapes, and vibrant street life, from bustling Bangkok to serene temples.",
    coverImage: "/images/placeholder.svg",
    images: [
      {
        url: "/images/placeholder.svg",
        caption: "Golden Buddha statue at Wat Pho temple",
      },
      {
        url: "/images/placeholder.svg",
        caption: "Floating market vendors in traditional boats",
      },
      {
        url: "/images/placeholder.svg",
        caption: "Monks collecting alms at sunrise",
      },
      {
        url: "/images/placeholder.svg",
        caption: "Traditional Thai dancer in ornate costume",
      },
      {
        url: "/images/placeholder.svg",
        caption: "Tropical beach at Phi Phi Islands",
      },
      {
        url: "/images/placeholder.svg",
        caption: "Street food vendor preparing pad thai",
      },
      {
        url: "/images/placeholder.svg",
        caption: "Ancient ruins at Ayutthaya",
      },
      {
        url: "/images/placeholder.svg",
        caption: "Elephant sanctuary in Chiang Mai",
      },
      {
        url: "/images/placeholder.svg",
        caption: "Lantern festival celebration",
      },
      {
        url: "/images/placeholder.svg",
        caption: "Traditional longtail boat at sunset",
      },
    ],
    location: "Thailand",
    date: "2023-11-20",
    photographer: "Sarah Chen",
    category: "Travel",
    tags: ["Travel", "Culture", "Temples", "Street Photography", "Landscape"],
  },
  {
    id: "3",
    title: "Speed Demons",
    slug: "speed-demons",
    description:
      "High-octane photography capturing the thrill and precision of motorsports, from Formula 1 to motorcycle racing.",
    coverImage: "/images/placeholder.svg",
    images: [
      {
        url: "/images/placeholder.svg",
        caption: "Formula 1 car taking a sharp turn",
      },
      {
        url: "/images/placeholder.svg",
        caption: "Motorcycle racer leaning into a curve",
      },
      {
        url: "/images/placeholder.svg",
        caption: "Pit crew changing tires in record time",
      },
      {
        url: "/images/placeholder.svg",
        caption: "Driver celebrating victory",
      },
      {
        url: "/images/placeholder.svg",
        caption: "Close-up of racing helmet and gear",
      },
      {
        url: "/images/placeholder.svg",
        caption: "Cars racing wheel-to-wheel",
      },
      {
        url: "/images/placeholder.svg",
        caption: "Dramatic crash sequence",
      },
      {
        url: "/images/placeholder.svg",
        caption: "Victory lap celebration",
      },
    ],
    location: "Silverstone Circuit, UK",
    date: "2023-07-15",
    photographer: "Mike Rodriguez",
    category: "Sports",
    tags: ["Motorsports", "Action", "Speed", "Racing", "Adrenaline"],
  },
  {
    id: "4",
    title: "Faces of the World: A Portrait Gallery",
    slug: "faces-of-the-world-a-portrait-gallery",
    description:
      "An intimate collection of portraits showcasing the diversity and beauty of human expression across different cultures and backgrounds.",
    coverImage: "/images/placeholder.svg",
    images: [
      {
        url: "/images/placeholder.svg",
        caption: "Elderly fisherman from coastal village",
      },
      {
        url: "/images/placeholder.svg",
        caption: "Young artist in her studio",
      },
      {
        url: "/images/placeholder.svg",
        caption: "Traditional craftsman at work",
      },
      {
        url: "/images/placeholder.svg",
        caption: "Street musician playing violin",
      },
      {
        url: "/images/placeholder.svg",
        caption: "Mother and child sharing a moment",
      },
      {
        url: "/images/placeholder.svg",
        caption: "Wise elder with weathered hands",
      },
      {
        url: "/images/placeholder.svg",
        caption: "Laughing children at play",
      },
      {
        url: "/images/placeholder.svg",
        caption: "Contemplative monk in meditation",
      },
      {
        url: "/images/placeholder.svg",
        caption: "Proud farmer with his harvest",
      },
      {
        url: "/images/placeholder.svg",
        caption: "Dancer in traditional costume",
      },
    ],
    location: "Various Locations",
    date: "2023-09-10",
    photographer: "Elena Vasquez",
    category: "Portrait",
    tags: ["Portrait", "People", "Culture", "Emotion", "Diversity"],
  },
  {
    id: "5",
    title: "Exploring the Wonders of Indonesia",
    slug: "exploring-the-wonders-of-indonesia",
    description:
      "A breathtaking journey through Indonesia's diverse landscapes, from volcanic peaks to pristine beaches and ancient temples.",
    coverImage: "/images/placeholder.svg",
    images: [
      {
        url: "/images/placeholder.svg",
        caption: "Sunrise over Mount Bromo volcano",
      },
      {
        url: "/images/placeholder.svg",
        caption: "Borobudur temple at dawn",
      },
      {
        url: "/images/placeholder.svg",
        caption: "Traditional Balinese rice terraces",
      },
      {
        url: "/images/placeholder.svg",
        caption: "Komodo dragon in natural habitat",
      },
      {
        url: "/images/placeholder.svg",
        caption: "Crystal clear waters of Raja Ampat",
      },
      {
        url: "/images/placeholder.svg",
        caption: "Traditional Indonesian dancer",
      },
      {
        url: "/images/placeholder.svg",
        caption: "Orangutan in Borneo rainforest",
      },
      {
        url: "/images/placeholder.svg",
        caption: "Volcanic crater lake",
      },
      {
        url: "/images/placeholder.svg",
        caption: "Local fisherman at sunset",
      },
      {
        url: "/images/placeholder.svg",
        caption: "Traditional market in Jakarta",
      },
    ],
    location: "Indonesia",
    date: "2023-05-25",
    photographer: "David Kim",
    category: "Travel",
    tags: ["Travel", "Nature", "Wildlife", "Culture", "Adventure"],
  },
];

export function getPhotoAlbum(slug: string): PhotoAlbum | undefined {
  return photoAlbums.find((album) => album.slug === slug);
}

export function getPhotoAlbums(): PhotoAlbum[] {
  return photoAlbums.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

export function getPhotoAlbumsByCategory(category: string): PhotoAlbum[] {
  return photoAlbums.filter(
    (album) => album.category.toLowerCase() === category.toLowerCase()
  );
}
