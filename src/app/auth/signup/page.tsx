import Link from "next/link";
import { Card } from "@/src/components/ui/card";
import SignupForm from "@/src/components/signup-form";
import { ArrowLeft } from "lucide-react";

export default async function SignupPage({
  searchParams,
}: {
  searchParams: Promise<{ role?: string | string[] }>;
}) {
  const resolvedSearchParams = await searchParams;
  const roleParam = resolvedSearchParams?.role;
  const role =
    (Array.isArray(roleParam) ? roleParam[0] : roleParam) || "player";

  const roleConfig = {
    player: {
      title: "Join as Player",
      description: "Create your account and start booking venues today",
      color: "from-primary",
    },
    venue_manager: {
      title: "Manage Your Venue",
      description: "List your venue and grow your business",
      color: "from-accent",
    },
    admin: {
      title: "Admin Access",
      description: "Platform administration credentials",
      color: "from-secondary",
    },
  };

  const config =
    roleConfig[role as keyof typeof roleConfig] || roleConfig.player;

  return (
    <main className="min-h-screen flex items-center justify-center px-4 py-8 bg-gradient-to-br from-background via-background to-accent/5">
      {/* Animated background */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-gradient-to-br from-accent/10 to-secondary/5 rounded-full blur-3xl opacity-40 animate-pulse" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-gradient-to-br from-primary/10 to-accent/5 rounded-full blur-3xl opacity-30" />

      <div className="w-full max-w-md relative z-10">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-black text-foreground mb-2">
            {config.title}
          </h1>
          <p className="text-muted-foreground text-lg">{config.description}</p>
        </div>

        {/* Signup Card */}
        <Card className="p-8 border-border/40 shadow-2xl backdrop-blur-sm bg-card/80">
          <SignupForm role={role} />
        </Card>

        {/* Footer Links */}
        <div className="mt-8 text-center space-y-4 text-sm text-muted-foreground">
          <p>
            Already have an account?{" "}
            <Link
              href="/auth/login"
              className="text-primary hover:underline font-semibold"
            >
              Sign in
            </Link>
          </p>
          <Link
            href="/"
            className="inline-flex items-center gap-2 hover:text-primary transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to home
          </Link>
        </div>
      </div>
    </main>
  );
}
