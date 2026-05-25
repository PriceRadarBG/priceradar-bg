import { ChartTooltipContent } from '@/components/charts/ChartTooltipContent'

type DonutTooltipProps = {
  active?: boolean
  payload?: { name?: string; value?: number; color?: string; dataKey?: string | number }[]
  coordinate?: { x?: number; y?: number }
  chartSize: number
  colors: {
    tooltipBg: string
    tooltipBorder: string
    tooltipText: string
  }
}

/** Tooltip offset radially from pie center so it does not cover the center label. */
export function DonutTooltip({
  active,
  payload,
  coordinate,
  chartSize,
  colors,
}: DonutTooltipProps) {
  if (!active || !payload?.length) return null

  const cx = chartSize / 2
  const cy = chartSize / 2
  const px = coordinate?.x ?? cx
  const py = coordinate?.y ?? cy
  const dx = px - cx
  const dy = py - cy
  const len = Math.hypot(dx, dy) || 1
  const offset = chartSize * 0.22
  const left = px + (dx / len) * offset
  const top = py + (dy / len) * offset - 10

  return (
    <div
      className="pointer-events-none"
      style={{
        position: 'absolute',
        left,
        top,
        transform: 'translate(-50%, -100%)',
        zIndex: 30,
      }}
    >
      <ChartTooltipContent
        active
        payload={payload}
        colors={colors}
        valueSuffix=" бр."
        compact
        singleEntry
      />
    </div>
  )
}
