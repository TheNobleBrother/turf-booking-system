"use client";

import type React from "react";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/src/components/ui/button";
import { Input } from "@/src/components/ui/input";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { createClient } from "@/src/utils/supabase/client";

interface SignupFormProps {
  readonly role: string;
}

export default function SignupForm({ role }: SignupFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    setLoading(true);
    try {
      const supabase = createClient();
      const { data, error } = await supabase.auth.signUp({
        email: formData.email,
        password: formData.password,
        options: {
          data: {
            name: formData.name,
            phone: formData.phone,
            role: role,
          },
        },
      });

      if (error) {
        setError(error.message);
        toast.error(error.message);
        return;
      }

      if (data.user) {
        toast.success(
          "Account created! Please check your email to verify your account."
        );
        setFormData({
          name: "",
          email: "",
          phone: "",
          password: "",
          confirmPassword: "",
        });
        router.push("/auth/login");
      }
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : "Signup failed";
      setError(message);
      toast.error(message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {error && (
        <div className="p-3 bg-destructive/10 text-destructive text-sm rounded-md">
          {error}
        </div>
      )}

      <div>
        <label
          htmlFor="signup-name"
          className="block text-sm font-medium text-foreground mb-2"
        >
          Full Name
        </label>
        <Input
          id="signup-name"
          type="text"
          name="name"
          placeholder="John Doe"
          value={formData.name}
          onChange={handleChange}
          required
          className="bg-input border-border"
        />
      </div>

      <div>
        <label
          htmlFor="signup-email"
          className="block text-sm font-medium text-foreground mb-2"
        >
          Email Address
        </label>
        <Input
          id="signup-email"
          type="email"
          name="email"
          placeholder="your@email.com"
          value={formData.email}
          onChange={handleChange}
          required
          className="bg-input border-border"
        />
      </div>

      <div>
        <label
          htmlFor="signup-phone"
          className="block text-sm font-medium text-foreground mb-2"
        >
          Phone Number
        </label>
        <Input
          id="signup-phone"
          type="tel"
          name="phone"
          placeholder="+1 (555) 123-4567"
          value={formData.phone}
          onChange={handleChange}
          required
          className="bg-input border-border"
        />
      </div>

      <div>
        <label
          htmlFor="signup-password"
          className="block text-sm font-medium text-foreground mb-2"
        >
          Password
        </label>
        <Input
          id="signup-password"
          type="password"
          name="password"
          placeholder="••••••••"
          value={formData.password}
          onChange={handleChange}
          required
          className="bg-input border-border"
        />
      </div>

      <div>
        <label
          htmlFor="signup-confirm-password"
          className="block text-sm font-medium text-foreground mb-2"
        >
          Confirm Password
        </label>
        <Input
          id="signup-confirm-password"
          type="password"
          name="confirmPassword"
          placeholder="••••••••"
          value={formData.confirmPassword}
          onChange={handleChange}
          required
          className="bg-input border-border"
        />
      </div>

      <div className="flex items-start gap-2">
        <input
          type="checkbox"
          className="w-4 h-4 rounded border-border mt-1"
          required
        />
        <label className="text-sm text-muted-foreground">
          I agree to the{" "}
          <Link href="/terms" className="text-primary hover:underline">
            Terms of Service
          </Link>{" "}
          and{" "}
          <Link href="/privacy" className="text-primary hover:underline">
            Privacy Policy
          </Link>
        </label>
      </div>

      <Button
        type="submit"
        className="w-full bg-primary hover:bg-primary/90"
        disabled={loading}
      >
        {loading ? "Creating Account..." : "Create Account"}
      </Button>

      <div className="text-center">
        <p className="text-sm text-muted-foreground">
          Already have an account?{" "}
          <Link
            href="/auth/login"
            className="text-primary font-semibold hover:underline"
          >
            Sign in
          </Link>
        </p>
        <div className="mt-4 text-center space-y-4 text-sm text-muted-foreground">
          <Link
            href="/"
            className="inline-flex items-center gap-2 hover:text-primary transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to home
          </Link>
        </div>
      </div>
    </form>
  );
}
