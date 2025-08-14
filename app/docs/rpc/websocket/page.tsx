import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "WebSocket Connections - HyperBook",
  description: "Real-time data streaming with WebSocket connections",
}

export default function WebSocketPage() {
  return (
    <div className="prose prose-slate dark:prose-invert max-w-none">
      <h1 className="font-serif text-4xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
        WebSocket Connections
      </h1>

      <p className="text-lg text-muted-foreground mb-8">
        Learn how to use WebSocket connections for real-time data streaming and event subscriptions.
      </p>

      <div className="bg-orange-500/10 border border-orange-500/20 rounded-lg p-6 mt-8">
        <h3 className="font-sans text-lg font-semibold mb-2 text-orange-400">🔌 Coming Soon</h3>
        <p>
          WebSocket documentation is being developed. This will include connection setup, event handling, and real-time
          examples.
        </p>
      </div>
    </div>
  )
}
