'use client'

import { useEffect, useState } from 'react'
import { trackScrollDepth } from '../components/GoogleAnalytics'

export function useScrollTracking() {
  const [trackedDepths, setTrackedDepths] = useState(new Set<number>())

  useEffect(() => {
    let ticking = false
    const depths = [25, 50, 75, 90, 100]

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const windowHeight = window.innerHeight
          const documentHeight = document.documentElement.scrollHeight - windowHeight
          const scrollTop = window.scrollY
          const scrollPercentage = Math.round((scrollTop / documentHeight) * 100)

          depths.forEach(depth => {
            if (scrollPercentage >= depth && !trackedDepths.has(depth)) {
              trackScrollDepth(depth)
              setTrackedDepths(prev => new Set(prev).add(depth))
            }
          })

          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    
    // Track initial position
    handleScroll()

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [trackedDepths])
}