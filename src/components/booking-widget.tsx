"use client"

import { useState } from "react"
import { Card } from "@/src/components/ui/card"
import { Button } from "@/src/components/ui/button"
import { mockVenues } from "@/src/data/mock-venues"

interface BookingWidgetProps {
  readonly venueId: string
}

export default function BookingWidget({ venueId }: BookingWidgetProps) {
  const venue = mockVenues.find((v) => v.id.toString() === venueId) ?? mockVenues[0]
  const [selectedDate, setSelectedDate] = useState("")
  const [selectedCourt, setSelectedCourt] = useState(venue.courts?.[0]?.name ?? "")
  const [selectedSlot, setSelectedSlot] = useState("")
  const [step, setStep] = useState(1)

  const availability = venue.availability
  const slotsForDate =
    availability.find((a) => a.date === selectedDate)?.slots ??
    availability[0]?.slots ??
    []

  const handleBooking = () => {
    if (selectedDate && selectedCourt && selectedSlot) {
      console.log("Booking:", { selectedDate, selectedCourt, selectedSlot })
    }
  }

  return (
    <Card className="p-6 sticky top-20 space-y-6">
      <h2 className="text-2xl font-bold text-foreground">Book Your Slot</h2>

      {/* Step 1: Select Court */}
      <div>
        <p className="block text-sm font-medium text-foreground mb-3">Select Court</p>
        <div className="space-y-2">
            {(venue.courts ?? [{ name: "Standard Court" }]).map((court) => (
            <button
                key={court.name}
              onClick={() => {
                  setSelectedCourt(court.name)
                setStep(2)
              }}
              className={`w-full text-left px-4 py-3 rounded-lg border-2 transition-all ${
                selectedCourt === court.name ? "border-primary bg-primary/10" : "border-border hover:border-primary/50"
              }`}
            >
              {court.name}
            </button>
          ))}
        </div>
      </div>

      {/* Step 2: Select Date */}
      {step >= 2 && (
        <div>
          <label htmlFor="booking-date" className="block text-sm font-medium text-foreground mb-3">
            Select Date
          </label>
          <input
            id="booking-date"
            type="date"
            value={selectedDate}
            onChange={(e) => {
              setSelectedDate(e.target.value)
              setStep(3)
            }}
            className="w-full px-4 py-2 border border-border rounded-lg bg-input"
          />
        </div>
      )}

      {/* Step 3: Select Time Slot */}
      {step >= 3 && selectedDate && (
        <div>
          <p className="block text-sm font-medium text-foreground mb-3">Select Time Slot</p>
          <div className="space-y-2 max-h-64 overflow-y-auto">
            {slotsForDate.map((slot, idx) => {
              const isAvailable = slot.status === "available"
              const isSelected = selectedSlot === slot.time
              const baseClasses = "w-full px-4 py-3 rounded-lg border-2 transition-all text-left font-medium"
              let stateClasses = ""
              if (!isAvailable) {
                stateClasses = "border-border bg-muted opacity-50 cursor-not-allowed text-muted-foreground"
              } else if (isSelected) {
                stateClasses = "border-primary bg-primary/10 text-foreground"
              } else {
                stateClasses = "border-border hover:border-primary/50 text-foreground"
              }

              return (
                <button
                  key={`${slot.time}-${idx}`}
                  onClick={() => setSelectedSlot(slot.time)}
                  disabled={!isAvailable}
                  className={`${baseClasses} ${stateClasses}`}
                >
                  <div className="flex justify-between items-center">
                    <span>{slot.time}</span>
                    <span className="text-sm">${venue.price}</span>
                  </div>
                </button>
              )
            })}
          </div>
        </div>
      )}

      {/* Booking Summary */}
      {selectedDate && selectedCourt && selectedSlot && (
        <div className="bg-secondary/50 p-4 rounded-lg space-y-2 border border-border">
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Court:</span>
            <span className="font-semibold text-foreground">{selectedCourt}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Date:</span>
            <span className="font-semibold text-foreground">{selectedDate}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Time:</span>
            <span className="font-semibold text-foreground">
              {selectedSlot}
            </span>
          </div>
          <div className="border-t border-border pt-2 mt-2 flex justify-between">
            <span className="font-bold text-foreground">Total:</span>
            <span className="font-bold text-primary text-lg">
              ${venue.price}
            </span>
          </div>
        </div>
      )}

      {/* Booking Button */}
      <Button
        onClick={handleBooking}
        disabled={!selectedDate || !selectedCourt || !selectedSlot}
        className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-semibold py-3"
      >
        Proceed to Payment
      </Button>

      <p className="text-xs text-muted-foreground text-center">
        Secure payment. You won't be charged until you confirm.
      </p>
    </Card>
  )
}
