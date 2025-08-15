import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "CoreWriter API Reference - HypeBook",
  description: "Complete API reference for CoreWriter framework",
}

export default function CoreWriterAPIPage() {
  return (
    <div className="prose prose-slate dark:prose-invert max-w-none">
      <h1 className="font-serif text-4xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
        CoreWriter API Reference
      </h1>

      <p className="text-lg text-muted-foreground mb-8">
        Complete API reference for the CoreWriter development framework.
      </p>

      <div className="bg-orange-500/10 border border-orange-500/20 rounded-lg p-6 mt-8">
        <h3 className="font-sans text-lg font-semibold mb-2 text-orange-400">📚 Coming Soon</h3>
        <p>
          API reference documentation is being prepared with detailed method signatures, examples, and usage patterns.
        </p>
      </div>
    </div>
  )
}
