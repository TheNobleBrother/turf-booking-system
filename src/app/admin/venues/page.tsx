"use client"

import AdminNavbar from "@/src/components/admin-navbar"
import AdminSidebar from "@/src/components/admin-sidebar"
import VenueApproval from "@/src/components/venue-approval"

export default function AdminVenuesPage() {
  return (
    <main className="min-h-screen bg-background">
      <AdminNavbar />
      <div className="flex">
        <AdminSidebar />
        <div className="flex-1">
          <VenueApproval />
        </div>
      </div>
    </main>
  )
}
