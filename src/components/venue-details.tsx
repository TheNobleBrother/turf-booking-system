"use client"

import { Card } from "@/src/components/ui/card"
import { mockVenues } from "@/src/data/mock-venues"
interface VenueDetailsProps {
  venueId: string
}

export default function VenueDetails({ venueId }: Readonly<VenueDetailsProps>) {
  const venue = mockVenues.find((v) => v.id.toString() === venueId) ?? mockVenues[0]

  return (
    <div className="space-y-6">
      {/* Gallery */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 rounded-lg overflow-hidden">
        {(venue.gallery ?? venue.gallery ?? []).map((image: string | { src: string }, idx: number) => {
          const src = typeof image === "string" ? image : image?.src
          return (
            <img
              key={`${src}-${idx}`}
              src={src || "/placeholder.svg"}
              alt={`${venue.name} ${idx + 1}`}
              className="w-full h-48 md:h-56 object-cover rounded-lg"
            />
          )
        })}
      </div>

      {/* Header Info */}
      <div>
        <h1 className="text-4xl font-bold text-foreground mb-2">{venue.name}</h1>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1">
            <span>⭐ {venue.rating}</span>
            <span className="text-muted-foreground">({venue.reviews} reviews)</span>
          </div>
          <span className="text-muted-foreground">📍 {venue.location}</span>
        </div>
      </div>

      {/* About Section */}
      <Card className="p-6">
        <h2 className="text-2xl font-bold text-foreground mb-4">About</h2>
        <p className="text-foreground leading-relaxed mb-6">
          {venue.about ??
            venue.description ??
            "Well maintained venue with quality facilities for players and teams."}
        </p>

        <h3 className="text-lg font-bold text-foreground mb-3">Amenities</h3>
        <div className="grid grid-cols-2 gap-3">
          {(venue.amenities ?? ["Floodlights", "Parking", "First Aid"]).map((amenity) => (
            <div key={amenity} className="flex items-center gap-2 text-foreground">
              <span>✓</span>
              {amenity}
            </div>
          ))}
        </div>
      </Card>

      {/* Courts/Sub-Courts */}
      <Card className="p-6">
        <h2 className="text-2xl font-bold text-foreground mb-4">Available Courts</h2>
        <div className="space-y-3">
          {(venue.courts ?? [{ id: 1, name: "Standard Court", capacity: "Standard", basePrice: venue.price }]).map((court) => (
            <div key={court.id} className="flex items-center justify-between p-4 border border-border rounded-lg">
              <div>
                <p className="font-semibold text-foreground">{court.name}</p>
                <p className="text-sm text-muted-foreground">{court.capacity}</p>
              </div>
              <p className="font-bold text-primary">${court.basePrice}/hr</p>
            </div>
          ))}
        </div>
      </Card>

      {/* Rules */}
      <Card className="p-6">
        <h2 className="text-2xl font-bold text-foreground mb-4">Important Rules</h2>
        <ul className="space-y-2">
          {(venue.rules ?? ["Respect time slots", "Keep venue clean"]).map((rule) => (
            <li key={rule} className="flex gap-3 text-foreground">
              <span className="text-accent font-bold">•</span>
              {rule}
            </li>
          ))}
        </ul>
      </Card>
    </div>
  )
}
