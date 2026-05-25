import { useState, type ReactNode } from 'react'
import { Sidebar } from '@/components/layout/Sidebar'
import { TopBar } from '@/components/layout/TopBar'

type DashboardLayoutProps = {
  children: ReactNode
  rightSidebar?: ReactNode
  activeNavId?: string
  onDemoGuard?: () => void
  unreadNotifications?: number
}

export function DashboardLayout({
  children,
  rightSidebar,
  activeNavId = 'dashboard',
  onDemoGuard,
  unreadNotifications,
}: DashboardLayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div className="flex min-h-dvh bg-gradient-to-br from-slate-50 via-[#f4f6fb] to-indigo-50/40 font-sans text-slate-900 dark:from-slate-950 dark:via-slate-900 dark:to-indigo-950/30 dark:text-slate-100">
      <Sidebar
        activeId={activeNavId}
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
        onDemoNav={onDemoGuard}
      />

      <div className="flex min-w-0 flex-1 flex-col">
        <TopBar
          onMenuClick={() => setSidebarOpen(true)}
          onDemoGuard={onDemoGuard}
          unreadNotifications={unreadNotifications}
        />

        <div className="flex flex-1">
          <main className="min-w-0 flex-1 px-4 py-5 sm:px-6 lg:px-8 lg:py-6">
            {children}
          </main>

          {rightSidebar && (
            <div className="hidden w-[320px] shrink-0 space-y-4 border-l border-indigo-100/50 bg-white/50 px-4 py-6 backdrop-blur-sm dark:border-slate-800 dark:bg-slate-900/50 xl:block 2xl:w-[340px] 2xl:px-5">
              {rightSidebar}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
