"use client"

import { useState } from "react"
import { Card } from "@/src/components/ui/card"
import { Button } from "@/src/components/ui/button"

const mockPendingVenues = [
  {
    id: 1,
    name: "Premier Sports Complex",
    manager: "Amit Patel",
    sport: "Multi-Sport",
    location: "East Delhi",
    courts: 5,
    submittedDate: "Dec 10, 2025",
    status: "pending",
  },
  {
    id: 2,
    name: "Urban Football Arena",
    manager: "Vikram Singh",
    sport: "Football",
    location: "South Mumbai",
    courts: 3,
    submittedDate: "Dec 8, 2025",
    status: "pending",
  },
]

export default function VenueApproval() {
  const [venues, setVenues] = useState(mockPendingVenues)

  const handleApprove = (id: number) => {
    setVenues(venues.filter((v) => v.id !== id))
    // TODO: Call API to approve venue
  }

  const handleReject = (id: number) => {
    setVenues(venues.filter((v) => v.id !== id))
    // TODO: Call API to reject venue
  }

  return (
    <div className="p-8 space-y-8">
      <div>
        <h1 className="text-4xl font-bold text-foreground mb-2">Venue Approvals</h1>
        <p className="text-muted-foreground">Review and approve pending venue listings</p>
      </div>

      <div className="space-y-4">
        {venues.length > 0 ? (
          venues.map((venue) => (
            <Card key={venue.id} className="p-6 border-accent">
              <div className="grid md:grid-cols-6 gap-4 items-center mb-4">
                <div>
                  <h3 className="font-bold text-lg text-foreground">{venue.name}</h3>
                  <p className="text-sm text-muted-foreground">Manager: {venue.manager}</p>
                </div>

                <div className="text-center">
                  <p className="text-xs text-muted-foreground">Sport</p>
                  <p className="font-semibold text-foreground">{venue.sport}</p>
                </div>

                <div className="text-center">
                  <p className="text-xs text-muted-foreground">Location</p>
                  <p className="font-semibold text-foreground">{venue.location}</p>
                </div>

                <div className="text-center">
                  <p className="text-xs text-muted-foreground">Courts</p>
                  <p className="font-semibold text-foreground">{venue.courts}</p>
                </div>

                <div className="text-center">
                  <p className="text-xs text-muted-foreground">Submitted</p>
                  <p className="font-semibold text-foreground">{venue.submittedDate}</p>
                </div>
              </div>

              <div className="flex gap-3">
                <Button onClick={() => handleApprove(venue.id)} className="bg-green-600 hover:bg-green-700 text-white">
                  Approve
                </Button>
                <Button
                  onClick={() => handleReject(venue.id)}
                  variant="outline"
                  className="bg-transparent border-destructive text-destructive hover:bg-destructive/10"
                >
                  Reject
                </Button>
                <Button variant="outline" className="bg-transparent">
                  View Details
                </Button>
              </div>
            </Card>
          ))
        ) : (
          <Card className="p-12 text-center">
            <p className="text-muted-foreground mb-4">No pending venue approvals</p>
            <p className="text-sm text-muted-foreground">All venues have been reviewed</p>
          </Card>
        )}
      </div>
    </div>
  )
}
