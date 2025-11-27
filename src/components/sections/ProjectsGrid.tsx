'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import VideoPlayer from '@/components/ui/VideoPlayer'

const projects = [
  {
    id: 1,
    title: 'Corporate Brand Film',
    category: 'Commercial',
    videoUrl: '/videos/project-1.mp4',
    slug: 'corporate-brand-film',
  },
  {
    id: 2,
    title: 'Product Launch Video',
    category: 'Product',
    videoUrl: '/videos/project-2.mp4',
    slug: 'product-launch',
  },
  {
    id: 3,
    title: 'Social Media Campaign',
    category: 'Social',
    videoUrl: '/videos/project-3.mp4',
    slug: 'social-campaign',
  },
  {
    id: 4,
    title: 'Event Coverage',
    category: 'Event',
    videoUrl: '/videos/project-4.mp4',
    slug: 'event-coverage',
  },
  {
    id: 5,
    title: 'Documentary Short',
    category: 'Documentary',
    videoUrl: '/videos/project-5.mp4',
    slug: 'documentary-short',
  },
  {
    id: 6,
    title: 'Music Video',
    category: 'Music',
    videoUrl: '/videos/showreel.mp4',
    slug: 'music-video',
  },
]

export default function ProjectsGrid() {
  return (
    <section className="py-20 px-6">
      <div className="container mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="font-[family-name:var(--font-syne)] text-4xl md:text-5xl font-bold text-white mb-4">
              <span
                className="bg-gradient-to-r from-white via-white to-transparent bg-clip-text text-transparent"
              >
                Featured Work
              </span>
            </h2>
            <p className="text-white/80 text-lg">
              Explore our latest projects and creative productions
            </p>
          </div>
          
          <Link
            href="/projects"
            className="hidden md:block px-6 py-3 rounded-full border border-white/30 text-white hover:bg-white/10 transition-colors"
          >
            View All Projects
          </Link>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Link href={`/projects/${project.slug}`} className="group block">
                <div className="aspect-video mb-4 rounded-[30px] overflow-hidden border border-white/10 bg-white/5 backdrop-blur-sm p-1.5 group-hover:border-white/20 transition-colors">
                  <div className="w-full h-full rounded-[24px] overflow-hidden">
                    <VideoPlayer
                      src={project.videoUrl}
                      className="group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>
                
                <div className="px-2">
                  <span className="text-[var(--color-primary)] text-sm font-medium">
                    {project.category}
                  </span>
                  <h3 className="font-[family-name:var(--font-syne)] text-xl font-semibold text-white mt-1 group-hover:text-[var(--color-primary)] transition-colors">
                    {project.title}
                  </h3>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Mobile View All Button */}
        <div className="mt-12 text-center md:hidden">
          <Link
            href="/projects"
            className="inline-block px-8 py-4 rounded-full border border-white/30 text-white hover:bg-white/10 transition-colors"
          >
            View All Projects
          </Link>
        </div>
      </div>
    </section>
  )
}
