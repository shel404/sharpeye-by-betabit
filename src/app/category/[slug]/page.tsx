import { generateSEOMetadata } from "@/lib/metadata";
import { getProjectsByCategory, categories } from "@/lib/data/projects";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

interface CategoryPageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return categories
    .filter((cat) => cat !== "All")
    .map((category) => ({
      slug: category.toLowerCase().replace(/\s+/g, "-"),
    }));
}

export async function generateMetadata({ params }: CategoryPageProps) {
  const categoryName = params.slug
    .replace(/-/g, " ")
    .replace(/\b\w/g, (l) => l.toUpperCase());

  return generateSEOMetadata({
    title: `${categoryName} Projects - SharpEye Films`,
    description: `Explore our ${categoryName.toLowerCase()} video production projects and see how we bring creative visions to life.`,
    url: `/category/${params.slug}`,
  });
}

export default function CategoryPage({ params }: CategoryPageProps) {
  const categoryName = params.slug
    .replace(/-/g, " ")
    .replace(/\b\w/g, (l) => l.toUpperCase());
  const projects = getProjectsByCategory(categoryName);

  if (projects.length === 0) {
    notFound();
  }

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-black">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center space-x-4 mb-6">
              <Link
                href="/projects"
                className="text-blue-400 hover:text-blue-300 transition-colors duration-200"
              >
                ← Back to All Projects
              </Link>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              {categoryName} Projects
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Discover our {categoryName.toLowerCase()} video production work
              and creative solutions
            </p>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <article
                key={project.id}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <Link href={`/projects/${project.slug}`}>
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="w-16 h-16 bg-white bg-opacity-90 rounded-full flex items-center justify-center">
                          <svg
                            className="w-6 h-6 text-gray-900 ml-1"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path d="M8 5v10l8-5-8-5z" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>

                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full">
                      {project.category}
                    </span>
                    <span className="text-gray-500 text-sm">
                      {project.duration}
                    </span>
                  </div>

                  <Link href={`/projects/${project.slug}`}>
                    <h2 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-200">
                      {project.title}
                    </h2>
                  </Link>

                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  <div className="flex items-center justify-between">
                    <div className="flex flex-wrap gap-2">
                      {project.tags.slice(0, 2).map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <Link
                      href={`/projects/${project.slug}`}
                      className="text-blue-600 hover:text-blue-800 font-medium text-sm transition-colors duration-200"
                    >
                      View Project →
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Create Your {categoryName} Project?
            </h2>
            <p className="text-blue-100 mb-8 text-lg">
              Let's collaborate to bring your vision to life with our expertise
              in {categoryName.toLowerCase()} production.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-200"
              >
                Start a Project
              </Link>
              <Link
                href="/services"
                className="px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition-colors duration-200"
              >
                View Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
