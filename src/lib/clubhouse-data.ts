import { MapPin, Star, Dices, Disc, Gamepad2, Trophy, Coffee, Armchair, Pizza } from "lucide-react";
import React from "react";

export type Amenity = "Pool Table" | "Carrom" | "Chess" | "Table Tennis" | "Arcade" | "Cafe" | "Snacks" | "Lounge";

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
            name: "Anna Nagar Sports Lounge",
            image: "https://images.pexels.com/photos/2263436/pexels-photo-2263436.jpeg?auto=compress&cs=tinysrgb&w=800",
            location: "Anna Nagar, Chennai",
            rating: 4.8,
            price: "$15/hr",
            amenities: ["Pool Table", "Carrom", "Chess", "Snacks"],
            description: "A premium hangout spot featuring top-quality pool tables, carrom boards, and a relaxing cafe.",
        },
        {
            id: "ch-2",
            name: "Adyar Gaming Arena",
            image: "https://images.pexels.com/photos/1040157/pexels-photo-1040157.jpeg?auto=compress&cs=tinysrgb&w=800",
            location: "Adyar, Chennai",
            rating: 4.6,
            price: "$12/hr",
            amenities: ["Table Tennis", "Chess", "Arcade", "Lounge"],
            description: "The ultimate destination for indoor gaming with professional TT tables and digital arcade zones.",
        },
    ],
    Mumbai: [
        {
            id: "mum-1",
            name: "Mumbai Recreation Club",
            image: "https://images.pexels.com/photos/1533960/pexels-photo-1533960.jpeg?auto=compress&cs=tinysrgb&w=800",
            location: "Bandra, Mumbai",
            rating: 4.9,
            price: "$20/hr",
            amenities: ["Pool Table", "Table Tennis", "Carrom", "Cafe"],
            description: "Experience luxury gaming with friends. Features billiards, ping pong, and gourmet food.",
        },
        {
            id: "mum-2",
            name: "Andheri Sports Hub",
            image: "https://images.pexels.com/photos/2284166/pexels-photo-2284166.jpeg?auto=compress&cs=tinysrgb&w=800",
            location: "Andheri, Mumbai",
            rating: 4.7,
            price: "$14/hr",
            amenities: ["Arcade", "Chess", "Carrom", "Snacks"],
            description: "A fun-filled hub for arcade lovers and board game enthusiasts.",
        },
    ],
    Delhi: [
        {
            id: "del-1",
            name: "Capital Indoor Stadium",
            image: "https://images.pexels.com/photos/8111357/pexels-photo-8111357.jpeg?auto=compress&cs=tinysrgb&w=800",
            location: "CP, Delhi",
            rating: 4.8,
            price: "$18/hr",
            amenities: ["Table Tennis", "Pool Table", "Chess", "Lounge"],
            description: "State-of-the-art indoor playing facility right in the heart of Connaught Place.",
        },
    ],
    Hyderabad: [
        {
            id: "hyd-1",
            name: "Hyderabad Gaming Zone",
            image: "https://images.pexels.com/photos/7311920/pexels-photo-7311920.jpeg?auto=compress&cs=tinysrgb&w=800",
            location: "Jubilee Hills, Hyderabad",
            rating: 4.7,
            price: "$16/hr",
            amenities: ["Pool Table", "Arcade", "Carrom", "Snacks"],
            description: "Next-gen entertainment center offering everything from 8-ball pool to retro arcade games.",
        },
    ],
    Bangalore: [
        {
            id: "blr-1",
            name: "Bangalore Indoor Arena",
            image: "https://images.pexels.com/photos/8956424/pexels-photo-8956424.jpeg?auto=compress&cs=tinysrgb&w=800",
            location: "Koramangala, Bangalore",
            rating: 4.9,
            price: "$15/hr",
            amenities: ["Table Tennis", "Carrom", "Pool Table", "Cafe"],
            description: "A comprehensive indoor sports center for all ages, perfect for weekends.",
        },
    ],
};

export const amenityIcons: Record<Amenity, React.ElementType> = {
    "Pool Table": Disc,
    "Carrom": Dices,
    "Chess": Trophy,
    "Table Tennis": Gamepad2, // Using Gamepad as proxy or could use Activity
    "Arcade": Gamepad2,
    "Cafe": Coffee,
    "Snacks": Pizza,
    "Lounge": Armchair,
};

export function getClubhouseById(id: string): ClubHouse | undefined {
    for (const city in clubHousesData) {
        const found = clubHousesData[city].find((club) => club.id === id);
        if (found) return found;
    }
    return undefined;
}
