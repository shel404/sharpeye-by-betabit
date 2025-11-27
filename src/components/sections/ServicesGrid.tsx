'use client'

import { motion } from 'framer-motion'
import { Film, Video, Palette, Sparkles, Camera, Wand2 } from 'lucide-react'

const services = [
  {
    icon: Film,
    title: 'Video Production',
    description: 'Full-service video production from concept to completion',
  },
  {
    icon: Video,
    title: 'Post-Production',
    description: 'Expert editing, color grading, and finishing',
  },
  {
    icon: Palette,
    title: 'Motion Graphics',
    description: 'Eye-catching animations and visual effects',
  },
  {
    icon: Sparkles,
    title: 'VFX',
    description: 'Professional visual effects and compositing',
  },
  {
    icon: Camera,
    title: 'Cinematography',
    description: 'Beautiful, cinematic camera work',
  },
  {
    icon: Wand2,
    title: 'Creative Direction',
    description: 'Strategic planning and creative concepts',
  },
]

export default function ServicesGrid() {
  return (
    <section className="py-20 px-6">
      <div className="container mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-[family-name:var(--font-syne)] text-4xl md:text-5xl font-bold text-white mb-4">
            <span
              className="bg-gradient-to-r from-white via-white to-transparent bg-clip-text text-transparent"
            >
              Our Services
            </span>
          </h2>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            We offer comprehensive video production services tailored to your needs
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.02 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-8 rounded-[30px] border border-white/10 backdrop-blur-lg hover:border-white/30 transition-all group"
                style={{
                  background: 'radial-gradient(71% 86.4% at -0.8% 0%, rgba(255, 255, 255, 0.05) 2.21%, rgba(255, 255, 255, 0) 100%)',
                }}
              >
                <div className="mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-secondary)] flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Icon className="text-white" size={28} />
                  </div>
                </div>
                
                <h3 className="font-[family-name:var(--font-syne)] text-2xl font-semibold text-white mb-3">
                  {service.title}
                </h3>
                
                <p className="text-white/70 leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
