"use client"

import { useState } from "react"
import { Card } from "@/src/components/ui/card"
import { Button } from "@/src/components/ui/button"
import { Input } from "@/src/components/ui/input"

const mockAllUsers = [
  {
    id: 1,
    name: "Rajesh Kumar",
    email: "rajesh@example.com",
    phone: "+91-9876-543210",
    role: "player",
    joinDate: "Dec 1, 2025",
    status: "active",
    totalSpent: "₹2,350",
  },
  {
    id: 2,
    name: "MCC Sports Pvt Ltd",
    email: "mcc@sports.com",
    phone: "+91-9999-999999",
    role: "venue_manager",
    joinDate: "Nov 15, 2025",
    status: "active",
    totalEarnings: "₹45,230",
  },
  {
    id: 3,
    name: "Priya Singh",
    email: "priya.singh@email.com",
    phone: "+91-8765-432109",
    role: "player",
    joinDate: "Nov 20, 2025",
    status: "active",
    totalSpent: "₹960",
  },
]

export default function AdminUsersManagement() {
  const [searchQuery, setSearchQuery] = useState("")
  const [roleFilter, setRoleFilter] = useState("all")
  const [statusFilter, setStatusFilter] = useState("all")

  let filteredUsers = mockAllUsers

  if (searchQuery) {
    filteredUsers = filteredUsers.filter(
      (user) =>
        user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        user.email.toLowerCase().includes(searchQuery.toLowerCase()),
    )
  }

  if (roleFilter !== "all") {
    filteredUsers = filteredUsers.filter((user) => user.role === roleFilter)
  }

  if (statusFilter !== "all") {
    filteredUsers = filteredUsers.filter((user) => user.status === statusFilter)
  }

  return (
    <div className="p-8 space-y-8">
      <div>
        <h1 className="text-4xl font-bold text-foreground mb-2">Users Management</h1>
        <p className="text-muted-foreground">Manage all platform users</p>
      </div>

      {/* Filters */}
      <Card className="p-6">
        <div className="grid md:grid-cols-4 gap-4">
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">Search</label>
            <Input
              placeholder="Search by name or email"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="bg-input border-border"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-foreground mb-2">Role</label>
            <select
              value={roleFilter}
              onChange={(e) => setRoleFilter(e.target.value)}
              className="w-full px-3 py-2 border border-border rounded-md bg-input"
            >
              <option value="all">All Roles</option>
              <option value="player">Player</option>
              <option value="venue_manager">Venue Manager</option>
              <option value="admin">Admin</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-foreground mb-2">Status</label>
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="w-full px-3 py-2 border border-border rounded-md bg-input"
            >
              <option value="all">All Status</option>
              <option value="active">Active</option>
              <option value="inactive">Inactive</option>
            </select>
          </div>

          <div className="flex items-end">
            <Button
              variant="outline"
              onClick={() => {
                setSearchQuery("")
                setRoleFilter("all")
                setStatusFilter("all")
              }}
              className="w-full bg-transparent"
            >
              Clear Filters
            </Button>
          </div>
        </div>
      </Card>

      {/* Users Table */}
      <Card className="p-6">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-3 px-4 font-semibold text-foreground">Name</th>
                <th className="text-left py-3 px-4 font-semibold text-foreground">Email</th>
                <th className="text-left py-3 px-4 font-semibold text-foreground">Role</th>
                <th className="text-left py-3 px-4 font-semibold text-foreground">Join Date</th>
                <th className="text-left py-3 px-4 font-semibold text-foreground">Status</th>
                <th className="text-left py-3 px-4 font-semibold text-foreground">Action</th>
              </tr>
            </thead>
            <tbody>
              {filteredUsers.map((user) => (
                <tr key={user.id} className="border-b border-border hover:bg-secondary/50 transition-colors">
                  <td className="py-4 px-4 text-foreground font-medium">{user.name}</td>
                  <td className="py-4 px-4 text-foreground text-sm">{user.email}</td>
                  <td className="py-4 px-4">
                    <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-semibold">
                      {user.role === "player" ? "Player" : user.role === "venue_manager" ? "Venue Manager" : "Admin"}
                    </span>
                  </td>
                  <td className="py-4 px-4 text-foreground text-sm">{user.joinDate}</td>
                  <td className="py-4 px-4">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold inline-block ${
                        user.status === "active" ? "bg-green-100 text-green-800" : "bg-gray-100 text-gray-800"
                      }`}
                    >
                      {user.status === "active" ? "Active" : "Inactive"}
                    </span>
                  </td>
                  <td className="py-4 px-4">
                    <button className="text-primary hover:underline text-sm font-medium">Manage</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  )
}
