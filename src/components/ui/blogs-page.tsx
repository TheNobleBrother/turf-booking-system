"use client";

import Link from "next/link";
import { Card } from "@/src/components/ui/card";
import { Button } from "@/src/components/ui/button";
import { ArrowRight, Search, Calendar, Clock } from "lucide-react";
import { useInView } from "@/src/hooks/use-in-view";
import { Input } from "@/src/components/ui/input";
import { useState } from "react";
import BlogFilterSidebar from "@/src/components/blog-filter-sidebar";

import { blogs } from "@/src/lib/blog-data";

export default function BlogsPageComponent() {
  const { ref, isInView } = useInView({ threshold: 0.1 });
  const [query, setQuery] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [filters, setFilters] = useState({
    category: "all",
    sortBy: "newest",
  });

  const filteredBlogs = blogs
    .filter((blog) => {
      const matchesQuery =
        !query ||
        blog.title.toLowerCase().includes(query.toLowerCase()) ||
        blog.excerpt.toLowerCase().includes(query.toLowerCase()) ||
        blog.category.toLowerCase().includes(query.toLowerCase());

      const matchesDate = !date || blog.date.includes(date);

      const matchesCategory =
        filters.category === "all" || blog.category === filters.category;

      return matchesQuery && matchesDate && matchesCategory;
    })
    .sort((a, b) => {
      if (filters.sortBy === "newest") {
        return new Date(b.date).getTime() - new Date(a.date).getTime();
      }
      return 0;
    });

  const blogCategories = ["all", "Cricket", "Badminton", "Football"];

  return (
    <section ref={ref} className="bg-background min-h-screen">
      {/* Hero Section */}
      <div className="relative w-full h-[50vh] min-h-[400px] flex flex-col items-center justify-center overflow-hidden mb-12">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/blog-img.jpg"
            alt="Blog Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>

        {/* Content */}
        <div className="relative z-10 text-center px-4 mb-8 animate-in fade-in zoom-in duration-700">
          <h1 className="text-4xl md:text-6xl font-black text-white tracking-tight mb-4 drop-shadow-2xl">
            Our Blog
          </h1>
          <p className="text-lg text-white/90 max-w-2xl mx-auto font-medium drop-shadow-lg">
            Expert tips, game strategies, and community stories to keep you
            inspired.
          </p>
        </div>

        {/* Search Bar Container */}
        <div className="relative z-20 w-full max-w-5xl px-4 animate-in slide-in-from-bottom-8 duration-700 delay-100">
          <Card className="p-2 md:p-3 shadow-2xl border-0 bg-background/95 backdrop-blur-md rounded-2xl">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-3">
              {/* Search Input */}
              <div className="md:col-span-5 relative">
                <div className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">
                  <Search className="w-5 h-5" />
                </div>
                <Input
                  placeholder="Search articles, tips, or sports..."
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  className="pl-10 h-12 bg-secondary/20 border-transparent focus:border-primary focus:bg-background transition-all text-base"
                />
              </div>

              {/* Date Input */}
              <div className="md:col-span-3 relative">
                <div className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">
                  <Calendar className="w-5 h-5" />
                </div>
                <Input
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="pl-10 h-12 bg-secondary/20 border-transparent focus:border-primary focus:bg-background transition-all text-base"
                />
              </div>

              {/* Time Input */}
              <div className="md:col-span-3 relative">
                <div className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">
                  <Clock className="w-5 h-5" />
                </div>
                <Input
                  type="time"
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                  className="pl-10 h-12 bg-secondary/20 border-transparent focus:border-primary focus:bg-background transition-all text-base"
                />
              </div>

              {/* Search Button */}
              <div className="md:col-span-1">
                <Button className="w-full h-12 font-bold text-lg shadow-lg hover:shadow-primary/25 bg-primary hover:bg-primary/90">
                  <Search className="w-5 h-5 md:hidden mr-2" />
                  <span className="md:hidden">Search</span>
                  <Search className="hidden md:block w-6 h-6" />
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </div>

      <div className="container mx-auto px-4 pb-20">
        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12 animate-in fade-in duration-700 delay-200">
          {blogCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilters({ ...filters, category: cat })}
              className={`px-6 py-2.5 rounded-full font-bold transition-all duration-300 ${
                filters.category === cat
                  ? "bg-primary text-primary-foreground shadow-lg scale-105"
                  : "bg-background text-foreground/70 hover:bg-secondary hover:text-foreground border border-border/40"
              }`}
            >
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <BlogFilterSidebar filters={filters} setFilters={setFilters} />
          </div>

          {/* Blog Listings */}
          <div className="lg:col-span-3">
            <div className="mb-8">
              <h2 className="text-3xl font-black text-foreground mb-2">
                Latest Articles
              </h2>
              <p className="text-muted-foreground font-medium">
                {filteredBlogs.length} articles found
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {filteredBlogs.map((blog) => (
                <Link
                  key={blog.id}
                  href={`/blogs/${blog.id}`}
                  className="block group"
                >
                  <Card className="overflow-hidden border-0 bg-secondary/5 shadow-sm group-hover:shadow-xl group-hover:-translate-y-2 transition-all duration-500 h-full flex flex-col">
                    <div className="relative h-56 overflow-hidden">
                      <img
                        src={blog.image}
                        alt={blog.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors" />
                      <div className="absolute top-4 right-4 bg-background/90 backdrop-blur-sm px-3 py-1 rounded-full shadow-sm text-[10px] font-black uppercase tracking-wider text-primary">
                        {blog.category}
                      </div>
                    </div>
                    <div className="p-6 flex flex-col flex-grow">
                      <div className="text-xs text-primary font-black mb-3 uppercase tracking-[0.2em] opacity-70">
                        {blog.date}
                      </div>
                      <h3 className="text-xl font-black text-foreground mb-3 group-hover:text-primary transition-colors line-clamp-2 leading-tight">
                        {blog.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-6 flex-grow line-clamp-3 leading-relaxed">
                        {blog.excerpt}
                      </p>
                      <div className="inline-flex items-center text-xs font-black text-primary group-hover:translate-x-2 transition-transform uppercase tracking-widest">
                        Read Story <ArrowRight className="w-4 h-4 ml-2" />
                      </div>
                    </div>
                  </Card>
                </Link>
              ))}
            </div>

            {filteredBlogs.length === 0 && (
              <div className="text-center py-20 bg-secondary/5 rounded-3xl border-2 border-dashed border-border/40">
                <Search className="w-12 h-12 text-muted-foreground mx-auto mb-4 opacity-20" />
                <h3 className="text-2xl font-black text-muted-foreground">
                  No articles found
                </h3>
                <p className="text-muted-foreground mt-2">
                  Try adjusting your filters or search keywords.
                </p>
                <Button
                  variant="outline"
                  className="mt-6 font-bold"
                  onClick={() => {
                    setQuery("");
                    setFilters({ category: "all", sortBy: "newest" });
                  }}
                >
                  Clear all filters
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
