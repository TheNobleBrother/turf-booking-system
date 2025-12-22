"use client";

import { useState } from "react";
import VenueGrid from "@/src/components/venue-grid";
import FilterSidebar from "@/src/components/filter-sidebar";
import { Button } from "@/src/components/ui/button";
import { Input } from "@/src/components/ui/input";
import { Search, Calendar, Clock } from "lucide-react";
import UnifiedListingLayout from "@/src/components/ui/unified-listing-layout";

export default function BrowsePage() {
  const [filters, setFilters] = useState({
    sport: "all",
    priceRange: [0, 100] as [number, number],
    rating: 0,
    availability: "all",
    location: "",
  });

  // State for search inputs
  const [query, setQuery] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const search = { query, date, time };

  const sports = [
    { id: "all", name: "All Sports" },
    { id: "cricket", name: "Cricket" },
    { id: "badminton", name: "Badminton" },
    { id: "football", name: "Football" },
  ];

  return (
    <UnifiedListingLayout
      heroImage="/images/turf-venue-img.webp"
      heroTitle="Browse Venues"
      heroDescription="Find and book the best sports facilities near you"
      listingTitle="Available Venues"
      listingCountText="500+ venues ready to book"
      searchBar={
        <div className="grid grid-cols-1 md:grid-cols-12 gap-3">
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
          <div className="md:col-span-1">
            <Button className="w-full h-12 font-bold text-lg shadow-lg hover:shadow-primary/25 bg-primary hover:bg-primary/90">
              <Search className="w-5 h-5 md:hidden mr-2" />
              <span className="md:hidden">Search</span>
              <Search className="hidden md:block w-6 h-6" />
            </Button>
          </div>
        </div>
      }
      tabs={
        <div className="flex flex-wrap justify-center gap-3">
          {sports.map((sport) => (
            <button
              key={sport.id}
              onClick={() => setFilters({ ...filters, sport: sport.id })}
              className={`px-6 py-2.5 rounded-full font-bold transition-all duration-300 ${
                filters.sport === sport.id
                  ? "bg-primary text-primary-foreground shadow-lg scale-105"
                  : "bg-background text-foreground/70 hover:bg-secondary hover:text-foreground border border-border/40"
              }`}
            >
              {sport.name}
            </button>
          ))}
        </div>
      }
      sidebar={<FilterSidebar filters={filters} setFilters={setFilters} />}
    >
      <VenueGrid filters={filters} search={search} />
    </UnifiedListingLayout>
  );
}
