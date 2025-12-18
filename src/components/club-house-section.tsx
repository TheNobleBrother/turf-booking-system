"use client";

import { useState } from "react";
import { Card } from "@/src/components/ui/card";
import { Button } from "@/src/components/ui/button";
import { Badge } from "./ui/badge";
import { Input } from "@/src/components/ui/input";
import { MapPin, Star, Calendar, Clock, Search } from "lucide-react";
import Link from "next/link";
import { cities, clubHousesData, amenityIcons, type ClubHouse } from "@/src/lib/clubhouse-data";
import ClubhouseFilterSidebar from "@/src/components/clubhouse-filter-sidebar";

export default function ClubHouseSection() {
    // State
    const [activeCity, setActiveCity] = useState("All");
    const [searchQuery, setSearchQuery] = useState("");
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [filters, setFilters] = useState({
        priceRange: [0, 100] as [number, number],
        rating: 0,
    });

    // Helper to get all clubs if city is All
    const getAllClubhouses = () => {
        if (activeCity !== "All") {
            return clubHousesData[activeCity] || [];
        }
        // Flatten all cities into one array
        return Object.values(clubHousesData).flat();
    };

    // Filter Logic
    const filteredClubhouses = getAllClubhouses().filter((club: ClubHouse) => {
        // 1. Search Query
        if (searchQuery) {
            const query = searchQuery.toLowerCase();
            const matchesSearch =
                club.name.toLowerCase().includes(query) ||
                club.location.toLowerCase().includes(query);
            if (!matchesSearch) return false;
        }

        // 2. Price Filter
        // Parse price string e.g. "$20/hr" -> 20
        const priceValue = parseInt(club.price.replace(/[^0-9]/g, "")) || 0;
        if (priceValue > filters.priceRange[1]) return false;

        // 3. Rating Filter
        if (club.rating < filters.rating) return false;

        return true;
    });

    const displayCities = ["All", ...cities];

    return (
        <section className="bg-secondary/5 min-h-screen">
            {/* Hero Banner Area */}
            <div className="relative w-full h-[50vh] min-h-[400px] flex flex-col items-center justify-center overflow-hidden mb-12">
                {/* Background Image */}
                <div className="absolute inset-0 z-0">
                    <img
                        src="/images/clubhouse-img.webp"
                        alt="Clubhouse Banner"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/50" />
                </div>

                {/* Hero Text */}
                <div className="relative z-10 text-center px-4 mb-8 animate-in fade-in zoom-in duration-700">
                    <h1 className="text-4xl md:text-6xl font-black text-white tracking-tight mb-4 drop-shadow-2xl">
                        Indoor Games Arena
                    </h1>
                    <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto font-medium drop-shadow-lg">
                        Challenge your friends to a game of pool, carrom, or chess at our premium indoor game centers.
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
                                    placeholder="Search by name or location..."
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
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
                                <Button className="w-full h-12 font-bold text-lg shadow-lg hover:shadow-primary/25">
                                    <Search className="w-5 h-5 md:hidden mr-2" />
                                    <span className="md:hidden">Search</span>
                                    <Search className="hidden md:block w-6 h-6" />
                                </Button>
                            </div>
                        </div>
                    </Card>
                </div>
            </div>

            <div className="container mx-auto px-4 pb-20">
                {/* City Tabs */}
                <div className="flex flex-wrap justify-center gap-3 mb-12">
                    {displayCities.map((city) => (
                        <button
                            key={city}
                            onClick={() => setActiveCity(city)}
                            className={`px-6 py-2.5 rounded-full font-bold transition-all duration-300 ${activeCity === city
                                ? "bg-primary text-primary-foreground shadow-lg scale-105"
                                : "bg-background text-foreground/70 hover:bg-secondary hover:text-foreground border border-transparent hover:border-border"
                                }`}
                        >
                            {city}
                        </button>
                    ))}
                </div>

                <div className="grid lg:grid-cols-4 gap-8">
                    {/* Sidebar */}
                    <aside className="lg:col-span-1">
                        <ClubhouseFilterSidebar filters={filters} setFilters={setFilters} />
                    </aside>

                    {/* Club House Grid */}
                    <div className="lg:col-span-3">
                        <div className="mb-6">
                            <h2 className="text-2xl font-bold text-foreground">Available Game Centers</h2>
                            <p className="text-muted-foreground">{filteredClubhouses.length} locations found</p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8">
                            {filteredClubhouses.length > 0 ? (
                                filteredClubhouses.map((club) => (
                                    <Link href={`/clubhouses/${club.id}`} key={club.id} className="block h-full">
                                        <Card
                                            className="group h-full overflow-hidden border-0 bg-background shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 flex flex-col"
                                        >
                                            <div className="relative h-64 overflow-hidden">
                                                <img
                                                    src={club.image}
                                                    alt={club.name}
                                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                                />
                                                <div className="absolute top-4 right-4 bg-background/90 backdrop-blur-sm px-3 py-1 rounded-full flex items-center gap-1 shadow-sm">
                                                    <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                                                    <span className="font-bold text-sm">{club.rating}</span>
                                                </div>
                                                <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                            </div>

                                            <div className="p-6 flex flex-col flex-1">
                                                <div className="flex justify-between items-start mb-2">
                                                    <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors line-clamp-1">
                                                        {club.name}
                                                    </h3>
                                                    <Badge variant="secondary" className="font-bold shrink-0">
                                                        {club.price}
                                                    </Badge>
                                                </div>

                                                <div className="flex items-center gap-2 text-muted-foreground mb-6">
                                                    <MapPin className="w-4 h-4 shrink-0" />
                                                    <span className="text-sm font-medium line-clamp-1">{club.location}</span>
                                                </div>

                                                {/* Amenities */}
                                                <div className="mb-6 flex-1">
                                                    <p className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-3">Amenities</p>
                                                    <div className="flex flex-wrap gap-2">
                                                        {club.amenities.slice(0, 4).map((amenity) => {
                                                            const Icon = amenityIcons[amenity];
                                                            if (!Icon) return null;
                                                            return (
                                                                <div
                                                                    key={amenity}
                                                                    className="flex items-center gap-1.5 bg-secondary/30 px-3 py-1.5 rounded-lg text-sm font-medium text-foreground/80 group-hover:bg-primary/10 group-hover:text-primary transition-colors"
                                                                >
                                                                    <Icon className="w-4 h-4" />
                                                                    <span>{amenity}</span>
                                                                </div>
                                                            );
                                                        })}
                                                        {club.amenities.length > 4 && (
                                                            <div className="px-3 py-1.5 rounded-lg text-sm font-medium text-muted-foreground bg-secondary/30">
                                                                +{club.amenities.length - 4}
                                                            </div>
                                                        )}
                                                    </div>
                                                </div>

                                                <Button className="w-full font-bold shadow-md hover:shadow-lg group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                                                    Book Now
                                                </Button>
                                            </div>
                                        </Card>
                                    </Link>
                                ))
                            ) : (
                                <div className="col-span-full text-center py-20">
                                    <h3 className="text-2xl font-bold text-muted-foreground">No clubhouses found.</h3>
                                    <p className="text-muted-foreground mt-2">Try adjusting your filters.</p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
