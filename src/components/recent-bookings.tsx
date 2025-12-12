"use client"

import { Card } from "@/src/components/ui/card"
import { Button } from "@/src/components/ui/button"

const mockRecentBookings = [
  {
    id: 1,
    playerName: "Rajesh Kumar",
    venue: "MCC Cricket Ground",
    court: "Main Pitch",
    date: "Dec 15, 2025",
    time: "6:00 PM",
    amount: "₹750",
    status: "confirmed",
  },
  {
    id: 2,
    playerName: "Priya Singh",
    venue: "MCC Cricket Ground",
    court: "Practice Pitch",
    date: "Dec 15, 2025",
    time: "7:00 PM",
    amount: "₹500",
    status: "pending",
  },
  {
    id: 3,
    playerName: "Amit Patel",
    venue: "MCC Cricket Ground",
    court: "Main Pitch",
    date: "Dec 14, 2025",
    time: "5:00 PM",
    amount: "₹750",
    status: "completed",
  },
]

export default function RecentBookings() {
  return (
    <Card className="p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-foreground">Recent Bookings</h2>
        <Button variant="outline" className="bg-transparent">
          View All
        </Button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-border">
              <th className="text-left py-3 px-4 font-semibold text-foreground">Player</th>
              <th className="text-left py-3 px-4 font-semibold text-foreground">Court</th>
              <th className="text-left py-3 px-4 font-semibold text-foreground">Date & Time</th>
              <th className="text-left py-3 px-4 font-semibold text-foreground">Amount</th>
              <th className="text-left py-3 px-4 font-semibold text-foreground">Status</th>
              <th className="text-left py-3 px-4 font-semibold text-foreground">Action</th>
            </tr>
          </thead>
          <tbody>
            {mockRecentBookings.map((booking) => (
              <tr key={booking.id} className="border-b border-border hover:bg-secondary/50 transition-colors">
                <td className="py-4 px-4 text-foreground font-medium">{booking.playerName}</td>
                <td className="py-4 px-4 text-foreground">{booking.court}</td>
                <td className="py-4 px-4 text-foreground text-sm">
                  {booking.date} <br /> {booking.time}
                </td>
                <td className="py-4 px-4 text-foreground font-semibold">{booking.amount}</td>
                <td className="py-4 px-4">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      booking.status === "confirmed"
                        ? "bg-green-100 text-green-800"
                        : booking.status === "pending"
                          ? "bg-yellow-100 text-yellow-800"
                          : "bg-gray-100 text-gray-800"
                    }`}
                  >
                    {booking.status.charAt(0).toUpperCase() + booking.status.slice(1)}
                  </span>
                </td>
                <td className="py-4 px-4">
                  <button className="text-primary hover:underline text-sm font-medium">View</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Card>
  )
}
