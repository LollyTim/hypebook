"use client"

import { Search, Github, Twitter, Menu } from "lucide-react"
import { Button } from "@/components/ui/button"

export function DocsHeader() {
  return (
    <header className="h-16 border-b border-[#333344] bg-[#0d0d10]/80 backdrop-blur-md sticky top-0 z-50 px-6">
      <div className="h-full max-w-7xl mx-auto flex items-center justify-between gap-4">
        <div className="flex-1 max-w-md relative group">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted group-focus-within:text-primary transition-colors" />
          <input 
            type="text" 
            placeholder="Search documentation..."
            className="w-full bg-[#141419] border border-[#333344] rounded-full py-2 pl-10 pr-4 text-sm focus:outline-none focus:border-primary/50 transition-all"
          />
        </div>

        <div className="flex items-center gap-4">
          <button className="text-muted hover:text-white transition-colors">
            <Twitter className="w-5 h-5" />
          </button>
          <button className="text-muted hover:text-white transition-colors">
            <Github className="w-5 h-5" />
          </button>
          <div className="w-px h-6 bg-[#333344]" />
          <Button variant="outline" className="border-primary/20 text-primary hover:bg-primary/5 hidden sm:flex">
            HypeEVM Explorer
          </Button>
          <button className="lg:hidden text-white">
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>
    </header>
  )
}
