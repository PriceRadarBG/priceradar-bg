import type { ReactNode } from 'react'
import { ModernSectionHeader } from '@/components/landing/ModernSectionHeader'
import { ScrollReveal } from '@/components/motion/ScrollReveal'
import { LANDING_FEATURES } from '@/constants/landing'
import { useInView } from '@/hooks/useInView'

const gradients = [
  'from-violet-500 to-indigo-600',
  'from-amber-500 to-orange-600',
  'from-emerald-500 to-teal-600',
]

function FeatureDemo({ id, active }: { id: string; active: boolean }) {
  const wrap = (children: ReactNode) => (
    <div className={`mt-4 ${active ? 'feature-demo--active' : ''}`}>{children}</div>
  )

  if (id === 'history') {
    return wrap(
      <div className="rounded-xl border border-slate-100/90 bg-slate-50/80 p-3 dark:border-slate-700/60 dark:bg-slate-900/50">
        <p className="text-[10px] font-mono text-slate-500 dark:text-slate-400">90 дни · EUR</p>
        <div className="mt-2 flex h-10 items-end gap-0.5">
          {[32, 34, 33, 48, 49, 48, 35, 34, 30, 31, 33, 47, 50, 36].map((h, i) => (
            <div
              key={i}
              className={`feature-bar flex-1 rounded-t bg-indigo-500/70 ${h > 44 ? '!bg-rose-500/70' : ''}`}
              style={{
                ['--bar-h' as string]: `${(h / 50) * 100}%`,
                transitionDelay: active ? `${i * 45}ms` : '0ms',
              }}
            />
          ))}
        </div>
      </div>,
    )
  }
  if (id === 'fake-deals') {
    return wrap(
      <div className="rounded-xl border border-rose-200/70 bg-rose-50/50 p-3 dark:border-rose-500/30 dark:bg-rose-950/30">
        <div className="flex justify-between text-[10px] font-mono text-slate-500 dark:text-slate-400">
          <span>Confidence</span>
          <span className="font-bold text-rose-600 dark:text-rose-400">23%</span>
        </div>
        <div className="mt-1.5 h-1.5 overflow-hidden rounded-full bg-slate-200 dark:bg-slate-800">
          <div
            className="feature-progress-bar h-full rounded-full bg-rose-500"
            style={{ ['--bar-target' as string]: active ? '23%' : '0%' }}
          />
        </div>
        <p className="mt-2 text-[10px] font-semibold text-rose-700 dark:text-rose-300">
          Фалшиво намаление
        </p>
      </div>,
    )
  }
  return wrap(
    <div className="space-y-1.5">
      {[
        { store: 'Technopolis', price: '1 899,00 €', best: true },
        { store: 'eMAG', price: '1 929,00 €', best: false },
        { store: 'Ardes.bg', price: '1 949,00 €', best: false },
      ].map((r, i) => (
        <div
          key={r.store}
          className={`flex justify-between rounded-lg px-2.5 py-1.5 text-[11px] transition duration-500 ${
            r.best
              ? 'border border-emerald-300/50 bg-emerald-50/80 dark:border-emerald-500/35 dark:bg-emerald-950/40'
              : 'bg-slate-50 dark:bg-slate-800/60'
          } ${active ? 'translate-y-0 opacity-100' : 'translate-y-1 opacity-60'}`}
          style={{ transitionDelay: active ? `${i * 80}ms` : '0ms' }}
        >
          <span className="font-medium text-slate-700 dark:text-slate-300">{r.store}</span>
          <span className={`font-bold ${r.best ? 'text-emerald-600 dark:text-emerald-400' : 'text-slate-600 dark:text-slate-400'}`}>
            {r.price}
          </span>
        </div>
      ))}
    </div>,
  )
}

function FeatureCard({
  feature,
  index,
}: {
  feature: (typeof LANDING_FEATURES)[number]
  index: number
}) {
  const { ref, inView } = useInView<HTMLElement>({
    threshold: 0.22,
    rootMargin: '0px 0px -14% 0px',
  })
  const Icon = feature.icon

  return (
    <ScrollReveal delay={index * 70}>
      <article
        ref={ref}
        tabIndex={0}
        className="interactive-card group relative flex h-full flex-col overflow-hidden rounded-2xl border border-indigo-100/80 bg-white/90 p-5 shadow-[var(--shadow-card)] dark:border-slate-600/50 dark:bg-slate-800/90"
      >
        <div
          className="absolute inset-x-0 top-0 h-0.5 scale-x-0 bg-gradient-to-r from-indigo-500 via-violet-500 to-indigo-500 transition duration-500 group-hover:scale-x-100 group-focus-visible:scale-x-100"
          aria-hidden
        />
        <span
          className={`inline-flex rounded-xl bg-gradient-to-br ${gradients[index]} p-3 text-white shadow-md transition duration-300 group-hover:scale-105`}
        >
          <Icon className="h-6 w-6" strokeWidth={1.75} />
        </span>
        <h3 className="mt-4 text-lg font-bold text-slate-900 dark:text-slate-50">{feature.title}</h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
          {feature.description}
        </p>
        <FeatureDemo id={feature.id} active={inView} />
      </article>
    </ScrollReveal>
  )
}

export function FeaturesSection() {
  return (
    <section id="features" className="py-8 sm:py-11">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <ModernSectionHeader
          badge="Функции"
          title="Три модула, които правят цената разбираема"
          subtitle="История, сигнал за съмнителна промоция и сравнение на оферти - ясно показани в демото."
        />

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {LANDING_FEATURES.map((feature, i) => (
            <FeatureCard key={feature.id} feature={feature} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
