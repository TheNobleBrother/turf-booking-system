"use client"

import { Card } from "@/src/components/ui/card"

interface StatCardProps {
  label: string
  value: string | number
  change: string
  icon: string
}

export default function StatCard({ label, value, change, icon }: StatCardProps) {
  return (
    <Card className="p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-sm font-medium text-muted-foreground">{label}</h3>
        <span className="text-3xl">{icon}</span>
      </div>
      <div className="mb-2">
        <p className="text-3xl font-bold text-foreground">{value}</p>
      </div>
      <p className="text-sm font-semibold text-green-600">+ {change}</p>
    </Card>
  )
}
