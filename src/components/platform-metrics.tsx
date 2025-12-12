"use client"

import { Card } from "@/src/components/ui/card"

export default function PlatformMetrics() {
  const metrics = [
    {
      category: "Player Growth",
      data: [
        { label: "This Month", value: 215 },
        { label: "Last Month", value: 189 },
        { label: "3 Months Ago", value: 156 },
      ],
    },
    {
      category: "Venue Approvals",
      data: [
        { label: "Pending", value: 23 },
        { label: "Approved", value: 437 },
        { label: "Rejected", value: 12 },
      ],
    },
  ]

  return (
    <div className="grid lg:grid-cols-2 gap-6">
      {metrics.map((metric) => (
        <Card key={metric.category} className="p-6">
          <h2 className="text-xl font-bold text-foreground mb-4">{metric.category}</h2>
          <div className="space-y-4">
            {metric.data.map((item) => (
              <div key={item.label} className="flex items-center justify-between">
                <span className="text-foreground">{item.label}</span>
                <div className="flex items-center gap-3">
                  <div className="w-32 h-2 bg-secondary rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-primary to-accent"
                      style={{ width: `${Math.min(item.value, 437) / 4.37}%` }}
                    ></div>
                  </div>
                  <span className="font-bold text-foreground text-sm w-8 text-right">{item.value}</span>
                </div>
              </div>
            ))}
          </div>
        </Card>
      ))}
    </div>
  )
}
