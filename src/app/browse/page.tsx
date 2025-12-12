"use client"

import { useState } from "react"
import SearchBar from "@/src/components/search-bar"
import VenueGrid from "@/src/components/venue-grid"
import FilterSidebar from "@/src/components/filter-sidebar"

export default function BrowsePage() {
  const [filters, setFilters] = useState({
    sport: "all",
    priceRange: [0, 100] as [number, number],
    rating: 0,
    availability: "all",
    location: "",
  })

  const [search, setSearch] = useState({ query: "", date: "", time: "" })

  return (
    <main className="min-h-screen bg-background">
      {/* Search Bar */}
      <SearchBar onSearch={setSearch} />

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
