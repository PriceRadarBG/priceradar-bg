import { useState, type FormEvent } from 'react'
import { CheckCircle2, Radar } from 'lucide-react'
import {
  DEMO_FINISH_MESSAGE,
  DEMO_PRODUCT_PLACEHOLDER,
  GUIDED_DEMO_INTRO,
  GUIDED_DEMO_STEPS,
} from '@/constants/guidedDemo'
import type { GuidedDemoStep } from '@/hooks/useGuidedDemo'
import { Card } from '@/components/ui/Card'
import { DemoStorePicker } from '@/components/dashboard/DemoStorePicker'
import { DemoStoreScanner } from '@/components/dashboard/DemoStoreScanner'

type GuidedDemoFlowProps = {
  step: GuidedDemoStep
  productName: string
  selectedStores: string[]
  storeStatuses: Record<string, import('@/hooks/useGuidedDemo').StoreScanStatus>
  storePrices: Record<string, string>
  onStartTracking: (name: string) => void
  onToggleStore: (store: string) => void
  onConfirmStores: () => void
  onContinueToComparison: () => void
  onFinishDemo: () => void
  onResetDemo: () => void
  isTransitioning?: boolean
}

export function GuidedDemoFlow({
  step,
  productName,
  selectedStores,
  storeStatuses,
  storePrices,
  onStartTracking,
  onToggleStore,
  onConfirmStores,
  onContinueToComparison,
  onFinishDemo,
  onResetDemo,
  isTransitioning = false,
}: GuidedDemoFlowProps) {
  const [inputValue, setInputValue] = useState(productName)

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault()
    onStartTracking(inputValue)
  }

  const currentStepNum = step === 'intro' || step === 'done' ? 0 : step
  const comparedOffers = selectedStores
    .map((store) => ({ store, price: storePrices[store] ?? 'очаква се' }))
    .sort((a, b) => {
      const aValue = Number(a.price.replace(/\D/g, '')) || Number.MAX_SAFE_INTEGER
      const bValue = Number(b.price.replace(/\D/g, '')) || Number.MAX_SAFE_INTEGER
      return aValue - bValue
    })

  if (step === 'intro') {
    return null
  }

  return (
    <Card variant="premium" padding="md" className="border-indigo-100/80 dark:border-indigo-500/25">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <p className="text-xs font-bold uppercase tracking-wider text-brand dark:text-indigo-400">
            Стъпка по стъпка
          </p>
          <h2 className="mt-1 text-base font-semibold text-slate-900 dark:text-slate-100 sm:text-lg">
            Как се използва?
          </h2>
          <p className="mt-1 max-w-2xl text-sm leading-relaxed text-slate-500 dark:text-slate-400">
            {GUIDED_DEMO_INTRO}
          </p>
        </div>
        <span className="inline-flex items-center gap-1.5 rounded-full bg-indigo-50 px-3 py-1 text-xs font-semibold text-brand dark:bg-indigo-950/80 dark:text-indigo-300">
          <Radar className="h-3.5 w-3.5" />
          Демо режим
        </span>
      </div>

      <ol className="mt-5 flex flex-wrap gap-2" aria-label="Стъпки на демото">
        {GUIDED_DEMO_STEPS.map((item) => {
          const done = typeof step === 'number' && step > item.step
          const active = currentStepNum === item.step
          return (
            <li
              key={item.step}
              className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold transition duration-300 ${
                done
                  ? 'bg-emerald-50 text-emerald-800 dark:bg-emerald-950/50 dark:text-emerald-300'
                  : active
                    ? 'bg-indigo-100 text-brand-dark ring-1 ring-indigo-200 dark:bg-indigo-950/60 dark:text-indigo-200 dark:ring-indigo-500/40'
                    : 'bg-slate-100 text-slate-500 dark:bg-slate-800 dark:text-slate-400'
              }`}
            >
              {done ? (
                <CheckCircle2 className="h-3.5 w-3.5" />
              ) : (
                <span className="flex h-4 w-4 items-center justify-center rounded-full bg-white/80 text-[10px] dark:bg-slate-900">
                  {item.step}
                </span>
              )}
              {item.title}
            </li>
          )
        })}
      </ol>

      <div
        className={`mt-4 rounded-xl border p-3.5 transition-opacity duration-500 sm:p-4 ${
          step === 1
            ? 'border-indigo-300/80 bg-indigo-50/50 ring-2 ring-indigo-200/80 dark:border-indigo-500/40 dark:bg-indigo-950/30 dark:ring-indigo-500/30'
            : 'border-indigo-100/80 bg-gradient-to-br from-indigo-50/30 via-white to-violet-50/20 dark:border-indigo-500/20 dark:from-indigo-950/20 dark:via-slate-900 dark:to-violet-950/15'
        } ${isTransitioning ? 'opacity-90' : 'opacity-100'}`}
      >
        {step === 1 && (
          <form onSubmit={handleSubmit}>
            <label
              htmlFor="guided-demo-product"
              className="text-sm font-semibold text-slate-900 dark:text-slate-100"
            >
              Стъпка 1: Какво следим?
            </label>
            <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
              Въведи име или модел. Демото ще покаже как изглежда проследяването.
            </p>
            <div className="mt-3 flex flex-col gap-3 sm:flex-row">
              <input
                id="guided-demo-product"
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder={DEMO_PRODUCT_PLACEHOLDER}
                className="min-w-0 flex-1 rounded-xl border border-slate-200/80 bg-white px-4 py-2.5 text-sm shadow-sm outline-none focus:border-brand focus:ring-2 focus:ring-brand/20 dark:border-slate-600 dark:bg-slate-800 dark:text-slate-100"
              />
              <button
                type="submit"
                disabled={!inputValue.trim() || isTransitioning}
                className="rounded-xl bg-gradient-to-r from-indigo-600 to-violet-600 px-5 py-2.5 text-sm font-semibold text-white shadow-md disabled:opacity-50"
              >
                Започни проследяване
              </button>
            </div>
          </form>
        )}

        {step === 2 && (
          <div>
            <p className="text-sm font-semibold text-slate-900 dark:text-slate-100">
              Стъпка 2: Откъде сравняваме „{productName}“?
            </p>
            <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
              Източниците са предварително избрани. Можеш да ги промениш преди проверката.
            </p>
            <div className="mt-3">
              <DemoStorePicker selected={selectedStores} onToggle={onToggleStore} />
            </div>
            <button
              type="button"
              disabled={selectedStores.length === 0 || isTransitioning}
              onClick={onConfirmStores}
              className="mt-4 rounded-xl bg-gradient-to-r from-indigo-600 to-violet-600 px-5 py-2.5 text-sm font-semibold text-white shadow-md disabled:opacity-50"
            >
              Провери цени в магазините
            </button>
          </div>
        )}

        {step === 3 && (
          <div>
            <p className="text-sm font-semibold text-slate-900 dark:text-slate-100">
              Стъпка 3: Сканираме магазините
            </p>
            <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
              Това е симулация на реална проверка: магазин по магазин, цена по цена.
            </p>
            <DemoStoreScanner stores={selectedStores} statuses={storeStatuses} prices={storePrices} />
          </div>
        )}

        {step === 4 && (
          <div>
            <p className="text-sm font-semibold text-slate-900 dark:text-slate-100">
              Стъпка 4: Какво открихме?
            </p>
            <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
              Маркирахме показателите и графиките по-долу. Те показват движението на цената и
              дали промоцията изглежда надеждна.
            </p>
            <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
              В това демо оценката е <strong className="text-rose-700 dark:text-rose-300">23/100</strong>:
              обявената „стара цена“ не съвпада добре с реалната история.
            </p>
            <button
              type="button"
              disabled={isTransitioning}
              onClick={onContinueToComparison}
              className="mt-4 rounded-xl bg-gradient-to-r from-indigo-600 to-violet-600 px-5 py-2.5 text-sm font-semibold text-white shadow-md disabled:opacity-50"
            >
              Продължи към сравнение на оферти
            </button>
          </div>
        )}

        {step === 5 && (
          <div>
            <p className="text-sm font-semibold text-slate-900 dark:text-slate-100">
              Стъпка 5: Най-добра оферта
            </p>
            <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
              В таблицата „Последно наблюдавани“ е добавен{' '}
              <strong className="text-slate-900 dark:text-slate-100">{productName}</strong> с най-добра
              демо оферта от избраните магазини ({selectedStores.join(', ')}).
            </p>
            <div className="mt-4 space-y-2">
              {comparedOffers.map((offer, index) => (
                <div
                  key={offer.store}
                  className={`flex items-center justify-between rounded-xl border px-3 py-2 text-sm ${
                    index === 0
                      ? 'border-emerald-200 bg-emerald-50 text-emerald-900 dark:border-emerald-500/35 dark:bg-emerald-950/35 dark:text-emerald-100'
                      : 'border-slate-100 bg-white/70 text-slate-700 dark:border-slate-700 dark:bg-slate-800/55 dark:text-slate-300'
                  }`}
                >
                  <span className="font-semibold">{offer.store}</span>
                  <span className="flex items-center gap-2 font-bold">
                    {offer.price}
                    {index === 0 && (
                      <span className="rounded-full bg-emerald-100 px-2 py-0.5 text-[10px] uppercase tracking-wide text-emerald-700 dark:bg-emerald-900/70 dark:text-emerald-200">
                        най-добра
                      </span>
                    )}
                  </span>
                </div>
              ))}
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              <button
                type="button"
                onClick={onFinishDemo}
                className="rounded-xl border border-indigo-200 bg-white px-5 py-2.5 text-sm font-semibold text-brand transition hover:bg-indigo-50 dark:border-indigo-500/40 dark:bg-slate-800 dark:text-indigo-300"
              >
                Завърши
              </button>
              <button
                type="button"
                onClick={onResetDemo}
                className="rounded-xl bg-gradient-to-r from-indigo-600 to-violet-600 px-5 py-2.5 text-sm font-semibold text-white shadow-md"
              >
                Стартирай отново
              </button>
            </div>
          </div>
        )}

        {step === 'done' && (
          <div>
            <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">
              {DEMO_FINISH_MESSAGE} Можеш да разгледаш таблото свободно — останалите бутони показват
              съобщение за бъдеща версия.
            </p>
            <button
              type="button"
              onClick={onResetDemo}
              className="mt-4 rounded-xl bg-gradient-to-r from-indigo-600 to-violet-600 px-5 py-2.5 text-sm font-semibold text-white shadow-md"
            >
              Стартирай демото отново
            </button>
          </div>
        )}
      </div>
    </Card>
  )
}
