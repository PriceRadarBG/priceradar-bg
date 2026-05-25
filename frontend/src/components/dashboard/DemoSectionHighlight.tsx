import type { ReactNode } from 'react'

type DemoSectionHighlightProps = {
  children: ReactNode
  active?: boolean
  dimmed?: boolean
  className?: string
}

export function DemoSectionHighlight({
  children,
  active = false,
  dimmed = false,
  className = '',
}: DemoSectionHighlightProps) {
  return (
    <div
      className={`rounded-2xl transition duration-300 ${className} ${
        active
          ? 'ring-2 ring-indigo-400/90 ring-offset-2 ring-offset-[#f4f6fb] dark:ring-indigo-500/70 dark:ring-offset-slate-950'
          : ''
      } ${dimmed ? 'opacity-55' : 'opacity-100'}`}
    >
      {children}
    </div>
  )
}
