import { ArrowRight, CheckCircle2, ShieldAlert, Store, TrendingDown } from 'lucide-react'
import { LandingButton } from '@/components/landing/LandingButton'
import { useCountUp } from '@/hooks/useCountUp'
import { useInView } from '@/hooks/useInView'

const historyBars = [62, 58, 55, 57, 51, 49, 48, 47, 50, 48, 46, 44]
const confidenceTarget = 23

export function HeroSplit() {
  const { ref, inView } = useInView<HTMLElement>({
    threshold: 0.1,
    rootMargin: '0px 0px -8% 0px',
  })
  const confidence = useCountUp(confidenceTarget, inView, 1300)

  return (
    <section
      ref={ref}
      className="hero-premium relative overflow-hidden border-b border-indigo-100/60 bg-[var(--gradient-hero)] dark:border-slate-800/90"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(99,102,241,0.18),transparent_32%),radial-gradient(circle_at_85%_18%,rgba(139,92,246,0.14),transparent_28%)]"
        aria-hidden
      />
      {/* Additional decorative orbs */}
      <div
        className="pointer-events-none absolute -right-32 top-1/4 h-96 w-96 rounded-full bg-gradient-to-br from-violet-400/10 to-indigo-400/10 blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -left-32 bottom-1/4 h-80 w-80 rounded-full bg-gradient-to-tr from-indigo-400/8 to-violet-400/8 blur-3xl"
        aria-hidden
      />
      <div className="relative mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 sm:py-20 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-12 lg:px-8 lg:py-24">
        <div className="max-w-xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-indigo-200/80 bg-white/90 px-4 py-2 shadow-lg shadow-indigo-500/10 backdrop-blur-sm dark:border-indigo-500/40 dark:bg-slate-900/90 dark:shadow-indigo-950/30">
            <span className="flex h-2 w-2">
              <span className="absolute inline-flex h-2 w-2 animate-ping rounded-full bg-indigo-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-indigo-500" />
            </span>
            <span className="text-xs font-bold uppercase tracking-[0.18em] text-brand dark:text-indigo-300">
              Премиум · НОИТ · ценова интелигентност
            </span>
          </div>
          <h1 className="mt-7 text-[2.15rem] font-extrabold leading-[1.05] tracking-tight text-slate-950 dark:text-slate-50 sm:text-5xl lg:text-[3.5rem]">
            Виж дали намалението е{' '}
            <span className="hero-gradient-text bg-gradient-to-r from-indigo-600 via-violet-600 to-indigo-700 bg-clip-text text-transparent dark:from-indigo-300 dark:via-violet-300 dark:to-indigo-400">
              истинско
            </span>
            .
          </h1>
          <p className="mt-6 max-w-lg text-base leading-relaxed text-slate-600 dark:text-slate-300 sm:text-lg sm:leading-relaxed">
            PriceRadar BG сравнява текущата оферта с реалната ценова история и ти показва кога
            промоцията изглежда подозрително.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-3.5">
            <LandingButton to="/dashboard">
              Виж демо таблото
              <ArrowRight className="h-4 w-4" />
            </LandingButton>
            <LandingButton href="#how" variant="ghost">
              Виж как работи
            </LandingButton>
          </div>
          <ul className="mt-7 flex flex-wrap gap-2.5 text-xs font-semibold text-slate-600 dark:text-slate-300">
            {['История на цените', 'Оценка 0-100', 'Български магазини'].map((item) => (
              <li
                key={item}
                className="hero-feature-badge rounded-full border border-indigo-100/80 bg-white/85 px-3.5 py-2 shadow-sm backdrop-blur-sm transition hover:border-indigo-200 hover:bg-white hover:shadow-md dark:border-indigo-500/30 dark:bg-slate-900/75 dark:hover:border-indigo-500/40 dark:hover:bg-slate-900/90"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="hero-comparison-container rounded-[2rem] border border-white/90 bg-white/80 p-4 shadow-2xl shadow-indigo-500/20 backdrop-blur-xl dark:border-slate-700/80 dark:bg-slate-900/80 dark:shadow-indigo-950/50">
          <div className="grid gap-4 lg:grid-cols-2">
            <article className="hero-ordinary-card relative overflow-hidden rounded-[1.5rem] border border-slate-200/90 bg-gradient-to-br from-slate-50 to-slate-100/50 p-5 shadow-sm dark:border-slate-700 dark:from-slate-950/70 dark:to-slate-900/50">
              <div className="flex items-center justify-between">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">
                  Обикновен tracker
                </p>
                <span className="rounded-full bg-slate-200/80 px-2 py-0.5 text-[10px] font-semibold text-slate-600 dark:bg-slate-800 dark:text-slate-400">
                  Базов
                </span>
              </div>
              <h2 className="mt-5 text-lg font-bold text-slate-900 dark:text-slate-100">
                Sony WH-CH720N
              </h2>
              <div className="mt-5 rounded-2xl border border-slate-200 bg-white p-4 dark:border-slate-700 dark:bg-slate-900">
                <p className="text-sm text-slate-500 dark:text-slate-400">Промоция</p>
                <div className="mt-2 flex items-end gap-3">
                  <span className="text-3xl font-black text-slate-950 dark:text-slate-50">
                    139 €
                  </span>
                  <span className="text-lg font-bold text-slate-400 line-through">174 €</span>
                </div>
                <p className="mt-3 rounded-full bg-rose-50 px-3 py-1 text-xs font-semibold text-rose-700 dark:bg-rose-950/50 dark:text-rose-300">
                  -20% без контекст
                </p>
              </div>
              <div className="mt-4 grid gap-2 text-sm text-slate-500 dark:text-slate-400">
                <span className="rounded-xl border border-dashed border-slate-300 px-3 py-2 dark:border-slate-700">
                  Няма история
                </span>
                <span className="rounded-xl border border-dashed border-slate-300 px-3 py-2 dark:border-slate-700">
                  Няма оценка на надеждност
                </span>
              </div>
            </article>

            <article className="hero-priceradar-panel relative overflow-hidden rounded-[1.5rem] border-2 border-indigo-300/70 bg-gradient-to-br from-indigo-600 via-brand to-violet-700 p-5 text-white shadow-2xl shadow-indigo-500/35 dark:border-indigo-400/50 dark:shadow-indigo-950/60">
              <div
                className="absolute -right-16 -top-16 h-44 w-44 rounded-full bg-white/20 blur-3xl"
                aria-hidden
              />
              <div
                className="absolute -left-12 -bottom-12 h-40 w-40 rounded-full bg-violet-400/20 blur-3xl"
                aria-hidden
              />
              <div
                className="hero-priceradar-scan-line absolute inset-x-5 top-3 h-px bg-gradient-to-r from-transparent via-white/80 to-transparent"
                aria-hidden
              />
              <div className="relative flex items-center justify-between">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-indigo-100">
                  PriceRadar BG
                </p>
                <span className="flex items-center gap-1.5 rounded-full bg-white/20 px-2.5 py-1 text-[10px] font-bold text-white backdrop-blur-sm">
                  <CheckCircle2 className="h-3 w-3" />
                  Премиум
                </span>
              </div>
              <div className="hero-live-highlight hero-live-highlight--confidence relative mt-5 rounded-2xl border border-white/20 bg-white/12 p-4">
                <div className="flex items-center gap-3">
                  <span className="rounded-xl bg-white/18 p-2">
                    <ShieldAlert className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-indigo-50">Подозрителна промоция</p>
                    <p className="text-xs text-indigo-100/80">Старата цена не съвпада с историята</p>
                  </div>
                </div>
                <div className="mt-4 flex items-end justify-between gap-3">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-indigo-100/80">
                      Надеждност
                    </p>
                    <p className="text-4xl font-black tabular-nums">{confidence}/100</p>
                  </div>
                  <TrendingDown className="h-10 w-10 text-rose-200" />
                </div>
              </div>

              <div className="hero-live-highlight hero-live-highlight--history relative mt-4 rounded-2xl border border-white/20 bg-slate-950/22 p-4">
                <p className="text-xs font-semibold text-indigo-100">История 90 дни</p>
                <div className="mt-3 flex h-16 items-end gap-1">
                  {historyBars.map((height, index) => (
                    <span
                      key={index}
                      className="hero-history-bar flex-1 rounded-t bg-white/75"
                      style={{
                        ['--bar-h' as string]: `${height}%`,
                        transitionDelay: inView ? `${index * 45}ms` : '0ms',
                      }}
                    />
                  ))}
                </div>
              </div>

              <div className="hero-live-highlight hero-live-highlight--offer relative mt-4 flex items-center justify-between rounded-2xl border border-emerald-300/30 bg-emerald-300/14 px-4 py-3 text-sm">
                <span className="inline-flex items-center gap-2 font-semibold">
                  <Store className="h-4 w-4" />
                  Най-добра оферта
                </span>
                <span className="font-black">129,90 €</span>
              </div>
              <p className="relative mt-4 flex items-center gap-2 text-xs font-semibold text-indigo-100">
                <CheckCircle2 className="h-4 w-4" />
                История, контекст и сравнение в един изглед.
              </p>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}
