import { ModernSectionHeader } from '@/components/landing/ModernSectionHeader'
import { ScrollReveal } from '@/components/motion/ScrollReveal'
import { LANDING_PROBLEM_CARDS } from '@/constants/landing'
import { useInView } from '@/hooks/useInView'

const toneStyles = {
  slate: {
    icon: 'from-slate-500 to-slate-600',
    accent: 'border-t-slate-400',
    chip: 'bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300',
  },
  amber: {
    icon: 'from-amber-500 to-orange-500',
    accent: 'border-t-amber-400',
    chip: 'bg-amber-50 text-amber-900 dark:bg-amber-950/60 dark:text-amber-200',
  },
  rose: {
    icon: 'from-rose-500 to-pink-600',
    accent: 'border-t-rose-400',
    chip: 'bg-rose-50 text-rose-800 dark:bg-rose-950/50 dark:text-rose-200',
  },
}

function ProblemCard({
  card,
  index,
}: {
  card: (typeof LANDING_PROBLEM_CARDS)[number]
  index: number
}) {
  const Icon = card.icon
  const styles = toneStyles[card.tone]
  const { ref, inView } = useInView<HTMLElement>({
    threshold: 0.22,
    rootMargin: '0px 0px -14% 0px',
  })

  return (
    <ScrollReveal delay={index * 80}>
      <article
        ref={ref}
        tabIndex={0}
        className={`interactive-card problem-card group relative flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200/80 border-t-4 bg-white p-5 shadow-[var(--shadow-card)] dark:border-slate-600/50 dark:bg-slate-800/95 ${styles.accent} ${
          inView ? 'problem-card--active' : ''
        }`}
      >
        <span
          className={`inline-flex w-fit rounded-2xl bg-gradient-to-br ${styles.icon} p-3 text-white shadow-lg transition duration-300 group-hover:scale-105 group-focus-visible:scale-105`}
        >
          <Icon className="h-6 w-6" strokeWidth={1.75} />
        </span>
        <h3 className="mt-4 text-lg font-bold text-slate-900 dark:text-slate-50">
          {card.title}
        </h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
          {card.description}
        </p>

        <div className="mt-4 space-y-2 rounded-xl border border-slate-100/90 bg-slate-50/80 p-3 transition duration-300 group-hover:border-indigo-200/60 group-focus-visible:border-indigo-200/60 dark:border-slate-700/60 dark:bg-slate-900/60">
          <p className={`inline-flex rounded-md px-2 py-0.5 text-[11px] font-semibold ${styles.chip}`}>
            {card.hint}
          </p>
          <div className="problem-mini-ui rounded-lg border border-dashed border-slate-200/90 bg-white px-2.5 py-2 font-mono text-[11px] text-slate-600 dark:border-slate-600 dark:bg-slate-800/80 dark:text-slate-300">
            {card.miniUi}
          </div>
        </div>
      </article>
    </ScrollReveal>
  )
}

export function ProblemSection() {
  return (
    <section id="problem" className="py-8 sm:py-11">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <ModernSectionHeader
          badge="Проблем"
          title="Защо е трудно да пазаруваме информирано?"
          subtitle="Три чести пречки при онлайн пазаруване в България."
        />

        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          {LANDING_PROBLEM_CARDS.map((card, index) => (
            <ProblemCard key={card.title} card={card} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
