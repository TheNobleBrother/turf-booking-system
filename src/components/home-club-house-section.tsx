"use client"

import { Button } from "@/src/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export default function HomeClubHouseSection() {
    return (
        <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <img
                    src="/images/clubhouse-section-img.png"
                    alt="Clubhouse Experience"
                    className="w-full h-full object-cover"
                />
                {/* Dark Overlay/Gradient for text readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
            </div>

            {/* Content */}
            <div className="relative z-10 container mx-auto px-4 text-center">
                <div className="max-w-3xl mx-auto space-y-6 animate-in slide-in-from-bottom-8 fade-in duration-700">
                    <span className="inline-block py-1 px-3 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white text-sm font-bold tracking-wider uppercase mb-2">
                        Premium Experience
                    </span>

                    <h2 className="text-4xl md:text-6xl font-black text-white tracking-tight drop-shadow-2xl">
                        Elite Club Houses
                    </h2>

                    <p className="text-lg md:text-xl text-white/90 font-medium leading-relaxed drop-shadow-lg max-w-2xl mx-auto">
                        Step into a world of luxury and leisure. From state-of-the-art gyms to relaxing swimming pools, discover our exclusive network of premium clubhouses designed for your lifestyle.
                    </p>

                    <div className="pt-4">
                        <Link href="/clubhouses">
                            <Button size="lg" className="h-14 px-8 text-lg font-bold bg-primary hover:bg-primary/90 text-primary-foreground shadow-xl hover:shadow-primary/25 transition-all hover:scale-105 group">
                                Explore Clubhouses
                                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}
