import { CheckCircle2, Loader2 } from 'lucide-react'
import type { StoreScanStatus } from '@/hooks/useGuidedDemo'

type DemoStoreScannerProps = {
  stores: string[]
  statuses: Record<string, StoreScanStatus>
  prices: Record<string, string>
}

const statusLabel: Record<StoreScanStatus, string> = {
  pending: 'Изчаква…',
  checking: 'Проверява цени…',
  done: 'Готово',
}

export function DemoStoreScanner({ stores, statuses, prices }: DemoStoreScannerProps) {
  const doneCount = stores.filter((store) => statuses[store] === 'done').length
  const progress = stores.length > 0 ? Math.round((doneCount / stores.length) * 100) : 0
  const doneStores = stores.filter((store) => statuses[store] === 'done').slice(-3)

  return (
    <div className="mt-4 space-y-4">
      <div>
        <div className="flex items-center justify-between text-xs font-semibold text-slate-500 dark:text-slate-400">
          <span>Общ напредък</span>
          <span>{progress}%</span>
        </div>
        <div className="mt-2 h-2 overflow-hidden rounded-full bg-slate-100 dark:bg-slate-800">
          <div
            className="h-full rounded-full bg-gradient-to-r from-indigo-600 to-violet-600 transition-all duration-500"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      <ul className="space-y-2">
        {stores.map((store) => {
          const status = statuses[store] ?? 'pending'
          return (
            <li
              key={store}
              className={`rounded-xl border px-3 py-3 text-sm transition duration-500 ${
                status === 'done'
                  ? 'border-emerald-200/80 bg-emerald-50/60 dark:border-emerald-500/30 dark:bg-emerald-950/30'
                  : status === 'checking'
                    ? 'border-indigo-200/80 bg-indigo-50/60 dark:border-indigo-500/30 dark:bg-indigo-950/30'
                    : 'border-slate-100 bg-white/80 dark:border-slate-700 dark:bg-slate-800/50'
              }`}
            >
              <div className="flex items-center justify-between gap-3">
                <span className="font-semibold text-slate-800 dark:text-slate-200">{store}</span>
                <span className="inline-flex items-center gap-2 text-xs font-semibold text-slate-500 dark:text-slate-400">
                  {status === 'checking' && (
                    <Loader2 className="h-3.5 w-3.5 animate-spin text-brand dark:text-indigo-400" />
                  )}
                  {status === 'done' && (
                    <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600 dark:text-emerald-400" />
                  )}
                  {statusLabel[status]}
                </span>
              </div>
              <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-white/80 dark:bg-slate-900/70">
                <div
                  className={`h-full rounded-full transition-all duration-500 ${
                    status === 'done'
                      ? 'w-full bg-emerald-500'
                      : status === 'checking'
                        ? 'w-2/3 animate-pulse bg-indigo-500'
                        : 'w-0 bg-slate-300'
                  }`}
                />
              </div>
              {status === 'done' && (
                <p className="mt-2 text-xs font-medium text-emerald-700 dark:text-emerald-300">
                  → открита цена · {prices[store] ?? '1 939,00 €'} · история 90 дни
                </p>
              )}
            </li>
          )
        })}
      </ul>

      {doneStores.length > 0 && (
        <div className="rounded-xl border border-slate-100 bg-slate-50/80 px-3 py-2 font-mono text-[11px] text-slate-600 dark:border-slate-700 dark:bg-slate-900/60 dark:text-slate-300">
          {doneStores.map((store) => (
            <p key={store}>
              log: {store} · {prices[store] ?? '1 939,00 €'} · OK
            </p>
          ))}
        </div>
      )}
    </div>
  )
}
