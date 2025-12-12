"use client"

import { Card } from "@/src/components/ui/card"
import { Button } from "@/src/components/ui/button"

const mockUsers = [
  {
    id: 1,
    name: "Rajesh Kumar",
    email: "rajesh@example.com",
    role: "player",
    joinDate: "Dec 1, 2025",
    status: "active",
    bookings: 12,
  },
  {
    id: 2,
    name: "MCC Sports Pvt Ltd",
    email: "mcc@sports.com",
    role: "venue_manager",
    joinDate: "Nov 15, 2025",
    status: "active",
    bookings: 156,
  },
  {
    id: 3,
    name: "Priya Singh",
    email: "priya.singh@email.com",
    role: "player",
    joinDate: "Nov 20, 2025",
    status: "active",
    bookings: 8,
  },
  {
    id: 4,
    name: "Elite Badminton",
    email: "elite@badminton.com",
    role: "venue_manager",
    joinDate: "Oct 10, 2025",
    status: "pending_approval",
    bookings: 0,
  },
]

export default function UsersTable() {
  return (
    <Card className="p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-foreground">Recent Users</h2>
        <Button variant="outline" className="bg-transparent">
          View All Users
        </Button>
      </div>

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
            {mockUsers.map((user) => (
              <tr key={user.id} className="border-b border-border hover:bg-secondary/50 transition-colors">
                <td className="py-4 px-4 text-foreground font-medium">{user.name}</td>
                <td className="py-4 px-4 text-foreground text-sm">{user.email}</td>
                <td className="py-4 px-4 text-foreground text-sm">
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-semibold">
                    {user.role === "player" ? "Player" : "Venue Manager"}
                  </span>
                </td>
                <td className="py-4 px-4 text-foreground text-sm">{user.joinDate}</td>
                <td className="py-4 px-4">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold inline-block ${
                      user.status === "active" ? "bg-green-100 text-green-800" : "bg-yellow-100 text-yellow-800"
                    }`}
                  >
                    {user.status === "active" ? "Active" : "Pending"}
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
  )
}
