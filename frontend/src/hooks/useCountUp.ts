import { useEffect, useState } from 'react'

function easeOutCubic(t: number) {
  return 1 - (1 - t) ** 3
}

export function useCountUp(target: number, active: boolean, durationMs = 1400) {
  const [value, setValue] = useState(0)

  useEffect(() => {
    if (!active) return

    const reduced =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (reduced) {
      const id = requestAnimationFrame(() => setValue(target))
      return () => cancelAnimationFrame(id)
    }

    const start = performance.now()
    let frame = 0

    const tick = (now: number) => {
      const progress = Math.min(1, (now - start) / durationMs)
      setValue(Math.round(target * easeOutCubic(progress)))
      if (progress < 1) {
        frame = requestAnimationFrame(tick)
      }
    }

    const kickoff = requestAnimationFrame(() => {
      setValue(0)
      frame = requestAnimationFrame(tick)
    })

    return () => {
      cancelAnimationFrame(kickoff)
      cancelAnimationFrame(frame)
    }
  }, [active, target, durationMs])

  return active ? value : 0
}
