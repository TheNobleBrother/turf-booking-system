"use client"

import Link from "next/link"
import { Button } from "@/src/components/ui/button"
// Wait, previous imports used @/src/components/ui/button. correcting import.
import { ArrowRight } from "lucide-react"
import { useInView } from "@/src/hooks/use-in-view"

export default function CTASection() {
  const { ref, isInView } = useInView({ threshold: 0.5 })

  return (
    <section ref={ref} className="py-16 relative overflow-hidden bg-black">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.pexels.com/photos/976873/pexels-photo-976873.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt="Sports Action"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-transparent" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className={`max-w-4xl transition-all duration-[800ms] ease-out transform ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}>
          <h2 className="text-5xl md:text-7xl font-black text-white mb-6 leading-tight">
            Ready to <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Dominate</span> the Field?
          </h2>
          <p className="text-xl text-gray-300 mb-10 max-w-2xl font-medium leading-relaxed">
            Don't let the game wait. Book your preferred venue in seconds and experience sports like never before.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/browse">
              <button className="px-8 py-4 bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white font-bold rounded-xl text-lg shadow-lg hover:shadow-primary/25 transition-all flex items-center gap-2 group">
                Book a Slot Now
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </Link>
            <Link href="/auth/signup">
              <button className="px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white font-bold rounded-xl text-lg border border-white/20 transition-all">
                Join Community
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
