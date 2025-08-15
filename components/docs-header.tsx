"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, Menu } from "lucide-react"
import Link from "next/link"
import { useSidebar } from "@/components/docs-sidebar"
import Image from "next/image"

export function DocsHeader() {
  const [searchQuery, setSearchQuery] = useState("")
  const { toggleSidebar } = useSidebar()

  return (
    <motion.header
      className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="container flex h-16 items-center justify-between px-4 sm:px-6">
        <div className="flex items-center gap-3 sm:gap-4">
          <Button variant="ghost" size="sm" className="lg:hidden" onClick={toggleSidebar}>
            <Menu className="h-4 w-4 sm:h-5 sm:w-5" />
          </Button>
          <Link href="/" className="flex items-center gap-2">
            <div className="w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center">
              <Image src="/hypebook-logo.png" alt="HypeBook" width={32} height={32} className="w-7 h-7 sm:w-8 sm:h-8" />
            </div>
            <span className="font-serif font-bold text-lg sm:text-xl">HypeBook</span>
          </Link>
        </div>

        {/* Search Bar */}
        <div className="flex-1 max-w-md mx-2 sm:mx-4 hidden sm:block">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search documentation..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 glass border-primary/20 focus:border-primary/40 bg-background/50 text-sm"
            />
          </div>
        </div>

        <div className="flex items-center gap-1 sm:gap-2">
          <Button variant="ghost" size="sm" asChild className="text-xs sm:text-sm">
            <Link href="https://github.com/hypebook-docs" target="_blank">
              GitHub
            </Link>
          </Button>
        </div>
      </div>
    </motion.header>
  )
}
