"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { motion } from "framer-motion"
import { TrendingUp, Users, Zap, DollarSign, Activity, Globe } from "lucide-react"

const stats = [
  { label: "Total Value Locked", value: "$2.4B", icon: DollarSign, change: "+12.5%" },
  { label: "Active Users", value: "45.2K", icon: Users, change: "+8.3%" },
  { label: "Transactions/Day", value: "1.2M", icon: Activity, change: "+15.7%" },
  { label: "Network TPS", value: "50K", icon: Zap, change: "+5.2%" },
  { label: "Validators", value: "127", icon: Globe, change: "+2.4%" },
  { label: "Uptime", value: "99.9%", icon: TrendingUp, change: "0%" },
]

export default function StatsPage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen pt-24 bg-gradient-to-br from-gray-900 via-gray-800 to-emerald-900">
        <section className="py-20 lg:py-32">
          <div className="container mx-auto px-6 lg:px-8">
            <motion.div
              className="text-center space-y-8 max-w-4xl mx-auto mb-16"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl lg:text-7xl font-bold bg-gradient-to-r from-white via-emerald-200 to-cyan-200 bg-clip-text text-transparent">
                HyperBook Statistics
              </h1>
              <p className="text-xl lg:text-2xl text-gray-300 leading-relaxed">
                Real-time insights into HyperBook's documentation usage and ecosystem growth
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {stats.map((stat, index) => {
                const Icon = stat.icon
                return (
                  <motion.div
                    key={stat.label}
                    className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-8 hover:bg-white/10 transition-all duration-300"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    whileHover={{ scale: 1.02, y: -5 }}
                  >
                    <div className="flex items-center justify-between mb-4">
                      <Icon className="w-8 h-8 text-emerald-400" />
                      <span
                        className={`text-sm font-medium px-2 py-1 rounded ${
                          stat.change.startsWith("+")
                            ? "text-green-400 bg-green-400/10"
                            : stat.change === "0%"
                              ? "text-gray-400 bg-gray-400/10"
                              : "text-red-400 bg-red-400/10"
                        }`}
                      >
                        {stat.change}
                      </span>
                    </div>
                    <div className="space-y-2">
                      <div className="text-3xl font-bold text-white">{stat.value}</div>
                      <div className="text-gray-400 text-sm">{stat.label}</div>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
