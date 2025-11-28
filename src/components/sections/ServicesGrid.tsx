'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

const services = [
  {
    id: 'pre-production',
    title: 'Pre-Production',
    description: 'Pre-production serves as the pivotal phase in any creative endeavor, encompassing planning, idea refinement, budgeting, schedule creation, and the meticulous organization of logistical details.',
    image: '/images/service-1.jpg', // Placeholder, need to check assets
    gradient: 'linear-gradient(98deg, #ffffff 0%, rgba(255, 255, 255, 0.77) 100%)'
  },
  {
    id: 'production',
    title: 'Production',
    description: 'Production represents the dynamic phase of a creative project, where the plans from pre-production spring to life, with cameras rolling, actors delivering their performances, and the realization of the creative vision.',
    image: '/images/service-2.jpg', // Placeholder
    gradient: 'linear-gradient(98deg, #ffffff 0%, rgba(255, 255, 255, 0.77) 100%)'
  },
  {
    id: 'post-production',
    title: 'Post-Production',
    description: 'Post-production emerges as the pivotal phase in creative projects, wherein raw content undergoes a transformation into its refined, polished state where editing, sound design, visual effects, and essential adjustments to breathe life into the project.',
    image: '/images/service-3.jpg', // Placeholder
    gradient: 'linear-gradient(98deg, #ffffff 0%, rgba(255, 255, 255, 0.77) 100%)'
  }
]

export default function ServicesGrid() {
  const [activeId, setActiveId] = useState<string | null>('pre-production')

  return (
    <section className="py-20 px-6" id="services">
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-[family-name:var(--font-syne)] text-[56px] font-bold text-white mb-4 leading-[1.1em] tracking-[-0.02em]">
            <span className="bg-[linear-gradient(132deg,#ffffff_11.68%,rgba(0,0,0,0)_100%)] bg-clip-text text-transparent">
              From Concept To Completion:<br />
              We've Got You Covered!
            </span>
          </h2>
        </div>

        {/* Services Accordion */}
        <div className="flex flex-col gap-4">
          {services.map((service) => (
            <motion.div
              key={service.id}
              className={`relative overflow-hidden rounded-[30px] border border-white/30 backdrop-blur-md transition-all duration-500 ease-in-out cursor-pointer group`}
              style={{
                background: 'radial-gradient(50% 50% at 0% 0%, rgba(255, 255, 255, 0.15) 2.21%, rgba(255, 255, 255, 0) 100%)'
              }}
              onClick={() => setActiveId(activeId === service.id ? null : service.id)}
              initial={false}
              animate={{
                height: activeId === service.id ? 500 : 100
              }}
            >
              <div className="p-8 h-full flex flex-col relative z-10">
                <div className="flex justify-between items-center w-full">
                   <h3 className="font-[family-name:var(--font-syne)] text-3xl font-bold text-white">
                      <span className="bg-clip-text text-transparent" style={{ backgroundImage: service.gradient }}>
                        {service.title}
                      </span>
                   </h3>
                   {/* Arrow Icon or Indicator could go here */}
                </div>

                <AnimatePresence>
                  {activeId === service.id && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.3, delay: 0.1 }}
                      className="mt-6 max-w-xl"
                    >
                      <p className="text-white/80 text-lg leading-relaxed mb-8">
                        {service.description}
                      </p>
                      
                      <Link 
                        href="/services"
                        className="inline-flex items-center justify-center px-8 py-3 rounded-full bg-[#0d0d0d] border border-white/30 text-white font-[family-name:var(--font-syne)] hover:bg-white/10 transition-colors backdrop-blur-sm"
                      >
                        Learn More
                      </Link>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Background Image (Visible on Expand) */}
              <motion.div
                 className="absolute right-0 top-0 w-1/2 h-full z-0 opacity-0 md:opacity-100 pointer-events-none"
                 animate={{
                    opacity: activeId === service.id ? 1 : 0,
                    x: activeId === service.id ? 0 : 100
                 }}
                 transition={{ duration: 0.5 }}
              >
                  {/* Placeholder for image - using a gradient/div for now if image not available */}
                  <div className="w-full h-full bg-gradient-to-l from-black/20 to-transparent" />
                  {/* <Image src={service.image} alt={service.title} fill className="object-cover" /> */}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
