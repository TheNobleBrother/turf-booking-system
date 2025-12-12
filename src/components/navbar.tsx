"use client";

import Link from "next/link";
import { Button } from "@/src/components/ui/button";
import { Zap, Menu, User as UserIcon } from "lucide-react";
import { useState } from "react";
import { useAppSelector } from "@/src/store/hooks";
import { selectCurrentUser } from "@/src/store/userSlice";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const currentUser = useAppSelector(selectCurrentUser);

  return (
    <nav className="sticky top-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-xl">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 bg-linear-to-br from-primary to-accent rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all">
            <Zap className="text-primary-foreground w-5 h-5" />
          </div>
          <span className="text-2xl font-black bg-linear-to-r from-primary to-accent bg-clip-text text-transparent">
            PlayCourt
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-10">
          <Link
            href="/"
            className="text-foreground font-semibold hover:text-primary transition-all duration-300 relative group"
          >
            <span>Home</span>
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-linear-to-r from-primary to-accent group-hover:w-full transition-all duration-300" />
          </Link>
          <Link
            href="/browse"
            className="text-foreground font-semibold hover:text-primary transition-all duration-300 relative group"
          >
            <span>Browse Venues</span>
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-linear-to-r from-primary to-accent group-hover:w-full transition-all duration-300" />
          </Link>
          <Link
            href="/my-bookings"
            className="text-foreground font-semibold hover:text-primary transition-all duration-300 relative group"
          >
            <span>My Bookings</span>
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-linear-to-r from-primary to-accent group-hover:w-full transition-all duration-300" />
          </Link>
        </div>

        <div className="flex items-center gap-4">
          <Link href="/browse">
            <Button className="bg-linear-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-primary-foreground font-bold rounded-lg shadow-lg transition-all duration-300 cursor-pointer">
              Book a Slot
            </Button>
          </Link>
          {currentUser && (
            <Link
              href="/profile"
              className="hidden sm:flex items-center gap-2 px-3 py-2 rounded-full border border-border hover:border-primary transition-colors cursor-pointer"
            >
              <div className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center">
                <UserIcon className="w-5 h-5 text-primary" />
              </div>
              <span className="font-semibold text-foreground">Profile</span>
            </Link>
          )}
          <button
            className="md:hidden p-2 hover:bg-accent/10 rounded-lg transition-colors cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>
    </nav>
  );
}
