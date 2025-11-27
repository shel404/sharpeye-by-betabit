'use client'

import { motion } from 'framer-motion'
import FramerButton from '@/components/ui/FramerButton'

export default function HeroSection() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/images/hero-bg.jpg" 
          alt="Background" 
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-dark)]/80 via-transparent to-[var(--color-dark)]" />
      </div>
      
      {/* Content */}
      <div className="relative z-10 w-full max-w-[1200px] mx-auto flex flex-col items-center justify-center text-center pt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-center"
        >
          <h1 className="font-[family-name:var(--font-syne)] text-5xl md:text-7xl lg:text-8xl font-bold mb-8 tracking-tight max-w-5xl leading-[1.1]">
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage: 'linear-gradient(160deg, rgb(255, 255, 255) 66.9%, rgba(0, 0, 0, 0) 94.2%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}
            >
              Turning Video into Vibrant Conversations.
            </span>
          </h1>
          
          <p className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto mb-12 font-[family-name:var(--font-syne)] font-medium text-center">
            We're your friendly video wizards creating fantastic commercials, corporate videos, social ads and many more.
          </p>
          
          {/* CTA Button */}
          <div className="flex justify-center w-full">
            <FramerButton />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
