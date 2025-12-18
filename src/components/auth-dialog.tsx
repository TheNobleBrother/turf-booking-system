"use client";

import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/src/components/ui/dialog";
import { Button } from "@/src/components/ui/button";
import Link from "next/link";
import { UserPlus } from "lucide-react";

interface AuthDialogProps {
    open: boolean;
    onOpenChange: (open: boolean) => void;
}

export function AuthDialog({ open, onOpenChange }: AuthDialogProps) {
    const handleClose = () => onOpenChange(false);

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className="sm:max-w-md">
                <DialogHeader className="flex flex-col items-center text-center space-y-4 pt-4">
                    <div className="p-3 bg-primary/10 rounded-full">
                        <UserPlus className="w-8 h-8 text-primary" />
                    </div>
                    <DialogTitle className="text-2xl font-bold">Start Your Journey</DialogTitle>
                    <DialogDescription className="text-base max-w-xs mx-auto">
                        Join our community to book venues, track your games, and unlock exclusive member benefits.
                    </DialogDescription>
                </DialogHeader>
                <div className="flex flex-col gap-3 py-4">
                    <Button asChild size="lg" className="w-full text-lg font-bold" onClick={handleClose}>
                        <Link href="/auth/signup">
                            Create Account
                        </Link>
                    </Button>
                    <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground mt-2">
                        <span>Already have an account?</span>
                        <Link href="/auth/login" className="text-primary font-bold hover:underline" onClick={handleClose}>
                            Log in
                        </Link>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    );
}
