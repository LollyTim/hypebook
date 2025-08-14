import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Consensus Mechanism - HyperBook",
  description: "Learn about HyperEVM consensus mechanism and validator operations",
}

export default function ConsensusPage() {
  return (
    <div className="prose prose-slate dark:prose-invert max-w-none">
      <h1 className="font-serif text-4xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
        Consensus Mechanism
      </h1>

      <p className="text-lg text-muted-foreground mb-8">
        Deep dive into HyperEVM's consensus mechanism and how validators secure the network.
      </p>

      <div className="bg-orange-500/10 border border-orange-500/20 rounded-lg p-6 mt-8">
        <h3 className="font-sans text-lg font-semibold mb-2 text-orange-400">🚧 Under Development</h3>
        <p>
          Consensus mechanism documentation is currently being written. This section will include detailed information
          about validator operations, staking, and network security.
        </p>
      </div>
    </div>
  )
}
