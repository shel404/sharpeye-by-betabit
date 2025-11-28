import { generateSEOMetadata } from "@/lib/metadata";

export const metadata = generateSEOMetadata({
  title: "Blog - SharpEye Films | Video Production Insights & Tips",
  description:
    "Discover the latest insights, tips, and trends in video production, marketing, and storytelling from the SharpEye Films team.",
  url: "/blogs",
});

export default function BlogsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
