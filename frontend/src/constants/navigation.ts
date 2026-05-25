export type NavIcon =
  | 'home'
  | 'products'
  | 'tracking'
  | 'comparison'
  | 'history'
  | 'favorites'
  | 'notifications'
  | 'stores'
  | 'categories'
  | 'settings'
  | 'help'

export type NavItem = {
  id: string
  label: string
  href: string
  icon: NavIcon
}

export const PRIMARY_NAV: NavItem[] = [
  { id: 'dashboard', label: 'Начало', href: '#', icon: 'home' },
  { id: 'products', label: 'Продукти', href: '#', icon: 'products' },
  { id: 'tracking', label: 'Проследяване', href: '#', icon: 'tracking' },
  { id: 'comparison', label: 'Сравнение', href: '#', icon: 'comparison' },
  { id: 'history', label: 'История на цените', href: '#', icon: 'history' },
  { id: 'favorites', label: 'Любими', href: '#', icon: 'favorites' },
  { id: 'notifications', label: 'Известия', href: '#', icon: 'notifications' },
]

export const SECONDARY_NAV: NavItem[] = [
  { id: 'stores', label: 'Магазини', href: '#', icon: 'stores' },
  { id: 'categories', label: 'Категории', href: '#', icon: 'categories' },
  { id: 'settings', label: 'Настройки', href: '#', icon: 'settings' },
  { id: 'help', label: 'Помощ', href: '#', icon: 'help' },
]
