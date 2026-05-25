import { Link } from 'react-router-dom'
import { BrandLogo } from '@/components/ui/BrandLogo'

export function LandingFooter() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-indigo-100/60 bg-white/80 backdrop-blur-sm dark:border-slate-800 dark:bg-slate-900/80">
      <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <BrandLogo size="sm" showText subtitle="Проект за НОИТ" variant="compact" />
          <div className="flex gap-6 text-sm">
            <Link
              to="/"
              className="text-slate-600 hover:text-brand dark:text-slate-400 dark:hover:text-indigo-300"
            >
              Начало
            </Link>
            <Link
              to="/dashboard"
              className="text-slate-600 hover:text-brand dark:text-slate-400 dark:hover:text-indigo-300"
            >
              Демо табло
            </Link>
          </div>
        </div>
        <p className="mt-6 text-center text-xs text-slate-400 sm:text-left">
          © {year} PriceRadar BG
        </p>
      </div>
    </footer>
  )
}
