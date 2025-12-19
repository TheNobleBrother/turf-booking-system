"use client";

import Link from "next/link";
import { Button } from "@/src/components/ui/button";
import { Zap, Menu, User as UserIcon } from "lucide-react";
import { useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import { AuthDialog } from "./auth-dialog";
import { createClient } from "@/src/utils/supabase/client";
import type { User } from "@supabase/supabase-js";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showAuthDialog, setShowAuthDialog] = useState(false);
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const pathname = usePathname();
  const router = useRouter();
  const isTransparentPage =
    ["/", "/browse", "/blogs", "/my-bookings", "/profile"].includes(pathname) ||
    pathname.startsWith("/clubhouses") ||
    pathname.startsWith("/blogs/") ||
    pathname.startsWith("/venue/");
  const isActive = (path: string) => {
    if (path === "/blogs") return pathname.startsWith("/blogs");
    if (path === "/browse")
      return pathname.startsWith("/browse") || pathname.startsWith("/venue");
    return pathname === path;
  };

  // Listen to Supabase auth state
  useEffect(() => {
    const supabase = createClient();

    supabase.auth.getSession().then(({ data: { session } }) => {
      setCurrentUser(session?.user ?? null);
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setCurrentUser(session?.user ?? null);
    });

    return () => subscription.unsubscribe();
  }, []);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setScrolled(offset > 50);
    };

    // Check initial scroll
    if (typeof window !== "undefined") {
      handleScroll();
      window.addEventListener("scroll", handleScroll);
    }
    return () => {
      if (typeof window !== "undefined")
        window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleBookSlot = (e: React.MouseEvent) => {
    e.preventDefault();
    if (currentUser) {
      router.push("/browse");
    } else {
      setShowAuthDialog(true);
    }
  };

  const isNavbarTransparent = isTransparentPage && !scrolled;

  return (
    <>
      <nav
        className={`absolute top-0 left-0 w-full z-50 border-b-0 transition-colors duration-300 ${
          isNavbarTransparent
            ? "bg-transparent"
            : "bg-background/95 backdrop-blur-md shadow-sm border-b border-border/40"
        }`}
      >
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 bg-linear-to-br from-primary to-accent rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all">
              <Zap className="text-primary-foreground w-5 h-5" />
            </div>
            <span
              className={`text-2xl font-black ${
                isNavbarTransparent
                  ? "text-white"
                  : "bg-linear-to-r from-primary to-accent bg-clip-text text-transparent"
              }`}
            >
              PlayCourt
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-10">
            <Link
              href="/"
              className={`font-bold transition-all duration-300 relative group drop-shadow-md ${
                isActive("/")
                  ? isNavbarTransparent
                    ? "text-white"
                    : "text-primary"
                  : `${
                      isNavbarTransparent ? "text-white" : "text-foreground/80"
                    } hover:text-primary`
              }`}
            >
              <span>Home</span>
              <span
                className={`absolute -bottom-1 left-0 h-0.5 bg-primary transition-all duration-300 ${
                  isActive("/") ? "w-full" : "w-0 group-hover:w-full"
                }`}
              />
            </Link>
            <Link
              href="/browse"
              className={`font-bold transition-all duration-300 relative group drop-shadow-md ${
                isActive("/browse")
                  ? isNavbarTransparent
                    ? "text-white"
                    : "text-primary"
                  : `${
                      isNavbarTransparent ? "text-white" : "text-foreground/80"
                    } hover:text-primary`
              }`}
            >
              <span>Browse Venues</span>
              <span
                className={`absolute -bottom-1 left-0 h-0.5 bg-primary transition-all duration-300 ${
                  isActive("/browse") ? "w-full" : "w-0 group-hover:w-full"
                }`}
              />
            </Link>
            <Link
              href="/clubhouses"
              className={`font-bold transition-all duration-300 relative group drop-shadow-md ${
                isActive("/clubhouses")
                  ? isNavbarTransparent
                    ? "text-white"
                    : "text-primary"
                  : `${
                      isNavbarTransparent ? "text-white" : "text-foreground/80"
                    } hover:text-primary`
              }`}
            >
              <span>Clubhouses</span>
              <span
                className={`absolute -bottom-1 left-0 h-0.5 bg-primary transition-all duration-300 ${
                  isActive("/clubhouses") ? "w-full" : "w-0 group-hover:w-full"
                }`}
              />
            </Link>
            <Link
              href="/blogs"
              className={`font-bold transition-all duration-300 relative group drop-shadow-md ${
                isActive("/blogs")
                  ? isNavbarTransparent
                    ? "text-white"
                    : "text-primary"
                  : `${
                      isNavbarTransparent ? "text-white" : "text-foreground/80"
                    } hover:text-primary`
              }`}
            >
              <span>Blogs</span>
              <span
                className={`absolute -bottom-1 left-0 h-0.5 bg-primary transition-all duration-300 ${
                  isActive("/blogs") ? "w-full" : "w-0 group-hover:w-full"
                }`}
              />
            </Link>
            <Link
              href="/my-bookings"
              className={`font-bold transition-all duration-300 relative group drop-shadow-md ${
                isActive("/my-bookings")
                  ? isNavbarTransparent
                    ? "text-white"
                    : "text-primary"
                  : `${
                      isNavbarTransparent ? "text-white" : "text-foreground/80"
                    } hover:text-primary`
              }`}
            >
              <span>My Bookings</span>
              <span
                className={`absolute -bottom-1 left-0 h-0.5 bg-primary transition-all duration-300 ${
                  isActive("/my-bookings") ? "w-full" : "w-0 group-hover:w-full"
                }`}
              />
            </Link>
            <Link
              href="/profile"
              className={`font-bold transition-all duration-300 relative group drop-shadow-md ${
                isActive("/profile")
                  ? isNavbarTransparent
                    ? "text-white"
                    : "text-primary"
                  : `${
                      isNavbarTransparent ? "text-white" : "text-foreground/80"
                    } hover:text-primary`
              }`}
            >
              <span>Profile</span>
              <span
                className={`absolute -bottom-1 left-0 h-0.5 bg-primary transition-all duration-300 ${
                  isActive("/profile") ? "w-full" : "w-0 group-hover:w-full"
                }`}
              />
            </Link>
          </div>

          <div className="flex items-center gap-4">
            <Button
              onClick={handleBookSlot}
              className="bg-linear-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-primary-foreground font-bold rounded-lg shadow-lg transition-all duration-300 cursor-pointer"
            >
              Book a Slot
            </Button>
            {currentUser && (
              <Link
                href="/profile"
                className={`hidden sm:flex items-center gap-2 px-1.5 py-1.5 pr-4 rounded-full border transition-all duration-300 cursor-pointer group/profile active:scale-95 ${
                  isNavbarTransparent
                    ? "bg-white/10 border-white/20 hover:bg-white/20 text-white"
                    : "bg-background border-border hover:border-primary text-foreground shadow-sm"
                }`}
              >
                <div className="w-8 h-8 rounded-full bg-linear-to-br from-primary to-accent flex items-center justify-center text-white font-bold text-xs shadow-md group-hover/profile:scale-105 transition-transform">
                  {(
                    currentUser.user_metadata?.name?.charAt(0) ||
                    currentUser.email?.charAt(0) ||
                    "U"
                  ).toUpperCase()}
                </div>
                <span className="font-bold text-sm truncate max-w-[120px]">
                  {currentUser.user_metadata?.name ||
                    currentUser.email?.split("@")[0] ||
                    "Profile"}
                </span>
              </Link>
            )}
            <button
              className="md:hidden p-2 hover:bg-accent/10 rounded-lg transition-colors cursor-pointer"
              onClick={() => setIsOpen(!isOpen)}
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 bg-background transition-transform duration-300 md:hidden pt-24 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="container mx-auto px-4 flex flex-col gap-6 text-center">
          {currentUser && (
            <div className="py-4 border-b border-border mb-4">
              <div className="w-16 h-16 rounded-full bg-linear-to-br from-primary to-accent mx-auto mb-3 flex items-center justify-center text-white text-2xl font-black shadow-lg">
                {(
                  currentUser.user_metadata?.name?.charAt(0) ||
                  currentUser.email?.charAt(0) ||
                  "U"
                ).toUpperCase()}
              </div>
              <p className="font-bold text-lg text-foreground truncate max-w-[200px] mx-auto">
                {currentUser.user_metadata?.name ||
                  currentUser.email?.split("@")[0]}
              </p>
              <p className="text-sm text-muted-foreground truncate max-w-[250px] mx-auto">
                {currentUser.email}
              </p>
            </div>
          )}

          <Link
            href="/"
            className="text-2xl font-bold hover:text-primary transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link
            href="/browse"
            className="text-2xl font-bold hover:text-primary transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Browse Venues
          </Link>
          <Link
            href="/clubhouses"
            className="text-2xl font-bold hover:text-primary transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Clubhouses
          </Link>
          <Link
            href="/my-bookings"
            className="text-2xl font-bold hover:text-primary transition-colors"
            onClick={() => setIsOpen(false)}
          >
            My Bookings
          </Link>
          <Link
            href="/blogs"
            className="text-2xl font-bold hover:text-primary transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Blogs
          </Link>

          {currentUser ? (
            <div className="flex flex-col gap-4 mt-6 pt-6 border-t border-border">
              <Link
                href="/profile"
                className="text-2xl font-bold hover:text-primary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Profile
              </Link>
              <Button
                variant="destructive"
                size="lg"
                className="font-bold text-xl py-6 rounded-xl mt-4"
                onClick={async () => {
                  const supabase = createClient();
                  await supabase.auth.signOut();
                  setIsOpen(false);
                  router.push("/");
                  router.refresh();
                }}
              >
                Logout
              </Button>
            </div>
          ) : (
            <div className="flex flex-col gap-3 mt-8">
              <Link href="/auth/login" onClick={() => setIsOpen(false)}>
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full font-bold"
                >
                  Login
                </Button>
              </Link>
              <Link href="/auth/signup" onClick={() => setIsOpen(false)}>
                <Button size="lg" className="w-full font-bold">
                  Sign Up
                </Button>
              </Link>
            </div>
          )}
        </div>
      </div>
      <AuthDialog open={showAuthDialog} onOpenChange={setShowAuthDialog} />
    </>
  );
}
