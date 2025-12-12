"use client"

import { useMemo } from "react"
import { useParams } from "next/navigation"
import VenueDetails from "@/src/components/venue-details"
import BookingWidget from "@/src/components/booking-widget"

export default function VenuePage() {
  const params = useParams<{ id?: string | string[] }>()
  const venueId = useMemo(() => {
    if (!params?.id) return ""
    return Array.isArray(params.id) ? params.id[0] : params.id
  }, [params])

  if (!venueId) return null

  return (
    <main className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <VenueDetails venueId={venueId} />
          </div>
          <div className="lg:col-span-1">
            <BookingWidget venueId={venueId} />
          </div>
        </div>
      </div>
    </main>
  )
}
