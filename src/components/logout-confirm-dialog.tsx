"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/src/components/ui/dialog";
import { Button } from "@/src/components/ui/button";
import { LogOut, AlertTriangle } from "lucide-react";

interface LogoutConfirmDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onConfirm: () => void;
}

export function LogoutConfirmDialog({
  open,
  onOpenChange,
  onConfirm,
}: LogoutConfirmDialogProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md border-border/40 shadow-2xl rounded-3xl p-8">
        <DialogHeader className="flex flex-col items-center text-center space-y-4">
          <div className="w-16 h-16 bg-destructive/10 rounded-full flex items-center justify-center mb-2">
            <AlertTriangle className="w-8 h-8 text-destructive animate-pulse" />
          </div>
          <DialogTitle className="text-2xl font-black">
            Confirm Logout
          </DialogTitle>
          <DialogDescription className="text-muted-foreground font-medium text-base">
            Are you sure you want to end your current session? You'll need to
            sign back in to access your bookings.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter className="flex flex-col sm:flex-row gap-3 mt-6">
          <Button
            variant="outline"
            onClick={() => onOpenChange(false)}
            className="flex-1 h-12 font-bold rounded-xl border-2 hover:bg-muted/50"
          >
            Stay Logged In
          </Button>
          <Button
            variant="destructive"
            onClick={onConfirm}
            className="flex-1 h-12 font-bold rounded-xl shadow-lg shadow-destructive/20 active:scale-95 flex items-center gap-2"
          >
            <LogOut className="w-4 h-4" />
            Yes, Log Out
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
