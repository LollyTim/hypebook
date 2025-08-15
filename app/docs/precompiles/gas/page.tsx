import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Gas Optimization - HypeBook",
  description: "Gas optimization strategies using precompiled functions",
}

export default function GasOptimizationPage() {
  return (
    <div className="prose prose-slate dark:prose-invert max-w-none">
      <h1 className="font-serif text-4xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
        Gas Optimization
      </h1>

      <p className="text-lg text-muted-foreground mb-8">
        Advanced strategies for optimizing gas usage with precompiled functions.
      </p>

      <div className="bg-orange-500/10 border border-orange-500/20 rounded-lg p-6 mt-8">
        <h3 className="font-sans text-lg font-semibold mb-2 text-orange-400">📊 Coming Soon</h3>
        <p>
          Gas optimization guide is in preparation. This will include benchmarks, best practices, and optimization
          techniques.
        </p>
      </div>
    </div>
  )
}
