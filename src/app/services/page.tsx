import { generateSEOMetadata } from '@/lib/metadata'
import ServicesGrid from '@/components/sections/ServicesGrid'

export const metadata = generateSEOMetadata({
  title: 'Our Services',
  description: 'Professional video production services including video production, post-production, motion graphics, VFX, cinematography, and creative direction.',
  url: '/services',
})

export default function ServicesPage() {
  return (
    <div className="pt-32 pb-20">
      <div className="container mx-auto px-6 max-w-6xl">
        {/* Page Header */}
        <div className="text-center mb-16">
          <h1 className="font-[family-name:var(--font-syne)] text-5xl md:text-6xl font-bold text-white mb-6">
            <span
              className="bg-gradient-to-r from-white via-white to-transparent bg-clip-text text-transparent"
            >
              Our Services
            </span>
          </h1>
          <p className="text-white/80 text-xl leading-relaxed max-w-3xl mx-auto">
            From concept to completion, we provide comprehensive video production services tailored to your unique needs and goals.
          </p>
        </div>

        {/* Services Grid */}
        <ServicesGrid />

        {/* Service Details */}
        <div className="mt-20 space-y-16">
          {/* Video Production */}
          <section className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-[family-name:var(--font-syne)] text-4xl font-bold text-white mb-6">
                Full-Service Video Production
              </h2>
              <p className="text-white/70 text-lg leading-relaxed mb-4">
                We handle every aspect of video production from initial concept development through final delivery. Our experienced team manages:
              </p>
              <ul className="space-y-2 text-white/70">
                <li className="flex items-start gap-2">
                  <span className="text-[var(--color-primary)] mt-1">•</span>
                  <span>Pre-production planning and storyboarding</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[var(--color-primary)] mt-1">•</span>
                  <span>Location scouting and talent casting</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[var(--color-primary)] mt-1">•</span>
                  <span>Professional filming with cinema-grade equipment</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[var(--color-primary)] mt-1">•</span>
                  <span>Project management and coordination</span>
                </li>
              </ul>
            </div>
            <div className="aspect-video bg-white/5 rounded-[30px] border border-white/10" />
          </section>

          {/* Post-Production */}
          <section className="grid md:grid-cols-2 gap-12 items-center">
            <div className="aspect-video bg-white/5 rounded-[30px] border border-white/10 md:order-1" />
            <div className="md:order-2">
              <h2 className="font-[family-name:var(--font-syne)] text-4xl font-bold text-white mb-6">
                Professional Post-Production
              </h2>
              <p className="text-white/70 text-lg leading-relaxed mb-4">
                Transform raw footage into polished, professional content with our post-production expertise:
              </p>
              <ul className="space-y-2 text-white/70">
                <li className="flex items-start gap-2">
                  <span className="text-[var(--color-primary)] mt-1">•</span>
                  <span>Expert video editing and cutting</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[var(--color-primary)] mt-1">•</span>
                  <span>Professional color grading and correction</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[var(--color-primary)] mt-1">•</span>
                  <span>Sound design and audio mixing</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[var(--color-primary)] mt-1">•</span>
                  <span>Format optimization for all platforms</span>
                </li>
              </ul>
            </div>
          </section>
        </div>

        {/* CTA */}
        <div className="mt-20 text-center p-12 rounded-[40px] border border-white/10"
          style={{
            background: 'radial-gradient(71% 86.4% at -0.8% 0%, rgba(255, 255, 255, 0.08) 2.21%, rgba(255, 255, 255, 0) 100%)',
          }}
        >
          <h2 className="font-[family-name:var(--font-syne)] text-3xl font-bold text-white mb-4">
            Let's Discuss Your Project
          </h2>
          <p className="text-white/70 text-lg mb-6 max-w-2xl mx-auto">
            Every project is unique. Contact us to discuss your specific needs and how we can help bring your vision to life.
          </p>
          <a
            href="/contact"
            className="inline-block px-8 py-4 rounded-full bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] text-white font-semibold hover:scale-105 transition-transform"
          >
            Get Started
          </a>
        </div>
      </div>
    </div>
  )
}
