"use client"

import ManagerNavbar from "@/src/components/manager-navbar"
import ManagerSidebar from "@/src/components/manager-sidebar"
import VenuesManagement from "@/src/components/venues-management"

export default function VenuesPage() {
  return (
    <main className="min-h-screen bg-background">
      <ManagerNavbar />
      <div className="flex">
        <ManagerSidebar />
        <div className="flex-1">
          <VenuesManagement />
        </div>
      </div>
    </main>
  )
}
