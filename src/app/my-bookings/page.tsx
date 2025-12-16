"use client";
import BookingsList from "@/src/components/bookings-list";
import { Calendar, CheckCircle, TrendingUp, Trophy } from "lucide-react";
import { Card } from "@/src/components/ui/card";

const stats = [
  {
    icon: Calendar,
    label: "Total Bookings",
    value: "5",
    color: "from-blue-500/20 to-blue-600/10",
    iconColor: "text-blue-600",
  },
  {
    icon: Trophy,
    label: "Upcoming",
    value: "2",
    color: "from-primary/20 to-primary/10",
    iconColor: "text-primary",
  },
  {
    icon: CheckCircle,
    label: "Completed",
    value: "3",
    color: "from-green-500/20 to-green-600/10",
    iconColor: "text-green-600",
  },
  {
    icon: TrendingUp,
    label: "Member Since",
    value: "45d",
    color: "from-accent/20 to-accent/10",
    iconColor: "text-accent",
  },
];

export default function MyBookingsPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Banner */}
      <div className="relative w-full h-[40vh] min-h-[300px] flex items-center justify-center overflow-hidden mb-12">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/dashboard-new-img.avif"
            alt="My Bookings Banner"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative z-10 text-center px-4 mt-8">
          <h1 className="text-5xl font-black text-white mb-3 drop-shadow-lg">
            My Bookings
          </h1>
          <p className="text-lg text-white/90 drop-shadow-md font-medium">
            View and manage all your venue bookings
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 pb-12">

        {/* Booking Stats */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <Card
                key={stat.label}
                className={`p-6 bg-gradient-to-br ${stat.color} border-border/40 card-hover`}
              >
                <div className="flex items-start justify-between mb-4">
                  <div
                    className={`p-3 rounded-lg bg-white/50 ${stat.iconColor}`}
                  >
                    <Icon className="w-6 h-6" />
                  </div>
                </div>
                <p className="text-muted-foreground text-sm mb-1">
                  {stat.label}
                </p>
                <p className="text-4xl font-black text-foreground">
                  {stat.value}
                </p>
              </Card>
            );
          })}
        </div>

        {/* Bookings List */}
        <BookingsList />
      </div>
    </main>
  );
}
