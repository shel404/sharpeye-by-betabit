import { generateSEOMetadata } from '@/lib/metadata'
import ServicesGrid from '@/components/sections/ServicesGrid'

export const metadata = generateSEOMetadata({
  title: 'About Us',
  description: 'Learn about SharpEye Films - a team of passionate video production professionals dedicated to creating compelling visual stories.',
  url: '/about',
})

export default function AboutPage() {
  return (
    <div className="pt-32 pb-20">
      <div className="container mx-auto px-6 max-w-4xl">
        {/* Page Header */}
        <div className="text-center mb-16">
          <h1 className="font-[family-name:var(--font-syne)] text-5xl md:text-6xl font-bold text-white mb-6">
            <span
              className="bg-gradient-to-r from-white via-white to-transparent bg-clip-text text-transparent"
            >
              About SharpEye Films
            </span>
          </h1>
          <p className="text-white/80 text-xl leading-relaxed max-w-3xl mx-auto">
            We are a creative video production company passionate about bringing stories to life through stunning visuals and innovative storytelling.
          </p>
        </div>

        {/* Content Sections */}
        <div className="space-y-12">
          {/* Mission */}
          <section>
            <h2 className="font-[family-name:var(--font-syne)] text-3xl font-bold text-white mb-4">
              Our Mission
            </h2>
            <p className="text-white/70 text-lg leading-relaxed">
              At SharpEye Films, we believe in the power of video to connect, inspire, and transform. Our mission is to help businesses and individuals tell their unique stories through exceptional video content that resonates with audiences and drives real results.
            </p>
          </section>

          {/* Values */}
          <section>
            <h2 className="font-[family-name:var(--font-syne)] text-3xl font-bold text-white mb-4">
              Our Values
            </h2>
            <div className="space-y-4">
              <div className="p-6 rounded-[20px] border border-white/10 backdrop-blur-sm"
                style={{
                  background: 'radial-gradient(71% 86.4% at -0.8% 0%, rgba(255, 255, 255, 0.05) 2.21%, rgba(255, 255, 255, 0) 100%)',
                }}
              >
                <h3 className="font-[family-name:var(--font-syne)] text-xl font-semibold text-white mb-2">
                  Creativity First
                </h3>
                <p className="text-white/70">
                  We push boundaries and explore innovative approaches to create unique and memorable content.
                </p>
              </div>

              <div className="p-6 rounded-[20px] border border-white/10 backdrop-blur-sm"
                style={{
                  background: 'radial-gradient(71% 86.4% at -0.8% 0%, rgba(255, 255, 255, 0.05) 2.21%, rgba(255, 255, 255, 0) 100%)',
                }}
              >
                <h3 className="font-[family-name:var(--font-syne)] text-xl font-semibold text-white mb-2">
                  Client Collaboration
                </h3>
                <p className="text-white/70">
                  Your vision is our priority. We work closely with you throughout every stage of production.
                </p>
              </div>

              <div className="p-6 rounded-[20px] border border-white/10 backdrop-blur-sm"
                style={{
                  background: 'radial-gradient(71% 86.4% at -0.8% 0%, rgba(255, 255, 255, 0.05) 2.21%, rgba(255, 255, 255, 0) 100%)',
                }}
              >
                <h3 className="font-[family-name:var(--font-syne)] text-xl font-semibold text-white mb-2">
                  Excellence in Execution
                </h3>
                <p className="text-white/70">
                  From concept to delivery, we maintain the highest standards of quality in every project.
                </p>
              </div>
            </div>
          </section>

          {/* Team */}
          <section>
            <h2 className="font-[family-name:var(--font-syne)] text-3xl font-bold text-white mb-4">
              Our Team
            </h2>
            <p className="text-white/70 text-lg leading-relaxed">
              Our diverse team brings together expertise in cinematography, editing, motion graphics, sound design,  and creative direction. With years of experience across commercial, corporate, and creative projects, we have the skills and passion to bring any vision to life.
            </p>
          </section>
        </div>
      </div>

      {/* CTA Section */}
      <div className="container mx-auto px-6 max-w-4xl mt-20">
        <div className="text-center p-12 rounded-[40px] border border-white/10"
          style={{
            background: 'radial-gradient(71% 86.4% at -0.8% 0%, rgba(255, 255, 255, 0.08) 2.21%, rgba(255, 255, 255, 0) 100%)',
          }}
        >
          <h2 className="font-[family-name:var(--font-syne)] text-3xl font-bold text-white mb-4">
            Ready to work together?
          </h2>
          <p className="text-white/70 text-lg mb-6">
            Let's create something amazing. Get in touch to discuss your next project.
          </p>
          <a
            href="/contact"
            className="inline-block px-8 py-4 rounded-full bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] text-white font-semibold hover:scale-105 transition-transform"
          >
            Contact Us
          </a>
        </div>
      </div>
    </div>
  )
}
