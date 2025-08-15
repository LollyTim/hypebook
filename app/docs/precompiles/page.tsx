import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Built-in Precompiles - HypeBook",
  description: "Guide to HyperEVM built-in precompiled functions and optimizations",
}

export default function PrecompilesPage() {
  return (
    <div className="prose prose-slate dark:prose-invert max-w-none">
      <h1 className="font-serif text-4xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
        Built-in Precompiles
      </h1>

      <p className="text-lg text-muted-foreground mb-8">
        Learn about HyperEVM's built-in precompiled functions for gas-optimized operations.
      </p>

      <div className="bg-orange-500/10 border border-orange-500/20 rounded-lg p-6 mt-8">
        <h3 className="font-sans text-lg font-semibold mb-2 text-orange-400">⚡ Coming Soon</h3>
        <p>
          Precompiles documentation is being finalized. This will include detailed information about available functions
          and gas costs.
        </p>
      </div>
    </div>
  )
}
