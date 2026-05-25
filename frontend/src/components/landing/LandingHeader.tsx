import { Link } from 'react-router-dom'
import { BrandLogo } from '@/components/ui/BrandLogo'
import { ThemeToggle } from '@/components/ui/ThemeToggle'

const navLinks = [
  { href: '#problem', label: 'Проблем' },
  { href: '#how', label: 'Как работи' },
  { href: '#features', label: 'Функции' },
  { href: '#comparison', label: 'Сравнение' },
]

export function LandingHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/60 bg-white/70 backdrop-blur-xl dark:border-slate-800/80 dark:bg-slate-900/75">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-3 px-4 sm:px-6 lg:px-8">
        <Link to="/" className="min-w-0 shrink">
          <BrandLogo size="sm" showText variant="compact" />
        </Link>

        <div className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-lg px-3 py-2 text-sm font-medium text-slate-600 transition hover:bg-brand-soft/60 hover:text-brand dark:text-slate-400 dark:hover:bg-indigo-950/50 dark:hover:text-indigo-300"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex shrink-0 items-center gap-2">
          <ThemeToggle />
          <Link
            to="/dashboard"
            title="Отваря демо таблото на PriceRadar BG"
            className="rounded-full bg-gradient-to-r from-indigo-600 to-violet-600 px-4 py-2 text-sm font-semibold text-white shadow-md shadow-indigo-500/25 transition hover:shadow-lg sm:px-5"
          >
            Демо табло
          </Link>
        </div>
      </nav>
    </header>
  )
}
