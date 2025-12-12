"use client"

import { useEffect, useState } from "react"
import { Button } from "@/src/components/ui/button"
import { Input } from "@/src/components/ui/input"
import { Search, MapPin, Calendar, Clock } from "lucide-react"

interface SearchBarProps {
  readonly onSearch?: (payload: { query: string; date: string; time: string }) => void
}

export default function SearchBar({ onSearch }: SearchBarProps) {
  const [query, setQuery] = useState("")
  const [date, setDate] = useState("")
  const [time, setTime] = useState("")

  const handleSearch = () => {
    const payload = {
      query: query.trim(),
      date: date.trim(),
      time: time.trim(),
    }

    onSearch?.(payload)
  }

  // Debounced auto-run search when inputs change (keeps UI in sync like filters)
  useEffect(() => {
    const timer = setTimeout(() => handleSearch(), 300)
    return () => clearTimeout(timer)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query, date, time])

  const handleEnter = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      event.preventDefault()
      handleSearch()
    }
  }

  return (
    <div className="bg-linear-to-r from-primary/10 via-accent/5 to-secondary/10 border-b border-border/40">
        <div className="container mx-auto px-4 py-6">
          <div className="grid grid-cols-12 gap-4 items-end">
          <div className="md:col-span-5">
            <label htmlFor="search-query" className="block text-sm font-bold text-foreground mb-2">
              Turf / Location
            </label>
            <div className="relative">
              <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
              <Input
                id="search-query"
                placeholder="Turf name or location"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={handleEnter}
                className="bg-white/80 border-border pl-10 font-medium placeholder:text-muted-foreground/60 focus:bg-white transition-all"
              />
            </div>
          </div>

          <div className="md:col-span-3">
            <label htmlFor="search-date" className="block text-sm font-bold text-foreground mb-2">Date</label>
            <div className="relative">
              <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
              <Input
                id="search-date"
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                onKeyDown={handleEnter}
                className="bg-white/80 border-border pl-10 font-medium focus:bg-white transition-all"
              />
            </div>
          </div>

          <div className="md:col-span-3">
            <label htmlFor="search-time" className="block text-sm font-bold text-foreground mb-2">Time</label>
            <div className="relative">
              <Clock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
              <Input
                id="search-time"
                type="time"
                value={time}
                onChange={(e) => setTime(e.target.value)}
                onKeyDown={handleEnter}
                className="bg-white/80 border-border pl-10 font-medium focus:bg-white transition-all"
              />
            </div>
          </div>

          <div className="flex items-end md:col-span-1">
            <Button
              onClick={handleSearch}
              className="w-full md:w-auto bg-linear-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-primary-foreground font-bold py-6 px-6 shadow-lg hover:shadow-xl transition-all group flex items-center justify-center gap-2"
            >
              <Search className="w-4 h-4 group-hover:scale-110 transition-transform" />
              Search
            </Button>
          </div>

          {/* <div className="text-center text-xs text-muted-foreground">
            <p>Popular: Cricket • Badminton • Football</p>
          </div> */}
        </div>
      </div>
    </div>
  )
}
