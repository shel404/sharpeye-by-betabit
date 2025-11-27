'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

export default function FramerButton() {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.a
      href="/contact"
      className="relative flex items-center justify-center w-[188px] h-[60px] p-[5px] cursor-pointer overflow-hidden rounded-[40px] group"
      style={{
        background: 'linear-gradient(112deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.11) 100%)',
        borderTop: '2px solid rgba(255, 255, 255, 0.5)',
        borderLeft: '2px solid rgba(255, 255, 255, 0.5)',
        borderRight: 'none',
        borderBottom: 'none',
        backdropFilter: 'blur(15px)',
        WebkitBackdropFilter: 'blur(15px)',
      }}
      animate={isHovered ? "hover" : "initial"}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{
        boxShadow: '0px 12px 60px -1.25px rgba(0, 0, 0, 0.19)'
      }}
    >
      {/* Inner Container */}
      <motion.div
        className="relative flex items-center justify-center w-full h-full overflow-hidden rounded-[30px]"
        style={{
          backgroundColor: 'rgba(0, 0, 0, 0.55)',
          backdropFilter: 'blur(13px)',
          WebkitBackdropFilter: 'blur(13px)',
          borderRight: 'none',
          borderBottom: 'none',
        }}
        variants={{
          initial: { 
            borderTop: '2px solid rgba(255, 255, 255, 0)',
            borderLeft: '2px solid rgba(255, 255, 255, 0)'
          },
          hover: { 
            borderTop: '2px solid rgba(255, 255, 255, 0.5)',
            borderLeft: '2px solid rgba(255, 255, 255, 0.5)'
          }
        }}
        transition={{ duration: 0.3 }}
      >
        {/* Gradient Layer */}
        <motion.div
          className="absolute z-0 pointer-events-none"
          variants={{
            initial: {
              width: '100%',
              height: '100%',
              left: 0,
              top: 0,
              background: 'radial-gradient(127.9% 258% at -40.3% 0%, rgb(255, 171, 66) 51.7%, rgb(201, 145, 109) 75.4%, rgb(255, 99, 111) 100%)',
              borderRadius: 103
            },
            hover: {
              width: '16px',
              height: '16px', // Using percentage to approximate 'unset' or small size
              left: '20px',
              top: '21px',
              background: 'radial-gradient(80.8% 122% at 25.9% 30%, rgb(255, 171, 66) 33.2%, rgb(255, 99, 111) 100%)',
              borderRadius: 103
            },
          }}
          transition={{ 
            type: "spring",
            stiffness: 562,
            damping: 60,
            mass: 1
          }}
        />
        
        {/* Text */}
        <span className="relative z-10 font-[family-name:var(--font-syne)] font-bold text-white text-lg tracking-wide">
          Get Started
        </span>
      </motion.div>
    </motion.a>
  )
}
