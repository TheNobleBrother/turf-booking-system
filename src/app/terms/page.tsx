"use client";

import { Card } from "@/src/components/ui/card";

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-12 max-w-3xl">
        <h1 className="text-4xl font-bold text-foreground mb-8">
          Terms of Service
        </h1>

        <div className="space-y-6">
          <Card className="p-6">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              1. Acceptance of Terms
            </h2>
            <p className="text-foreground leading-relaxed">
              By accessing and using PlayCourt, you accept and agree to be bound
              by the terms of this agreement.
            </p>
          </Card>

          <Card className="p-6">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              2. Use License
            </h2>
            <p className="text-foreground leading-relaxed">
              Permission is granted to temporarily download one copy of the
              materials (information or software) on PlayCourt for personal,
              non-commercial transitory viewing only.
            </p>
          </Card>

          <Card className="p-6">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              3. Disclaimer
            </h2>
            <p className="text-foreground leading-relaxed">
              The materials on PlayCourt are provided on an 'as is' basis.
              PlayCourt makes no warranties, expressed or implied, and hereby
              disclaims and negates all other warranties including, without
              limitation, implied warranties or conditions of merchantability,
              fitness for a particular purpose, or non-infringement of
              intellectual property or other violation of rights.
            </p>
          </Card>

          <Card className="p-6">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              4. Limitations
            </h2>
            <p className="text-foreground leading-relaxed">
              In no event shall PlayCourt or its suppliers be liable for any
              damages (including, without limitation, damages for loss of data
              or profit, or due to business interruption) arising out of the use
              or inability to use the materials on PlayCourt.
            </p>
          </Card>

          <Card className="p-6">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              5. Accuracy of Materials
            </h2>
            <p className="text-foreground leading-relaxed">
              The materials appearing on PlayCourt could include technical,
              typographical, or photographic errors. PlayCourt does not warrant
              that any of the materials on its website are accurate, complete,
              or current.
            </p>
          </Card>
        </div>
      </div>
    </main>
  );
}
