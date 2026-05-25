import { Radar, Sparkles, TrendingUp, Store, ShieldCheck, BarChart3 } from 'lucide-react'
import { DEMO_SAMPLE_PRODUCTS } from '@/constants/guidedDemo'
import { Card } from '@/components/ui/Card'

type DashboardIntroPanelProps = {
  onStart: (sampleProduct?: string) => void
}

const demoFlowSteps = [
  {
    id: 'product',
    icon: TrendingUp,
    label: 'Примерен продукт',
    description: 'Избери или въведи продукт за проследяване',
  },
  {
    id: 'scan',
    icon: Store,
    label: 'Проверка в магазини',
    description: 'Симулирана проверка на цени в реално време',
  },
  {
    id: 'signal',
    icon: ShieldCheck,
    label: 'Резултат / Сигнал',
    description: 'Оценка на надеждност и анализ на промоцията',
  },
  {
    id: 'compare',
    icon: BarChart3,
    label: 'Сравнение на оферти',
    description: 'Най-добра оферта от избраните магазини',
  },
]

export function DashboardIntroPanel({ onStart }: DashboardIntroPanelProps) {
  return (
    <Card
      variant="premium"
      padding="none"
      className="dashboard-intro-premium relative overflow-hidden border-indigo-200/80 bg-gradient-to-br from-indigo-50/80 via-white to-violet-50/50 dark:border-indigo-500/30 dark:from-indigo-950/50 dark:via-slate-900 dark:to-violet-950/30"
    >
      {/* Decorative gradient orbs */}
      <div
        className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-gradient-to-br from-indigo-400/20 to-violet-400/20 blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -bottom-16 -left-16 h-56 w-56 rounded-full bg-gradient-to-tr from-violet-400/15 to-indigo-400/15 blur-3xl"
        aria-hidden
      />

      <div className="relative grid gap-5 p-5 sm:p-6 lg:grid-cols-[1.1fr_0.9fr] lg:gap-6">
        {/* Left: Main content */}
        <div className="flex flex-col">
          <div className="flex flex-wrap items-start justify-between gap-3">
            <div className="inline-flex items-center gap-2 rounded-full border border-indigo-200/80 bg-white/90 px-3.5 py-1.5 shadow-sm dark:border-indigo-500/40 dark:bg-slate-900/80">
              <Sparkles className="h-3.5 w-3.5 text-brand dark:text-indigo-400" />
              <span className="text-xs font-bold uppercase tracking-wider text-brand dark:text-indigo-400">
                Демо за НОИТ
              </span>
            </div>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-indigo-100 px-3 py-1 text-xs font-semibold text-brand-dark shadow-sm dark:bg-indigo-950/80 dark:text-indigo-200">
              <Radar className="h-3.5 w-3.5" />
              Демо режим
            </span>
          </div>

          <h2 className="mt-4 text-xl font-extrabold tracking-tight text-slate-900 dark:text-slate-50 sm:text-2xl lg:text-[1.75rem]">
            Здравей! Това е демо таблото на{' '}
            <span className="bg-gradient-to-r from-indigo-600 via-violet-600 to-indigo-700 bg-clip-text text-transparent dark:from-indigo-300 dark:via-violet-300 dark:to-indigo-400">
              PriceRadar BG
            </span>
          </h2>

          <p className="mt-3 max-w-xl text-sm leading-relaxed text-slate-600 dark:text-slate-300 sm:text-base">
            За няколко стъпки ще проследим продукт, ще проверим магазини и ще покажем как системата
            разпознава съмнителна промоция.
          </p>

          {/* Quick start product chips */}
          <div className="mt-5">
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">
              Бърз старт с примерен продукт:
            </p>
            <div className="mt-2.5 flex flex-wrap gap-2">
              {DEMO_SAMPLE_PRODUCTS.map((product) => (
                <button
                  key={product}
                  type="button"
                  onClick={() => onStart(product)}
                  className="dashboard-intro-chip group rounded-full border border-indigo-200/80 bg-white/90 px-4 py-2 text-xs font-semibold text-brand shadow-sm transition hover:border-indigo-300 hover:bg-indigo-50 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/40 dark:border-indigo-500/40 dark:bg-slate-900/80 dark:text-indigo-300 dark:hover:border-indigo-400/60 dark:hover:bg-indigo-950/60"
                >
                  {product}
                </button>
              ))}
            </div>
          </div>

          {/* Primary CTA */}
          <button
            type="button"
            onClick={() => onStart()}
            className="dashboard-intro-cta mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-indigo-600 via-violet-600 to-indigo-600 bg-size-200 px-5 py-3 text-sm font-bold text-white shadow-lg shadow-indigo-500/30 transition hover:bg-pos-100 hover:shadow-xl hover:shadow-indigo-500/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400/60 focus-visible:ring-offset-2 dark:shadow-indigo-950/50 dark:hover:shadow-indigo-900/60 sm:w-auto sm:text-base"
          >
            <Sparkles className="h-5 w-5" />
            Започни демото
          </button>
        </div>

        {/* Right: Demo flow preview */}
        <div className="flex flex-col">
          <div className="rounded-2xl border border-indigo-100/80 bg-white/60 p-5 shadow-lg backdrop-blur-sm dark:border-indigo-500/25 dark:bg-slate-900/60">
            <p className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
              Какво ще видиш в демото:
            </p>

            <div className="mt-4 space-y-3">
              {demoFlowSteps.map((step, index) => {
                const Icon = step.icon
                return (
                  <div
                    key={step.id}
                    className="dashboard-intro-step group flex items-start gap-3 rounded-xl border border-indigo-100/60 bg-gradient-to-br from-white/80 to-indigo-50/30 p-3 transition hover:border-indigo-200 hover:shadow-md dark:border-indigo-500/20 dark:from-slate-800/60 dark:to-indigo-950/20 dark:hover:border-indigo-500/35"
                    style={{
                      animationDelay: `${index * 100}ms`,
                    }}
                  >
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-indigo-500 to-violet-600 text-white shadow-md transition group-hover:scale-105 group-hover:shadow-lg">
                      <Icon className="h-4 w-4" strokeWidth={2} />
                    </span>
                    <div className="min-w-0 flex-1">
                      <p className="text-sm font-bold text-slate-900 dark:text-slate-100">
                        {step.label}
                      </p>
                      <p className="mt-0.5 text-xs leading-relaxed text-slate-600 dark:text-slate-400">
                        {step.description}
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>

            {/* Mini preview badge */}
            <div className="mt-5 rounded-xl border border-emerald-200/70 bg-gradient-to-br from-emerald-50/80 to-white/60 px-4 py-3 dark:border-emerald-500/30 dark:from-emerald-950/40 dark:to-slate-900/60">
              <div className="flex items-center gap-2">
                <span className="flex h-2 w-2 shrink-0">
                  <span className="dashboard-intro-pulse absolute inline-flex h-2 w-2 animate-ping rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                </span>
                <p className="text-xs font-semibold text-emerald-800 dark:text-emerald-300">
                  Интерактивно демо · Без регистрация · Готово за НОИТ
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Card>
  )
}
