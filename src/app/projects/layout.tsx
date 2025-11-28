import { generateSEOMetadata } from "@/lib/metadata";

export const metadata = generateSEOMetadata({
  title: "Projects - SharpEye Films | Video Production Portfolio",
  description:
    "Explore our portfolio of creative video productions, from compelling commercials to award-winning short films.",
  url: "/projects",
});

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
