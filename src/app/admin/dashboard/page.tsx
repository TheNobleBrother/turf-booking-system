"use client"

import AdminNavbar from "@/src/components/admin-navbar"
import AdminSidebar from "@/src/components/admin-sidebar"
import AdminOverview from "@/src/components/overview"

export default function AdminDashboard() {
  return (
    <main className="min-h-screen bg-background">
      <AdminNavbar />
      <div className="flex">
        <AdminSidebar />
        <div className="flex-1">
          <AdminOverview />
        </div>
      </div>
    </main>
  )
}
