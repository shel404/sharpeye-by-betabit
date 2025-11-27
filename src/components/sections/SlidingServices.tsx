'use client'

import { motion } from 'framer-motion'

const services = [
  'Motion Graphics',
  'VFX',
  'Color Grading',
  '3D Animation',
  'Post-Production',
  'Pre-Production',
  'Video Editing',
  'Sound Design',
  'Cinematography',
  'Storyboarding',
  'Corporate Videos',
  'Commercials',
]

export default function SlidingServices() {
  return (
    <div className="py-8 overflow-hidden border-y border-white/10">
      <motion.div
        className="flex gap-8 whitespace-nowrap"
        animate={{
          x: ['0%', '-50%'],
        }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: 'loop',
            duration: 30,
            ease: 'linear',
          },
        }}
      >
        {/* Duplicate the services array for seamless loop */}
        {[...services, ...services].map((service, index) => (
          <span
            key={index}
            className="font-[family-name:var(--font-syne)] text-2xl md:text-3xl font-semibold text-white/50 select-none"
          >
            {service}
          </span>
        ))}
      </motion.div>
    </div>
  )
}
