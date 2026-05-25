import { useEffect, useRef, useState } from 'react'
import { ArrowRight, Calculator, Check } from 'lucide-react'
import { ScrollReveal } from '@/components/motion/ScrollReveal'
import { LANDING_ALGORITHM_STEPS } from '@/constants/landing'

/** Step reveal delays after section enters viewport (ms). */
const STEP_REVEAL_DELAYS_MS = [200, 700, 1200] as const

function prefersReducedMotion() {
  return (
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches
  )
}

export function AlgorithmSection() {
  const stepsRef = useRef<HTMLDivElement>(null)
  const revealStartedRef = useRef(false)
  const reducedMotion = prefersReducedMotion()
  const [sectionVisible, setSectionVisible] = useState(reducedMotion)
  const [revealedCount, setRevealedCount] = useState(() =>
    reducedMotion ? LANDING_ALGORITHM_STEPS.length : 0,
  )

  useEffect(() => {
    if (sectionVisible) return

    const el = stepsRef.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setSectionVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -5% 0px' },
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [sectionVisible])

  useEffect(() => {
    if (!sectionVisible || revealStartedRef.current) return
    revealStartedRef.current = true

    if (reducedMotion) return

    const timers = LANDING_ALGORITHM_STEPS.map((_, index) =>
      window.setTimeout(
        () => setRevealedCount(index + 1),
        STEP_REVEAL_DELAYS_MS[index] ?? STEP_REVEAL_DELAYS_MS.at(-1)!,
      ),
    )

    return () => timers.forEach(window.clearTimeout)
  }, [sectionVisible, reducedMotion])

  return (
    <div className="py-8 sm:py-10">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-brand dark:text-indigo-300">
              Алгоритъм
            </p>
            <h3 className="mt-2 text-2xl font-bold tracking-tight text-slate-950 dark:text-slate-50">
              Три проверими стъпки
            </h3>
          </div>
        </ScrollReveal>

        <div className="relative mt-8">
          <div
            className={`algorithm-steps-connector absolute left-[16.666%] right-[16.666%] top-12 hidden h-px bg-gradient-to-r from-transparent via-indigo-400 to-transparent lg:block dark:via-violet-500 ${
              revealedCount >= 3
                ? 'algorithm-steps-connector--full'
                : revealedCount >= 2
                  ? 'algorithm-steps-connector--mid'
                  : revealedCount >= 1
                    ? 'algorithm-steps-connector--start'
                    : ''
            }`}
            aria-hidden
          />

          <div ref={stepsRef} className="algorithm-steps grid gap-5 lg:grid-cols-3">
            {LANDING_ALGORITHM_STEPS.map((step, index) => {
              const isRevealed = index < revealedCount

              return (
                <article
                  key={step.step}
                  className={`algorithm-step-card glass-card-solid group relative flex h-full flex-col rounded-2xl border border-indigo-100/60 p-5 dark:border-slate-600/50 ${
                    isRevealed ? 'algorithm-step-card--visible' : ''
                  }`}
                >
                  <span
                    className={`algorithm-step-badge relative z-10 flex h-11 w-11 items-center justify-center rounded-full text-sm font-bold text-white shadow-lg ring-4 ring-white dark:ring-slate-900 ${
                      isRevealed
                        ? 'bg-emerald-600 algorithm-step-badge--confirmed'
                        : 'bg-gradient-to-br from-indigo-600 to-violet-600'
                    }`}
                  >
                    {isRevealed ? (
                      <Check className="h-5 w-5 algorithm-step-check" strokeWidth={3} />
                    ) : (
                      <span className="algorithm-step-number">{step.step}</span>
                    )}
                  </span>
                  <h3 className="relative z-10 mt-4 font-bold text-slate-900 dark:text-slate-50">
                    {step.title}
                  </h3>
                  <p className="relative z-10 mt-2 flex-1 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                    {step.description}
                  </p>
                  {index < LANDING_ALGORITHM_STEPS.length - 1 && (
                    <ArrowRight
                      className={`algorithm-step-arrow absolute -right-4 top-14 hidden h-5 w-5 lg:block ${
                        index + 1 < revealedCount ? 'algorithm-step-arrow--active' : ''
                      }`}
                      aria-hidden
                    />
                  )}
                </article>
              )
            })}
          </div>
        </div>

        <ScrollReveal className="mt-8" delay={120}>
          <div className="rounded-2xl border border-indigo-200/70 bg-gradient-to-br from-indigo-50/95 via-white to-violet-50/70 p-5 sm:p-6 dark:border-indigo-500/35 dark:from-slate-800/95 dark:via-slate-900 dark:to-indigo-950/55">
            <div className="flex items-start gap-3">
              <span className="inline-flex rounded-xl bg-brand-soft p-2.5 text-brand dark:bg-indigo-950 dark:text-indigo-300">
                <Calculator className="h-5 w-5" />
              </span>
              <div className="min-w-0 flex-1">
                <p className="text-sm font-semibold text-slate-900 dark:text-slate-100">
                  Формула (опростено)
                </p>
                <p className="mt-2 rounded-lg border border-indigo-100/80 bg-white/80 px-3 py-2 font-mono text-sm leading-relaxed text-slate-800 dark:border-slate-600 dark:bg-slate-800/80 dark:text-slate-100 sm:text-base">
                  надеждност = сравнение между обявена стара цена и реална ценова история
                </p>
                <p className="mt-3 text-xs text-slate-500 dark:text-slate-400">
                  Резултатът е число от 0 до 100: по-висок означава по-надеждно намаление.
                  Ниският резултат сигнализира за подозрителна промоция.
                </p>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </div>
  )
}
