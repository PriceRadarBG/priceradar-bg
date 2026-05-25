import { Link } from 'react-router-dom'
import type { ReactNode } from 'react'

type LandingButtonProps = {
  to?: string
  href?: string
  children: ReactNode
  variant?: 'primary' | 'secondary' | 'ghost'
  className?: string
  title?: string
}

const variants = {
  primary:
    'bg-gradient-to-r from-indigo-600 via-brand to-violet-600 text-white shadow-lg shadow-indigo-500/30 hover:shadow-xl hover:shadow-indigo-500/35 hover:brightness-105',
  secondary:
    'glass-card-solid text-brand border border-indigo-100 hover:border-indigo-200 hover:shadow-md',
  ghost:
    'border border-slate-200/80 bg-white/60 text-slate-700 backdrop-blur-sm hover:bg-white hover:border-indigo-200 hover:text-brand dark:border-slate-600 dark:bg-slate-800/60 dark:text-slate-300 dark:hover:border-indigo-500/50 dark:hover:bg-slate-800 dark:hover:text-indigo-300',
}

function buttonClasses(variant: keyof typeof variants, className: string) {
  return `inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition sm:px-7 sm:py-3.5 sm:text-base ${variants[variant]} ${className}`
}

export function LandingButton({
  to,
  href,
  children,
  variant = 'primary',
  className = '',
  title,
}: LandingButtonProps) {
  const classes = buttonClasses(variant, className)
  const resolvedTitle =
    title ?? (to === '/dashboard' ? 'Отваря демо таблото на PriceRadar BG' : undefined)

  if (href) {
    return (
      <a href={href} className={classes} title={resolvedTitle}>
        {children}
      </a>
    )
  }

  return (
    <Link to={to ?? '/'} className={classes} title={resolvedTitle}>
      {children}
    </Link>
  )
}
