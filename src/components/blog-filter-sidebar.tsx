"use client";

import type React from "react";
import { Card } from "@/src/components/ui/card";
import { Button } from "@/src/components/ui/button";
import { RotateCcw, Filter, BookOpen, Target, Zap } from "lucide-react";

interface BlogFilterSidebarProps {
  filters: {
    category: string;
    sortBy: string;
  };
  setFilters: (filters: any) => void;
}

const categories = [
  {
    id: "all",
    name: "All Articles",
    icon: <BookOpen className="w-5 h-5" />,
    color: "from-blue-500 to-blue-600",
  },
  {
    id: "Cricket",
    name: "Cricket",
    icon: <span>🏏</span>,
    color: "from-amber-500 to-amber-600",
  },
  {
    id: "Badminton",
    name: "Badminton",
    icon: <span>🏸</span>,
    color: "from-red-500 to-red-600",
  },
  {
    id: "Football",
    name: "Football",
    icon: <span>⚽</span>,
    color: "from-green-500 to-green-600",
  },
];

export default function BlogFilterSidebar({
  filters,
  setFilters,
}: BlogFilterSidebarProps) {
  const handleCategoryChange = (category: string) => {
    setFilters({ ...filters, category });
  };

  const handleSortChange = (sortBy: string) => {
    setFilters({ ...filters, sortBy });
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center gap-2 mb-6">
        <Filter className="w-5 h-5 text-primary" />
        <h3 className="font-bold text-lg text-foreground">Filters</h3>
      </div>

      {/* Categories Filter */}
      <Card className="p-6 border-border/40 bg-background/50 backdrop-blur-sm card-hover">
        <h4 className="font-bold text-foreground mb-4">Categories</h4>
        <div className="space-y-3">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => handleCategoryChange(cat.id)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 font-medium ${
                filters.category === cat.id
                  ? `bg-gradient-to-r ${cat.color} text-white shadow-lg scale-105`
                  : "bg-secondary/40 text-foreground hover:bg-secondary/60 hover:scale-102"
              }`}
            >
              <span className="text-lg">{cat.icon}</span>
              <span>{cat.name}</span>
            </button>
          ))}
        </div>
      </Card>

      {/* Sort By Filter */}
      <Card className="p-6 border-border/40 bg-background/50 backdrop-blur-sm card-hover">
        <h4 className="font-bold text-foreground mb-4">Sort By</h4>
        <div className="space-y-2">
          {[
            {
              id: "newest",
              name: "Newest First",
              icon: <Zap className="w-4 h-4" />,
            },
            {
              id: "popular",
              name: "Most Popular",
              icon: <Target className="w-4 h-4" />,
            },
          ].map((sort) => (
            <button
              key={sort.id}
              onClick={() => handleSortChange(sort.id)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
                filters.sortBy === sort.id
                  ? "bg-gradient-to-r from-primary to-accent text-white font-semibold shadow-md"
                  : "bg-secondary/30 text-foreground hover:bg-secondary/50"
              }`}
            >
              {sort.icon}
              <span>{sort.name}</span>
            </button>
          ))}
        </div>
      </Card>

      {/* Clear Filters */}
      <Button
        variant="outline"
        className="w-full h-12 border-border/40 hover:bg-destructive/10 hover:text-destructive group transition-all bg-transparent rounded-xl"
        onClick={() =>
          setFilters({
            category: "all",
            sortBy: "newest",
          })
        }
      >
        <RotateCcw className="w-4 h-4 mr-2 group-hover:rotate-180 transition-transform" />
        Clear Filters
      </Button>
    </div>
  );
}
