"use client"

import { useEffect, useState } from "react"
import { Card } from "@/src/components/ui/card"

const gallery = [
  { src: "/images/football_pic_1.jpg", title: "Night Turf", desc: "Rain-kissed pitch ready for kick-off." },
  { src: "/images/football_pic_2.avif", title: "Arena View", desc: "Panoramic stands and pristine field." },
  { src: "/images/football_pic_3.jpg", title: "Match Day", desc: "Fans, floodlights, and full energy." },
  { src: "/images/badminton_pic_1.png", title: "Indoor Court", desc: "Pro flooring, perfect lighting." },
  { src: "/images/badminton_pic_2.jpg", title: "Court Duo", desc: "Doubles-ready setup." },
  { src: "/images/badminton_pic_3.jpg", title: "Training Bay", desc: "Warm-up and drills friendly." },
  { src: "/images/cric-home-page.jpg", title: "Cricket Grounds", desc: "Lush outfield, fast wicket." },
  { src: "/images/cric-stadium-view.jpg", title: "Stadium View", desc: "Crowd-ready seating." },
]

export default function HowItWorks() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      const el = document.getElementById("gallery-section")
      if (!el) return
      const rect = el.getBoundingClientRect()
      if (rect.top < window.innerHeight * 0.8) setVisible(true)
    }
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <section id="gallery-section" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-3">Venue Gallery</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            A glimpse of our cricket, football, and badminton venues—captured with the same energy as your game.
          </p>
        </div>

        <div
          className={`grid md:grid-cols-3 gap-5 transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          {gallery.map((item) => (
            <Card key={item.src} className="overflow-hidden group border-border/60 shadow-sm hover:shadow-lg transition-all">
              <div className="relative h-52 overflow-hidden">
                <img
                  src={item.src}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/50 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <div className="p-4 space-y-2">
                <h3 className="text-lg font-bold text-foreground">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
