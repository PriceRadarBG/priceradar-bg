import type { InsightAlert } from '@/constants/dashboard'
import { ProductThumbnail } from '@/components/ui/ProductThumbnail'

const badgeStyles: Record<InsightAlert['badgeTone'], string> = {
  amber:
    'bg-gradient-to-r from-amber-50 to-orange-50 text-amber-900 ring-amber-300/50 dark:from-amber-950/70 dark:to-orange-950/50 dark:text-amber-100 dark:ring-amber-500/35',
  rose:
    'bg-gradient-to-r from-rose-50 to-pink-50 text-rose-800 ring-rose-300/50 dark:from-rose-950/70 dark:to-pink-950/50 dark:text-rose-100 dark:ring-rose-500/35',
  emerald:
    'bg-gradient-to-r from-emerald-50 to-teal-50 text-emerald-800 ring-emerald-300/50 dark:from-emerald-950/70 dark:to-teal-950/50 dark:text-emerald-100 dark:ring-emerald-500/35',
}

type InsightAlertCardProps = {
  alert: InsightAlert
}

export function InsightAlertCard({ alert }: InsightAlertCardProps) {
  return (
    <article className="rounded-2xl border border-indigo-100/70 bg-white p-4 shadow-sm transition hover:border-indigo-200/80 hover:shadow-md dark:border-slate-600/60 dark:bg-slate-800/95 dark:hover:border-indigo-500/40">
      <div className="flex gap-3">
        <ProductThumbnail hue={alert.thumbnailHue} size="sm" />
        <div className="min-w-0 flex-1">
          <div className="flex items-start justify-between gap-2">
            <span
              className={`inline-flex rounded-full px-2.5 py-0.5 text-[11px] font-bold ring-1 ring-inset ${badgeStyles[alert.badgeTone]}`}
            >
              {alert.badge}
            </span>
            <span className="shrink-0 text-[11px] font-medium text-slate-400 dark:text-slate-500">
              {alert.timeAgo}
            </span>
          </div>
          <h3 className="mt-2 text-sm font-bold text-slate-900 dark:text-slate-50">
            {alert.productName}
          </h3>
          <p className="text-xs text-slate-500 dark:text-slate-400">{alert.store}</p>
          <p className="mt-2 text-xs leading-relaxed text-slate-600 dark:text-slate-300">
            {alert.description}
          </p>
        </div>
      </div>
    </article>
  )
}
