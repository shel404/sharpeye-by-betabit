import VideoPlayer from '@/components/ui/VideoPlayer'

export default function ShowreelSection() {
  return (
    <section className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="font-[family-name:var(--font-syne)] text-4xl md:text-5xl font-bold text-white mb-4">
            <span
              className="bg-gradient-to-r from-white via-white to-transparent bg-clip-text text-transparent"
            >
              Watch Our Showreel
            </span>
          </h2>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            Experience our best work in action. See how we bring stories to life through stunning visuals and creative storytelling.
          </p>
        </div>

        {/* Video Player Container */}
        <div className="relative rounded-[30px] overflow-hidden border border-white/10 bg-white/5 backdrop-blur-sm p-2">
          <div className="aspect-video rounded-[24px] overflow-hidden">
            <VideoPlayer
              src="/videos/showreel.mp4"
              poster="/images/hero-image.jpg"
              title="SharpEye Films Showreel 2024"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
