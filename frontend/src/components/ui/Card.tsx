import type { ReactNode } from 'react'

type CardProps = {
  children: ReactNode
  className?: string
  padding?: 'none' | 'sm' | 'md' | 'lg'
  variant?: 'default' | 'glass' | 'premium'
}

const paddingClasses = {
  none: '',
  sm: 'p-4',
  md: 'p-5 sm:p-6',
  lg: 'p-6 sm:p-7',
}

const variantClasses = {
  default:
    'rounded-2xl border border-slate-100/90 bg-white shadow-[var(--shadow-card)] dark:border-slate-700/70 dark:bg-slate-800/95',
  glass: 'glass-card-solid rounded-2xl',
  premium:
    'rounded-2xl border border-white/80 bg-white shadow-[var(--shadow-card)] ring-1 ring-indigo-100/60 transition hover:shadow-[var(--shadow-card-hover)] dark:border-slate-700/70 dark:bg-slate-800/95 dark:ring-indigo-500/15',
}

export function Card({
  children,
  className = '',
  padding = 'md',
  variant = 'default',
}: CardProps) {
  return (
    <div className={`${variantClasses[variant]} ${paddingClasses[padding]} ${className}`}>
      {children}
    </div>
  )
}
