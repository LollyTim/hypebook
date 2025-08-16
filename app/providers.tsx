"use client";

import { ConvexProvider, ConvexReactClient } from "convex/react";

// Use the dev deployment URL as fallback if env var is not set
const convexUrl = process.env.NEXT_PUBLIC_CONVEX_URL || "https://charming-husky-951.convex.cloud";
const convex = new ConvexReactClient(convexUrl);

export function Providers({ children }: { children: React.ReactNode }) {
    return (
        <ConvexProvider client={convex}>
            {children}
        </ConvexProvider>
    );
}
