"use client"

import { useState } from "react"
import { Card } from "@/src/components/ui/card"
import { Button } from "@/src/components/ui/button"

const mockVenues = [
  {
    id: 1,
    name: "MCC Cricket Ground",
    location: "Downtown, City",
    sport: "Cricket",
    courts: 2,
    status: "active",
    earnings: "₹45,230",
  },
  {
    id: 2,
    name: "Elite Badminton Hall",
    location: "North Park",
    sport: "Badminton",
    courts: 4,
    status: "active",
    earnings: "₹23,150",
  },
  {
    id: 3,
    name: "Premier Football Complex",
    location: "Sports Zone",
    sport: "Football",
    courts: 3,
    status: "pending_approval",
    earnings: "₹0",
  },
]

export default function VenuesManagement() {
  const [venues] = useState(mockVenues)

  return (
    <div className="p-8 space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-4xl font-bold text-foreground mb-2">My Venues</h1>
          <p className="text-muted-foreground">Manage all your venue listings</p>
        </div>
        <Button className="bg-primary hover:bg-primary/90">Add New Venue</Button>
      </div>

      <div className="space-y-4">
        {venues.map((venue) => (
          <Card key={venue.id} className="p-6">
            <div className="grid md:grid-cols-5 gap-4 items-center">
              <div>
                <h3 className="font-bold text-lg text-foreground mb-1">{venue.name}</h3>
                <p className="text-sm text-muted-foreground">{venue.location}</p>
              </div>

              <div className="text-center">
                <p className="text-xs text-muted-foreground mb-1">Sport</p>
                <p className="font-semibold text-foreground">{venue.sport}</p>
              </div>

              <div className="text-center">
                <p className="text-xs text-muted-foreground mb-1">Courts</p>
                <p className="font-semibold text-foreground">{venue.courts}</p>
              </div>

              <div className="text-center">
                <p className="text-xs text-muted-foreground mb-1">Status</p>
                <span
                  className={`px-3 py-1 rounded-full text-xs font-semibold inline-block ${
                    venue.status === "active" ? "bg-green-100 text-green-800" : "bg-yellow-100 text-yellow-800"
                  }`}
                >
                  {venue.status === "active" ? "Active" : "Pending Approval"}
                </span>
              </div>

              <div className="flex gap-2 justify-end">
                <Button variant="outline" size="sm" className="bg-transparent">
                  Edit
                </Button>
                <Button variant="outline" size="sm" className="bg-transparent">
                  View
                </Button>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}
