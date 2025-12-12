"use client"

import Link from "next/link"
import { Button } from "@/src/components/ui/button"
import { ArrowRight } from "lucide-react"
import { useEffect, useRef } from "react"

export default function HeroSection() {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    // Ensure video plays on mount
    if (videoRef.current) {
      videoRef.current.play().catch((error) => {
        console.log("Video autoplay prevented:", error)
      })
    }
  }, [])

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-background to-primary/5"
    >
      {/* Video Background */}
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
        style={{ objectPosition: "center" }}
      >
        <source src="/videos/Football in slow motion - social media video ad - stock video - SPOTI STUDIO (1080p, h264).mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Very subtle overlay only for text readability */}
      <div className="absolute inset-0 bg-black/10 z-[1]" />

      <div className="relative z-10 container mx-auto px-4 py-8 md:py-12 lg:py-16">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          {/* <div className="inline-flex items-center gap-2 mb-4 md:mb-6 px-3 py-1.5 md:px-4 md:py-2 bg-white/90 backdrop-blur-md rounded-full border border-white/20 shadow-lg">
            <Zap className="w-3 h-3 md:w-4 md:h-4 text-accent" />
            <span className="text-xs md:text-sm font-semibold text-primary">Your Game, Your Time, Your Venue</span>
          </div> */}

          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-white mb-4 md:mb-6 text-balance leading-tight tracking-tighter drop-shadow-2xl px-2">
            Book Your Game,
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-secondary animate-pulse drop-shadow-2xl">
              Play Anytime
            </span>
          </h1>

          <p className="text-base md:text-lg lg:text-xl text-white/95 max-w-2xl mb-6 md:mb-8 lg:mb-10 text-balance leading-relaxed font-medium drop-shadow-lg px-4">
            Discover and book cricket grounds, badminton courts, and football turfs instantly. Connect with verified
            venues in your city and start playing today.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 md:gap-6 mb-8 md:mb-12 justify-center px-4">
            <Link href="/browse">
              <Button
                size="lg"
                className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-primary-foreground rounded-xl px-6 md:px-8 font-bold text-base md:text-lg shadow-lg hover:shadow-xl transition-all duration-300 group flex items-center gap-2"
              >
                Browse Venues
                <ArrowRight className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link href="/auth/signup?role=player">
              <Button
                size="lg"
                variant="outline"
                className="rounded-xl px-6 md:px-8 font-bold text-base md:text-lg bg-white/50 backdrop-blur-sm border-2 border-primary/20 hover:border-primary/50 hover:bg-white/80 transition-all duration-300 shadow-md"
              >
                Get Started Free
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-3 gap-4 md:gap-8 lg:gap-12 px-4">
            <div className="text-center group cursor-pointer">
              <p className="text-2xl md:text-3xl lg:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent mb-1 md:mb-2 group-hover:scale-110 transition-transform">
                500+
              </p>
              <p className="text-xs md:text-sm text-white/90 font-semibold drop-shadow-md">Premium Venues</p>
            </div>
            <div className="text-center group cursor-pointer">
              <p className="text-2xl md:text-3xl lg:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-accent to-secondary mb-1 md:mb-2 group-hover:scale-110 transition-transform drop-shadow-2xl">
                10K+
              </p>
              <p className="text-xs md:text-sm text-white/90 font-semibold drop-shadow-md">Happy Players</p>
            </div>
            <div className="text-center group cursor-pointer">
              <p className="text-2xl md:text-3xl lg:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-secondary to-primary mb-1 md:mb-2 group-hover:scale-110 transition-transform drop-shadow-2xl">
                24/7
              </p>
              <p className="text-xs md:text-sm text-white/90 font-semibold drop-shadow-md">Always Available</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
