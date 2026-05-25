import { useCallback, useEffect, useRef, useState } from 'react'

type Tilt = { rotateX: number; rotateY: number }

export function useHeroParallaxTilt(maxDeg = 3.5) {
  const ref = useRef<HTMLDivElement>(null)
  const [tilt, setTilt] = useState<Tilt>({ rotateX: 0, rotateY: 0 })
  const [motionOk, setMotionOk] = useState(true)

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    const update = () => setMotionOk(!mq.matches)
    update()
    mq.addEventListener('change', update)
    return () => mq.removeEventListener('change', update)
  }, [])

  const onMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (!motionOk || !ref.current) return
      const rect = ref.current.getBoundingClientRect()
      const nx = (e.clientX - rect.left) / rect.width - 0.5
      const ny = (e.clientY - rect.top) / rect.height - 0.5
      setTilt({
        rotateY: nx * maxDeg,
        rotateX: -ny * maxDeg * 0.65,
      })
    },
    [maxDeg, motionOk],
  )

  const onMouseLeave = useCallback(() => {
    setTilt({ rotateX: 0, rotateY: 0 })
  }, [])

  const transform =
    motionOk && (tilt.rotateX !== 0 || tilt.rotateY !== 0)
      ? `rotateX(${tilt.rotateX}deg) rotateY(${tilt.rotateY}deg)`
      : undefined

  return { ref, onMouseMove, onMouseLeave, transform, motionOk }
}
