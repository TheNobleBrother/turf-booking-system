"use client"

import Link from "next/link"
import { Button } from "@/src/components/ui/button"

export default function ManagerNavbar() {
  return (
    <nav className="border-b border-border bg-card">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center">
            <span className="text-primary-foreground font-bold">PC</span>
          </div>
          <span className="text-xl font-bold text-foreground">PlayCourt</span>
        </Link>

        {/* Manager Badge */}
        <div className="px-4 py-2 bg-primary/10 text-primary font-semibold rounded-full text-sm">
          Venue Manager Mode
        </div>

        {/* Auth */}
        <div className="flex items-center gap-4">
          <Button variant="ghost">Profile</Button>
          <Button variant="outline" className="bg-transparent">
            Logout
          </Button>
        </div>
      </div>
    </nav>
  )
}
