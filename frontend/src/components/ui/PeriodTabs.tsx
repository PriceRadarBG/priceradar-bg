type PeriodTabsProps = {
  tabs: readonly string[]
  activeTab: string
  onChange?: (tab: string) => void
}

export function PeriodTabs({ tabs, activeTab, onChange }: PeriodTabsProps) {
  return (
    <div className="inline-flex flex-wrap gap-1 rounded-xl bg-indigo-50/80 p-1 ring-1 ring-indigo-100/60 dark:bg-slate-800/80 dark:ring-slate-700">
      {tabs.map((tab) => {
        const isActive = tab === activeTab
        return (
          <button
            key={tab}
            type="button"
            onClick={() => onChange?.(tab)}
            className={`rounded-lg px-3 py-1.5 text-xs font-semibold transition sm:px-4 sm:text-sm ${
              isActive
                ? 'bg-white text-brand shadow-sm ring-1 ring-indigo-100/80 dark:bg-slate-700 dark:text-indigo-300 dark:ring-indigo-500/30'
                : 'text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200'
            }`}
          >
            {tab}
          </button>
        )
      })}
    </div>
  )
}
