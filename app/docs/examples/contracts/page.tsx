import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Smart Contract Examples - HypeBook",
  description: "Practical smart contract examples and tutorials",
}

export default function ContractExamplesPage() {
  return (
    <div className="prose prose-slate dark:prose-invert max-w-none">
      <h1 className="font-serif text-4xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
        Smart Contract Examples
      </h1>

      <p className="text-lg text-muted-foreground mb-8">
        Practical smart contract examples and step-by-step tutorials for HyperEVM development.
      </p>

      <div className="bg-orange-500/10 border border-orange-500/20 rounded-lg p-6 mt-8">
        <h3 className="font-sans text-lg font-semibold mb-2 text-orange-400">📝 Coming Soon</h3>
        <p>
          Smart contract examples are being prepared. This will include basic contracts, advanced patterns, and
          deployment guides.
        </p>
      </div>
    </div>
  )
}
