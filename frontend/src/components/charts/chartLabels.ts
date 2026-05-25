export const LINE_CHART_SERIES = [
  { key: 'average', label: 'Средна цена', colorKey: 'average' as const },
  { key: 'decreases', label: 'Намаления', colorKey: 'decreases' as const },
  { key: 'increases', label: 'Поскъпвания', colorKey: 'increases' as const },
] as const

export function lineChartLabel(dataKey: string | number | undefined, fallback?: string) {
  const key = String(dataKey ?? '')
  const match = LINE_CHART_SERIES.find((s) => s.key === key)
  return match?.label ?? fallback ?? key
}

export function lineChartTooltipSuffix(dataKey: string | number | undefined): string {
  if (String(dataKey ?? '') === 'average') return ''
  return ' бр.'
}

export function formatLineChartTooltipValue(
  dataKey: string | number | undefined,
  value: number | undefined,
): string {
  if (value === undefined || value === null) return ''
  if (String(dataKey ?? '') === 'average') {
    return `${value.toLocaleString('bg-BG', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} €`
  }
  return String(value)
}
