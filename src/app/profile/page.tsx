"use client"

import Link from "next/link"
import { Card } from "@/src/components/ui/card"
import { Button } from "@/src/components/ui/button"
import { useAppSelector } from "@/src/store/hooks"
import { selectCurrentUser } from "@/src/store/userSlice"
import { mockVenues } from "@/src/data/mock-venues"

export default function ProfilePage() {
  const user = useAppSelector(selectCurrentUser)

  if (!user) {
    return (
      <main className="container mx-auto px-4 py-16">
        <Card className="p-8 text-center space-y-4">
          <h1 className="text-3xl font-bold text-foreground">Profile</h1>
          <p className="text-muted-foreground">No user found. Please sign up to view your profile.</p>
          <div className="flex gap-4 justify-center">
            <Link href="/auth/signup">
              <Button className="bg-primary">Sign Up</Button>
            </Link>
            <Link href="/auth/login">
              <Button variant="outline">Sign In</Button>
            </Link>
          </div>
        </Card>
      </main>
    )
  }

  const favoriteVenues = mockVenues.filter((v) => user.favorites.includes(v.id))

  return (
    <main className="container mx-auto px-4 py-12 space-y-10">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <p className="text-sm text-muted-foreground uppercase tracking-wide">Profile</p>
          <h1 className="text-4xl font-black text-foreground">{user.name}</h1>
          <p className="text-muted-foreground">{user.email}</p>
          <p className="text-muted-foreground">Phone: {user.phone}</p>
          <p className="text-muted-foreground capitalize">Role: {user.role}</p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline">Edit Profile</Button>
          <Button className="bg-primary">Manage Bookings</Button>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        <Card className="p-6 space-y-3">
          <h2 className="text-xl font-bold text-foreground">Latest Transactions</h2>
          {user.transactions.slice(0, 4).map((tx) => (
            <div key={tx.id} className="flex justify-between text-sm border-b border-border/60 pb-2">
              <div>
                <p className="font-semibold text-foreground">{tx.description}</p>
                <p className="text-muted-foreground">{tx.date}</p>
              </div>
              <p className="font-bold text-primary">${tx.amount}</p>
            </div>
          ))}
          {user.transactions.length === 0 && <p className="text-muted-foreground text-sm">No transactions yet.</p>}
        </Card>

        <Card className="p-6 space-y-3">
          <h2 className="text-xl font-bold text-foreground">Latest Booked Venues</h2>
          {user.bookings.slice(0, 4).map((b) => (
            <div key={b.id} className="border border-border/60 rounded-lg p-3 space-y-1">
              <p className="font-semibold text-foreground">{b.venueName}</p>
              <p className="text-sm text-muted-foreground">
                {b.date} • {b.time} • {b.court}
              </p>
            </div>
          ))}
          {user.bookings.length === 0 && <p className="text-muted-foreground text-sm">No bookings yet.</p>}
        </Card>

        <Card className="p-6 space-y-3">
          <h2 className="text-xl font-bold text-foreground">Favorite Sports</h2>
          <div className="flex flex-wrap gap-2">
            {user.sports.map((sport) => (
              <span
                key={sport}
                className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-semibold capitalize"
              >
                {sport}
              </span>
            ))}
            {user.sports.length === 0 && <p className="text-muted-foreground text-sm">No sports selected yet.</p>}
          </div>
        </Card>
      </div>

      <Card className="p-6 space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold text-foreground">Favorite Venues</h2>
          <span className="text-sm text-muted-foreground">{favoriteVenues.length} saved</span>
        </div>
        {favoriteVenues.length === 0 && <p className="text-muted-foreground">No favorites yet.</p>}
        <div className="grid md:grid-cols-3 gap-4">
          {favoriteVenues.map((venue) => (
            <div key={venue.id} className="border border-border rounded-lg overflow-hidden">
              <img
                src={typeof venue.image === "string" ? venue.image : venue.image?.src}
                alt={venue.name}
                className="h-32 w-full object-cover"
              />
              <div className="p-3 space-y-1">
                <p className="font-semibold text-foreground">{venue.name}</p>
                <p className="text-sm text-muted-foreground">{venue.location}</p>
                <p className="text-sm text-muted-foreground capitalize">{venue.sport}</p>
                <Link href={`/venue/${venue.id}`} className="text-primary text-sm font-semibold">
                  View details →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </main>
  )
}

