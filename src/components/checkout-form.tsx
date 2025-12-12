"use client"

import type React from "react"

import { useState } from "react"
import { Card } from "@/src/components/ui/card"
import { Button } from "@/src/components/ui/button"
import { Input } from "@/src/components/ui/input"

interface CheckoutFormProps {
  amount: number
  venueId: string
  bookingDetails: {
    venue: string
    date: string
    time: string
    court: string
  }
}

export default function CheckoutForm({ amount, venueId, bookingDetails }: CheckoutFormProps) {
  const [formData, setFormData] = useState({
    cardholderName: "",
    cardNumber: "",
    expiryDate: "",
    cvv: "",
  })
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setError("")
    setLoading(true)

    // TODO: Integrate with payment gateway (Stripe/Razorpay)
    setTimeout(() => {
      console.log("Processing payment:", { amount, formData })
      setLoading(false)
    }, 1500)
  }

  return (
    <div className="space-y-6">
      <Card className="p-6 bg-secondary/50">
        <h3 className="font-bold text-foreground mb-4">Booking Summary</h3>
        <div className="space-y-2 text-sm">
          <div className="flex justify-between">
            <span className="text-muted-foreground">Venue:</span>
            <span className="font-semibold text-foreground">{bookingDetails.venue}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">Date:</span>
            <span className="font-semibold text-foreground">{bookingDetails.date}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">Time:</span>
            <span className="font-semibold text-foreground">{bookingDetails.time}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">Court:</span>
            <span className="font-semibold text-foreground">{bookingDetails.court}</span>
          </div>
          <div className="border-t border-border pt-2 mt-2 flex justify-between">
            <span className="font-bold text-foreground">Total Amount:</span>
            <span className="font-bold text-primary text-lg">₹{amount}</span>
          </div>
        </div>
      </Card>

      <Card className="p-6">
        <h3 className="font-bold text-foreground mb-6">Payment Details</h3>

        {error && <div className="p-3 bg-destructive/10 text-destructive text-sm rounded-md mb-4">{error}</div>}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">Cardholder Name</label>
            <Input
              name="cardholderName"
              placeholder="John Doe"
              value={formData.cardholderName}
              onChange={handleChange}
              required
              className="bg-input border-border"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-foreground mb-2">Card Number</label>
            <Input
              name="cardNumber"
              placeholder="4532 1488 0343 6467"
              value={formData.cardNumber}
              onChange={handleChange}
              required
              className="bg-input border-border"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">Expiry Date</label>
              <Input
                name="expiryDate"
                placeholder="MM/YY"
                value={formData.expiryDate}
                onChange={handleChange}
                required
                className="bg-input border-border"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">CVV</label>
              <Input
                name="cvv"
                placeholder="123"
                type="password"
                value={formData.cvv}
                onChange={handleChange}
                required
                className="bg-input border-border"
              />
            </div>
          </div>

          <Button type="submit" className="w-full bg-primary hover:bg-primary/90 mt-6" disabled={loading}>
            {loading ? "Processing..." : `Pay ₹${amount}`}
          </Button>
        </form>

        <p className="text-xs text-muted-foreground text-center mt-4">
          Your payment information is secure and encrypted
        </p>
      </Card>
    </div>
  )
}
