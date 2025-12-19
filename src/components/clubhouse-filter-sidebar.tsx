"use client";

import type React from "react";
import { Card } from "@/src/components/ui/card";
import { Button } from "@/src/components/ui/button";
import { RotateCcw, Filter } from "lucide-react";

interface ClubhouseFilterSidebarProps {
  filters: {
    priceRange: [number, number];
    rating: number;
  };
  setFilters: (filters: any) => void;
}

export default function ClubhouseFilterSidebar({
  filters,
  setFilters,
}: ClubhouseFilterSidebarProps) {
  const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilters({
      ...filters,
      priceRange: [0, Number.parseInt(e.target.value)],
    });
  };

  const handleRatingChange = (rating: number) => {
    setFilters({ ...filters, rating });
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center gap-2 mb-6">
        <Filter className="w-5 h-5 text-primary" />
        <h3 className="font-bold text-lg text-foreground">Filters</h3>
      </div>

      {/* Price Filter */}
      <Card className="p-6 border-border/40 card-hover">
        <h4 className="font-bold text-foreground mb-4">Price Range</h4>
        <div className="space-y-4">
          <input
            type="range"
            min="0"
            max="100"
            step="5"
            value={filters.priceRange[1]}
            onChange={handlePriceChange}
            className="w-full h-2 bg-secondary/40 rounded-lg appearance-none cursor-pointer accent-primary"
          />
          <div className="flex justify-between items-center">
            <span className="text-sm text-muted-foreground">Budget:</span>
            <div className="bg-linear-to-r from-primary to-accent text-white px-3 py-1 rounded-lg font-bold">
              ${filters.priceRange[0]} - ${filters.priceRange[1]}/hr
            </div>
          </div>
        </div>
      </Card>

      {/* Rating Filter */}
      <Card className="p-6 border-border/40 card-hover">
        <h4 className="font-bold text-foreground mb-4">Rating</h4>
        <div className="space-y-2">
          {[5, 4, 3, 2, 1].map((rating) => (
            <button
              key={rating}
              onClick={() => handleRatingChange(rating)}
              className={`w-full text-left px-3 py-2 rounded-lg transition-all ${
                filters.rating === rating
                  ? "bg-linear-to-r from-primary to-accent text-white font-semibold"
                  : "bg-secondary/30 text-foreground hover:bg-secondary/50"
              }`}
            >
              {"⭐".repeat(rating)} {rating}+ stars
            </button>
          ))}
          <button
            onClick={() => handleRatingChange(0)}
            className={`w-full text-left px-3 py-2 rounded-lg transition-all ${
              filters.rating === 0
                ? "bg-linear-to-r from-primary to-accent text-white font-semibold"
                : "bg-secondary/30 text-foreground hover:bg-secondary/50"
            }`}
          >
            All Ratings
          </button>
        </div>
      </Card>

      {/* Clear Filters */}
      <Button
        variant="outline"
        className="w-full border-border/40 hover:bg-destructive/10 hover:text-destructive group transition-all bg-transparent"
        onClick={() =>
          setFilters({
            priceRange: [0, 100],
            rating: 0,
          })
        }
      >
        <RotateCcw className="w-4 h-4 mr-2 group-hover:rotate-180 transition-transform" />
        Clear Filters
      </Button>
    </div>
  );
}
