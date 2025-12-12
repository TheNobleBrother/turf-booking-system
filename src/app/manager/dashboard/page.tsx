"use client"

import ManagerNavbar from "@/src/components/manager-navbar"
import ManagerSidebar from "@/src/components/manager-sidebar"
import ManagerOverview from "@/src/components/overview"

export default function ManagerDashboard() {
  return (
    <main className="min-h-screen bg-background">
      <ManagerNavbar />
      <div className="flex">
        <ManagerSidebar />
        <div className="flex-1">
          <ManagerOverview />
        </div>
      </div>
    </main>
  )
}
