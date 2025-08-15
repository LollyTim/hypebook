import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "CoreWriter Examples - HypeBook",
  description: "Practical examples and tutorials for CoreWriter development",
}

export default function CoreWriterExamplesPage() {
  return (
    <div className="prose prose-slate dark:prose-invert max-w-none">
      <h1 className="font-serif text-4xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
        CoreWriter Examples
      </h1>

      <p className="text-lg text-muted-foreground mb-8">
        Practical examples and step-by-step tutorials for CoreWriter development.
      </p>

      <div className="bg-orange-500/10 border border-orange-500/20 rounded-lg p-6 mt-8">
        <h3 className="font-sans text-lg font-semibold mb-2 text-orange-400">💡 In Development</h3>
        <p>
          Example projects and tutorials are being created. This section will feature real-world use cases and
          implementation patterns.
        </p>
      </div>
    </div>
  )
}
