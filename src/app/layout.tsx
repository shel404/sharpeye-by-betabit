import type { Metadata } from "next";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import { syne, inter, satoshi } from "@/lib/fonts";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
  title: {
    default: 'SharpEye Films - Professional Videographer Portfolio',
    template: '%s | SharpEye Films',
  },
  description: 'Professional video production and cinematography services. From concept to completion, we create stunning visual content for businesses and creatives.',
  keywords: ['video production', 'cinematography', 'videographer', 'motion graphics', 'VFX', 'video editing'],
  authors: [{ name: 'SharpEye Films' }],
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${syne.variable} ${inter.variable} ${satoshi.variable} antialiased`}
      >
        <Navigation />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
