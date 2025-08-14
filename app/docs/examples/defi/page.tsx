import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "DeFi Protocol Examples - HyperBook",
  description: "Building decentralized finance protocols on HyperEVM",
}

export default function DeFiExamplesPage() {
  return (
    <div className="prose prose-slate dark:prose-invert max-w-none">
      <h1 className="font-serif text-4xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
        DeFi Protocol Examples
      </h1>

      <p className="text-lg text-muted-foreground mb-8">
        Learn how to build decentralized finance protocols and applications on HyperEVM.
      </p>

      <div className="bg-orange-500/10 border border-orange-500/20 rounded-lg p-6 mt-8">
        <h3 className="font-sans text-lg font-semibold mb-2 text-orange-400">💰 Coming Soon</h3>
        <p>
          DeFi protocol examples are in development. This will cover AMMs, lending protocols, and yield farming
          strategies.
        </p>
      </div>
    </div>
  )
}
