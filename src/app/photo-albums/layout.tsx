import { generateSEOMetadata } from "@/lib/metadata";

export const metadata = generateSEOMetadata({
  title: "Photo Albums - SharpEye Films | Photography Portfolio",
  description:
    "Explore our collection of stunning photography albums capturing moments from around the world.",
  url: "/photo-albums",
});

export default function PhotoAlbumsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
