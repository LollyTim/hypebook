"use client"

import { Badge } from "@/components/ui/badge"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Copy, Check } from "lucide-react"

interface CodeBlockProps {
  children: string
  language?: string
  filename?: string
}

export function CodeBlock({ children, language = "javascript", filename }: CodeBlockProps) {
  const [copied, setCopied] = useState(false)

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(children)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <motion.div
      className="relative group"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      {filename && (
        <div className="flex items-center justify-between bg-muted/50 px-4 py-2 border border-border/40 rounded-t-lg">
          <span className="text-sm font-mono text-muted-foreground">{filename}</span>
          <Badge variant="outline" className="text-xs">
            {language}
          </Badge>
        </div>
      )}

      <div className="relative">
        <pre
          className={`bg-gradient-to-br from-background/95 to-muted/30 border border-border/40 ${filename ? "rounded-b-lg" : "rounded-lg"} p-4 overflow-x-auto`}
        >
          <code className={`language-${language} text-sm font-mono leading-relaxed`}>{children}</code>
        </pre>

        <Button
          size="sm"
          variant="ghost"
          className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 h-8 w-8 p-0"
          onClick={copyToClipboard}
        >
          <motion.div animate={{ scale: copied ? 0.8 : 1 }} transition={{ duration: 0.1 }}>
            {copied ? <Check className="h-4 w-4 text-green-500" /> : <Copy className="h-4 w-4" />}
          </motion.div>
        </Button>
      </div>
    </motion.div>
  )
}
