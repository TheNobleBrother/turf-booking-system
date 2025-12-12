"use client"

import ManagerNavbar from "@/src/components/manager-navbar"
import ManagerSidebar from "@/src/components/manager-sidebar"
import CourtsManagement from "@/src/components/courts-management"

export default function CourtsPage() {
  return (
    <main className="min-h-screen bg-background">
      <ManagerNavbar />
      <div className="flex">
        <ManagerSidebar />
        <div className="flex-1">
          <CourtsManagement />
        </div>
      </div>
    </main>
  )
}
