"use client"

import Link from "next/link"
import { useEffect, useState } from "react"
import { Card } from "@/src/components/ui/card"
import { Button } from "@/src/components/ui/button"
import { Zap, ArrowRight } from "lucide-react"

const sports = [
  {
    id: "cricket",
    name: "Cricket",
    description: "Book full cricket grounds for matches and practice sessions",
    icon: "🏏",
    bgColor: "from-emerald-600 to-green-700",
    lightBg: "from-emerald-50 to-green-50",
    stats: "2-3 hour slots • Large grounds",
    accentColor: "text-emerald-600",
    image:
      "https://images.pexels.com/photos/269948/pexels-photo-269948.jpeg?auto=compress&cs=tinysrgb&w=1400&h=800&dpr=1",
    overlay: "from-emerald-900/40 to-emerald-900/10",
  },
  {
    id: "badminton",
    name: "Badminton",
    description: "Reserve badminton courts by the hour for casual or competitive play",
    icon: "🏸",
    bgColor: "from-blue-600 to-cyan-600",
    lightBg: "from-blue-50 to-cyan-50",
    stats: "Hourly slots • Indoor courts",
    accentColor: "text-blue-600",
    image:
    "https://images.pexels.com/photos/342361/pexels-photo-342361.jpeg?auto=compress&cs=tinysrgb&w=1400&h=800&dpr=1",
    overlay: "from-blue-900/40 to-blue-900/10",
  },
  {
    id: "football",
    name: "Football",
    description: "Play 5-a-side or 7-a-side football on premium quality turfs",
    icon: "⚽",
    bgColor: "from-orange-600 to-red-600",
    lightBg: "from-orange-50 to-red-50",
    stats: "Hourly bookings • All sizes",
    accentColor: "text-orange-600",
    image:
      "https://images.pexels.com/photos/61143/pexels-photo-61143.jpeg?auto=compress&cs=tinysrgb&w=1400&h=800&dpr=1",
    overlay: "from-orange-900/40 to-orange-900/10",
  },
]

export default function SportsGrid() {
  const [fade, setFade] = useState(0)

  useEffect(() => {
    const hero = document.getElementById("hero")
    const handle = () => {
      const heroHeight = hero?.getBoundingClientRect().height ?? 1
      const progress = Math.min(Math.max((window.scrollY - heroHeight * 0.3) / (heroHeight * 0.8), 0), 1)
      setFade(progress)
    }
    handle()
    window.addEventListener("scroll", handle, { passive: true })
    return () => window.removeEventListener("scroll", handle)
  }, [])

  return (
    <section
      className="py-24 bg-linear-to-b from-background via-secondary/3 to-background relative overflow-hidden transition-all duration-700"
      style={{ opacity: 1 - fade * 0.4, transform: `translateY(${fade * 12}px)` }}
    >
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl -z-10" />

      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-black text-foreground mb-6 text-balance">
            Play Your Favourite Sport
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-balance font-medium">
            Cricket, badminton, or football - find the perfect venue and start booking today. Professional facilities
            for every skill level.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {sports.map((sport) => (
            <Link key={sport.id} href={`/browse?sport=${sport.id}`}>
            <Card className="overflow-hidden h-full card-hover border-0 shadow-xl group cursor-pointer">
              <div className="relative h-64 overflow-hidden bg-linear-to-br from-secondary/20 to-primary/10">
                  <img
                    src={sport.image || "/placeholder.svg"}
                    alt={sport.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div
                    className={`absolute inset-0 bg-linear-to-t ${sport.overlay} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                  />

                  {/* Sport Icon Badge */}
                  {/* <div className="absolute top-4 left-4 w-16 h-16 bg-white/90 backdrop-blur-md rounded-2xl flex items-center justify-center text-4xl group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    {sport.icon}
                  </div> */}

                  {/* Floating Badge */}
                  <div className="absolute bottom-4 right-4 bg-white/95 backdrop-blur-sm rounded-full px-4 py-2 font-bold text-sm shadow-lg group-hover:translate-y-1 transition-transform">
                    <span className={sport.accentColor}>Explore →</span>
                  </div>
                </div>

                <div className={`bg-linear-to-br ${sport.lightBg} p-8`}>
                  <h3
                    className={`text-3xl font-black text-foreground mb-3 flex items-center gap-2 group-hover:${sport.accentColor} transition-colors`}
                  >
                    {sport.name}
                    <Zap className={`w-5 h-5 ${sport.accentColor}`} />
                  </h3>
                  <p className="text-muted-foreground text-base mb-6 leading-relaxed font-medium">
                    {sport.description}
                  </p>
                  <div className="pt-6 border-t border-black/5 dark:border-white/10">
                    <p className={`text-xs font-black tracking-widest ${sport.accentColor} uppercase mb-4`}>
                      {sport.stats}
                    </p>
                    <Button className="w-full bg-linear-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 font-bold group/btn">
                      Browse {sport.name}
                      <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
