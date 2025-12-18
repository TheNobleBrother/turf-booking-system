"use client";

import { useParams, notFound, useRouter } from "next/navigation";
import { getClubhouseById, amenityIcons } from "@/src/lib/clubhouse-data";
import Navbar from "@/src/components/navbar";
import { Badge } from "@/src/components/ui/badge";
import { Button } from "@/src/components/ui/button";
import { MapPin, Star, Share2, Heart, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";
import { AuthDialog } from "@/src/components/auth-dialog";
import { toast } from "sonner";
import { createClient } from "@/src/utils/supabase/client";
import type { User } from "@supabase/supabase-js";

export default function ClubhouseDetailsPage() {
  const params = useParams();
  const router = useRouter();
  const id = params?.id as string;
  const club = getClubhouseById(id);
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [showAuthDialog, setShowAuthDialog] = useState(false);

  // Listen to Supabase auth state
  useEffect(() => {
    const supabase = createClient();

    supabase.auth.getSession().then(({ data: { session } }) => {
      setCurrentUser(session?.user ?? null);
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setCurrentUser(session?.user ?? null);
    });

    return () => subscription.unsubscribe();
  }, []);

  if (!club) {
    notFound();
  }

  const handleBookNow = () => {
    if (currentUser) {
      toast.success("Redirecting to payment...");
      router.push(`/payment?venueId=${club.id}`);
    } else {
      setShowAuthDialog(true);
    }
  };

  return (
    <main className="min-h-screen bg-background pb-20">
      <Navbar />
      <AuthDialog open={showAuthDialog} onOpenChange={setShowAuthDialog} />

      {/* Hero Image Section */}
      <div className="relative h-[60vh] min-h-[500px] w-full">
        <img
          src={club.image}
          alt={club.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-t from-background via-black/40 to-black/30" />

        <div className="absolute bottom-0 left-0 right-0 p-4 md:p-12 container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end gap-6 animate-in slide-in-from-bottom-6 duration-700">
            <div className="max-w-3xl">
              <Badge className="mb-4 px-4 py-1.5 text-sm font-bold uppercase tracking-wider bg-primary text-primary-foreground border-0 shadow-lg shadow-primary/20">
                Premium Venue
              </Badge>
              <h1 className="text-5xl md:text-7xl font-black text-white mb-4 drop-shadow-2xl tracking-tight text-balance">
                {club.name}
              </h1>
              <div className="flex items-center gap-3 text-white/90 text-xl font-medium drop-shadow-md">
                <div className="p-2 bg-white/10 backdrop-blur-md rounded-full">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                {club.location}
              </div>
            </div>

            <div className="flex gap-4">
              <Button
                size="icon"
                variant="outline"
                className="h-12 w-12 bg-white/10 backdrop-blur-md border-white/20 text-white hover:bg-white hover:text-black rounded-full transition-all hover:scale-110"
              >
                <Share2 className="w-5 h-5" />
              </Button>
              <Button
                size="icon"
                variant="outline"
                className="h-12 w-12 bg-white/10 backdrop-blur-md border-white/20 text-white hover:bg-white hover:text-black rounded-full transition-all hover:scale-110"
              >
                <Heart className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 mt-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Overview */}
            <div className="bg-card border border-border/50 rounded-3xl p-8 shadow-sm">
              <h2 className="text-3xl font-black mb-6 tracking-tight">
                Overview
              </h2>
              <p className="text-muted-foreground leading-relaxed text-xl font-light">
                {club.description ||
                  "Experience world-class facilities and luxury amenities at this premier game center. Perfect for sports enthusiasts and leisure seekers alike."}
              </p>

              <div className="flex flex-wrap items-center gap-8 mt-8 pt-8 border-t border-border">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-yellow-500/10 rounded-full">
                    <Star className="w-8 h-8 text-yellow-500 fill-yellow-500" />
                  </div>
                  <div>
                    <div className="text-3xl font-bold">{club.rating}</div>
                    <div className="text-muted-foreground text-sm font-medium">
                      124 reviews
                    </div>
                  </div>
                </div>
                <div className="h-12 w-px bg-border hidden sm:block" />
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-green-500/10 rounded-full">
                    <CheckCircle2 className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <div className="text-lg font-bold text-green-600">
                      Verified
                    </div>
                    <div className="text-muted-foreground text-sm font-medium">
                      Official Partner
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Amenities */}
            <div className="bg-card border border-border/50 rounded-3xl p-8 shadow-sm">
              <h2 className="text-3xl font-black mb-8 tracking-tight">
                Available Games & Amenities
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {club.amenities.map((amenity) => {
                  const Icon = amenityIcons[amenity];
                  if (!Icon) return null;
                  return (
                    <div
                      key={amenity}
                      className="group flex flex-col items-center justify-center p-6 rounded-2xl bg-secondary/20 hover:bg-primary/5 border border-transparent hover:border-primary/20 transition-all duration-300 hover:-translate-y-1 cursor-default"
                    >
                      <div className="p-4 rounded-full bg-background shadow-xs mb-3 group-hover:scale-110 transition-transform duration-300 text-primary">
                        <Icon className="w-8 h-8" />
                      </div>
                      <span className="font-bold text-center text-sm md:text-base">
                        {amenity}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Sidebar / Booking Card */}
          <div className="lg:col-span-1">
            <div className="bg-card border border-border/50 rounded-3xl p-8 shadow-xl sticky top-28">
              <div className="flex flex-col gap-1 mb-8">
                <div className="text-muted-foreground font-medium text-lg">
                  Price per hour
                </div>
                <div className="text-5xl font-black text-primary tracking-tight">
                  {club.price}
                </div>
              </div>

              <Button
                size="lg"
                className="w-full text-xl font-bold py-8 mb-6 shadow-xl shadow-primary/20 hover:scale-[1.02] transition-all cursor-pointer"
                onClick={handleBookNow}
              >
                Book Now
              </Button>

              <p className="text-center text-sm text-muted-foreground mb-8 flex items-center justify-center gap-2">
                <CheckCircle2 className="w-4 h-4" />
                No credit card required for inquiry
              </p>

              <div className="space-y-4 pt-8 border-t border-border bg-secondary/10 -mx-8 -mb-8 p-8 rounded-b-3xl">
                <h3 className="font-bold text-lg mb-2">Opening Hours</h3>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-muted-foreground font-medium">
                    Monday - Friday
                  </span>
                  <span className="font-bold bg-background px-3 py-1 rounded-full shadow-xs">
                    6 AM - 10 PM
                  </span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-muted-foreground font-medium">
                    Saturday - Sunday
                  </span>
                  <span className="font-bold bg-background px-3 py-1 rounded-full shadow-xs">
                    5 AM - 11 PM
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
