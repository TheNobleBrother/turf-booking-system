import { MapPin, Star, Waves, Dumbbell, Coffee, Wifi, Car, Utensils } from "lucide-react";
import React from "react";

export type Amenity = "Pool" | "Gym" | "Spa" | "Cafe" | "Parking" | "Restaurant" | "Wifi";

export interface ClubHouse {
    id: string;
    name: string;
    image: string;
    location: string;
    rating: number;
    price: string;
    amenities: Amenity[];
    description?: string;
}

export const cities = ["Chennai", "Mumbai", "Delhi", "Hyderabad", "Bangalore"];

export const clubHousesData: Record<string, ClubHouse[]> = {
    Chennai: [
        {
            id: "ch-1",
            name: "Madras Club Elite",
            image: "https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg?auto=compress&cs=tinysrgb&w=800",
            location: "Adyar, Chennai",
            rating: 4.8,
            price: "$20/hr",
            amenities: ["Pool", "Gym", "Cafe", "Parking"],
            description: "A premier destination for sports and leisure in the heart of Adyar.",
        },
        {
            id: "ch-2",
            name: "The Marina Lounge",
            image: "https://images.pexels.com/photos/189333/pexels-photo-189333.jpeg?auto=compress&cs=tinysrgb&w=800",
            location: "ECR, Chennai",
            rating: 4.6,
            price: "$25/hr",
            amenities: ["Pool", "Spa", "Restaurant", "Wifi"],
            description: "Relax by the coast with world-class amenities and breathtaking views.",
        },
    ],
    Mumbai: [
        {
            id: "mum-1",
            name: "Bombay Gymkhana",
            image: "https://images.pexels.com/photos/1571732/pexels-photo-1571732.jpeg?auto=compress&cs=tinysrgb&w=800",
            location: "Fort, Mumbai",
            rating: 4.9,
            price: "$40/hr",
            amenities: ["Gym", "Pool", "Restaurant", "Parking"],
            description: "Historic charm meets modern luxury in this iconic Mumbai institution.",
        },
        {
            id: "mum-2",
            name: "Juhu Beach Club",
            image: "https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg?auto=compress&cs=tinysrgb&w=800",
            location: "Juhu, Mumbai",
            rating: 4.7,
            price: "$35/hr",
            amenities: ["Spa", "Cafe", "Wifi"],
            description: "The perfect escape from the city buzz, right on Juhu Beach.",
        },
    ],
    Delhi: [
        {
            id: "del-1",
            name: "Delhi Golf Club",
            image: "https://images.pexels.com/photos/1320686/pexels-photo-1320686.jpeg?auto=compress&cs=tinysrgb&w=800",
            location: "Dr APJ Abdul Kalam Rd, Delhi",
            rating: 4.8,
            price: "$30/hr",
            amenities: ["Pool", "Gym", "Restaurant", "Parking"],
            description: "Exclusive access to one of Delhi's most prestigious sporting venues.",
        },
    ],
    Hyderabad: [
        {
            id: "hyd-1",
            name: "Jubilee Hills Club",
            image: "https://images.pexels.com/photos/221457/pexels-photo-221457.jpeg?auto=compress&cs=tinysrgb&w=800",
            location: "Jubilee Hills, Hyderabad",
            rating: 4.7,
            price: "$28/hr",
            amenities: ["Pool", "Gym", "Spa"],
            description: "Luxury redefined in the upscale neighborhood of Jubilee Hills.",
        },
    ],
    Bangalore: [
        {
            id: "blr-1",
            name: "Bangalore Club",
            image: "https://images.pexels.com/photos/2096983/pexels-photo-2096983.jpeg?auto=compress&cs=tinysrgb&w=800",
            location: "Residency Rd, Bangalore",
            rating: 4.9,
            price: "$32/hr",
            amenities: ["Pool", "Restaurant", "Wifi", "Parking"],
            description: "Experience the heritage and elegance of Bangalore's finest club.",
        },
    ],
};

export const amenityIcons: Record<Amenity, React.ElementType> = {
    Pool: Waves,
    Gym: Dumbbell,
    Spa: Star,
    Cafe: Coffee,
    Parking: Car,
    Restaurant: Utensils,
    Wifi: Wifi,
};

export function getClubhouseById(id: string): ClubHouse | undefined {
    for (const city in clubHousesData) {
        const found = clubHousesData[city].find((club) => club.id === id);
        if (found) return found;
    }
    return undefined;
}
