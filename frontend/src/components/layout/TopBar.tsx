import { Bell, Calendar, ChevronDown, Menu, User } from 'lucide-react'
import { SearchInput } from '@/components/ui/SearchInput'
import { ThemeToggle } from '@/components/ui/ThemeToggle'

type TopBarProps = {
  onMenuClick: () => void
  onDemoGuard?: () => void
  unreadNotifications?: number
}

export function TopBar({ onMenuClick, onDemoGuard, unreadNotifications = 3 }: TopBarProps) {
  const guard = onDemoGuard ?? (() => {})

  return (
    <header className="sticky top-0 z-30 border-b border-indigo-100/50 bg-white/80 backdrop-blur-xl dark:border-slate-800 dark:bg-slate-900/85">
      <div className="flex h-[4.25rem] items-center gap-3 px-4 sm:gap-4 sm:px-6 lg:px-8">
        <button
          type="button"
          onClick={onMenuClick}
          className="inline-flex rounded-xl border border-slate-200/80 bg-white p-2.5 text-slate-600 shadow-sm transition hover:border-indigo-200 hover:bg-indigo-50/50 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300 dark:hover:border-indigo-500/50 lg:hidden"
          aria-label="Отвори менюто"
        >
          <Menu className="h-5 w-5" />
        </button>

        <SearchInput className="max-w-2xl flex-1" onDemoGuard={guard} />

        <div className="flex shrink-0 items-center gap-2 sm:gap-3">
          <ThemeToggle className="hidden sm:inline-flex" />

          <button
            type="button"
            onClick={guard}
            className="relative hidden rounded-xl border border-slate-200/80 bg-white p-2.5 text-slate-500 shadow-sm transition hover:border-indigo-200 hover:text-brand dark:border-slate-700 dark:bg-slate-800 dark:hover:text-indigo-300 sm:inline-flex"
            aria-label="Известия (демо)"
            title="Известия — демо режим"
          >
            <Bell className="h-5 w-5" />
            {unreadNotifications > 0 && (
              <span className="absolute -right-0.5 -top-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-gradient-to-r from-indigo-600 to-violet-600 text-[10px] font-bold text-white">
                {unreadNotifications}
              </span>
            )}
          </button>

          <button
            type="button"
            onClick={guard}
            className="hidden items-center gap-2 rounded-xl border border-slate-200/80 bg-white px-3 py-2 text-sm text-slate-600 shadow-sm transition hover:border-indigo-200 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300 md:inline-flex"
            aria-label="Избери период (демо)"
            title="Период — демо режим"
          >
            <Calendar className="h-4 w-4 text-slate-400" />
            <span className="font-medium">Демо период</span>
            <ChevronDown className="h-4 w-4 text-slate-400" />
          </button>

          <button
            type="button"
            onClick={guard}
            className="inline-flex items-center gap-2 rounded-xl border border-slate-200/80 bg-white py-1.5 pl-1.5 pr-2.5 text-sm shadow-sm transition hover:border-indigo-200 dark:border-slate-700 dark:bg-slate-800 sm:pr-3"
            aria-label="Профил (демо)"
            title="Профил — демо режим"
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-violet-500 to-indigo-600 text-white shadow-sm">
              <User className="h-4 w-4" />
            </span>
            <span className="hidden font-medium text-slate-700 dark:text-slate-200 sm:inline">
              Профил
            </span>
            <ChevronDown className="hidden h-4 w-4 text-slate-400 sm:block" />
          </button>
        </div>
      </div>
    </header>
  )
}
