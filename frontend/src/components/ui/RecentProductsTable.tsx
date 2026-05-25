import type { RecentProductRow } from '@/constants/dashboard'
import { Card } from '@/components/ui/Card'
import { ProductThumbnail } from '@/components/ui/ProductThumbnail'

const statusLabels: Record<
  RecentProductRow['status'],
  { label: string; className: string }
> = {
  decrease: {
    label: 'Намаление',
    className:
      'bg-emerald-50 text-emerald-700 ring-emerald-600/10 dark:bg-emerald-950/50 dark:text-emerald-300 dark:ring-emerald-500/20',
  },
  increase: {
    label: 'Поскъпване',
    className:
      'bg-rose-50 text-rose-700 ring-rose-600/10 dark:bg-rose-950/50 dark:text-rose-300 dark:ring-rose-500/20',
  },
  stable: {
    label: 'Стабилна',
    className:
      'bg-slate-100 text-slate-600 ring-slate-500/10 dark:bg-slate-800 dark:text-slate-400 dark:ring-slate-600/20',
  },
  'fake-deal': {
    label: 'Фалшиво намаление',
    className:
      'bg-amber-50 text-amber-800 ring-amber-600/10 dark:bg-amber-950/50 dark:text-amber-300 dark:ring-amber-500/20',
  },
}

type RecentProductsTableProps = {
  rows: RecentProductRow[]
  highlightedRowId?: string | null
  onViewAllClick?: () => void
}

export function RecentProductsTable({
  rows,
  highlightedRowId,
  onViewAllClick,
}: RecentProductsTableProps) {
  return (
    <Card variant="premium" padding="lg">
      <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
        <div>
          <h2 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
            Последно наблюдавани
          </h2>
          <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
            Продукти с наскорошни ценови промени
          </p>
        </div>
        <button
          type="button"
          onClick={onViewAllClick}
          title="Демо: пълен списък с продукти — в бъдещата версия"
          aria-label="Виж всички продукти (демо)"
          className="text-sm font-medium text-brand hover:text-brand-dark dark:text-indigo-400 dark:hover:text-indigo-300"
        >
          Виж всички продукти →
        </button>
      </div>

      <div className="-mx-2 overflow-x-auto sm:mx-0">
        <table className="min-w-[640px] w-full text-left text-sm">
          <thead>
            <tr className="border-b border-slate-100 text-xs font-medium text-slate-500 dark:border-slate-800 dark:text-slate-400">
              <th className="px-3 py-3 font-medium sm:px-4">Продукт</th>
              <th className="px-3 py-3 font-medium sm:px-4">Магазин</th>
              <th className="px-3 py-3 font-medium sm:px-4">Текуща цена</th>
              <th className="px-3 py-3 font-medium sm:px-4">Промяна</th>
              <th className="px-3 py-3 font-medium sm:px-4">Статус</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-50 dark:divide-slate-800">
            {rows.map((row) => {
              const status = statusLabels[row.status]
              const changePositive = row.changePercent.startsWith('+')
              const changeNegative = row.changePercent.startsWith('-')

              const isHighlighted = row.id === highlightedRowId

              return (
                <tr
                  key={row.id}
                  className={`group transition hover:bg-slate-50/60 dark:hover:bg-slate-800/50 ${
                    isHighlighted
                      ? 'recent-products-row--highlighted bg-indigo-50/80 ring-2 ring-inset ring-indigo-400/60 dark:bg-indigo-950/40 dark:ring-indigo-500/50'
                      : ''
                  }`}
                >
                  <td className="px-3 py-4 sm:px-4">
                    <div className="flex items-center gap-3">
                      <ProductThumbnail hue={row.thumbnailHue} size="sm" />
                      <div className="min-w-0">
                        <p className="truncate font-medium text-slate-900 dark:text-slate-100">
                          {row.name}
                        </p>
                        <div className="mt-0.5 flex flex-wrap items-center gap-1.5">
                          <p className="text-xs text-slate-400">{row.category}</p>
                          {isHighlighted && (
                            <span className="recent-products-row-badge inline-flex rounded-full bg-indigo-100 px-2 py-0.5 text-[10px] font-semibold text-indigo-700 dark:bg-indigo-900/60 dark:text-indigo-200">
                              Ново от демото
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-3 py-4 text-slate-600 dark:text-slate-400 sm:px-4">{row.store}</td>
                  <td className="px-3 py-4 sm:px-4">
                    <p className="font-semibold text-slate-900 dark:text-slate-100">
                      {row.currentPrice}
                    </p>
                    <p className="text-xs text-slate-400 line-through">{row.previousPrice}</p>
                  </td>
                  <td className="px-3 py-4 sm:px-4">
                    <span
                      className={`font-semibold ${
                        changeNegative
                          ? 'text-emerald-600'
                          : changePositive
                            ? 'text-rose-600'
                            : 'text-slate-600'
                      }`}
                    >
                      {row.changePercent}
                    </span>
                  </td>
                  <td className="px-3 py-4 sm:px-4">
                    <span
                      className={`inline-flex rounded-full px-2.5 py-1 text-xs font-medium ring-1 ring-inset ${status.className}`}
                    >
                      {status.label}
                    </span>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </Card>
  )
}
