import FAQSection from '@/components/sections/FAQSection'
import SlidingServices from '@/components/sections/SlidingServices'
import Link from 'next/link'
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="bg-[var(--color-dark)]">
      {/* 1. FAQ Section */}
      <FAQSection />
      
      {/* 2. Auto-Sliding Services Container */}
      <SlidingServices />
      
      {/* 3. Main Footer */}
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
          <div>
            <h4 className="font-[family-name:var(--font-syne)] font-semibold text-white mb-4 text-lg">
              Quick Links
            </h4>
            <nav className="flex flex-col gap-2">
              <Link
                href="/"
                className="text-white/80 hover:text-white transition-colors text-sm"
              >
                Home
              </Link>
              <Link
                href="/about"
                className="text-white/80 hover:text-white transition-colors text-sm"
              >
                About
              </Link>
              <Link
                href="/services"
                className="text-white/80 hover:text-white transition-colors text-sm"
              >
                Services
              </Link>
              <Link
                href="/projects"
                className="text-white/80 hover:text-white transition-colors text-sm"
              >
                Projects
              </Link>
              <Link
                href="/blogs"
                className="text-white/80 hover:text-white transition-colors text-sm"
              >
                Blog
              </Link>
              <Link
                href="/contact"
                className="text-white/80 hover:text-white transition-colors text-sm"
              >
                Contact
              </Link>
            </nav>
          </div>
          
          <div>
            <h4 className="font-[family-name:var(--font-syne)] font-semibold text-white mb-4 text-lg">
              Legal
            </h4>
            <nav className="flex flex-col gap-2">
              <Link
                href="/privacy-policy"
                className="text-white/80 hover:text-white transition-colors text-sm"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms-conditions"
                className="text-white/80 hover:text-white transition-colors text-sm"
              >
                Terms & Conditions
              </Link>
              <Link
                href="/refund-policy"
                className="text-white/80 hover:text-white transition-colors text-sm"
              >
                Refund Policy
              </Link>
            </nav>
          </div>
          
          <div>
            <h4 className="font-[family-name:var(--font-syne)] font-semibold text-white mb-4 text-lg">
              Social Media
            </h4>
            <div className="flex gap-4">
              <a
                href="#"
                className="text-white/80 hover:text-white transition-colors"
                aria-label="Facebook"
              >
                <FaFacebook size={20} />
              </a>
              <a
                href="#"
                className="text-white/80 hover:text-white transition-colors"
                aria-label="Twitter"
              >
                <FaTwitter size={20} />
              </a>
              <a
                href="#"
                className="text-white/80 hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <FaInstagram size={20} />
              </a>
              <a
                href="#"
                className="text-white/80 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <FaLinkedin size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <p className="text-white/50 text-sm">
              © 2024 SharpEye Films.
              <br />
              All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
