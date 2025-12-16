"use client"

import Link from "next/link"
import { Card } from "@/src/components/ui/card"
import { Button } from "@/src/components/ui/button"
import { ArrowRight } from "lucide-react"
import { useInView } from "@/src/hooks/use-in-view"

const blogs = [
    {
        id: 1,
        title: "Mastering the Perfect Cover Drive",
        excerpt: "Tips and drills to improve your batting technique and scoring rate.",
        date: "June 15, 2024",
        image: "https://images.pexels.com/photos/3602833/pexels-photo-3602833.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
        id: 2,
        title: "5 Stretches Every Badminton Player Needs",
        excerpt: "Prevent injuries and improve agility with this pre-game routine.",
        date: "June 12, 2024",
        image: "https://images.pexels.com/photos/2202685/pexels-photo-2202685.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
        id: 3,
        title: "Football Formations Explained",
        excerpt: "Understanding 4-4-2 vs 4-3-3 and which suits your 5-a-side team best.",
        date: "June 10, 2024",
        image: "https://images.pexels.com/photos/274422/pexels-photo-274422.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
]

export default function BlogsSection() {
    const { ref, isInView } = useInView({ threshold: 0.4 })

    return (
        <section ref={ref} className="py-8 bg-background">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-end mb-8 gap-6">
                    <div className="max-w-2xl">
                        <h2 className="text-4xl md:text-5xl font-black text-foreground mb-4">Latest from the Blog</h2>
                        <p className="text-lg text-muted-foreground">
                            Expert tips, game strategies, and community stories to keep you inspired.
                        </p>
                    </div>
                    <Link href="/blogs">
                        <Button variant="outline" className="hidden md:flex group font-semibold">
                            View All Articles
                            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                        </Button>
                    </Link>
                </div>
                <div className="grid md:grid-cols-3 gap-8">
                    {blogs.map((blog, index) => (
                        <div
                            key={blog.id}
                            className={`transition-all duration-[800ms] ease-out transform ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
                                }`}
                            style={{ transitionDelay: `${index * 150}ms` }}
                        >
                            <Card className="overflow-hidden border-0 bg-secondary/5 shadow-sm hover:shadow-lg transition-all h-full flex flex-col group">
                                <div className="relative h-48 overflow-hidden">
                                    <img
                                        src={blog.image}
                                        alt={blog.title}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                    <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors" />
                                </div>
                                <div className="p-6 flex flex-col flex-grow">
                                    <div className="text-sm text-primary font-semibold mb-2">{blog.date}</div>
                                    <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                                        {blog.title}
                                    </h3>
                                    <p className="text-muted-foreground mb-6 flex-grow">{blog.excerpt}</p>
                                    <Link href="/blogs" className="inline-flex items-center text-sm font-bold text-primary hover:text-primary/80 transition-colors">
                                        Read More <ArrowRight className="w-4 h-4 ml-1" />
                                    </Link>
                                </div>
                            </Card>
                        </div>
                    ))}
                </div>

                <div className="mt-8 text-center md:hidden">
                    <Link href="/blogs">
                        <Button variant="outline" className="w-full">
                            View All Articles
                        </Button>
                    </Link>
                </div>
            </div>
        </section>
    )
}
