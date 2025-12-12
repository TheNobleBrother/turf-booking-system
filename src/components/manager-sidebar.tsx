"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

const menuItems = [
  { label: "Overview", href: "/manager/dashboard", icon: "📊" },
  { label: "My Venues", href: "/manager/venues", icon: "🏢" },
  { label: "Bookings", href: "/manager/bookings", icon: "📅" },
  { label: "Courts Management", href: "/manager/courts", icon: "🏐" },
  { label: "Pricing Rules", href: "/manager/pricing", icon: "💰" },
  { label: "Analytics", href: "/manager/analytics", icon: "📈" },
  { label: "Payouts", href: "/manager/payouts", icon: "💳" },
  { label: "Settings", href: "/manager/settings", icon: "⚙️" },
]

export default function ManagerSidebar() {
  const pathname = usePathname()

  return (
    <aside className="w-64 border-r border-border bg-card min-h-screen p-6 sticky top-0 max-h-screen overflow-y-auto">
      <div className="mb-8">
        <h3 className="text-lg font-bold text-foreground mb-1">Venue Manager</h3>
        <p className="text-xs text-muted-foreground">My Venue Dashboard</p>
      </div>

      <nav className="space-y-2">
        {menuItems.map((item) => (
          <Link key={item.href} href={item.href}>
            <button
              className={`w-full text-left px-4 py-3 rounded-lg transition-colors flex items-center gap-3 ${
                pathname === item.href ? "bg-primary text-primary-foreground" : "text-foreground hover:bg-secondary"
              }`}
            >
              <span className="text-lg">{item.icon}</span>
              {item.label}
            </button>
          </Link>
        ))}
      </nav>
    </aside>
  )
}
