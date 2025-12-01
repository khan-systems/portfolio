import { useEffect, useState } from 'react'
import { usePrefersReducedMotion } from './usePrefersReducedMotion'

export function useAnimatedCounter(
  end: number,
  duration: number = 2000,
  inView: boolean = true
) {
  const [count, setCount] = useState(0)
  const prefersReducedMotion = usePrefersReducedMotion()

  useEffect(() => {
    if (!inView) return

    if (prefersReducedMotion) {
      setCount(end)
      return
    }

    let startTime: number | null = null
    const startValue = 0

    const animate = (currentTime: number) => {
      if (startTime === null) startTime = currentTime
      const elapsed = currentTime - startTime
      const progress = Math.min(elapsed / duration, 1)

      // Ease out function
      const easeOut = 1 - Math.pow(1 - progress, 3)
      const current = startValue + (end - startValue) * easeOut

      setCount(Math.floor(current))

      if (progress < 1) {
        requestAnimationFrame(animate)
      } else {
        setCount(end)
      }
    }

    requestAnimationFrame(animate)
  }, [end, duration, inView, prefersReducedMotion])

  return count
}
