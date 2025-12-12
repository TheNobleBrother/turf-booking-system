"use client"

import AdminNavbar from "@/src/components/admin-navbar"
import AdminSidebar from "@/src/components/admin-sidebar"
import AdminUsersManagement from "@/src/components/users-management"

export default function AdminUsersPage() {
  return (
    <main className="min-h-screen bg-background">
      <AdminNavbar />
      <div className="flex">
        <AdminSidebar />
        <div className="flex-1">
          <AdminUsersManagement />
        </div>
      </div>
    </main>
  )
}
