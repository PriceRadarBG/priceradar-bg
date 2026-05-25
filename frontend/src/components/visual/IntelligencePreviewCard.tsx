import { AlertTriangle, Gauge, Store } from 'lucide-react'
import { useCountUp } from '@/hooks/useCountUp'
import { useInView } from '@/hooks/useInView'

const metrics = [
  {
    label: 'Стара цена',
    display: '174,00 €',
    value: 100,
    tone: 'bg-slate-400 dark:bg-slate-500',
  },
  {
    label: 'Реална история',
    display: '139,00 €',
    value: 80,
    tone: 'bg-indigo-500 dark:bg-indigo-400',
  },
  {
    label: 'Отклонение',
    display: '-20%',
    value: 65,
    tone: 'bg-amber-500 dark:bg-amber-400',
  },
]

const confidenceTarget = 23

export function IntelligencePreviewCard() {
  const { ref, inView } = useInView<HTMLElement>(0.12)
  const confidence = useCountUp(confidenceTarget, inView, 1600)

  return (
    <article
      ref={ref}
      className={`intelligence-preview-card relative overflow-hidden rounded-3xl border border-indigo-200/80 bg-gradient-to-br from-white via-white to-indigo-50/40 p-5 shadow-[var(--shadow-card)] transition duration-700 dark:border-indigo-500/35 dark:from-slate-900 dark:via-slate-900 dark:to-indigo-950/45 sm:p-7 ${
        inView ? 'intelligence-preview-card--active' : ''
      }`}
    >
      <div
        className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-inset ring-indigo-300/25 dark:ring-indigo-400/20"
        aria-hidden
      />
      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-indigo-500 via-violet-500 to-indigo-500" />
      <div
        className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-indigo-400/15 blur-3xl dark:bg-indigo-500/20"
        aria-hidden
      />

      <header className="relative flex flex-col gap-3 border-b border-slate-100/90 pb-4 dark:border-slate-700/70 lg:flex-row lg:items-start lg:justify-between">
        <div className="min-w-0">
          <p className="text-[10px] font-bold uppercase tracking-widest text-brand dark:text-indigo-400">
            Доклад #PR-2847 · демо
          </p>
          <h3 className="mt-1 text-xl font-bold text-slate-900 dark:text-slate-50">Sony WH-CH720N</h3>
          <p className="mt-1.5 flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-slate-600 dark:text-slate-300">
            <span className="inline-flex items-center gap-1">
              <Store className="h-3.5 w-3.5 shrink-0" />
              eMAG
            </span>
            <span className="text-slate-300 dark:text-slate-600">·</span>
            <span>
              Текуща: <strong className="text-slate-900 dark:text-slate-100">139,00 €</strong>
            </span>
            <span className="text-slate-400 line-through">174,00 €</span>
          </p>
        </div>
        <span className="inline-flex w-fit items-center gap-2 rounded-lg border border-amber-400/50 bg-amber-50 px-3 py-2 text-xs font-bold text-amber-900 dark:border-amber-500/40 dark:bg-amber-950/60 dark:text-amber-100">
          <AlertTriangle className="h-4 w-4 shrink-0" />
          Маркирано като фалшиво намаление
        </span>
      </header>

      <div className="relative mt-5 grid gap-3 lg:grid-cols-[1fr_auto] lg:items-start">
        <div className="grid gap-3 sm:grid-cols-2">
          {metrics.map((m, i) => (
            <div
              key={m.label}
              className="rounded-xl border border-slate-100/90 bg-white/90 p-3 dark:border-slate-700/60 dark:bg-slate-800/55"
            >
              <div className="flex items-center justify-between gap-2 text-sm">
                <span className="font-medium text-slate-600 dark:text-slate-300">{m.label}</span>
                <span className="font-bold text-slate-900 dark:text-slate-100">{m.display}</span>
              </div>
              <div className="mt-2 h-2 overflow-hidden rounded-full bg-slate-100 dark:bg-slate-800">
                <div
                  className={`intelligence-metric-bar h-full rounded-full ${m.tone}`}
                  style={{
                    ['--bar-target' as string]: `${m.value}%`,
                    transitionDelay: inView ? `${220 + i * 120}ms` : '0ms',
                  }}
                />
              </div>
            </div>
          ))}
        </div>

        <div className="flex items-center gap-3 rounded-2xl border border-rose-200/80 bg-gradient-to-br from-rose-50 to-white px-4 py-3 shadow-[0_0_24px_-6px_rgba(244,63,94,0.35)] dark:border-rose-500/35 dark:from-rose-950/45 dark:to-slate-900/80 lg:min-w-[10.5rem] lg:flex-col lg:py-5">
          <Gauge
            className={`h-8 w-8 shrink-0 text-rose-500 transition duration-500 dark:text-rose-400 ${
              inView ? 'scale-100 opacity-100' : 'scale-90 opacity-70'
            }`}
            strokeWidth={1.5}
          />
          <div className="text-center">
            <p className="text-[10px] font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">
              Оценка на надеждност
            </p>
            <p className="text-3xl font-extrabold leading-none text-rose-600 tabular-nums dark:text-rose-400">
              {confidence}/100
            </p>
            <p className="mt-1 text-[11px] font-semibold text-rose-700 dark:text-rose-300">
              Ниска оценка = подозрителна промоция
            </p>
          </div>
        </div>
      </div>

      <div className="relative mt-5 rounded-xl border border-indigo-100/80 bg-indigo-50/45 px-4 py-3 dark:border-indigo-500/25 dark:bg-indigo-950/35">
        <p className="text-sm font-semibold text-slate-800 dark:text-slate-100">
          Сравняваме обявената стара цена с реалната ценова история.
        </p>
        <p className="mt-1 text-xs leading-relaxed text-slate-600 dark:text-slate-400">
          Ако „старата цена“ не се среща в последните наблюдения, оценката остава ниска и
          намалението се маркира като съмнително за потребителя.
        </p>
      </div>
    </article>
  )
}
