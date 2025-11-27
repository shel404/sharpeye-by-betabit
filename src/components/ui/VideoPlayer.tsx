'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Play, Pause } from 'lucide-react'

interface VideoPlayerProps {
  src: string
  poster?: string
  title?: string
  className?: string
}

export default function VideoPlayer({ src, poster, title, className = '' }: VideoPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false)
  const [videoRef, setVideoRef] = useState<HTMLVideoElement | null>(null)

  const togglePlay = () => {
    if (videoRef) {
      if (isPlaying) {
        videoRef.pause()
      } else {
        videoRef.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  return (
    <div className={`relative group ${className}`}>
      <video
        ref={setVideoRef}
        src={src}
        poster={poster}
        className="w-full h-full object-cover rounded-[30px]"
        playsInline
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
      />
      
      {/* Play/Pause Overlay */}
      <motion.button
        onClick={togglePlay}
        className="absolute inset-0 flex items-center justify-center bg-black/30 rounded-[30px] transition-opacity"
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        animate={{ opacity: isPlaying ? 0 : 1 }}
      >
        <motion.div
          className="w-20 h-20 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          {isPlaying ? (
            <Pause className="text-gray-900" size={32} fill="currentColor" />
          ) : (
            <Play className="text-gray-900 ml-1" size={32} fill="currentColor" />
          )}
        </motion.div>
      </motion.button>

      {title && (
        <div className="absolute bottom-6 left-6 right-6">
          <h3 className="font-[family-name:var(--font-syne)] text-2xl font-bold text-white">
            {title}
          </h3>
        </div>
      )}
    </div>
  )
}
