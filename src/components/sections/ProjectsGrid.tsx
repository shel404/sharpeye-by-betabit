'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import VideoPlayer from '@/components/ui/VideoPlayer'

const projects = [
  {
    id: 1,
    title: 'GreenWaves',
    category: 'Eco-Warriors',
    videoUrl: '/videos/project-1.mp4',
    slug: 'greenwaves',
  },
  {
    id: 2,
    title: 'Mystic Horizons',
    category: 'ModeElite',
    videoUrl: '/videos/project-2.mp4',
    slug: 'mystic-horizons',
  },
  {
    id: 3,
    title: 'Pixel Fusion',
    category: 'Techno',
    videoUrl: '/videos/project-3.mp4',
    slug: 'pixel-fusion',
  },
  {
    id: 4,
    title: 'EcoExplorer',
    category: 'GreenEarth',
    videoUrl: '/videos/project-4.mp4',
    slug: 'ecoexplorer',
  },
  {
    id: 5,
    title: 'Urban Uplift',
    category: 'MetroScape',
    videoUrl: '/videos/project-5.mp4',
    slug: 'urban-uplift',
  },
  {
    id: 6,
    title: 'Neon Nights',
    category: 'CityVibe',
    videoUrl: '/videos/showreel.mp4',
    slug: 'neon-nights',
  },
]

export default function ProjectsGrid() {
  return (
    <section className="py-20 px-6" id="projects">
      <div className="container mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="text-center md:text-left w-full md:w-auto">
            <h2 className="font-[family-name:var(--font-syne)] text-4xl md:text-5xl font-bold text-white mb-4">
              <span
                className="bg-gradient-to-r from-white via-white to-transparent bg-clip-text text-transparent"
              >
                Our Handpicked Featured Portfolio
              </span>
            </h2>
          </div>
          
          <Link
            href="/projects"
            className="hidden md:inline-flex items-center justify-center px-8 py-3 rounded-full border border-white/30 text-white hover:bg-white/10 transition-colors backdrop-blur-sm bg-[#0d0d0d] font-[family-name:var(--font-syne)]"
          >
            See All Projects
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
              <Link href={`/projects/${project.slug}`} className="group block h-full">
                <div className="aspect-video mb-4 rounded-[51px] overflow-hidden border border-white/10 bg-white/5 backdrop-blur-sm p-0 group-hover:border-white/20 transition-colors relative">
                  <div className="w-full h-full rounded-[51px] overflow-hidden">
                    <VideoPlayer
                      src={project.videoUrl}
                      className="group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>
                
                <div className="px-2">
                  <h3 className="font-[family-name:var(--font-syne)] text-2xl font-semibold text-white mb-1 group-hover:text-[var(--color-primary)] transition-colors">
                    {project.title}
                  </h3>
                  <span className="font-[family-name:var(--font-syne)] text-[13px] text-white/80">
                    {project.category}
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Mobile View All Button */}
        <div className="mt-12 text-center md:hidden">
          <Link
            href="/projects"
            className="inline-flex items-center justify-center px-8 py-3 rounded-full border border-white/30 text-white hover:bg-white/10 transition-colors backdrop-blur-sm bg-[#0d0d0d] font-[family-name:var(--font-syne)]"
          >
            See All Projects
          </Link>
        </div>
      </div>
    </section>
  )
}
