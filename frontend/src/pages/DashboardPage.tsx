import { useEffect, useRef, useState } from 'react'
import { DashboardLayout } from '@/components/layout/DashboardLayout'
import { InsightsPanel } from '@/components/layout/InsightsPanel'
import { DashboardIntroPanel } from '@/components/dashboard/DashboardIntroPanel'
import { GuidedDemoFlow } from '@/components/dashboard/GuidedDemoFlow'
import { DemoSectionHighlight } from '@/components/dashboard/DemoSectionHighlight'
import { PriceLineChart } from '@/components/charts/PriceLineChart'
import { DistributionDonutChart } from '@/components/charts/DistributionDonutChart'
import { StatCard } from '@/components/ui/StatCard'
import { RecentProductsTable } from '@/components/ui/RecentProductsTable'
import { DemoToast } from '@/components/ui/DemoToast'
import { RECENT_PRODUCTS, STAT_CARDS } from '@/constants/dashboard'
import { useGuidedDemo } from '@/hooks/useGuidedDemo'

export function DashboardPage() {
  const demo = useGuidedDemo()
  const statsRef = useRef<HTMLElement>(null)
  const chartsRef = useRef<HTMLElement>(null)
  const tableRef = useRef<HTMLElement>(null)
  const [highlightedStep, setHighlightedStep] = useState<typeof demo.step>('intro')

  const tableRows = demo.demoRow
    ? [demo.demoRow, ...RECENT_PRODUCTS.filter((r) => r.id !== demo.demoRow?.id)]
    : RECENT_PRODUCTS

  const { step, scrollToRef } = demo
  const demoStarted = step !== 'intro'

  useEffect(() => {
    if (step === 4) scrollToRef(chartsRef.current)
    if (step === 5) scrollToRef(tableRef.current)
    const id = window.setTimeout(() => setHighlightedStep(step), 420)
    return () => window.clearTimeout(id)
  }, [step, scrollToRef])

  const dimSecondary = typeof step === 'number' && step < 4
  const highlightStats = highlightedStep === 4
  const highlightCharts = highlightedStep === 4
  const highlightTable = highlightedStep === 5

  return (
    <DashboardLayout
      activeNavId="dashboard"
      onDemoGuard={demo.showGuardToast}
      unreadNotifications={demo.unreadNotifications}
      rightSidebar={<InsightsPanel demoStep={demo.step} />}
    >
      {demo.toastMessage && (
        <DemoToast message={demo.toastMessage} tone={demo.toastTone} onClose={demo.dismissToast} />
      )}

      <div className="mx-auto max-w-6xl space-y-5">
        {!demoStarted && (
          <section aria-label="Въведение в демото">
            <DashboardIntroPanel onStart={demo.beginDemo} />
          </section>
        )}

        {demoStarted && (
          <section aria-label="Как се използва PriceRadar BG">
            <GuidedDemoFlow
              step={demo.step}
              productName={demo.productName}
              selectedStores={demo.selectedStores}
              storeStatuses={demo.storeStatuses}
              storePrices={demo.storePrices}
              onStartTracking={demo.startTracking}
              onToggleStore={demo.toggleStore}
              onConfirmStores={demo.confirmStores}
              onContinueToComparison={demo.continueToComparison}
              onFinishDemo={demo.finishDemo}
              onResetDemo={demo.resetDemo}
              isTransitioning={demo.isTransitioning}
            />
          </section>
        )}

        <DemoSectionHighlight active={highlightStats} dimmed={dimSecondary}>
          <section ref={statsRef} aria-label="Обобщени показатели">
            <h2 className="sr-only">Показатели</h2>
            <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
              {STAT_CARDS.map((card) => (
                <StatCard key={card.id} data={card} />
              ))}
            </div>
          </section>
        </DemoSectionHighlight>

        <DemoSectionHighlight active={highlightCharts} dimmed={dimSecondary}>
          <section ref={chartsRef} className="grid gap-4 lg:grid-cols-5" aria-label="Графики">
            <div className="lg:col-span-3">
              <PriceLineChart isAnimationActive={step === 4 || step === 5 || step === 'done'} />
            </div>
            <div className="lg:col-span-2">
              <DistributionDonutChart isAnimationActive={step === 4 || step === 5 || step === 'done'} />
            </div>
          </section>
        </DemoSectionHighlight>

        <DemoSectionHighlight active={highlightTable} dimmed={dimSecondary && demo.step !== 5}>
          <section ref={tableRef} aria-label="Последно наблюдавани продукти">
            <RecentProductsTable
              rows={tableRows}
              highlightedRowId={demo.highlightedRowId}
              onViewAllClick={demo.showGuardToast}
            />
          </section>
        </DemoSectionHighlight>

        <section className="xl:hidden" aria-label="Важно за теб">
          <InsightsPanel demoStep={demo.step} />
        </section>
      </div>
    </DashboardLayout>
  )
}
