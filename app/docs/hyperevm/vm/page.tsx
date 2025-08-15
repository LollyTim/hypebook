import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Virtual Machine - HypeBook",
  description: "Understanding HyperEVM virtual machine and execution environment",
}

export default function VMPage() {
  return (
    <div className="prose prose-slate dark:prose-invert max-w-none">
      <h1 className="font-serif text-4xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
        Virtual Machine
      </h1>

      <p className="text-lg text-muted-foreground mb-8">
        Learn about HyperEVM's virtual machine and execution environment.
      </p>

      <div className="bg-orange-500/10 border border-orange-500/20 rounded-lg p-6 mt-8">
        <h3 className="font-sans text-lg font-semibold mb-2 text-orange-400">🚧 Coming Soon</h3>
        <p>
          Virtual machine documentation is in development. This will cover execution semantics, gas optimization, and
          compatibility features.
        </p>
      </div>
    </div>
  )
}
