"use client"

import { useEffect, useState, useMemo } from "react"
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet"
import "leaflet/dist/leaflet.css"
import L from "leaflet"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/src/components/ui/select"
import { MapPin } from "lucide-react"

// Fix Leaflet marker icons
const icon = L.icon({
    iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
    iconRetinaUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png",
    shadowUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
});

// Custom Red Dot Icon for Venues
const redDotIcon = L.divIcon({
    className: "custom-div-icon",
    html: "<div style='background-color: #ef4444; width: 12px; height: 12px; border-radius: 50%; border: 2px solid white; box-shadow: 0 2px 4px rgba(0,0,0,0.3);'></div>",
    iconSize: [12, 12],
    iconAnchor: [6, 6]
});

type City = {
    name: string
    coords: [number, number]
    venues: { id: number; name: string; coords: [number, number] }[]
}

const cities: City[] = [
    {
        name: "Chennai",
        coords: [13.0827, 80.2707],
        venues: [
            { id: 1, name: "Marina Turf", coords: [13.0500, 80.2824] },
            { id: 2, name: "Anna Nagar Arena", coords: [13.0850, 80.2100] },
            { id: 3, name: "OMR Sports City", coords: [12.9719, 80.2486] }
        ]
    },
    {
        name: "Mumbai",
        coords: [19.0760, 72.8777],
        venues: [
            { id: 4, name: "Bandra Sports Hub", coords: [19.0596, 72.8295] },
            { id: 5, name: "Juhu Play", coords: [19.1075, 72.8263] }
        ]
    },
    {
        name: "Delhi",
        coords: [28.7041, 77.1025],
        venues: [
            { id: 6, name: "CP Complex", coords: [28.6304, 77.2177] },
            { id: 7, name: "Saket Sports", coords: [28.5244, 77.2188] }
        ]
    },
    {
        name: "Hyderabad",
        coords: [17.3850, 78.4867],
        venues: [
            { id: 8, name: "Gachibowli Stadium", coords: [17.4401, 78.3489] },
            { id: 9, name: "Jubilee Hills Turf", coords: [17.4311, 78.4067] }
        ]
    },
    {
        name: "Bangalore",
        coords: [12.9716, 77.5946],
        venues: [
            { id: 10, name: "Koramangala Indoor", coords: [12.9352, 77.6245] },
            { id: 11, name: "Indiranagar Courts", coords: [12.9784, 77.6408] }
        ]
    }
]

function MapUpdater({ center }: { center: [number, number] }) {
    const map = useMap()
    useEffect(() => {
        map.flyTo(center, 12, { duration: 2 })
    }, [center, map])
    return null
}

export default function InteractiveMap() {
    const [selectedCity, setSelectedCity] = useState<City>(cities[0])

    // We need to ensure this component only runs on client side (Leaflet req)
    const [mounted, setMounted] = useState(false)
    useEffect(() => { setMounted(true) }, [])

    if (!mounted) return <div className="h-[400px] w-full bg-secondary/10 animate-pulse rounded-2xl" />

    return (
        <div className="space-y-4 h-full flex flex-col">
            <div className="flex items-center gap-4 bg-background/50 backdrop-blur-sm p-4 rounded-xl border border-border/40">
                <div className="flex items-center gap-2 text-primary font-bold">
                    <MapPin className="w-5 h-5" />
                    <span>Locate Us in</span>
                </div>
                <Select
                    value={selectedCity.name}
                    onValueChange={(val) => {
                        const city = cities.find(c => c.name === val)
                        if (city) setSelectedCity(city)
                    }}
                >
                    <SelectTrigger className="w-[180px] font-semibold bg-background">
                        <SelectValue placeholder="Select City" />
                    </SelectTrigger>
                    <SelectContent className="bg-background/95 backdrop-blur-md border border-border shadow-lg z-[1000]">
                        {cities.map(city => (
                            <SelectItem key={city.name} value={city.name} className="cursor-pointer focus:bg-primary focus:text-primary-foreground font-medium">
                                {city.name}
                            </SelectItem>
                        ))}
                    </SelectContent>
                </Select>
            </div>

            <div className="flex-grow rounded-2xl overflow-hidden border border-border/40 shadow-inner relative z-0 h-[400px] md:h-auto">
                <MapContainer
                    center={selectedCity.coords}
                    zoom={12}
                    style={{ height: "100%", width: "100%" }}
                    scrollWheelZoom={true}
                >
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <MapUpdater center={selectedCity.coords} />

                    {selectedCity.venues.map(venue => (
                        <Marker
                            key={venue.id}
                            position={venue.coords}
                            icon={redDotIcon}
                        >
                            <Popup>
                                <div className="font-bold text-sm">{venue.name}</div>
                                <div className="text-xs text-muted-foreground">Premier Sports Facility</div>
                            </Popup>
                        </Marker>
                    ))}
                </MapContainer>
            </div>
        </div>
    )
}
