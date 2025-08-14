import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "HyperEVM Architecture - HyperBook",
  description: "Deep dive into HyperEVM architecture and design principles",
}

export default function ArchitecturePage() {
  return (
    <div className="prose prose-slate dark:prose-invert max-w-none">
      <h1 className="font-serif text-4xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
        HyperEVM Architecture
      </h1>

      <p className="text-lg text-muted-foreground mb-8">
        Understanding the core architecture and design principles behind HyperEVM.
      </p>

      <h2 className="font-serif text-2xl font-bold mt-8 mb-4">Overview</h2>
      <p className="mb-6">
        HyperEVM is built on a modular architecture that prioritizes performance, security, and developer experience.
        The system consists of several key components working together to provide a seamless blockchain experience.
      </p>

      <h2 className="font-serif text-2xl font-bold mt-8 mb-4">Core Components</h2>

      <div className="grid gap-6 mb-8">
        <div className="bg-primary/5 border border-primary/20 rounded-lg p-6">
          <h3 className="font-sans text-xl font-semibold mb-3 text-primary">Execution Layer</h3>
          <p>Handles smart contract execution and state transitions with optimized gas metering.</p>
        </div>

        <div className="bg-accent/5 border border-accent/20 rounded-lg p-6">
          <h3 className="font-sans text-xl font-semibold mb-3 text-accent">Consensus Engine</h3>
          <p>Implements a high-performance consensus mechanism for fast finality and security.</p>
        </div>

        <div className="bg-primary/5 border border-primary/20 rounded-lg p-6">
          <h3 className="font-sans text-xl font-semibold mb-3 text-primary">Storage Layer</h3>
          <p>Optimized state storage with efficient merkle tree implementations.</p>
        </div>
      </div>

      <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-6 mt-8">
        <h3 className="font-sans text-lg font-semibold mb-2 text-blue-400">📚 Coming Soon</h3>
        <p>
          Detailed architecture diagrams and technical specifications are being prepared. Check back soon for
          comprehensive documentation.
        </p>
      </div>
    </div>
  )
}
