import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Custom Precompiles - HypeBook",
  description: "How to create and deploy custom precompiled functions on HyperEVM",
}

export default function CustomPrecompilesPage() {
  return (
    <div className="prose prose-slate dark:prose-invert max-w-none">
      <h1 className="font-serif text-4xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
        Custom Precompiles
      </h1>

      <p className="text-lg text-muted-foreground mb-8">
        Learn how to create and deploy custom precompiled functions for specialized use cases.
      </p>

      <div className="bg-orange-500/10 border border-orange-500/20 rounded-lg p-6 mt-8">
        <h3 className="font-sans text-lg font-semibold mb-2 text-orange-400">🔧 In Development</h3>
        <p>
          Custom precompiles guide is being written. This advanced topic will cover implementation details and
          deployment strategies.
        </p>
      </div>
    </div>
  )
}
