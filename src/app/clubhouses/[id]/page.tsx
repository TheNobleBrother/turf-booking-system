"use client";

import { useParams, notFound } from "next/navigation";
import { getClubhouseById, amenityIcons } from "@/src/lib/clubhouse-data";
import Navbar from "@/src/components/navbar";
import { Badge } from "@/src/components/ui/badge";
import { Button } from "@/src/components/ui/button";
import { MapPin, Star, Share2, Heart, CheckCircle2 } from "lucide-react";
import Link from 'next/link';

export default function ClubhouseDetailsPage() {
    const params = useParams();
    const id = params?.id as string;
    const club = getClubhouseById(id);

    if (!club) {
        notFound();
    }

    return (
        <main className="min-h-screen bg-background pb-20">
            <Navbar />

            {/* Hero Image Section */}
            <div className="relative h-[50vh] min-h-[400px] w-full">
                <img
                    src={club.image}
                    alt={club.name}
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-linear-to-t from-background via-transparent to-black/30" />

                <div className="absolute bottom-0 left-0 right-0 p-4 md:p-8 container mx-auto">
                    <div className="flex flex-col md:flex-row justify-between items-end gap-4 animate-in slide-in-from-bottom-6 duration-700">
                        <div>
                            <Badge className="mb-4 text-xs font-bold uppercase tracking-wider bg-primary text-primary-foreground border-0">
                                Premium
                            </Badge>
                            <h1 className="text-4xl md:text-5xl font-black text-white mb-2 drop-shadow-lg">
                                {club.name}
                            </h1>
                            <div className="flex items-center gap-2 text-white/90 text-lg font-medium drop-shadow-md">
                                <MapPin className="w-5 h-5 text-primary" />
                                {club.location}
                            </div>
                        </div>

                        <div className="flex gap-3">
                            <Button size="icon" variant="outline" className="bg-background/20 backdrop-blur-sm border-white/20 text-white hover:bg-white hover:text-black rounded-full">
                                <Share2 className="w-5 h-5" />
                            </Button>
                            <Button size="icon" variant="outline" className="bg-background/20 backdrop-blur-sm border-white/20 text-white hover:bg-white hover:text-black rounded-full">
                                <Heart className="w-5 h-5" />
                            </Button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-4 mt-8">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Main Content */}
                    <div className="lg:col-span-2 space-y-8">
                        {/* Overview */}
                        <div className="bg-card border border-border/50 rounded-2xl p-6 md:p-8 shadow-xs">
                            <h2 className="text-2xl font-bold mb-4">Overview</h2>
                            <p className="text-muted-foreground leading-relaxed text-lg">
                                {club.description || "Experience world-class facilities and luxury amenities at this premier clubhouse. Perfect for sports enthusiasts and leisure seekers alike."}
                            </p>

                            <div className="flex items-center gap-6 mt-6 pt-6 border-t border-border">
                                <div className="flex items-center gap-2">
                                    <Star className="w-6 h-6 text-yellow-500 fill-yellow-500" />
                                    <span className="text-2xl font-bold">{club.rating}</span>
                                    <span className="text-muted-foreground text-sm">(124 reviews)</span>
                                </div>
                                <div className="h-8 w-px bg-border" />
                                <div className="flex items-center gap-2 text-green-600">
                                    <CheckCircle2 className="w-5 h-5" />
                                    <span className="font-medium">Verified Partner</span>
                                </div>
                            </div>
                        </div>

                        {/* Amenities */}
                        <div className="bg-card border border-border/50 rounded-2xl p-6 md:p-8 shadow-xs">
                            <h2 className="text-2xl font-bold mb-6">Amenities</h2>
                            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                                {club.amenities.map((amenity) => {
                                    const Icon = amenityIcons[amenity];
                                    return (
                                        <div key={amenity} className="flex items-center gap-3 p-4 rounded-xl bg-secondary/30 text-foreground/80 hover:bg-primary/5 hover:text-primary transition-colors border border-transparent hover:border-primary/20">
                                            <div className="p-2 rounded-full bg-background shadow-xs">
                                                <Icon className="w-5 h-5" />
                                            </div>
                                            <span className="font-medium">{amenity}</span>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>

                    {/* Sidebar / Booking Card */}
                    <div className="lg:col-span-1">
                        <div className="bg-card border border-border/50 rounded-2xl p-6 shadow-lg sticky top-24">
                            <div className="flex justify-between items-center mb-6">
                                <div className="text-muted-foreground font-medium">Price</div>
                                <div className="text-3xl font-black text-primary">{club.price}</div>
                            </div>

                            <Button size="lg" className="w-full text-lg font-bold py-6 mb-4 shadow-lg shadow-primary/20">
                                Book Now
                            </Button>

                            <p className="text-center text-sm text-muted-foreground mb-6">
                                No credit card required for inquiry
                            </p>

                            <div className="space-y-3 pt-6 border-t border-border">
                                <div className="flex justify-between text-sm">
                                    <span className="text-muted-foreground">Monday - Friday</span>
                                    <span className="font-medium">6:00 AM - 10:00 PM</span>
                                </div>
                                <div className="flex justify-between text-sm">
                                    <span className="text-muted-foreground">Saturday - Sunday</span>
                                    <span className="font-medium">5:00 AM - 11:00 PM</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
