import { Search } from 'lucide-react'

type SearchInputProps = {
  placeholder?: string
  className?: string
  onDemoGuard?: () => void
}

export function SearchInput({
  placeholder = 'Търси продукт, категория или магазин...',
  className = '',
  onDemoGuard,
}: SearchInputProps) {
  return (
    <label className={`relative block ${className}`}>
      <span className="sr-only">{placeholder}</span>
      <Search className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
      <input
        type="search"
        placeholder={placeholder}
        title="Търсене — демо режим"
        aria-label={`${placeholder} (демо)`}
        readOnly
        onClick={() => onDemoGuard?.()}
        onFocus={(event) => {
          event.currentTarget.blur()
          onDemoGuard?.()
        }}
        className="w-full cursor-pointer rounded-xl border border-slate-200/80 bg-white/90 py-2.5 pl-11 pr-16 text-sm text-slate-900 shadow-sm outline-none transition placeholder:text-slate-400 focus:border-brand focus:ring-2 focus:ring-brand/20 dark:border-slate-700 dark:bg-slate-800/90 dark:text-slate-100 dark:placeholder:text-slate-500 dark:focus:border-indigo-500 dark:focus:ring-indigo-500/25"
      />
      <kbd className="pointer-events-none absolute right-3 top-1/2 hidden -translate-y-1/2 rounded-md border border-slate-200 bg-slate-50 px-1.5 py-0.5 text-[10px] font-medium text-slate-400 dark:border-slate-600 dark:bg-slate-700 dark:text-slate-400 sm:inline">
        ⌘K
      </kbd>
    </label>
  )
}
