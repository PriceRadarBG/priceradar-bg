import {
  formatLineChartTooltipValue,
  lineChartLabel,
  lineChartTooltipSuffix,
} from '@/components/charts/chartLabels'

type TooltipPayloadItem = {
  name?: string
  value?: number
  color?: string
  dataKey?: string | number
}

type ChartTooltipContentProps = {
  active?: boolean
  payload?: TooltipPayloadItem[]
  label?: string
  valueSuffix?: string
  /** Per-series suffix (e.g. counts vs EUR). Overrides valueSuffix when set. */
  useLineChartUnits?: boolean
  colors: {
    tooltipBg: string
    tooltipBorder: string
    tooltipText: string
  }
  compact?: boolean
  /** When set, only show this single segment (for donut). */
  singleEntry?: boolean
}

function normalizePayload(payload: TooltipPayloadItem[]) {
  const seen = new Set<string>()
  return payload.filter((entry) => {
    const key = String(entry.dataKey ?? '')
    if (!key || key === 'undefined' || seen.has(key)) return false
    seen.add(key)
    return true
  })
}

export function ChartTooltipContent({
  active,
  payload,
  label,
  valueSuffix = '',
  useLineChartUnits = false,
  colors,
  compact = false,
  singleEntry = false,
}: ChartTooltipContentProps) {
  const suffixFor = (entry: TooltipPayloadItem) =>
    useLineChartUnits ? lineChartTooltipSuffix(entry.dataKey) : valueSuffix

  const valueFor = (entry: TooltipPayloadItem) =>
    useLineChartUnits
      ? formatLineChartTooltipValue(entry.dataKey, entry.value as number | undefined)
      : String(entry.value ?? '')
  if (!active || !payload?.length) return null

  const items = singleEntry ? [payload[0]] : normalizePayload(payload)
  if (!items.length) return null

  const displayName = (entry: TooltipPayloadItem) =>
    lineChartLabel(entry.dataKey, entry.name) || entry.name

  if (compact || items.length === 1) {
    const entry = items[0]
    const name = displayName(entry) || label
    return (
      <div
        className="pointer-events-none rounded-lg border px-2.5 py-1.5 text-xs font-medium shadow-lg"
        style={{
          background: colors.tooltipBg,
          borderColor: colors.tooltipBorder,
          color: colors.tooltipText,
        }}
      >
        <span className="inline-flex items-center gap-1.5 whitespace-nowrap">
          <span
            className="h-2 w-2 shrink-0 rounded-full"
            style={{ background: entry.color }}
          />
          {name}: <strong>{valueFor(entry)}</strong>
          {suffixFor(entry)}
        </span>
      </div>
    )
  }

  return (
    <div
      className="pointer-events-none rounded-xl border px-3 py-2 text-xs shadow-lg"
      style={{
        background: colors.tooltipBg,
        borderColor: colors.tooltipBorder,
        color: colors.tooltipText,
      }}
    >
      {label && <p className="mb-1.5 font-semibold">{label}</p>}
      <ul className="space-y-1">
        {items.map((entry) => (
          <li key={String(entry.dataKey)} className="flex items-center gap-2">
            <span
              className="h-2 w-2 shrink-0 rounded-full"
              style={{ background: entry.color }}
            />
            <span>
              {displayName(entry)}: <strong>{valueFor(entry)}</strong>
              {suffixFor(entry)}
            </span>
          </li>
        ))}
      </ul>
    </div>
  )
}
