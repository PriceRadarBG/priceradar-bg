import { useEffect, useState } from 'react'
import { Check, Minus } from 'lucide-react'
import { ModernSectionHeader } from '@/components/landing/ModernSectionHeader'
import { ScrollReveal } from '@/components/motion/ScrollReveal'
import { useInView } from '@/hooks/useInView'

const trackerPoints = [
  { id: 'price', label: 'Показва само текуща цена' },
  { id: 'context', label: 'Липсва контекст от историята' },
  { id: 'score', label: 'Без оценка на надеждност' },
]

const prPoints = [
  { id: 'history', label: 'История на цените във времето' },
  { id: 'fake', label: 'Анализ на фалшиви намаления' },
  { id: 'compare', label: 'Сравнение между магазини с контекст' },
  { id: 'bg', label: 'Фокус върху български онлайн магазини' },
]

const comparisonSequence = [
  ...trackerPoints.map((point) => ({ side: 'tracker' as const, id: point.id })),
  ...prPoints.map((point) => ({ side: 'priceradar' as const, id: point.id })),
]

const ROTATE_MS = 2800

export function ComparisonSection() {
  const { ref, inView } = useInView<HTMLElement>({
    threshold: 0.22,
    rootMargin: '0px 0px -12% 0px',
  })
  const [activeStep, setActiveStep] = useState(0)
  const [paused, setPaused] = useState(false)
  const activeItem = comparisonSequence[activeStep]

  useEffect(() => {
    if (!inView || paused) return

    const reduced =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduced) return

    const id = window.setInterval(() => {
      setActiveStep((i) => (i + 1) % comparisonSequence.length)
    }, ROTATE_MS)
    return () => window.clearInterval(id)
  }, [inView, paused])

  return (
    <section
      id="comparison"
      ref={ref}
      className="border-y border-indigo-100/50 bg-gradient-to-b from-white to-indigo-50/25 py-8 sm:py-11 dark:border-slate-800 dark:from-slate-900 dark:to-slate-900/80"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <ModernSectionHeader
          badge="Сравнение"
          title="С какво надгражда съществуващите решения?"
          subtitle="Много инструменти показват цена. PriceRadar BG добавя история, контекст и оценка на надеждност за български онлайн магазини."
        />

        <div className="mt-8 flex justify-center">
          <div
            className="inline-flex rounded-full border border-indigo-200/80 bg-white/90 p-1 text-xs font-semibold dark:border-slate-600 dark:bg-slate-800/90"
            role="status"
            aria-live="polite"
          >
            <span className="rounded-full bg-slate-100 px-3 py-1 text-slate-500 dark:bg-slate-700 dark:text-slate-400">
              Обикновени trackers
            </span>
            <span className="mx-1 text-slate-300 dark:text-slate-600">vs</span>
            <span className="rounded-full bg-gradient-to-r from-indigo-600 to-violet-600 px-3 py-1 text-white">
              PriceRadar BG
            </span>
          </div>
        </div>

        <div className="mt-8 grid items-stretch gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <ScrollReveal delay={0}>
            <article
              tabIndex={0}
              onFocus={() => setPaused(true)}
              onBlur={() => setPaused(false)}
              onMouseEnter={() => setPaused(true)}
              onMouseLeave={() => setPaused(false)}
              className="interactive-card h-full rounded-3xl border border-slate-200/90 bg-white/95 p-6 shadow-sm dark:border-slate-600/55 dark:bg-slate-800/85"
            >
              <p className="text-sm font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">
                Обикновени price trackers
              </p>
              <ul className="mt-5 space-y-3.5">
                {trackerPoints.map((point) => {
                  const lit = activeItem.side === 'tracker' && activeItem.id === point.id
                  return (
                    <li
                      key={point.id}
                      className={`flex items-start gap-3 rounded-xl px-2 py-1.5 text-sm transition duration-500 ${
                        lit
                          ? 'bg-slate-100/90 text-slate-800 dark:bg-slate-700/50 dark:text-slate-100'
                          : 'text-slate-500 dark:text-slate-400'
                      }`}
                    >
                      <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-slate-100 dark:bg-slate-700">
                        <Minus className={`h-3.5 w-3.5 transition ${lit ? 'text-slate-600' : 'text-slate-400'}`} />
                      </span>
                      {point.label}
                    </li>
                  )
                })}
              </ul>
            </article>
          </ScrollReveal>

          <ScrollReveal delay={120}>
            <article
              tabIndex={0}
              onFocus={() => setPaused(true)}
              onBlur={() => setPaused(false)}
              onMouseEnter={() => setPaused(true)}
              onMouseLeave={() => setPaused(false)}
              className="interactive-card relative h-full overflow-hidden rounded-3xl border-2 border-indigo-300/60 bg-gradient-to-br from-indigo-600 via-brand to-violet-700 p-6 text-white shadow-2xl shadow-indigo-500/30 dark:border-indigo-400/40 lg:scale-[1.02] lg:origin-left"
            >
              <div
                className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-white/15 blur-2xl"
                aria-hidden
              />
              <p className="relative text-sm font-bold uppercase tracking-wide text-indigo-100">
                PriceRadar BG
              </p>
              <ul className="relative mt-5 space-y-3.5">
                {prPoints.map((point) => {
                  const lit = activeItem.side === 'priceradar' && activeItem.id === point.id
                  return (
                    <li
                      key={point.id}
                      className={`flex items-start gap-3 rounded-xl px-2 py-1.5 text-sm transition duration-500 ${
                        lit ? 'bg-white/20 shadow-inner' : 'text-indigo-100/85'
                      }`}
                    >
                      <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-white/25">
                        <Check
                          className={`h-4 w-4 transition ${lit ? 'scale-110 opacity-100' : 'opacity-70'}`}
                          strokeWidth={2.5}
                        />
                      </span>
                      {point.label}
                    </li>
                  )
                })}
              </ul>
              <p className="relative mt-6 rounded-xl border border-white/20 bg-white/10 px-3 py-2 text-sm leading-relaxed text-indigo-50">
                PriceRadar BG добавя история, контекст и оценка на надеждност за български онлайн магазини.
              </p>
            </article>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
