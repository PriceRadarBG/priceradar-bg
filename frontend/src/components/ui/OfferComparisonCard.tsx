import { Scale } from 'lucide-react'
import type { OfferComparisonRow } from '@/constants/dashboard'
import { Card } from '@/components/ui/Card'

type OfferComparisonCardProps = {
  productName: string
  rows: OfferComparisonRow[]
  totalOffers: number
}

export function OfferComparisonCard({
  productName,
  rows,
  totalOffers,
}: OfferComparisonCardProps) {
  return (
    <Card variant="glass" padding="md" className="dark:border-slate-600/60">
      <div className="flex items-center gap-2">
        <Scale className="h-4 w-4 text-brand dark:text-indigo-400" />
        <h3 className="text-sm font-bold text-slate-900 dark:text-slate-100">
          Сравнение на оферти
        </h3>
      </div>
      <p className="mt-0.5 truncate text-xs text-slate-500 dark:text-slate-400">{productName}</p>

      <ul className="mt-4 space-y-2">
        {rows.map((row) => (
          <li
            key={row.store}
            className={`flex items-center justify-between gap-2 rounded-xl px-2.5 py-2 text-sm ${
              row.isBest
                ? 'bg-gradient-to-r from-emerald-50 to-teal-50/50 ring-1 ring-emerald-200/80 dark:from-emerald-950/50 dark:to-teal-950/30 dark:ring-emerald-500/30'
                : 'hover:bg-slate-50/80 dark:hover:bg-slate-700/50'
            }`}
          >
            <div className="min-w-0">
              <p className="font-semibold text-slate-800 dark:text-slate-100">{row.store}</p>
              {row.isBest && (
                <span className="text-[10px] font-bold text-emerald-600 dark:text-emerald-400">
                  Най-добра цена
                </span>
              )}
            </div>
            <div className="shrink-0 text-right">
              <p className="font-bold text-slate-900 dark:text-slate-50">{row.price}</p>
              <p
                className={`text-xs font-semibold ${
                  row.delta.startsWith('-')
                    ? 'text-emerald-600 dark:text-emerald-400'
                    : 'text-slate-500 dark:text-slate-400'
                }`}
              >
                {row.delta}
              </p>
            </div>
          </li>
        ))}
      </ul>

      <button
        type="button"
        className="mt-4 w-full text-center text-xs font-semibold text-brand hover:text-brand-dark dark:text-indigo-400 dark:hover:text-indigo-300"
      >
        Виж всички оферти ({totalOffers}) →
      </button>
    </Card>
  )
}
