"use client"

import { useEffect, useState } from "react"
import { Card } from "@/src/components/ui/card"
import { MapPin, Phone, Mail } from "lucide-react"

export default function LocateUsSection() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      const el = document.getElementById("locate-us")
      if (!el) return
      const rect = el.getBoundingClientRect()
      if (rect.top < window.innerHeight * 0.85) setVisible(true)
    }
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <section
      id="locate-us"
      className={`py-16 bg-background transition-all duration-700 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-8">
          <div className="space-y-4">
            <p className="text-sm uppercase tracking-[0.2em] text-primary font-semibold">Locate us</p>
            <h2 className="text-4xl font-bold text-foreground">Visit our experience hub</h2>
            <p className="text-muted-foreground max-w-2xl">
              Walk in to see turf quality, meet our team, and book your next slot with on-ground assistance.
            </p>
            <div className="space-y-3 text-sm text-foreground">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-primary" />
                <span>PlayCourt Experience Center, Downtown Sports Avenue, City 00000</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-primary" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-primary" />
                <span>support@playcourt.com</span>
              </div>
            </div>
          </div>

          <Card className="overflow-hidden border-border/60 shadow-sm">
            <div className="h-80 w-full bg-gradient-to-br from-primary/10 via-accent/5 to-secondary/10 flex items-center justify-center text-center px-6">
              <div>
                <div className="text-primary font-semibold mb-2">Find us on the map</div>
                <p className="text-muted-foreground max-w-md">
                  Easily accessible via central metro station. Parking available next to the arena.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}





