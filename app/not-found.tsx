import Link from "next/link";
import { Home, BookOpen } from "lucide-react";

export default function NotFound() {
    return (
        <div className="min-h-screen bg-black flex items-center justify-center px-4">
            <div className="text-center max-w-2xl mx-auto">
                <h1 className="text-8xl sm:text-9xl font-bold text-primary mb-8">
                    404
                </h1>

                <h2 className="text-3xl font-semibold text-foreground mb-4">
                    Page Not Found
                </h2>

                <p className="text-xl text-muted-foreground mb-8">
                    The page you're looking for doesn't exist. Let's get you back to building on HyperEVM.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link
                        href="/"
                        className="flex items-center gap-2 px-6 py-3 bg-primary text-background rounded-lg hover:bg-primary/90 transition-colors font-bold"
                    >
                        <Home className="w-4 h-4" />
                        Go Home
                    </Link>
                    <Link
                        href="/docs"
                        className="flex items-center gap-2 px-6 py-3 bg-white/5 text-foreground border border-white/10 rounded-lg hover:bg-white/10 transition-colors"
                    >
                        <BookOpen className="w-4 h-4" />
                        Browse Docs
                    </Link>
                </div>
            </div>
        </div>
    );
}
