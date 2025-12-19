"use client";
import BookingsList from "@/src/components/bookings-list";
import {
  Calendar,
  CheckCircle,
  TrendingUp,
  Trophy,
  Search,
  Clock,
} from "lucide-react";
import { Card } from "@/src/components/ui/card";
import { useState, useEffect } from "react";
import { createClient } from "@/src/utils/supabase/client";
import { Input } from "@/src/components/ui/input";
import type { User } from "@supabase/supabase-js";
import Link from "next/link";
import { Button } from "@/src/components/ui/button";
import Navbar from "@/src/components/navbar";

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
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [query, setQuery] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const supabase = createClient();

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null);
      setLoading(false);
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });

    return () => subscription.unsubscribe();
  }, [supabase.auth]);

  if (loading) {
    return (
      <main className="min-h-screen bg-background">
        <Navbar />
        <div className="container mx-auto px-4 py-32 text-center">
          <div className="animate-pulse">Loading bookings...</div>
        </div>
      </main>
    );
  }

  if (!user) {
    return (
      <main className="min-h-screen bg-background">
        <Navbar />
        <div className="container mx-auto px-4 py-32">
          <Card className="max-w-md mx-auto p-8 text-center space-y-6">
            <h1 className="text-3xl font-bold text-foreground">My Bookings</h1>
            <p className="text-muted-foreground">
              Please sign in to view your bookings.
            </p>
            <div className="flex gap-4 justify-center">
              <Link href="/auth/signup">
                <Button className="bg-primary">Sign Up</Button>
              </Link>
              <Link href="/auth/login">
                <Button variant="outline">Sign In</Button>
              </Link>
            </div>
          </Card>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-background pb-20">
      <Navbar />
      {/* Hero Banner */}
      <div className="relative w-full h-[50vh] min-h-[400px] flex flex-col items-center justify-center overflow-hidden mb-12 animate-in fade-in duration-1000">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/dashboard-new-img.avif"
            alt="My Bookings Banner"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative z-10 text-center px-4 mb-8 animate-in fade-in zoom-in duration-700">
          <h1 className="text-4xl md:text-6xl font-black text-white tracking-tight mb-4 drop-shadow-2xl">
            My Bookings
          </h1>
          <p className="text-lg text-white/90 max-w-2xl mx-auto font-medium drop-shadow-lg">
            View and manage all your venue bookings
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
                  placeholder="Booking ID or venue name..."
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

      <div className="container mx-auto px-4">
        {/* Booking Stats */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <Card
                key={stat.label}
                className={`p-6 bg-gradient-to-br ${stat.color} border-border/40 card-hover shadow-sm`}
              >
                <div className="flex items-start justify-between mb-4">
                  <div
                    className={`p-3 rounded-lg bg-white/50 ${stat.iconColor}`}
                  >
                    <Icon className="w-6 h-6" />
                  </div>
                </div>
                <p className="text-muted-foreground text-sm mb-1 uppercase tracking-wider font-bold">
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
        <BookingsList searchQuery={query} searchDate={date} searchTime={time} />
      </div>
    </main>
  );
}
