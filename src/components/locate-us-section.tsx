"use client"

import { Card } from "@/src/components/ui/card"
import { useInView } from "@/src/hooks/use-in-view"
import ContactForm from "@/src/components/contact-form"
import dynamic from "next/dynamic"

// Dynamically import InteractiveMap with no SSR to avoid window not found error in Leaflet
const InteractiveMap = dynamic(() => import("@/src/components/interactive-map"), {
  ssr: false,
  loading: () => <div className="h-[400px] w-full bg-secondary/10 animate-pulse rounded-2xl" />
})

export default function LocateUsSection() {
  const { ref, isInView } = useInView({ threshold: 0.3 })

  return (
    <section
      id="locate-us"
      ref={ref}
      className={`py-12 bg-background transition-all duration-[800ms] ease-out ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
        }`}
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-4xl md:text-5xl font-black text-foreground mb-4 uppercase tracking-tighter">
            Get in Touch with Us
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Have questions or need assistance? Get in touch with us—we're here to help.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-stretch h-full">
          {/* Left: Contact Form */}
          <div className="h-full">
            <ContactForm />
          </div>

          {/* Right: Interactive Map */}
          <div className="h-full min-h-[400px] lg:min-h-auto">
            <InteractiveMap />
          </div>
        </div>
      </div>
    </section>
  )
}





