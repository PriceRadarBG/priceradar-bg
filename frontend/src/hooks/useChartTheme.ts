import { useMemo } from 'react'
import { useTheme } from '@/hooks/useTheme'

export function useChartTheme() {
  const { theme } = useTheme()
  const isDark = theme === 'dark'

  return useMemo(
    () => ({
      isDark,
      grid: isDark ? '#475569' : '#e2e8f0',
      axis: isDark ? '#cbd5e1' : '#64748b',
      tooltipBg: isDark ? '#1e293b' : '#ffffff',
      tooltipBorder: isDark ? '#64748b' : '#e2e8f0',
      tooltipText: isDark ? '#f8fafc' : '#0f172a',
      chartAreaBg: isDark ? 'rgb(30 41 59 / 0.4)' : 'rgb(238 242 255 / 0.5)',
      lines: {
        average: isDark ? '#a5b4fc' : '#6366f1',
        decreases: isDark ? '#4ade80' : '#10b981',
        increases: isDark ? '#fb7185' : '#f43f5e',
      },
      fills: {
        average: isDark ? '#6366f1' : '#6366f1',
        decreases: isDark ? '#10b981' : '#10b981',
        increases: isDark ? '#f43f5e' : '#f43f5e',
      },
    }),
    [isDark],
  )
}
