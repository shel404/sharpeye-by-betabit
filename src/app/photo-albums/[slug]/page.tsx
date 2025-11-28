"use client";

import { generateSEOMetadata } from "@/lib/metadata";
import { getPhotoAlbum, getPhotoAlbums } from "@/lib/data/photo-albums";
import { notFound } from "next/navigation";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

interface PhotoAlbumPageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  const albums = getPhotoAlbums();
  return albums.map((album) => ({
    slug: album.slug,
  }));
}

export async function generateMetadata({ params }: PhotoAlbumPageProps) {
  const album = getPhotoAlbum(params.slug);

  if (!album) {
    return {};
  }

  return generateSEOMetadata({
    title: `${album.title} - SharpEye Films Photo Album`,
    description: album.description,
    url: `/photo-albums/${album.slug}`,
    image: album.coverImage,
  });
}

export default function PhotoAlbumPage({ params }: PhotoAlbumPageProps) {
  const album = getPhotoAlbum(params.slug);
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  if (!album) {
    notFound();
  }

  const openLightbox = (index: number) => {
    setSelectedImage(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % album.images.length);
    }
  };

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage(
        selectedImage === 0 ? album.images.length - 1 : selectedImage - 1
      );
    }
  };

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-black">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center space-x-4 mb-6">
              <Link
                href="/photo-albums"
                className="text-blue-400 hover:text-blue-300 transition-colors duration-200"
              >
                ← Back to Albums
              </Link>
              <span className="px-3 py-1 bg-blue-600 text-white text-sm font-medium rounded-full">
                {album.category}
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              {album.title}
            </h1>

            <p className="text-xl text-gray-300 mb-8">{album.description}</p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-gray-300">
              <div>
                <p className="text-sm text-gray-400 mb-1">Location</p>
                <p className="font-medium">{album.location}</p>
              </div>
              <div>
                <p className="text-sm text-gray-400 mb-1">Photographer</p>
                <p className="font-medium">{album.photographer}</p>
              </div>
              <div>
                <p className="text-sm text-gray-400 mb-1">Date</p>
                <p className="font-medium">
                  {new Date(album.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-400 mb-1">Photos</p>
                <p className="font-medium">{album.images.length} images</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Photo Gallery */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {album.images.map((image, index) => (
                <div
                  key={index}
                  className="relative aspect-square cursor-pointer group overflow-hidden rounded-lg"
                  onClick={() => openLightbox(index)}
                >
                  <Image
                    src={image.url}
                    alt={image.caption || `Photo ${index + 1}`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <svg
                        className="w-8 h-8 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Tags */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Tags</h2>
            <div className="flex flex-wrap justify-center gap-3">
              {album.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage !== null && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-7xl max-h-full">
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 z-10 w-10 h-10 bg-black bg-opacity-50 text-white rounded-full flex items-center justify-center hover:bg-opacity-70 transition-all duration-200"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            {/* Navigation Buttons */}
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 bg-black bg-opacity-50 text-white rounded-full flex items-center justify-center hover:bg-opacity-70 transition-all duration-200"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>

            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 bg-black bg-opacity-50 text-white rounded-full flex items-center justify-center hover:bg-opacity-70 transition-all duration-200"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>

            {/* Image */}
            <div className="relative max-w-full max-h-full">
              <Image
                src={album.images[selectedImage].url}
                alt={
                  album.images[selectedImage].caption ||
                  `Photo ${selectedImage + 1}`
                }
                width={1200}
                height={800}
                className="max-w-full max-h-[80vh] object-contain"
              />

              {/* Caption */}
              {album.images[selectedImage].caption && (
                <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-70 text-white p-4">
                  <p className="text-center">
                    {album.images[selectedImage].caption}
                  </p>
                </div>
              )}
            </div>

            {/* Image Counter */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-50 text-white px-4 py-2 rounded-full text-sm">
              {selectedImage + 1} / {album.images.length}
            </div>
          </div>
        </div>
      )}

      {/* Call to Action */}
      <section className="py-20 bg-blue-600">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Love This Photography Style?
            </h2>
            <p className="text-blue-100 mb-8 text-lg">
              Let's create stunning visuals for your next project or event.
            </p>
            <Link
              href="/contact"
              className="inline-block px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-200"
            >
              Book a Photography Session
            </Link>
          </div>
        </div>
      </section>

      {/* Related Albums */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
              More Albums
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {getPhotoAlbums()
                .filter((a) => a.id !== album.id)
                .slice(0, 3)
                .map((relatedAlbum) => (
                  <article
                    key={relatedAlbum.id}
                    className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <Link href={`/photo-albums/${relatedAlbum.slug}`}>
                      <div className="relative h-48 overflow-hidden">
                        <Image
                          src={relatedAlbum.coverImage}
                          alt={relatedAlbum.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute top-4 right-4">
                          <span className="px-3 py-1 bg-black bg-opacity-70 text-white text-sm rounded-full">
                            {relatedAlbum.images.length} photos
                          </span>
                        </div>
                      </div>
                    </Link>

                    <div className="p-6">
                      <div className="flex items-center justify-between mb-3">
                        <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full">
                          {relatedAlbum.category}
                        </span>
                        <span className="text-gray-500 text-sm">
                          {relatedAlbum.location}
                        </span>
                      </div>

                      <Link href={`/photo-albums/${relatedAlbum.slug}`}>
                        <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-200">
                          {relatedAlbum.title}
                        </h3>
                      </Link>

                      <p className="text-gray-600 mb-4 line-clamp-2">
                        {relatedAlbum.description}
                      </p>

                      <Link
                        href={`/photo-albums/${relatedAlbum.slug}`}
                        className="text-blue-600 hover:text-blue-800 font-medium text-sm transition-colors duration-200"
                      >
                        View Album →
                      </Link>
                    </div>
                  </article>
                ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
