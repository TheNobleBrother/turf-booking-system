"use client";
import { Card } from "@/src/components/ui/card";

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-12 max-w-3xl">
        <h1 className="text-4xl font-bold text-foreground mb-8">
          Privacy Policy
        </h1>

        <div className="space-y-6">
          <Card className="p-6">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              1. Information We Collect
            </h2>
            <p className="text-foreground leading-relaxed">
              We collect information you provide directly to us, such as when
              you create an account, make a booking, or contact us for support.
            </p>
          </Card>

          <Card className="p-6">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              2. How We Use Information
            </h2>
            <p className="text-foreground leading-relaxed">
              We use the information we collect to provide, maintain, and
              improve our services, process payments, send transactional and
              promotional communications, and comply with legal obligations.
            </p>
          </Card>

          <Card className="p-6">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              3. Information Security
            </h2>
            <p className="text-foreground leading-relaxed">
              We implement appropriate technical and organizational measures to
              protect your personal information against unauthorized access,
              alteration, disclosure, or destruction.
            </p>
          </Card>

          <Card className="p-6">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              4. Third-Party Services
            </h2>
            <p className="text-foreground leading-relaxed">
              Our website may contain links to third-party services. We are not
              responsible for the privacy practices or content of such
              third-party services.
            </p>
          </Card>

          <Card className="p-6">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              5. Contact Us
            </h2>
            <p className="text-foreground leading-relaxed">
              If you have any questions about this Privacy Policy, please
              contact us at privacy@playcourt.com.
            </p>
          </Card>
        </div>
      </div>
    </main>
  );
}
