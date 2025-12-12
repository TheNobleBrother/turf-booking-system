"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

const menuItems = [
  { label: "Overview", href: "/admin/dashboard", icon: "📊" },
  { label: "Users", href: "/admin/users", icon: "👥" },
  { label: "Venues", href: "/admin/venues", icon: "🏢" },
  { label: "Bookings", href: "/admin/bookings", icon: "📅" },
  { label: "Payments", href: "/admin/payments", icon: "💳" },
  { label: "Reports", href: "/admin/reports", icon: "📈" },
  { label: "Settings", href: "/admin/settings", icon: "⚙️" },
]

export default function AdminSidebar() {
  const pathname = usePathname()

  return (
    <aside className="w-64 border-r border-border bg-card min-h-screen p-6 sticky top-0 max-h-screen overflow-y-auto">
      <div className="mb-8">
        <h3 className="text-lg font-bold text-foreground mb-1">Admin Panel</h3>
        <p className="text-xs text-muted-foreground">Platform Management</p>
      </div>

      <nav className="space-y-2">
        {menuItems.map((item) => (
          <Link key={item.href} href={item.href}>
            <button
              className={`w-full text-left px-4 py-3 rounded-lg transition-colors flex items-center gap-3 ${
                pathname === item.href
                  ? "bg-destructive text-destructive-foreground"
                  : "text-foreground hover:bg-secondary"
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
