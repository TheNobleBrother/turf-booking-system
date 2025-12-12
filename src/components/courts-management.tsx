"use client"

import { useState } from "react"
import { Card } from "@/src/components/ui/card"
import { Button } from "@/src/components/ui/button"
import { Input } from "@/src/components/ui/input"

const mockCourts = [
  {
    id: 1,
    name: "Main Pitch",
    venue: "MCC Cricket Ground",
    capacity: "Full Ground",
    basePrice: 75,
    status: "available",
  },
  {
    id: 2,
    name: "Practice Pitch",
    venue: "MCC Cricket Ground",
    capacity: "Full Ground",
    basePrice: 50,
    status: "available",
  },
  {
    id: 3,
    name: "Court A",
    venue: "Elite Badminton Hall",
    capacity: "8 Players",
    basePrice: 12,
    status: "blocked",
  },
]

export default function CourtsManagement() {
  const [courts] = useState(mockCourts)
  const [showAddForm, setShowAddForm] = useState(false)

  return (
    <div className="p-8 space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-4xl font-bold text-foreground mb-2">Courts Management</h1>
          <p className="text-muted-foreground">Manage sub-courts and pricing</p>
        </div>
        <Button className="bg-primary hover:bg-primary/90" onClick={() => setShowAddForm(true)}>
          Add Court
        </Button>
      </div>

      {/* Add Court Form */}
      {showAddForm && (
        <Card className="p-6 border-primary">
          <h2 className="text-xl font-bold text-foreground mb-4">Add New Court</h2>
          <div className="grid md:grid-cols-3 gap-4 mb-4">
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">Court Name</label>
              <Input placeholder="e.g., Court A" className="bg-input border-border" />
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">Sport</label>
              <select className="w-full px-3 py-2 border border-border rounded-md bg-input">
                <option>Cricket</option>
                <option>Badminton</option>
                <option>Football</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">Base Price</label>
              <Input type="number" placeholder="0" className="bg-input border-border" />
            </div>
          </div>
          <div className="flex gap-2">
            <Button className="bg-primary hover:bg-primary/90">Add Court</Button>
            <Button variant="outline" onClick={() => setShowAddForm(false)} className="bg-transparent">
              Cancel
            </Button>
          </div>
        </Card>
      )}

      {/* Courts List */}
      <div className="space-y-4">
        {courts.map((court) => (
          <Card key={court.id} className="p-6">
            <div className="grid md:grid-cols-5 gap-4 items-center">
              <div>
                <h3 className="font-bold text-lg text-foreground mb-1">{court.name}</h3>
                <p className="text-sm text-muted-foreground">{court.venue}</p>
              </div>

              <div className="text-center">
                <p className="text-xs text-muted-foreground mb-1">Capacity</p>
                <p className="font-semibold text-foreground">{court.capacity}</p>
              </div>

              <div className="text-center">
                <p className="text-xs text-muted-foreground mb-1">Base Price</p>
                <p className="font-semibold text-primary text-lg">₹{court.basePrice}</p>
              </div>

              <div className="text-center">
                <p className="text-xs text-muted-foreground mb-1">Status</p>
                <span
                  className={`px-3 py-1 rounded-full text-xs font-semibold inline-block ${
                    court.status === "available" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
                  }`}
                >
                  {court.status === "available" ? "Available" : "Blocked"}
                </span>
              </div>

              <div className="flex gap-2 justify-end">
                <Button variant="outline" size="sm" className="bg-transparent">
                  Edit
                </Button>
                <Button variant="outline" size="sm" className="bg-transparent">
                  Block Slot
                </Button>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}
