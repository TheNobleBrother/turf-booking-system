"use client";

import React from "react";
import { Card } from "@/src/components/ui/card";

interface UnifiedListingLayoutProps {
  heroImage: string;
  heroTitle: string;
  heroDescription: string;
  searchBar: React.ReactNode;
  tabs?: React.ReactNode;
  sidebar?: React.ReactNode;
  listingTitle: string;
  listingCountText: string;
  children: React.ReactNode;
  emptyState?: React.ReactNode;
}

export default function UnifiedListingLayout({
  heroImage,
  heroTitle,
  heroDescription,
  searchBar,
  tabs,
  sidebar,
  listingTitle,
  listingCountText,
  children,
  emptyState,
}: UnifiedListingLayoutProps) {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="relative w-full h-[50vh] min-h-[400px] flex flex-col items-center justify-center overflow-hidden mb-12">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src={heroImage}
            alt={heroTitle}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center px-4 mb-8 animate-in fade-in zoom-in duration-700">
          <h1 className="text-4xl md:text-6xl font-black text-white tracking-tight mb-4 drop-shadow-2xl">
            {heroTitle}
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto font-medium drop-shadow-lg leading-relaxed">
            {heroDescription}
          </p>
        </div>

        {/* Search Bar Container */}
        <div className="relative z-20 w-full max-w-5xl px-4 animate-in slide-in-from-bottom-8 duration-700 delay-100">
          <Card className="p-2 md:p-3 shadow-2xl border-0 bg-background/95 backdrop-blur-md rounded-2xl">
            {searchBar}
          </Card>
        </div>
      </div>

      <div className="container mx-auto px-4 pb-20">
        {/* Tabs Area */}
        {tabs && (
          <div className="flex flex-wrap justify-center gap-3 mb-12 animate-in fade-in duration-700 delay-200">
            {tabs}
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          {/* Sidebar Area */}
          <aside className="lg:col-span-1">{sidebar}</aside>

          {/* Listings Area */}
          <div className="lg:col-span-3">
            <div className="mb-8">
              <h2 className="text-3xl font-black text-foreground mb-2">
                {listingTitle}
              </h2>
              <p className="text-muted-foreground font-medium">
                {listingCountText}
              </p>
            </div>

            {children}

            {emptyState}
          </div>
        </div>
      </div>
    </main>
  );
}
