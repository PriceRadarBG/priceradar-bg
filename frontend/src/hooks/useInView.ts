import { useEffect, useRef, useState } from 'react'

function prefersReducedMotion() {
  return (
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches
  )
}

type UseInViewOptions = {
  threshold?: number
  rootMargin?: string
}

export function useInView<T extends HTMLElement>(
  thresholdOrOptions: number | UseInViewOptions = 0.18,
) {
  const threshold =
    typeof thresholdOrOptions === 'number' ? thresholdOrOptions : thresholdOrOptions.threshold ?? 0.18
  const rootMargin =
    typeof thresholdOrOptions === 'number'
      ? '0px 0px -12% 0px'
      : thresholdOrOptions.rootMargin ?? '0px 0px -12% 0px'
  const ref = useRef<T | null>(null)
  const [inView, setInView] = useState(prefersReducedMotion)

  useEffect(() => {
    if (prefersReducedMotion()) return

    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          observer.disconnect()
        }
      },
      { threshold, rootMargin },
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [rootMargin, threshold])

  return { ref, inView }
}
