export type SlotStatus = "available" | "booked";
export type Slot = { time: string; status: SlotStatus };
export type Availability = { date: string; slots: Slot[] };

export interface Venue {
  id: number;
  name: string;
  sport: string;
  location: string;
  rating: number;
  reviews: number;
  price: number;
  image: string | { src: string };
  capacity: string;
  duration: string;
  verified: boolean;
  availability: Availability[];
  description?: string;
  amenities?: string[];
  about?: string;
  rules?: string[];
  courts?: { id: number; name: string; capacity: string; basePrice: number }[];
  gallery?: Array<string | { src: string }>;
}

// Shared mock venue data used across browse grid and venue pages
export const mockVenues: Venue[] = [
  {
    id: 1,
    name: "MCC Cricket Ground",
    sport: "cricket",
    location: "Downtown, City",
    rating: 4.8,
    reviews: 156,
    price: 75,
    image: { src: "/images/cric-home-page.jpg" },
    gallery: [
      { src: "/images/cric-stadium-in.jpg" },
      { src: "/images/cric-stadium-out.jpg" },
      { src: "/images/cric-stadium-view.jpg" },
    ],
    capacity: "22 players",
    duration: "2-3 hrs",
    verified: true,
    availability: [
      {
        date: "2025-12-12",
        slots: [
          { time: "06:00", status: "available" },
          { time: "08:00", status: "booked" },
          { time: "18:00", status: "available" },
        ],
      },
      {
        date: "2025-12-13",
        slots: [
          { time: "07:00", status: "available" },
          { time: "09:30", status: "booked" },
          { time: "19:00", status: "available" },
        ],
      },
    ],
    description: "Premium cricket ground with professional-grade amenities.",
    amenities: [
      "Floodlights",
      "Changing Rooms",
      "Parking",
      "Cafeteria",
      "First Aid",
    ],
    about:
      "Located in the heart of the city, MCC Cricket Ground offers state-of-the-art facilities for cricket enthusiasts. With a well-maintained pitch and excellent ground conditions, it's the preferred choice for serious players.",
    rules: [
      "Shoes must be worn at all times",
      "No outside alcohol allowed",
      "Respectful behavior mandatory",
      "Follow ground safety protocols",
    ],
    courts: [
      { id: 1, name: "Main Pitch", capacity: "Full ground", basePrice: 75 },
      { id: 2, name: "Practice Pitch", capacity: "Full ground", basePrice: 50 },
    ],
  },
  {
    id: 2,
    name: "Court Kings Badminton",
    sport: "badminton",
    location: "North Park",
    rating: 4.6,
    reviews: 89,
    price: 12,
    image:
      "https://images.pexels.com/photos/342361/pexels-photo-342361.jpeg?auto=compress&cs=tinysrgb&w=1400&h=800&dpr=1",
    gallery: [
      { src: "/images/badminton_pic_1.png" },
      { src: "/images/badminton_pic_2.jpg" },
      { src: "/images/badminton_pic_3.jpg" },
    ],
    capacity: "4 players",
    duration: "1 hr",
    verified: true,
    availability: [
      {
        date: "2025-12-12",
        slots: [
          { time: "10:00", status: "booked" },
          { time: "12:00", status: "booked" },
          { time: "15:00", status: "booked" },
          { time: "18:00", status: "booked" },
        ],
      },
      {
        date: "2025-12-13",
        slots: [
          { time: "09:00", status: "booked" },
          { time: "11:00", status: "booked" },
          { time: "14:00", status: "booked" },
          { time: "17:00", status: "booked" },
        ],
      },
    ],
    description: "Indoor badminton courts with pro flooring and lighting.",
    amenities: [
      "Indoor courts",
      "Locker rooms",
      "Water station",
      "Coaching available",
    ],
    about:
      "Court Kings offers premium indoor badminton courts with professional-grade flooring and lighting, ideal for both casual and competitive play.",
    rules: [
      "Non-marking shoes required",
      "No outside food on courts",
      "Respect time slots",
    ],
    courts: [
      { id: 1, name: "Court A", capacity: "Doubles", basePrice: 12 },
      { id: 2, name: "Court B", capacity: "Doubles", basePrice: 12 },
    ],
  },
  {
    id: 3,
    name: "Goal Sports Turf",
    sport: "football",
    location: "Sports Complex",
    rating: 4.9,
    reviews: 234,
    price: 25,
    image:
      "https://images.pexels.com/photos/61143/pexels-photo-61143.jpeg?auto=compress&cs=tinysrgb&w=1400&h=800&dpr=1",
    gallery: [
      { src: "/images/football_pic_1.jpg" },
      { src: "/images/football_pic_2.avif" },
      { src: "/images/football_pic_3.jpg" },
    ],
    capacity: "10 players",
    duration: "1 hr",
    verified: true,
    availability: [
      {
        date: "2025-12-12",
        slots: [
          { time: "06:30", status: "available" },
          { time: "08:30", status: "available" },
          { time: "20:00", status: "available" },
        ],
      },
      {
        date: "2025-12-13",
        slots: [
          { time: "07:30", status: "booked" },
          { time: "09:30", status: "available" },
          { time: "19:30", status: "available" },
        ],
      },
    ],
    description: "7-a-side and 5-a-side turf with high-quality lighting.",
    amenities: ["Floodlights", "Changing rooms", "Refreshments", "Parking"],
    about:
      "Goal Sports Turf provides pristine football turfs suitable for 5-a-side and 7-a-side games with excellent drainage and lighting.",
    rules: [
      "Turf shoes or studs only",
      "No metal studs",
      "Respect time limits",
    ],
    courts: [
      { id: 1, name: "7-a-side Turf", capacity: "14 players", basePrice: 30 },
      { id: 2, name: "5-a-side Turf", capacity: "10 players", basePrice: 25 },
    ],
  },
  {
    id: 4,
    name: "Elite Cricket Academy",
    sport: "cricket",
    location: "East End",
    rating: 4.7,
    reviews: 145,
    price: 80,
    image: { src: "/images/cric-home-page.jpg" },
    gallery: [
      { src: "/images/cric-stadium-in.jpg" },
      { src: "/images/cric-stadium-out.jpg" },
      { src: "/images/cric-stadium-view.jpg" },
    ],
    capacity: "22 players",
    duration: "2-3 hrs",
    verified: true,
    availability: [
      {
        date: "2025-12-12",
        slots: [
          { time: "05:30", status: "booked" },
          { time: "07:30", status: "booked" },
          { time: "17:00", status: "booked" },
        ],
      },
      {
        date: "2025-12-13",
        slots: [
          { time: "06:00", status: "booked" },
          { time: "08:00", status: "booked" },
          { time: "16:30", status: "booked" },
        ],
      },
    ],
    description: "High-quality academy pitches for serious practice.",
    amenities: ["Practice nets", "Coaching", "Locker rooms"],
    about:
      "Elite Cricket Academy offers practice-ready wickets and coaching support.",
    rules: ["Proper kit required", "No outside coaches without approval"],
    courts: [
      { id: 1, name: "Academy Pitch", capacity: "Full ground", basePrice: 80 },
    ],
  },
  {
    id: 5,
    name: "Badminton Paradise",
    sport: "badminton",
    location: "City Center",
    rating: 4.5,
    reviews: 67,
    price: 15,
    image:
      "https://images.pexels.com/photos/342361/pexels-photo-342361.jpeg?auto=compress&cs=tinysrgb&w=1400&h=800&dpr=1",
    gallery: [
      { src: "/images/badminton_pic_1.png" },
      { src: "/images/badminton_pic_2.jpg" },
      { src: "/images/badminton_pic_3.jpg" },
    ],
    capacity: "4 players",
    duration: "1 hr",
    verified: false,
    availability: [
      {
        date: "2025-12-12",
        slots: [
          { time: "09:00", status: "available" },
          { time: "11:00", status: "available" },
          { time: "13:00", status: "available" },
          { time: "17:30", status: "available" },
        ],
      },
      {
        date: "2025-12-13",
        slots: [
          { time: "10:00", status: "available" },
          { time: "12:00", status: "available" },
          { time: "15:30", status: "available" },
          { time: "18:30", status: "available" },
        ],
      },
    ],
    description: "Accessible courts with friendly staff.",
    amenities: ["Indoor courts", "Drinking water", "Locker room"],
    about:
      "Badminton Paradise offers affordable hourly bookings for casual games.",
    rules: ["Non-marking shoes", "No food on courts"],
    courts: [
      { id: 1, name: "Court 1", capacity: "Doubles", basePrice: 15 },
      { id: 2, name: "Court 2", capacity: "Doubles", basePrice: 15 },
    ],
  },
  {
    id: 6,
    name: "Premier Football Complex",
    sport: "football",
    location: "Suburban Area",
    rating: 4.8,
    reviews: 198,
    price: 30,
    image:
      "https://images.pexels.com/photos/274506/pexels-photo-274506.jpeg?auto=compress&cs=tinysrgb&w=1400&h=800&dpr=1",
    gallery: [
      { src: "/images/football_pic_1.jpg" },
      { src: "/images/football_pic_2.avif" },
      { src: "/images/football_pic_3.jpg" },
    ],
    capacity: "14 players",
    duration: "1 hr",
    verified: true,
    availability: [
      {
        date: "2025-12-12",
        slots: [
          { time: "06:00", status: "booked" },
          { time: "07:30", status: "available" },
          { time: "18:30", status: "booked" },
          { time: "20:30", status: "available" },
        ],
      },
      {
        date: "2025-12-13",
        slots: [
          { time: "06:30", status: "available" },
          { time: "08:30", status: "available" },
          { time: "21:00", status: "available" },
          { time: "22:30", status: "available" },
        ],
      },
    ],
    description: "Multiple football turfs with changing rooms and lights.",
    amenities: ["Floodlights", "Parking", "Cafeteria", "Showers"],
    about:
      "Premier Football Complex is a multi-turf facility suited for leagues and casual matches.",
    rules: ["Turf shoes only", "No glass bottles on pitch"],
    courts: [
      { id: 1, name: "11-a-side Turf", capacity: "22 players", basePrice: 45 },
      { id: 2, name: "7-a-side Turf", capacity: "14 players", basePrice: 30 },
    ],
  },
];
