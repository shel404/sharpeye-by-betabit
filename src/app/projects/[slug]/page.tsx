import { generateSEOMetadata } from "@/lib/metadata";
import { getProject, getProjects } from "@/lib/data/projects";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

interface ProjectPageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  const projects = getProjects();
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: ProjectPageProps) {
  const project = getProject(params.slug);

  if (!project) {
    return {};
  }

  return generateSEOMetadata({
    title: `${project.title} - SharpEye Films Project`,
    description: project.description,
    url: `/projects/${project.slug}`,
    image: project.image,
  });
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const project = getProject(params.slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-black">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center space-x-4 mb-6">
              <Link
                href="/projects"
                className="text-blue-400 hover:text-blue-300 transition-colors duration-200"
              >
                ← Back to Projects
              </Link>
              <span className="px-3 py-1 bg-blue-600 text-white text-sm font-medium rounded-full">
                {project.category}
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              {project.title}
            </h1>

            <p className="text-xl text-gray-300 mb-8 max-w-3xl">
              {project.description}
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-gray-300">
              <div>
                <p className="text-sm text-gray-400 mb-1">Client</p>
                <p className="font-medium">{project.client}</p>
              </div>
              <div>
                <p className="text-sm text-gray-400 mb-1">Duration</p>
                <p className="font-medium">{project.duration}</p>
              </div>
              <div>
                <p className="text-sm text-gray-400 mb-1">Completed</p>
                <p className="font-medium">
                  {new Date(project.completedAt).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                  })}
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-400 mb-1">Category</p>
                <p className="font-medium">{project.category}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Video/Image */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="relative h-96 md:h-[600px] rounded-2xl overflow-hidden bg-gray-900">
              {project.videoUrl ? (
                <div className="w-full h-full flex items-center justify-center">
                  <div className="text-white text-center">
                    <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg
                        className="w-8 h-8 ml-1"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M8 5v10l8-5-8-5z" />
                      </svg>
                    </div>
                    <p className="text-lg">Video Player</p>
                    <p className="text-sm text-gray-400">
                      Click to play project video
                    </p>
                  </div>
                </div>
              ) : (
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                  priority
                />
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Project Details */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Project Overview
              </h2>
              <div className="prose prose-lg max-w-none">
                {project.longDescription
                  .split("\n\n")
                  .map((paragraph, index) => (
                    <p
                      key={index}
                      className="text-gray-700 leading-relaxed mb-4"
                    >
                      {paragraph}
                    </p>
                  ))}
              </div>

              {/* Tags */}
              <div className="mt-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Tags
                </h3>
                <div className="flex flex-wrap gap-3">
                  {project.tags.map((tag) => (
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

            {/* Sidebar */}
            <div className="lg:col-span-1">
              {/* Services */}
              <div className="bg-gray-50 rounded-xl p-6 mb-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Services Provided
                </h3>
                <ul className="space-y-2">
                  {project.services.map((service) => (
                    <li
                      key={service}
                      className="flex items-center text-gray-700"
                    >
                      <svg
                        className="w-5 h-5 text-blue-600 mr-3"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      {service}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Testimonial */}
              {project.testimonial && (
                <div className="bg-blue-50 rounded-xl p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    Client Testimonial
                  </h3>
                  <blockquote className="text-gray-700 mb-4 italic">
                    "{project.testimonial.quote}"
                  </blockquote>
                  <div className="border-t pt-4">
                    <p className="font-semibold text-gray-900">
                      {project.testimonial.author}
                    </p>
                    <p className="text-sm text-gray-600">
                      {project.testimonial.position}
                    </p>
                    <p className="text-sm text-gray-600">
                      {project.testimonial.company}
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Project Gallery */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
              Project Gallery
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {project.gallery.map((image, index) => (
                <div
                  key={index}
                  className="relative h-64 md:h-80 rounded-xl overflow-hidden"
                >
                  <Image
                    src={image}
                    alt={`${project.title} gallery image ${index + 1}`}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-blue-600">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Inspired by This Project?
            </h2>
            <p className="text-blue-100 mb-8 text-lg">
              Let's discuss how we can create something amazing for your brand.
            </p>
            <Link
              href="/contact"
              className="inline-block px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-200"
            >
              Start Your Project
            </Link>
          </div>
        </div>
      </section>

      {/* Related Projects */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
              More Projects
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {getProjects()
                .filter((p) => p.id !== project.id)
                .slice(0, 3)
                .map((relatedProject) => (
                  <article
                    key={relatedProject.id}
                    className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <Link href={`/projects/${relatedProject.slug}`}>
                      <div className="relative h-48 overflow-hidden">
                        <Image
                          src={relatedProject.image}
                          alt={relatedProject.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    </Link>

                    <div className="p-6">
                      <div className="flex items-center justify-between mb-3">
                        <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full">
                          {relatedProject.category}
                        </span>
                        <span className="text-gray-500 text-sm">
                          {relatedProject.duration}
                        </span>
                      </div>

                      <Link href={`/projects/${relatedProject.slug}`}>
                        <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-200">
                          {relatedProject.title}
                        </h3>
                      </Link>

                      <p className="text-gray-600 mb-4 line-clamp-2">
                        {relatedProject.description}
                      </p>

                      <Link
                        href={`/projects/${relatedProject.slug}`}
                        className="text-blue-600 hover:text-blue-800 font-medium text-sm transition-colors duration-200"
                      >
                        View Project →
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
