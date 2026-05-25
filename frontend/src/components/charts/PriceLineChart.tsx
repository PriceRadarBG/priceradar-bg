import { useState } from 'react'
import {
  Area,
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'
import { LineChart as LineChartIcon } from 'lucide-react'
import { Card } from '@/components/ui/Card'
import { PeriodTabs } from '@/components/ui/PeriodTabs'
import { ChartTooltipContent } from '@/components/charts/ChartTooltipContent'
import { LINE_CHART_SERIES } from '@/components/charts/chartLabels'
import { CHART_PERIOD_TABS } from '@/constants/dashboard'
import { PRICE_LINE_DATA, type PriceLinePoint } from '@/constants/chartData'
import { useChartTheme } from '@/hooks/useChartTheme'

type PriceLineChartProps = {
  compact?: boolean
  showHeader?: boolean
  showLegend?: boolean
  className?: string
  /** Fixed dataset for hero preview (avoids crowded С1… labels). */
  previewData?: PriceLinePoint[]
  /** Hide x-axis labels on compact hero preview. */
  hideXAxis?: boolean
  isAnimationActive?: boolean
}

const tooltipColors = (theme: ReturnType<typeof useChartTheme>) => ({
  tooltipBg: theme.tooltipBg,
  tooltipBorder: theme.tooltipBorder,
  tooltipText: theme.tooltipText,
})

function ChartLegend({ axisColor }: { axisColor: string }) {
  const chartTheme = useChartTheme()
  return (
    <ul className="mt-3 flex flex-wrap justify-center gap-4 text-xs font-medium">
      {LINE_CHART_SERIES.map((series) => (
        <li key={series.key} className="inline-flex items-center gap-1.5" style={{ color: axisColor }}>
          <span
            className="h-2 w-2 rounded-full"
            style={{ background: chartTheme.lines[series.colorKey] }}
          />
          {series.label}
        </li>
      ))}
    </ul>
  )
}

export function PriceLineChart({
  compact = false,
  showHeader = true,
  showLegend = true,
  className = '',
  previewData,
  hideXAxis = false,
  isAnimationActive = true,
}: PriceLineChartProps) {
  const [activeTab, setActiveTab] = useState<string>(CHART_PERIOD_TABS[1])
  const chartTheme = useChartTheme()
  const data =
    previewData ??
    PRICE_LINE_DATA[activeTab] ??
    PRICE_LINE_DATA['30 дни']
  const height = compact ? (hideXAxis ? 120 : 140) : 220

  const chart = (
    <div
      className={`rounded-2xl border border-indigo-100/60 bg-gradient-to-b from-indigo-50/50 via-white to-white p-2 dark:border-slate-600/50 dark:from-slate-800/60 dark:via-slate-900/90 dark:to-slate-900/90 sm:p-3 ${
        compact ? '' : 'p-4 sm:p-5'
      }`}
    >
      <ResponsiveContainer width="100%" height={height}>
        <LineChart data={data} margin={{ top: 8, right: 8, left: -12, bottom: 0 }}>
          <CartesianGrid stroke={chartTheme.grid} strokeDasharray="3 3" vertical={false} />
          {!hideXAxis && (
            <XAxis
              dataKey="label"
              tick={{ fill: chartTheme.axis, fontSize: compact ? 10 : 11 }}
              axisLine={false}
              tickLine={false}
              interval={previewData ? 0 : undefined}
              minTickGap={previewData ? 4 : undefined}
            />
          )}
          <YAxis
            tick={{ fill: chartTheme.axis, fontSize: compact ? 10 : 11 }}
            axisLine={false}
            tickLine={false}
            width={compact ? 28 : 36}
          />
          <Tooltip
            content={
              <ChartTooltipContent
                colors={tooltipColors(chartTheme)}
                useLineChartUnits
                compact={compact}
              />
            }
          />
          <Area
            type="monotone"
            dataKey="average"
            stroke="none"
            fill={chartTheme.fills.average}
            fillOpacity={0.12}
            legendType="none"
            hide
            isAnimationActive={false}
          />
          <Line
            type="monotone"
            dataKey="average"
            stroke={chartTheme.lines.average}
            strokeWidth={2.5}
            dot={false}
            activeDot={{ r: 4 }}
            name="Средна цена"
            legendType="none"
            isAnimationActive={isAnimationActive}
          />
          <Line
            type="monotone"
            dataKey="decreases"
            stroke={chartTheme.lines.decreases}
            strokeWidth={2}
            dot={false}
            name="Намаления"
            legendType="none"
            isAnimationActive={isAnimationActive}
          />
          {!previewData && (
            <Line
              type="monotone"
              dataKey="increases"
              stroke={chartTheme.lines.increases}
              strokeWidth={2}
              dot={false}
              name="Поскъпвания"
              legendType="none"
              isAnimationActive={isAnimationActive}
            />
          )}
        </LineChart>
      </ResponsiveContainer>
      {compact && !previewData ? (
        <div className="mt-2 flex flex-wrap gap-3 text-[10px] font-medium text-slate-500 dark:text-slate-400">
          {LINE_CHART_SERIES.map((s) => (
            <span key={s.key} className="inline-flex items-center gap-1">
              <span
                className="h-1.5 w-1.5 rounded-full"
                style={{ background: chartTheme.lines[s.colorKey] }}
              />
              {s.label}
            </span>
          ))}
        </div>
      ) : (
        showLegend && <ChartLegend axisColor={chartTheme.axis} />
      )}
    </div>
  )

  if (compact) {
    return <div className={className}>{chart}</div>
  }

  return (
    <Card variant="premium" padding="lg" className={`h-full overflow-hidden ${className}`}>
      {showHeader && (
        <div className="mb-5 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
          <div className="flex items-start gap-3">
            <span className="inline-flex rounded-xl bg-gradient-to-br from-indigo-500 to-violet-600 p-2.5 text-white shadow-md shadow-indigo-500/20">
              <LineChartIcon className="h-5 w-5" strokeWidth={1.75} />
            </span>
            <div>
              <h2 className="text-lg font-bold text-slate-900 dark:text-slate-100">
                Динамика на цените
              </h2>
              <p className="mt-0.5 text-sm text-slate-500 dark:text-slate-400">
                Обобщение на промените по период
              </p>
            </div>
          </div>
          <PeriodTabs tabs={CHART_PERIOD_TABS} activeTab={activeTab} onChange={setActiveTab} />
        </div>
      )}
      {chart}
    </Card>
  )
}
