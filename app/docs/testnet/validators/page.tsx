import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Testnet Validators - HypeBook",
  description: "Guide to running validators on HyperEVM testnet",
}

export default function ValidatorsPage() {
  return (
    <div className="prose prose-slate dark:prose-invert max-w-none">
      <h1 className="font-serif text-4xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
        Testnet Validators
      </h1>

      <p className="text-lg text-muted-foreground mb-8">
        Complete guide to running and managing validators on the HyperEVM testnet.
      </p>

      <div className="bg-orange-500/10 border border-orange-500/20 rounded-lg p-6 mt-8">
        <h3 className="font-sans text-lg font-semibold mb-2 text-orange-400">⚡ Coming Soon</h3>
        <p>
          Validator setup and management documentation is in development. This will cover installation, configuration,
          and best practices.
        </p>
      </div>
    </div>
  )
}
