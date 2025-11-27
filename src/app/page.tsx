import { generateSEOMetadata } from '@/lib/metadata'
import HeroSection from '@/components/sections/HeroSection'
import ShowreelSection from '@/components/sections/ShowreelSection'
import ServicesGrid from '@/components/sections/ServicesGrid'
import ProjectsGrid from '@/components/sections/ProjectsGrid'

export const metadata = generateSEOMetadata({
  title: 'SharpEye Films - Professional Videographer Portfolio',
  description: 'Turning Video into Vibrant Conversations. We\'re your friendly video wizards creating fantastic commercials, corporate videos, social ads and many more.',
  url: '/',
})

export default function HomePage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <HeroSection />

      {/* Showreel Section */}
      <ShowreelSection />

      {/* Services Section */}
      <ServicesGrid />

      {/* Featured Projects */}
      <ProjectsGrid />
    </div>
  )
}

