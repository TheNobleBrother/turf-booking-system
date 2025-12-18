"use client";

import { usePathname } from "next/navigation";
import Navbar from "./navbar";

export default function ConditionalNavbar() {
    const pathname = usePathname();
    const isAuthRoute = pathname?.startsWith("/auth");

    if (isAuthRoute) {
        return null;
    }

    return <Navbar />;
}
