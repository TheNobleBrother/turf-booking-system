"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Card } from "@/src/components/ui/card"

const posts = [
  {
    title: "Turf care: how we keep pitches game-ready",
    excerpt: "From drainage to grass height, a peek behind the scenes of match-quality prep.",
    link: "#",
  },
  {
    title: "Peak hours vs. smart booking",
    excerpt: "Tips to grab the best slots and save more on your favorite venues.",
    link: "#",
  },
  {
    title: "Community leagues you can join",
    excerpt: "Weekend football, midweek badminton, and cricket nets—open to all skill levels.",
    link: "#",
  },
]

export default function CTASection() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      const el = document.getElementById("blog-section")
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
      id="blog-section"
      className={`py-20 bg-background transition-all duration-700 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-primary font-semibold">From the blog</p>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mt-2">Stories from the turf</h2>
            <p className="text-muted-foreground max-w-2xl mt-3">
              Updates, tips, and behind-the-scenes to help you book smarter and play better.
            </p>
          </div>
          <Link href="#" className="text-primary font-semibold underline">
            View all posts
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {posts.map((post) => (
            <Card key={post.title} className="p-6 h-full border-border/60 shadow-sm hover:shadow-lg transition-shadow">
              <p className="text-xs uppercase tracking-[0.2em] text-primary font-semibold mb-3">Featured</p>
              <h3 className="text-xl font-bold text-foreground mb-3">{post.title}</h3>
              <p className="text-sm text-muted-foreground mb-4">{post.excerpt}</p>
              <Link href={post.link} className="text-primary font-semibold text-sm">
                Read more →
              </Link>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
