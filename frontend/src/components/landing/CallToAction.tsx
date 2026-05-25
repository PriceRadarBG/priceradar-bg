import { ArrowRight, CheckCircle2 } from 'lucide-react'
import { LandingButton } from '@/components/landing/LandingButton'
import { ScrollReveal } from '@/components/motion/ScrollReveal'

export function CallToAction() {
  return (
    <section className="landing-cta-section relative overflow-hidden py-12 sm:py-16">
      {/* Background gradient */}
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-indigo-50/30 to-transparent dark:via-indigo-950/20"
        aria-hidden
      />
      {/* Decorative orbs */}
      <div
        className="pointer-events-none absolute -left-24 top-1/2 h-64 w-64 -translate-y-1/2 rounded-full bg-gradient-to-br from-indigo-400/15 to-violet-400/15 blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-24 top-1/2 h-64 w-64 -translate-y-1/2 rounded-full bg-gradient-to-bl from-violet-400/15 to-indigo-400/15 blur-3xl"
        aria-hidden
      />

      <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="landing-cta-card relative overflow-hidden rounded-3xl border-2 border-indigo-200/80 bg-gradient-to-br from-white via-indigo-50/30 to-white p-8 text-center shadow-2xl shadow-indigo-500/15 backdrop-blur-sm dark:border-indigo-500/40 dark:from-slate-900/95 dark:via-indigo-950/30 dark:to-slate-900/95 dark:shadow-indigo-950/40 sm:p-12">
            {/* Inner glow effect */}
            <div
              className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-br from-indigo-500/5 via-transparent to-violet-500/5"
              aria-hidden
            />

            <div className="relative">
              <div className="inline-flex items-center gap-2 rounded-full border border-indigo-200/80 bg-white/90 px-4 py-2 shadow-lg shadow-indigo-500/10 backdrop-blur-sm dark:border-indigo-500/40 dark:bg-slate-900/90 dark:shadow-indigo-950/30">
                <span className="flex h-2 w-2">
                  <span className="absolute inline-flex h-2 w-2 animate-ping rounded-full bg-indigo-400 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-indigo-500" />
                </span>
                <span className="text-xs font-bold uppercase tracking-[0.18em] text-brand dark:text-indigo-300">
                  Готово за представяне
                </span>
              </div>

              <h2 className="landing-cta-card__title mt-6 text-2xl font-extrabold tracking-tight text-slate-900 dark:text-slate-50 sm:text-3xl lg:text-4xl">
                Виж{' '}
                <span className="bg-gradient-to-r from-indigo-600 via-violet-600 to-indigo-700 bg-clip-text text-transparent dark:from-indigo-300 dark:via-violet-300 dark:to-indigo-400">
                  PriceRadar BG
                </span>{' '}
                като работещо демо
              </h2>

              <p className="landing-cta-card__text mx-auto mt-5 max-w-xl text-base leading-relaxed text-slate-600 dark:text-slate-300 sm:text-lg">
                Проследи примерен продукт, виж симулирана проверка на магазини и резултат за
                съмнителна промоция.
              </p>

              {/* Feature highlights */}
              <div className="mx-auto mt-8 flex max-w-2xl flex-wrap justify-center gap-3 text-sm">
                {[
                  'Интерактивно демо',
                  'Без регистрация',
                  'Готово за НОИТ',
                ].map((feature) => (
                  <span
                    key={feature}
                    className="inline-flex items-center gap-1.5 rounded-full border border-indigo-100/80 bg-white/85 px-3.5 py-2 font-semibold text-slate-700 shadow-sm backdrop-blur-sm dark:border-indigo-500/30 dark:bg-slate-900/75 dark:text-slate-300"
                  >
                    <CheckCircle2 className="h-3.5 w-3.5 text-indigo-600 dark:text-indigo-400" />
                    {feature}
                  </span>
                ))}
              </div>

              <div className="landing-cta-card__actions mt-9 flex justify-center">
                <LandingButton to="/dashboard">
                  Виж демо таблото
                  <ArrowRight className="h-4 w-4" />
                </LandingButton>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
