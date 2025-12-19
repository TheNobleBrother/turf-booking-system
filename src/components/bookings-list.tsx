"use client";

import { useState } from "react";
import { Card } from "@/src/components/ui/card";
import { Button } from "@/src/components/ui/button";

const mockBookings = [
  {
    id: 1,
    venue: "MCC Cricket Ground",
    date: "2025-12-15",
    time: "6:00 PM - 8:00 PM",
    court: "Main Pitch",
    amount: 85,
    status: "confirmed",
    confirmationCode: "PCB001",
  },
  {
    id: 2,
    venue: "Court Kings Badminton",
    date: "2025-12-20",
    time: "7:00 PM - 8:00 PM",
    court: "Court A",
    amount: 12,
    status: "pending",
    confirmationCode: "PCB002",
  },
  {
    id: 3,
    venue: "Goal Sports Turf",
    date: "2025-12-10",
    time: "5:00 PM - 6:00 PM",
    court: "Turf 1",
    amount: 25,
    status: "completed",
    confirmationCode: "PCB003",
  },
];

interface BookingsListProps {
  searchQuery?: string;
  searchDate?: string;
  searchTime?: string;
}

export default function BookingsList({
  searchQuery = "",
  searchDate = "",
  searchTime = "",
}: BookingsListProps) {
  const [filter, setFilter] = useState("all");

  const filteredBookings = mockBookings.filter((booking) => {
    // Tab filter
    const matchesTab = filter === "all" || booking.status === filter;

    // Search query filter (venue name or id)
    const matchesQuery =
      !searchQuery ||
      booking.venue.toLowerCase().includes(searchQuery.toLowerCase()) ||
      booking.confirmationCode
        .toLowerCase()
        .includes(searchQuery.toLowerCase());

    // Date filter
    const matchesDate = !searchDate || booking.date === searchDate;

    // Time filter (this is a bit tricky with ranges, but we'll do simple contains)
    const matchesTime = !searchTime || booking.time.includes(searchTime);

    return matchesTab && matchesQuery && matchesDate && matchesTime;
  });

  return (
    <div className="space-y-6">
      {/* Filter Tabs */}
      <div className="flex gap-4 border-b border-border">
        {["all", "pending", "confirmed", "completed"].map((tab) => (
          <button
            key={tab}
            onClick={() => setFilter(tab)}
            className={`px-4 py-2 border-b-2 transition-colors capitalize font-medium ${
              filter === tab
                ? "border-primary text-primary"
                : "border-transparent text-muted-foreground hover:text-foreground"
            }`}
          >
            {tab === "all" ? "All Bookings" : tab}
          </button>
        ))}
      </div>

      {/* Bookings */}
      <div className="space-y-4">
        {filteredBookings.length > 0 ? (
          filteredBookings.map((booking) => (
            <Card key={booking.id} className="p-6">
              <div className="grid md:grid-cols-5 gap-4 items-center">
                {/* Venue & Date */}
                <div className="md:col-span-2">
                  <h3 className="font-bold text-foreground text-lg mb-1">
                    {booking.venue}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {booking.date}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {booking.time}
                  </p>
                </div>

                {/* Court & Amount */}
                <div className="text-center">
                  <p className="text-xs text-muted-foreground">Court</p>
                  <p className="font-semibold text-foreground">
                    {booking.court}
                  </p>
                </div>

                <div className="text-center">
                  <p className="text-xs text-muted-foreground">Amount</p>
                  <p className="font-bold text-primary text-lg">
                    ${booking.amount}
                  </p>
                </div>

                {/* Status & Actions */}
                <div className="flex flex-col gap-2">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold text-center ${
                      booking.status === "confirmed"
                        ? "bg-green-100 text-green-800"
                        : booking.status === "pending"
                        ? "bg-yellow-100 text-yellow-800"
                        : "bg-gray-100 text-gray-800"
                    }`}
                  >
                    {booking.status.charAt(0).toUpperCase() +
                      booking.status.slice(1)}
                  </span>

                  {booking.status === "confirmed" && (
                    <Button
                      variant="outline"
                      size="sm"
                      className="text-xs bg-transparent"
                    >
                      View Details
                    </Button>
                  )}
                </div>
              </div>
            </Card>
          ))
        ) : (
          <div className="text-center py-12">
            <p className="text-muted-foreground mb-4">No bookings found</p>
            <Button className="bg-primary hover:bg-primary/90">
              Browse Venues
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
