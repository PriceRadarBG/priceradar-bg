import { Sparkles } from 'lucide-react'
import { INSIGHT_ALERTS, OFFER_COMPARISON } from '@/constants/dashboard'
import { InsightAlertCard } from '@/components/ui/InsightAlertCard'
import { OfferComparisonCard } from '@/components/ui/OfferComparisonCard'
import type { GuidedDemoStep } from '@/hooks/useGuidedDemo'

type InsightsPanelProps = {
  demoStep?: GuidedDemoStep
}

export function InsightsPanel({ demoStep = 'intro' }: InsightsPanelProps) {
  const resultsReady =
    demoStep === 4 ||
    demoStep === 5 ||
    demoStep === 'done'

  return (
    <aside className="space-y-4" aria-label="Важно за теб">
      <div>
        <p className="flex items-center gap-2 text-base font-bold text-slate-900 dark:text-slate-50">
          <Sparkles className="h-4 w-4 text-brand dark:text-indigo-400" />
          Важно за теб
        </p>
        <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">Алерти и препоръки</p>
      </div>

      {!resultsReady && (
        <div className="rounded-2xl border border-dashed border-indigo-200 bg-indigo-50/50 p-4 text-sm text-slate-600 dark:border-indigo-500/35 dark:bg-indigo-950/25 dark:text-slate-300">
          Изчакваме резултати от демо проверката. След сканирането тук се появяват примерни
          сигнали и оферти.
        </div>
      )}

      {resultsReady && (
        <>
          <span className="inline-flex rounded-full bg-indigo-50 px-2.5 py-1 text-xs font-semibold text-brand dark:bg-indigo-950/70 dark:text-indigo-300">
            Демо данни
          </span>
          <div className="space-y-3">
            {INSIGHT_ALERTS.map((alert) => (
              <InsightAlertCard key={alert.id} alert={alert} />
            ))}
          </div>

          <OfferComparisonCard
            productName={OFFER_COMPARISON.productName}
            rows={OFFER_COMPARISON.rows}
            totalOffers={OFFER_COMPARISON.totalOffers}
          />
        </>
      )}
    </aside>
  )
}
