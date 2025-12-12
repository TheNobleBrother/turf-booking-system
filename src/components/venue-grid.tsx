"use client";

import Link from "next/link";
import { Card, CardContent } from "@/src/components/ui/card";
import { Button } from "@/src/components/ui/button";
import { Star, MapPin, Clock, Users, Heart } from "lucide-react";
import { mockVenues, type Venue, type Availability } from "@/src/data/mock-venues";
import { useAppDispatch, useAppSelector } from "@/src/store/hooks";
import { selectFavorites, toggleFavorite } from "@/src/store/userSlice";
import { toast } from "sonner";

interface VenueGridProps {
  readonly filters: {
    sport: string;
    priceRange: [number, number];
    rating: number;
    availability: string;
    location: string;
  };
  readonly search: { query: string; date: string; time: string };
}

const hasAvailability = (venue: Venue, dateFilter: string, timeFilter: string) => {
  const checkDay = (day: Availability) => {
    if (!timeFilter) {
      return day.slots.some((slot) => slot.status === "available");
    }
    return day.slots.some(
      (slot) => slot.status === "available" && slot.time.startsWith(timeFilter)
    );
  };

  if (dateFilter) {
    const day = venue.availability.find((d) => d.date === dateFilter);
    return day ? checkDay(day) : false;
  }

  if (timeFilter) {
    return venue.availability.some(checkDay);
  }

  return true;
};

const getAvailableSlotsCount = (venue: Venue) =>
  venue.availability.reduce(
    (acc, day) => acc + day.slots.filter((slot) => slot.status === "available").length,
    0
  );

export default function VenueGrid({ filters, search }: VenueGridProps) {
  const dispatch = useAppDispatch();
  const favorites = useAppSelector(selectFavorites);
  let filteredVenues = mockVenues;

  if (filters.sport !== "all") {
    filteredVenues = filteredVenues.filter((venue) => venue.sport === filters.sport);
  }

  filteredVenues = filteredVenues.filter((venue) => venue.price <= filters.priceRange[1]);

  if (filters.rating > 0) {
    filteredVenues = filteredVenues.filter((venue) => venue.rating >= filters.rating);
  }

  // Text search against name, location, and sport
  if (search.query) {
    const q = search.query.toLowerCase();
    filteredVenues = filteredVenues.filter(
      (venue) =>
        venue.name.toLowerCase().includes(q) ||
        venue.location.toLowerCase().includes(q) ||
        venue.sport.toLowerCase().includes(q)
    );
  }

  // Availability filtering by date/time
  if (search.date || search.time) {
    filteredVenues = filteredVenues.filter((venue) =>
      hasAvailability(venue, search.date, search.time)
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {filteredVenues.length > 0 ? (
        filteredVenues.map((venue) => (
          <Link key={venue.id} href={`/venue/${venue.id}`}>
            <Card className="overflow-hidden h-full card-hover border-border/30 shadow-lg group relative">
              <div className="relative h-64 overflow-hidden bg-linear-to-br from-secondary/20 to-primary/10">
                {(() => {
                  const src =
                    typeof venue.image === "string"
                      ? venue.image
                      : venue.image?.src;
                  return (
                    <img
                      src={src || "/placeholder.svg"}
                      alt={venue.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  );
                })()}
                <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Price Badge */}
                <div className="absolute top-4 right-4 flex flex-col gap-2">
                  <div className="bg-linear-to-r from-primary to-accent text-white px-4 py-2 rounded-xl font-bold shadow-lg backdrop-blur-sm">
                    ${venue.price}/hr
                  </div>
                  {venue.verified && (
                    <div className="bg-green-500 text-white px-3 py-1 rounded-lg text-xs font-bold flex items-center gap-1 shadow-lg">
                      ✓ Verified
                    </div>
                  )}
                </div>

                {/* Available Slots Badge */}
                <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-sm text-foreground px-4 py-2 rounded-lg font-bold text-sm shadow-lg">
                  {getAvailableSlotsCount(venue)} slots available
                </div>

                {/* Wishlist Button */}
                <button
                  className="absolute bottom-4 right-4 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:bg-white hover:scale-110 transition-all opacity-0 group-hover:opacity-100"
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    try {
                      const wasFav = favorites.includes(venue.id);
                      dispatch(toggleFavorite(venue.id));
                      toast.success(wasFav ? "Removed from favorites" : "Added to favorites");
                    } catch (err: unknown) {
                      const message = err instanceof Error ? err.message : "Action failed";
                      toast.error(message);
                    }
                  }}
                >
                  <Heart
                    className={`w-5 h-5 ${favorites.includes(venue.id) ? "text-red-500 fill-red-500" : "text-red-500"}`}
                  />
                </button>
              </div>

              <CardContent className="p-6">
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-foreground mb-2 line-clamp-1 group-hover:text-primary transition-colors">
                    {venue.name}
                  </h3>
                  <div className="flex items-center gap-2 text-muted-foreground text-sm">
                    <MapPin className="w-4 h-4 shrink-0" />
                    {venue.location}
                  </div>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-3 gap-3 mb-6 py-5 border-t border-b border-border/40">
                  <div className="text-center">
                    <div className="flex justify-center mb-1">
                      <div className="bg-accent/10 p-2 rounded-lg">
                        <Star className="w-4 h-4 text-accent fill-accent" />
                      </div>
                    </div>
                    <p className="text-sm font-bold text-foreground">
                      {venue.rating}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {venue.reviews}
                    </p>
                  </div>
                  <div className="text-center border-l border-r border-border/40">
                    <div className="flex justify-center mb-1">
                      <div className="bg-primary/10 p-2 rounded-lg">
                        <Users className="w-4 h-4 text-primary" />
                      </div>
                    </div>
                    <p className="text-sm font-bold text-foreground">
                      {venue.capacity}
                    </p>
                    <p className="text-xs text-muted-foreground">capacity</p>
                  </div>
                  <div className="text-center">
                    <div className="flex justify-center mb-1">
                      <div className="bg-secondary/10 p-2 rounded-lg">
                        <Clock className="w-4 h-4 text-secondary" />
                      </div>
                    </div>
                    <p className="text-sm font-bold text-foreground">
                      {venue.duration}
                    </p>
                    <p className="text-xs text-muted-foreground">slot</p>
                  </div>
                </div>

                {/* Book Button */}
                <Button className="w-full bg-linear-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white font-bold py-6 rounded-lg transition-all duration-300 group-hover:shadow-xl group-hover:scale-102 group-hover:-translate-y-1">
                  Book Now
                </Button>
              </CardContent>
            </Card>
          </Link>
        ))
      ) : (
        <div className="col-span-full text-center py-20">
          <div className="w-24 h-24 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-6">
            <span className="text-4xl">🔍</span>
          </div>
          <p className="text-muted-foreground text-lg font-medium mb-2">
            No venues found
          </p>
          <p className="text-muted-foreground text-sm">
            Try adjusting your filters or search criteria
          </p>
        </div>
      )}
    </div>
  );
}
