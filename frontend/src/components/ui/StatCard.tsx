import { LineChart, Package, Tag, TrendingUp } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import type { StatCardData } from '@/constants/dashboard'
import { Card } from '@/components/ui/Card'

const accentStyles: Record<
  StatCardData['accent'],
  { gradient: string; delta: string; glow: string }
> = {
  violet: {
    gradient: 'from-violet-500 to-indigo-600',
    delta: 'text-violet-600 dark:text-violet-400',
    glow: 'shadow-violet-500/15',
  },
  emerald: {
    gradient: 'from-emerald-500 to-teal-600',
    delta: 'text-emerald-600 dark:text-emerald-400',
    glow: 'shadow-emerald-500/15',
  },
  rose: {
    gradient: 'from-rose-500 to-pink-600',
    delta: 'text-rose-600 dark:text-rose-400',
    glow: 'shadow-rose-500/15',
  },
  amber: {
    gradient: 'from-amber-500 to-orange-600',
    delta: 'text-amber-600 dark:text-amber-400',
    glow: 'shadow-amber-500/15',
  },
}

const iconMap: Record<StatCardData['icon'], LucideIcon> = {
  tracked: Package,
  decrease: Tag,
  increase: TrendingUp,
  'average-price': LineChart,
}

type StatCardProps = {
  data: StatCardData
}

export function StatCard({ data }: StatCardProps) {
  const styles = accentStyles[data.accent]
  const IconComponent = iconMap[data.icon]

  return (
    <Card variant="premium" padding="md">
      <div className="flex items-start gap-4">
        <span
          className={`inline-flex rounded-2xl bg-gradient-to-br ${styles.gradient} p-3 text-white shadow-lg ${styles.glow}`}
        >
          <IconComponent className="h-6 w-6" strokeWidth={1.75} />
        </span>
        <div className="min-w-0 flex-1">
          <p className="text-3xl font-bold tracking-tight text-slate-900 dark:text-slate-50 sm:text-[2rem] leading-none">
            {data.value}
          </p>
          <p className="mt-2 text-sm font-medium text-slate-600 dark:text-slate-400">{data.title}</p>
          <p className={`mt-1 text-xs font-bold ${styles.delta}`}>{data.todayDelta}</p>
        </div>
      </div>
    </Card>
  )
}
