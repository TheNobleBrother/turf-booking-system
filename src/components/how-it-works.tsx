"use client"

import { Card } from "@/src/components/ui/card"
import { useInView } from "@/src/hooks/use-in-view"

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
  const { ref, isInView } = useInView({ threshold: 0.4 })

  return (
    <section id="gallery-section" className="py-8 bg-background" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-3">Venue Gallery</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            A glimpse of our cricket, football, and badminton venues—captured with the same energy as your game.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {gallery.map((item, index) => (
            <div
              key={item.src}
              className={`transition-all duration-[800ms] ease-out transform ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
                }`}
              style={{ transitionDelay: `${index * 300}ms` }}
            >
              <Card className="overflow-hidden group border-0 shadow-none rounded-xl h-64 relative cursor-pointer">
                <img
                  src={item.src}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <h3 className="text-white font-bold text-xl translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    {item.title}
                  </h3>
                  <p className="text-white/80 text-sm translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                    {item.desc}
                  </p>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
