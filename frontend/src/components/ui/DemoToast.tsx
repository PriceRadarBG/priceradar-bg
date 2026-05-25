import { useEffect } from 'react'
import { AlertTriangle, CheckCircle2, Info, X } from 'lucide-react'
import type { DemoToastTone } from '@/hooks/useGuidedDemo'

type DemoToastProps = {
  message: string
  onClose: () => void
  durationMs?: number
  tone?: DemoToastTone
}

const toneStyles: Record<DemoToastTone, string> = {
  success:
    'border-emerald-200/80 shadow-emerald-500/10 ring-emerald-500/10 dark:border-emerald-500/30 dark:ring-emerald-500/20',
  info:
    'border-indigo-200/80 shadow-indigo-500/10 ring-indigo-500/10 dark:border-indigo-500/30 dark:ring-indigo-500/20',
  warn:
    'border-amber-200/80 shadow-amber-500/10 ring-amber-500/10 dark:border-amber-500/30 dark:ring-amber-500/20',
}

const toneIcon = {
  success: CheckCircle2,
  info: Info,
  warn: AlertTriangle,
}

const toneIconClass: Record<DemoToastTone, string> = {
  success: 'text-emerald-600 dark:text-emerald-400',
  info: 'text-indigo-600 dark:text-indigo-400',
  warn: 'text-amber-600 dark:text-amber-400',
}

export function DemoToast({ message, onClose, durationMs = 4500, tone = 'info' }: DemoToastProps) {
  const Icon = toneIcon[tone]

  useEffect(() => {
    const timer = window.setTimeout(onClose, durationMs)
    return () => window.clearTimeout(timer)
  }, [message, onClose, durationMs])

  return (
    <div
      role="status"
      aria-live="polite"
      className="fixed bottom-5 left-1/2 z-[70] w-[min(24rem,calc(100vw-2rem))] -translate-x-1/2"
    >
      <div className={`flex items-start gap-3 rounded-xl border bg-white px-4 py-3 shadow-lg ring-1 dark:bg-slate-900 ${toneStyles[tone]}`}>
        <Icon className={`mt-0.5 h-5 w-5 shrink-0 ${toneIconClass[tone]}`} />
        <p className="flex-1 text-sm font-medium text-slate-800 dark:text-slate-100">{message}</p>
        <button
          type="button"
          onClick={onClose}
          className="rounded-lg p-0.5 text-slate-400 transition hover:bg-slate-100 hover:text-slate-600 dark:hover:bg-slate-800"
          aria-label="Затвори съобщението"
        >
          <X className="h-4 w-4" />
        </button>
      </div>
    </div>
  )
}
