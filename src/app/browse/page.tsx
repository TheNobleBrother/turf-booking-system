"use client"

import { useState } from "react"
import VenueGrid from "@/src/components/venue-grid"
import FilterSidebar from "@/src/components/filter-sidebar"
import { Card } from "@/src/components/ui/card"
import { Button } from "@/src/components/ui/button"
import { Input } from "@/src/components/ui/input"
import { Search, MapPin, Calendar, Clock } from "lucide-react"

export default function BrowsePage() {
  const [filters, setFilters] = useState({
    sport: "all",
    priceRange: [0, 100] as [number, number],
    rating: 0,
    availability: "all",
    location: "",
  })

  // State for search inputs
  const [query, setQuery] = useState("")
  const [date, setDate] = useState("")
  const [time, setTime] = useState("")

  // Construct search object for VenueGrid
  const search = { query, date, time }

  return (
    <main className="min-h-screen bg-background">
      {/* Hero Banner Area */}
      <div className="relative w-full h-[50vh] min-h-[400px] flex flex-col items-center justify-center overflow-hidden mb-12">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/turf-venue-img.webp"
            alt="Venue Search Banner"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>

        {/* Hero Text */}
        <div className="relative z-10 text-center px-4 mb-8 animate-in fade-in zoom-in duration-700">
          <h1 className="text-4xl md:text-6xl font-black text-white tracking-tight mb-4 drop-shadow-2xl">
            Browse Venues
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto font-medium drop-shadow-lg">
            Find and book the best sports facilities near you
          </p>
        </div>

        {/* Search Bar Container */}
        <div className="relative z-20 w-full max-w-5xl px-4 animate-in slide-in-from-bottom-8 duration-700 delay-100">
          <Card className="p-2 md:p-3 shadow-2xl border-0 bg-background/95 backdrop-blur-md rounded-2xl">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-3">
              {/* Search Input */}
              <div className="md:col-span-5 relative">
                <div className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">
                  <Search className="w-5 h-5" />
                </div>
                <Input
                  placeholder="Turf name or location..."
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  className="pl-10 h-12 bg-secondary/20 border-transparent focus:border-primary focus:bg-background transition-all text-base"
                />
              </div>

              {/* Date Input */}
              <div className="md:col-span-3 relative">
                <div className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">
                  <Calendar className="w-5 h-5" />
                </div>
                <Input
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="pl-10 h-12 bg-secondary/20 border-transparent focus:border-primary focus:bg-background transition-all text-base"
                />
              </div>

              {/* Time Input */}
              <div className="md:col-span-3 relative">
                <div className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">
                  <Clock className="w-5 h-5" />
                </div>
                <Input
                  type="time"
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                  className="pl-10 h-12 bg-secondary/20 border-transparent focus:border-primary focus:bg-background transition-all text-base"
                />
              </div>

              {/* Search Button */}
              <div className="md:col-span-1">
                <Button className="w-full h-12 font-bold text-lg shadow-lg hover:shadow-primary/25 bg-primary hover:bg-primary/90">
                  <Search className="w-5 h-5 md:hidden mr-2" />
                  <span className="md:hidden">Search</span>
                  <Search className="hidden md:block w-6 h-6" />
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Filter Sidebar */}
          <aside className="lg:col-span-1">
            <FilterSidebar filters={filters} setFilters={setFilters} />
          </aside>

          {/* Venue Grid */}
          <div className="lg:col-span-3">
            <div className="mb-6">
              <h1 className="text-3xl font-bold text-foreground">Available Venues</h1>
              <p className="text-muted-foreground">500+ venues ready to book</p>
            </div>
            <VenueGrid filters={filters} search={search} />
          </div>
        </div>
      </div>
    </main>
  )
}
