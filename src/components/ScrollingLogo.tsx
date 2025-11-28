'use client'

import { useEffect, useState } from 'react'

export default function ScrollingLogo() {
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      // Calculate scroll progress (0 to 1)
      const windowHeight = window.innerHeight
      const documentHeight = document.documentElement.scrollHeight
      const scrollTop = window.scrollY
      const maxScroll = documentHeight - windowHeight
      const progress = Math.min(scrollTop / maxScroll, 1)
      
      setScrollProgress(progress)
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() // Initial call
    
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Calculate position and rotation based on scroll
  const topPosition = scrollProgress * 100 // 0% to 100%
  const rotation = scrollProgress * 720 // 0 to 720 degrees (2 full rotations)
  
  // Hide logo when it reaches near the bottom (landed in the box)
  const opacity = scrollProgress > 0.95 ? 0 : 1
  
  return (
    <div 
      className="fixed left-1/2 z-40 pointer-events-none"
      style={{
        top: `${topPosition}%`,
        transform: `translate(-50%, -50%) perspective(1000px) rotateY(${rotation}deg) rotateX(${scrollProgress * 20}deg)`,
        transition: 'top 0.1s ease-out, opacity 0.3s ease-out',
        opacity: opacity,
      }}
    >
      <div 
        className="bg-black text-white px-8 py-4 text-3xl font-bold border-4 border-white shadow-2xl"
        style={{
          transformStyle: 'preserve-3d',
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
        }}
      >
        SHOP.SAKU
      </div>
    </div>
  )
}
