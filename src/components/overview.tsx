"use client"

import { Card } from "@/src/components/ui/card"
import { Button } from "@/src/components/ui/button"
import StatCard from "@/src/components/stat-card"
import PlatformMetrics from "@/src/components/platform-metrics"
import UsersTable from "@/src/components/users-table"

export default function AdminOverview() {
  return (
    <div className="p-8 space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-4xl font-bold text-foreground mb-2">Admin Dashboard</h1>
        <p className="text-muted-foreground">Platform overview and management</p>
      </div>

      {/* Platform Stats */}
      <div className="grid md:grid-cols-4 gap-6">
        <StatCard label="Total Users" value="2,543" change="+215" icon="👥" />
        <StatCard label="Active Venues" value="437" change="+42" icon="🏢" />
        <StatCard label="Total Bookings" value="8,943" change="+567" icon="📅" />
        <StatCard label="Platform GMV" value="₹4.2L" change="+₹0.8L" icon="💰" />
      </div>

      {/* Commission & Revenue */}
      <div className="grid lg:grid-cols-2 gap-6">
        <Card className="p-6">
          <h2 className="text-xl font-bold text-foreground mb-4">Revenue by Commission</h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-foreground">Commission Rate: 15%</span>
              <span className="font-bold text-primary">₹63,000</span>
            </div>
            <div className="w-full h-3 bg-secondary rounded-full overflow-hidden">
              <div className="h-full w-3/4 bg-gradient-to-r from-destructive to-accent"></div>
            </div>
            <p className="text-sm text-muted-foreground">Platform earnings this month</p>
          </div>
        </Card>

        <Card className="p-6">
          <h2 className="text-xl font-bold text-foreground mb-4">Key Metrics</h2>
          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="text-muted-foreground">Avg Booking Value</span>
              <span className="font-semibold text-foreground">₹470</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Payment Success Rate</span>
              <span className="font-semibold text-green-600">98.5%</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Venue Utilization</span>
              <span className="font-semibold text-foreground">84%</span>
            </div>
          </div>
        </Card>
      </div>

      {/* Quick Actions */}
      <Card className="p-6">
        <h2 className="text-xl font-bold text-foreground mb-4">Quick Actions</h2>
        <div className="grid md:grid-cols-4 gap-4">
          <Button className="bg-primary hover:bg-primary/90">Verify Users</Button>
          <Button className="bg-accent hover:bg-accent/90">Approve Venues</Button>
          <Button variant="outline" className="bg-transparent">
            View Reports
          </Button>
          <Button variant="outline" className="bg-transparent">
            Settings
          </Button>
        </div>
      </Card>

      {/* Platform Metrics */}
      <PlatformMetrics />

      {/* Users Table */}
      <UsersTable />
    </div>
  )
}
