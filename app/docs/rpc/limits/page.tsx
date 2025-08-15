import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Rate Limits - HypeBook",
  description: "Understanding RPC rate limits and optimization strategies",
}

export default function RateLimitsPage() {
  return (
    <div className="prose prose-slate dark:prose-invert max-w-none">
      <h1 className="font-serif text-4xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
        Rate Limits
      </h1>

      <p className="text-lg text-muted-foreground mb-8">
        Understanding RPC rate limits and strategies for optimizing API usage.
      </p>

      <div className="bg-orange-500/10 border border-orange-500/20 rounded-lg p-6 mt-8">
        <h3 className="font-sans text-lg font-semibold mb-2 text-orange-400">📊 Coming Soon</h3>
        <p>
          Rate limiting documentation is in preparation. This will cover limits, best practices, and optimization
          techniques.
        </p>
      </div>
    </div>
  )
}
