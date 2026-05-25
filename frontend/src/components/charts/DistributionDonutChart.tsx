import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from 'recharts'
import { PieChart as PieChartIcon } from 'lucide-react'
import { Card } from '@/components/ui/Card'
import { DonutTooltip } from '@/components/charts/DonutTooltip'
import { DISTRIBUTION_DATA, DISTRIBUTION_TOTAL } from '@/constants/chartData'
import { useChartTheme } from '@/hooks/useChartTheme'

type DistributionDonutChartProps = {
  compact?: boolean
  showHeader?: boolean
  className?: string
  isAnimationActive?: boolean
}

export function DistributionDonutChart({
  compact = false,
  showHeader = true,
  className = '',
  isAnimationActive = true,
}: DistributionDonutChartProps) {
  const chartTheme = useChartTheme()
  const size = compact ? 120 : 148

  const chart = (
    <div
      className={`flex flex-col items-center gap-4 ${compact ? '' : 'sm:flex-row sm:items-center sm:justify-center'}`}
    >
      <div className="relative shrink-0" style={{ width: size, height: size }}>
        <ResponsiveContainer width="100%" height="100%">
          <PieChart margin={{ top: 0, right: 0, bottom: 0, left: 0 }}>
            <Pie
              data={DISTRIBUTION_DATA}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              innerRadius={compact ? '58%' : '62%'}
              outerRadius="100%"
              paddingAngle={2}
              strokeWidth={0}
              isAnimationActive={isAnimationActive}
            >
              {DISTRIBUTION_DATA.map((entry) => (
                <Cell key={entry.name} fill={entry.fill} />
              ))}
            </Pie>
            <Tooltip
              cursor={false}
              allowEscapeViewBox={{ x: true, y: true }}
              wrapperStyle={{ outline: 'none', pointerEvents: 'none', overflow: 'visible' }}
              content={
                <DonutTooltip
                  chartSize={size}
                  colors={{
                    tooltipBg: chartTheme.tooltipBg,
                    tooltipBorder: chartTheme.tooltipBorder,
                    tooltipText: chartTheme.tooltipText,
                  }}
                />
              }
            />
          </PieChart>
        </ResponsiveContainer>
        <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center text-center">
          <span
            className={`font-bold text-slate-900 dark:text-slate-100 ${compact ? 'text-base' : 'text-xl'}`}
          >
            {DISTRIBUTION_TOTAL.toLocaleString('bg-BG')}
          </span>
          <span className="text-xs font-medium text-slate-500 dark:text-slate-400">общо</span>
        </div>
      </div>

      <ul className={`w-full space-y-2 ${compact ? 'text-xs' : 'space-y-2.5 text-sm'}`}>
        {DISTRIBUTION_DATA.map((s) => (
          <li key={s.name} className="flex items-center justify-between gap-4">
            <span className="flex items-center gap-2 font-medium text-slate-600 dark:text-slate-300">
              <span className="h-2.5 w-2.5 rounded-full" style={{ background: s.fill }} />
              {s.name}
            </span>
            <span className="font-bold text-slate-800 dark:text-slate-100">{s.percent}%</span>
          </li>
        ))}
      </ul>
    </div>
  )

  if (compact) {
    return <div className={className}>{chart}</div>
  }

  return (
    <Card variant="premium" padding="lg" className={`h-full ${className}`}>
      {showHeader && (
        <div className="mb-5 flex items-start gap-3">
          <span className="inline-flex rounded-xl bg-gradient-to-br from-violet-500 to-indigo-600 p-2.5 text-white shadow-md shadow-violet-500/20">
            <PieChartIcon className="h-5 w-5" strokeWidth={1.75} />
          </span>
          <div>
            <h2 className="text-lg font-bold text-slate-900 dark:text-slate-100">
              Разпределение
            </h2>
            <p className="mt-0.5 text-sm text-slate-500 dark:text-slate-400">По тип промяна</p>
          </div>
        </div>
      )}
      {chart}
    </Card>
  )
}
