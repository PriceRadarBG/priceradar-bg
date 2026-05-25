import { Moon, Sun } from 'lucide-react'
import { useTheme } from '@/hooks/useTheme'

type ThemeToggleProps = {
  className?: string
  showLabel?: boolean
}

export function ThemeToggle({ className = '', showLabel = false }: ThemeToggleProps) {
  const { theme, toggleTheme } = useTheme()
  const isDark = theme === 'dark'

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className={`inline-flex items-center gap-2 rounded-xl border border-slate-200/80 bg-white p-2.5 text-slate-600 shadow-sm transition hover:border-indigo-200 hover:text-brand dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300 dark:hover:border-indigo-500/50 dark:hover:text-indigo-300 ${className}`}
      aria-label={isDark ? 'Светла тема' : 'Тъмна тема'}
      title={isDark ? 'Светла тема' : 'Тъмна тема'}
    >
      {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
      {showLabel && (
        <span className="hidden text-sm font-medium sm:inline">
          {isDark ? 'Светла' : 'Тъмна'}
        </span>
      )}
    </button>
  )
}
