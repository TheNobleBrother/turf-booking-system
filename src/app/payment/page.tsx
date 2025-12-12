"use client";

import { useSearchParams } from "next/navigation";
import CheckoutForm from "@/src/components/checkout-form";

export default function PaymentPage() {
  const mockBookingDetails = {
    venue: "MCC Cricket Ground",
    date: "Dec 15, 2025",
    time: "6:00 PM - 8:00 PM",
    court: "Main Pitch",
  };

  const amount = 85;

  return (
    <main className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8 max-w-lg">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">
            Complete Payment
          </h1>
          <p className="text-muted-foreground">
            Secure checkout for your venue booking
          </p>
        </div>

        <CheckoutForm
          amount={amount}
          venueId="1"
          bookingDetails={mockBookingDetails}
        />
      </div>
    </main>
  );
}
