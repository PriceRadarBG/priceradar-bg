import { DEMO_STORES } from '@/constants/guidedDemo'

type DemoStorePickerProps = {
  selected: string[]
  onToggle: (store: string) => void
}

export function DemoStorePicker({ selected, onToggle }: DemoStorePickerProps) {
  return (
    <div>
      <div className="grid gap-2 sm:grid-cols-2">
        {DEMO_STORES.map((store, index) => {
          const isSelected = selected.includes(store)
          return (
            <button
              key={store}
              type="button"
              onClick={() => onToggle(store)}
              className={`flex items-center gap-3 rounded-2xl border px-3 py-3 text-left text-sm font-medium transition ${
                isSelected
                  ? 'border-indigo-400 bg-indigo-50 text-brand-dark shadow-sm dark:border-indigo-500/50 dark:bg-indigo-950/60 dark:text-indigo-200'
                  : 'border-slate-200 bg-white text-slate-600 hover:border-indigo-200 dark:border-slate-600 dark:bg-slate-800 dark:text-slate-300'
              }`}
            >
              <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 to-violet-600 text-xs font-black text-white">
                {index + 1}
              </span>
              <span>{store}</span>
            </button>
          )
        })}
      </div>
      {selected.length === 0 && (
        <p className="mt-2 text-xs font-medium text-amber-700 dark:text-amber-300">
          Избери поне един магазин, за да продължиш.
        </p>
      )}
    </div>
  )
}
