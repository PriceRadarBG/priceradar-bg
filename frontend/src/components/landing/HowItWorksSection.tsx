import { AlgorithmSection } from '@/components/landing/AlgorithmSection'
import { ModernSectionHeader } from '@/components/landing/ModernSectionHeader'
import { ScrollReveal } from '@/components/motion/ScrollReveal'
import { IntelligencePreviewCard } from '@/components/visual/IntelligencePreviewCard'

export function HowItWorksSection() {
  return (
    <section
      id="how"
      className="border-y border-indigo-100/60 bg-gradient-to-b from-white via-indigo-50/25 to-white py-12 dark:border-slate-800 dark:from-slate-950 dark:via-indigo-950/15 dark:to-slate-950 sm:py-16"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <ModernSectionHeader
          badge="Как работи"
          title="От цена към разбираем сигнал"
          subtitle="Показваме логиката ясно: история, сравнение и оценка на надеждност."
        />
      </div>
      <AlgorithmSection />
      <div className="mx-auto mt-8 grid max-w-6xl gap-6 px-4 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:items-center lg:px-8">
        <ScrollReveal>
          <div className="rounded-3xl border border-indigo-100/80 bg-white/85 p-6 shadow-[var(--shadow-card)] dark:border-slate-700/70 dark:bg-slate-900/75">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-brand dark:text-indigo-300">
              Обяснение за жури и потребители
            </p>
            <h3 className="mt-3 text-2xl font-bold tracking-tight text-slate-950 dark:text-slate-50">
              Какво вижда потребителят, когато намалението е подозрително?
            </h3>
            <div className="mt-5 space-y-3 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
              <p>
                Ниска оценка означава, че обявената „стара цена“ не се подкрепя от реалната
                ценова история.
              </p>
              <p>
                Вместо само голям процент отстъпка, PriceRadar BG показва защо офертата изглежда
                надеждна или съмнителна.
              </p>
            </div>
          </div>
        </ScrollReveal>
        <IntelligencePreviewCard />
      </div>
    </section>
  )
}
