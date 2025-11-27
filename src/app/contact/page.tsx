import { generateSEOMetadata } from '@/lib/metadata'

export const metadata = generateSEOMetadata({
  title: 'Contact Us',
  description: 'Get in touch with SharpEye Films. Let\'s discuss your next video production project.',
  url: '/contact',
})

export default function ContactPage() {
  return (
    <div className="pt-32 pb-20">
      <div className="container mx-auto px-6 max-w-4xl">
        {/* Page Header */}
        <div className="text-center mb-16">
          <h1 className="font-[family-name:var(--font-syne)] text-5xl md:text-6xl font-bold text-white mb-6">
            <span
              className="bg-gradient-to-r from-white via-white to-transparent bg-clip-text text-transparent"
            >
              Let's Create Together
            </span>
          </h1>
          <p className="text-white/80 text-xl leading-relaxed max-w-3xl mx-auto">
            Have a project in mind? We'd love to hear from you. Fill out the form below and we'll get back to you within 24 hours.
          </p>
        </div>

        {/* Contact Form */}
        <div className="p-8 md:p-12 rounded-[40px] border border-white/10"
          style={{
            background: 'radial-gradient(71% 86.4% at -0.8% 0%, rgba(255, 255, 255, 0.05) 2.21%, rgba(255, 255, 255, 0) 100%)',
          }}
        >
          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-white font-medium mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/40 focus:border-white/30 focus:outline-none transition-colors"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-white font-medium mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/40 focus:border-white/30 focus:outline-none transition-colors"
                  placeholder="john@example.com"
                />
              </div>
            </div>

            <div>
              <label htmlFor="subject" className="block text-white font-medium mb-2">
                Subject *
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                required
                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/40 focus:border-white/30 focus:outline-none transition-colors"
                placeholder="Project Inquiry"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-white font-medium mb-2">
                Message *
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={6}
                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/40 focus:border-white/30 focus:outline-none transition-colors resize-none"
                placeholder="Tell us about your project..."
              />
            </div>

            <button
              type="submit"
              className="w-full md:w-auto px-8 py-4 rounded-full bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] text-white font-semibold hover:scale-105 transition-transform"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Contact Info */}
        <div className="mt-16 grid md:grid-cols-3 gap-8 text-center">
          <div>
            <h3 className="font-[family-name:var(--font-syne)] text-xl font-semibold text-white mb-2">
              Email
            </h3>
            <a href="mailto:hello@sharpeyefilms.com" className="text-white/70 hover:text-[var(--color-primary)] transition-colors">
              hello@sharpeyefilms.com
            </a>
          </div>

          <div>
            <h3 className="font-[family-name:var(--font-syne)] text-xl font-semibold text-white mb-2">
              Phone
            </h3>
            <a href="tel:+1234567890" className="text-white/70 hover:text-[var(--color-primary)] transition-colors">
              +1 (234) 567-890
            </a>
          </div>

          <div>
            <h3 className="font-[family-name:var(--font-syne)] text-xl font-semibold text-white mb-2">
              Location
            </h3>
            <p className="text-white/70">
              Remote & On-site
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
