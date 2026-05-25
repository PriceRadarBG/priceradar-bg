import { Link } from 'react-router-dom'
import { X } from 'lucide-react'
import { PRIMARY_NAV, SECONDARY_NAV, type NavItem, type NavIcon } from '@/constants/navigation'
import { BrandLogo } from '@/components/ui/BrandLogo'
import { Icon } from '@/components/ui/Icon'

type SidebarProps = {
  activeId?: string
  isOpen: boolean
  onClose: () => void
  onDemoNav?: () => void
}

function NavButton({
  label,
  icon,
  isActive,
  onClick,
}: {
  label: string
  icon: NavIcon
  isActive: boolean
  onClick: () => void
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition ${
        isActive
          ? 'bg-gradient-to-r from-indigo-50 to-violet-50 text-brand-dark shadow-sm ring-1 ring-indigo-200/80 dark:from-indigo-950/80 dark:to-violet-950/50 dark:text-indigo-200 dark:ring-indigo-500/30'
          : 'text-slate-600 hover:bg-slate-50/80 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-slate-800/60 dark:hover:text-slate-100'
      }`}
    >
      <Icon
        name={icon}
        className={`h-5 w-5 shrink-0 ${isActive ? 'text-brand dark:text-indigo-400' : 'text-slate-400 dark:text-slate-500'}`}
      />
      {label}
    </button>
  )
}

export function Sidebar({ activeId = 'dashboard', isOpen, onClose, onDemoNav }: SidebarProps) {
  const handleNavClick = (item: NavItem) => {
    onClose()
    if (item.id === 'dashboard') {
      window.scrollTo({ top: 0, behavior: 'smooth' })
      return
    }
    onDemoNav?.()
  }

  return (
    <>
      <div
        className={`fixed inset-0 z-40 bg-slate-900/50 backdrop-blur-sm transition lg:hidden ${
          isOpen ? 'opacity-100' : 'pointer-events-none opacity-0'
        }`}
        onClick={onClose}
        aria-hidden={!isOpen}
      />

      <aside
        className={`fixed inset-y-0 left-0 z-50 flex w-[260px] flex-col border-r border-indigo-100/60 bg-white/95 backdrop-blur-xl transition-transform duration-200 dark:border-slate-800 dark:bg-slate-900/95 lg:static lg:translate-x-0 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex h-16 items-center justify-between px-5">
          <Link to="/" className="min-w-0">
            <BrandLogo size="sm" showText subtitle="Демо табло" variant="compact" />
          </Link>
          <button
            type="button"
            onClick={onClose}
            className="rounded-lg p-1.5 text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 lg:hidden"
            aria-label="Затвори менюто"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <nav className="flex-1 overflow-y-auto px-3 pb-4" aria-label="Основна навигация">
          <ul className="space-y-0.5">
            {PRIMARY_NAV.map((item) => (
              <li key={item.id}>
                <NavButton
                  label={item.label}
                  icon={item.icon}
                  isActive={item.id === activeId}
                  onClick={() => handleNavClick(item)}
                />
              </li>
            ))}
          </ul>

          <p className="mb-2 mt-6 px-3 text-[11px] font-bold uppercase tracking-wider text-slate-400">
            Още
          </p>
          <ul className="space-y-0.5">
            {SECONDARY_NAV.map((item) => (
              <li key={item.id}>
                <NavButton
                  label={item.label}
                  icon={item.icon}
                  isActive={item.id === activeId}
                  onClick={() => handleNavClick(item)}
                />
              </li>
            ))}
          </ul>
        </nav>

        <div className="border-t border-indigo-100/60 px-5 py-4 dark:border-slate-800">
          <Link
            to="/"
            className="block text-center text-xs font-medium text-brand hover:text-brand-dark dark:text-indigo-400"
          >
            ← Към началната страница
          </Link>
        </div>
      </aside>
    </>
  )
}
