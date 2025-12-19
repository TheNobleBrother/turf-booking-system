"use client";

import Link from "next/link";
import { Card } from "@/src/components/ui/card";
import { Button } from "@/src/components/ui/button";
import { useState, useEffect } from "react";
import { createClient } from "@/src/utils/supabase/client";
import type { User } from "@supabase/supabase-js";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import {
  LogOut,
  Mail,
  Phone,
  Shield,
  Calendar,
  Heart,
  CreditCard,
  User as UserIcon,
  Settings,
  ArrowLeft,
} from "lucide-react";
import Navbar from "@/src/components/navbar";
import { LogoutConfirmDialog } from "@/src/components/logout-confirm-dialog";

export default function ProfilePage() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [showLogoutDialog, setShowLogoutDialog] = useState(false);
  const router = useRouter();
  const supabase = createClient();

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null);
      setLoading(false);
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });

    return () => subscription.unsubscribe();
  }, [supabase.auth]);

  const handleLogout = async () => {
    try {
      const { error } = await supabase.auth.signOut();
      if (error) throw error;
      toast.success("Logged out successfully");
      router.push("/");
      router.refresh();
    } catch (error) {
      toast.error("Failed to log out");
    }
  };

  if (loading) {
    return (
      <main className="min-h-screen bg-background flex flex-col items-center justify-center">
        <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin" />
        <p className="mt-4 text-muted-foreground font-bold">
          Loading your profile...
        </p>
      </main>
    );
  }

  if (!user) {
    return (
      <main className="min-h-screen bg-background text-foreground">
        <Navbar />
        <div className="container mx-auto px-4 py-32">
          <Card className="max-w-md mx-auto p-12 text-center space-y-8 border-border/40 shadow-2xl">
            <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
              <UserIcon className="w-10 h-10 text-primary" />
            </div>
            <div className="space-y-2">
              <h1 className="text-3xl font-black">Access Denied</h1>
              <p className="text-muted-foreground">
                Please sign in or create an account to view your profile and
                bookings.
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <Link href="/auth/signup" className="w-full">
                <Button className="w-full h-12 bg-primary font-bold text-lg">
                  Sign Up
                </Button>
              </Link>
              <Link href="/auth/login" className="w-full">
                <Button
                  variant="outline"
                  className="w-full h-12 font-bold text-lg"
                >
                  Log In
                </Button>
              </Link>
            </div>
          </Card>
        </div>
      </main>
    );
  }

  const userName =
    user.user_metadata?.name || user.email?.split("@")[0] || "User";
  const userPhone = user.user_metadata?.phone || "Not provided";
  const userRole = user.user_metadata?.role || "player";
  const createdAt = new Date(user.created_at).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <main className="min-h-screen bg-background text-foreground pb-20">
      <Navbar />

      {/* Profile Header Banner */}
      <div className="relative w-full h-[35vh] min-h-[250px] overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-br from-primary via-accent to-secondary opacity-90" />

        {/* Abstract Shapes */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

        {/* <div className="container mx-auto px-4 h-full relative">
          <Link
            href="/"
            className="absolute top-28 left-4 flex items-center gap-2 text-white/80 hover:text-white transition-colors font-bold z-20 group"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            <span>Back to Home</span>
          </Link>
        </div> */}
      </div>

      <div className="container mx-auto px-4 -mt-24 relative z-10">
        <Card className="p-6 md:p-10 border-border/20 shadow-2xl bg-background/95 backdrop-blur-md rounded-[2rem]">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
            {/* Avatar Section */}
            <div className="flex flex-col items-center lg:items-start gap-6">
              <div className="relative group">
                <div className="w-32 h-32 md:w-44 md:h-44 rounded-[2.5rem] bg-linear-to-tr from-[#10b981] via-[#059669] to-[#3b82f6] flex items-center justify-center text-6xl md:text-7xl font-black text-white shadow-[0_20px_50px_rgba(16,185,129,0.4)] ring-8 ring-background group-hover:scale-105 group-hover:rotate-2 transition-all duration-500">
                  {userName.charAt(0).toUpperCase()}
                </div>
                <button className="absolute -bottom-2 -right-2 p-4 bg-card text-[#10b981] rounded-2xl shadow-2xl hover:scale-110 hover:rotate-12 hover:text-[#059669] transition-all border-2 border-border/40 group-hover:shadow-[0_0_20px_rgba(16,185,129,0.3)]">
                  <Settings className="w-6 h-6 md:w-7 md:h-7" />
                </button>
              </div>
            </div>

            {/* Info Section */}
            <div className="flex-1 space-y-6 md:space-y-8">
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                <div className="text-center md:text-left">
                  <div className="flex flex-wrap justify-center md:justify-start items-center gap-3 mb-2 md:mb-3">
                    <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-[10px] md:text-xs font-black uppercase tracking-widest border border-primary/20">
                      {userRole}
                    </span>
                    <span className="text-xs md:text-sm text-muted-foreground font-semibold flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5" />
                      Joined {createdAt}
                    </span>
                  </div>
                  <h1 className="text-3xl md:text-5xl lg:text-6xl font-black tracking-tight leading-tight">
                    {userName}
                  </h1>
                </div>

                <div className="flex flex-wrap justify-center gap-3">
                  <Button
                    variant="outline"
                    className="h-11 md:h-12 px-6 font-bold rounded-xl border-2 hover:bg-muted/50 transition-all"
                  >
                    Edit Profile
                  </Button>
                  <Button
                    variant="destructive"
                    onClick={() => setShowLogoutDialog(true)}
                    className="h-11 md:h-12 px-6 font-black rounded-xl shadow-[0_10px_20px_rgba(239,68,68,0.3)] hover:shadow-[0_15px_30px_rgba(239,68,68,0.4)] active:scale-95 transition-all flex items-center gap-2 bg-linear-to-r from-destructive to-[#991b1b]"
                  >
                    <LogOut className="w-4 h-4 md:w-5 md:h-5" />
                    Log Out
                  </Button>
                </div>
              </div>

              {/* Details Grid */}
              <div className="grid sm:grid-cols-2 gap-4 md:gap-6 p-5 md:p-6 rounded-2xl bg-muted/30 border border-border/40">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-background flex items-center justify-center shadow-sm border border-border/20">
                    <Mail className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-[10px] md:text-xs text-muted-foreground font-black uppercase tracking-tighter">
                      Email Address
                    </p>
                    <p className="font-bold text-sm md:text-base truncate">
                      {user.email}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-background flex items-center justify-center shadow-sm border border-border/20">
                    <Phone className="w-5 h-5 md:w-6 md:h-6 text-accent" />
                  </div>
                  <div>
                    <p className="text-[10px] md:text-xs text-muted-foreground font-black uppercase tracking-tighter">
                      Phone Number
                    </p>
                    <p className="font-bold text-sm md:text-base">
                      {userPhone}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="my-10 md:my-12 h-px bg-linear-to-r from-transparent via-border/60 to-transparent" />

          {/* Stats & Activity Area */}
          <div className="grid lg:grid-cols-3 gap-10">
            <div className="lg:col-span-1 space-y-6">
              <h2 className="text-xl md:text-2xl font-black">
                Account Overview
              </h2>
              <div className="grid gap-4">
                {[
                  {
                    label: "Bookings",
                    val: "0",
                    icon: Calendar,
                    color: "text-blue-500",
                    bg: "bg-blue-500/10",
                  },
                  {
                    label: "Favorites",
                    val: "0",
                    icon: Heart,
                    color: "text-red-500",
                    bg: "bg-red-500/10",
                  },
                  {
                    label: "Total Spent",
                    val: "$0",
                    icon: CreditCard,
                    color: "text-emerald-500",
                    bg: "bg-emerald-500/10",
                  },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="flex items-center justify-between p-4 rounded-2xl border border-border/40 hover:bg-muted/30 transition-all hover:scale-[1.02] cursor-default"
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={`p-2.5 rounded-xl ${stat.bg} ${stat.color}`}
                      >
                        <stat.icon className="w-5 h-5" />
                      </div>
                      <span className="font-bold text-muted-foreground text-sm">
                        {stat.label}
                      </span>
                    </div>
                    <span className="text-xl font-black">{stat.val}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-2 space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-xl md:text-2xl font-black">
                  Recent Activity
                </h2>
                <Link href="/browse">
                  <Button
                    variant="link"
                    className="text-primary font-black hover:no-underline flex items-center gap-1"
                  >
                    Book New Venue <ArrowLeft className="w-4 h-4 rotate-180" />
                  </Button>
                </Link>
              </div>

              <Card className="p-8 md:p-12 border-dashed border-2 flex flex-col items-center justify-center text-center space-y-5 bg-muted/10 rounded-2xl">
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-muted/50 flex items-center justify-center text-3xl md:text-4xl opacity-50 grayscale">
                  🏟️
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg md:text-xl font-bold">
                    Your arena is waiting!
                  </h3>
                  <p className="text-muted-foreground text-sm max-w-xs mx-auto">
                    You haven't made any bookings yet. Browse verified venues
                    and start playing!
                  </p>
                </div>
                <Link href="/browse">
                  <Button className="bg-primary hover:bg-primary/90 font-black rounded-xl px-10 h-12 shadow-lg shadow-primary/25 transition-all active:scale-95">
                    Browse Venues
                  </Button>
                </Link>
              </Card>
            </div>
          </div>
        </Card>
      </div>
      <LogoutConfirmDialog
        open={showLogoutDialog}
        onOpenChange={setShowLogoutDialog}
        onConfirm={handleLogout}
      />
    </main>
  );
}
