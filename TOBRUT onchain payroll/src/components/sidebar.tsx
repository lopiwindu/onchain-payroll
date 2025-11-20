'use client'

import { Button } from '@/components/ui/button'
import { LayoutDashboard, Wallet, Users, History, Settings } from 'lucide-react'

interface SidebarProps {
  activeTab: string
  setActiveTab: (tab: string) => void
}

export function Sidebar({ activeTab, setActiveTab }: SidebarProps): JSX.Element {
  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'treasury', label: 'Treasury', icon: Wallet },
    { id: 'employees', label: 'Employees', icon: Users },
    { id: 'payments', label: 'Payments', icon: History },
    { id: 'settings', label: 'Settings', icon: Settings },
  ]

  return (
    <aside className="w-64 bg-black text-white p-6 hidden md:block">
      <div className="mb-8">
        <h1 className="text-2xl font-bold">Gajian</h1>
        <p className="text-sm text-gray-400">Onchain Payroll</p>
      </div>

      <nav className="space-y-2">
        {menuItems.map((item) => {
          const Icon = item.icon
          return (
            <Button
              key={item.id}
              variant={activeTab === item.id ? 'secondary' : 'ghost'}
              className={`w-full justify-start ${
                activeTab === item.id
                  ? 'bg-white text-black hover:bg-gray-100'
                  : 'text-white hover:bg-gray-800'
              }`}
              onClick={() => setActiveTab(item.id)}
            >
              <Icon className="mr-2 h-4 w-4" />
              {item.label}
            </Button>
          )
        })}
      </nav>

      <div className="mt-8 p-4 bg-gray-900 rounded-lg">
        <p className="text-xs text-gray-400 mb-2">Connect Wallet</p>
        <Button className="w-full bg-white text-black hover:bg-gray-100" size="sm">
          Connect
        </Button>
      </div>
    </aside>
  )
}
