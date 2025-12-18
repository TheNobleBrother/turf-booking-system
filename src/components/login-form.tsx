"use client";

import type React from "react";

import { useState } from "react";
import { Button } from "@/src/components/ui/button";
import { Input } from "@/src/components/ui/input";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { createClient } from "@/src/utils/supabase/client";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const supabase = createClient();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) {
        toast.error(error.message);
        return;
      }

      if (data.user) {
        toast.success("Signed in successfully");
        router.push("/");
        router.refresh();
      }
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : "Login failed";
      toast.error(message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label
          htmlFor="login-email"
          className="block text-sm font-medium text-foreground mb-2"
        >
          Email Address
        </label>
        <Input
          id="login-email"
          type="email"
          placeholder="your@email.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="bg-input border-border"
        />
      </div>

      <div>
        <label
          htmlFor="login-password"
          className="block text-sm font-medium text-foreground mb-2"
        >
          Password
        </label>
        <Input
          id="login-password"
          type="password"
          placeholder="••••••••"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="bg-input border-border"
        />
      </div>

      <div className="flex items-center justify-between">
        <label className="flex items-center text-sm text-muted-foreground gap-2">
          <input type="checkbox" className="w-4 h-4 rounded border-border" />
          <span>Remember me</span>
        </label>
        <a
          href="/auth/forgot-password"
          className="text-sm text-primary hover:underline"
        >
          Forgot password?
        </a>
      </div>

      <Button
        type="submit"
        className="w-full bg-primary hover:bg-primary/90"
        disabled={loading}
      >
        {loading ? "Signing in..." : "Sign In"}
      </Button>
    </form>
  );
}
