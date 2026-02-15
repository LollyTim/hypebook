"use client"

import { Badge } from "@/components/ui/badge"
import { ExternalLink, LayoutGrid, TrendingUp, Wallet, Shield, PieChart, Info } from "lucide-react"

export default function EcosystemProjects() {
  const categories = [
    {
      title: "Trading & Terminals",
      icon: TrendingUp,
      projects: [
        {
          name: "Hyperdash",
          desc: "Advanced trading terminal with customizable layouts and deep analytics.",
          link: "https://hyperdash.xyz",
          status: "Live"
        },
        {
          name: "Rage Trade",
          desc: "Omnichain yield and perpetual aggregator building on Hyperliquid.",
          link: "https://rage.trade",
          status: "Building"
        }
      ]
    },
    {
      title: "Yield & Vaults",
      icon: Wallet,
      projects: [
        {
          name: "Prime",
          desc: "Automated market making and yield generation strategies.",
          link: "https://prime.hyperliquid.xyz",
          status: "Live"
        },
        {
          name: "Hyperliquid Vaults",
          desc: "Native protocol vaults allowing users to provide liquidity for HLP.",
          link: "https://hyperliquid.xyz/vaults",
          status: "Live"
        }
      ]
    },
    {
      title: "Community & Social",
      icon: LayoutGrid,
      projects: [
        {
          name: "Hypurr.fun",
          desc: "The premier meme launchpad and community hub for the Hyperliquid ecosystem.",
          link: "https://hypurr.fun",
          status: "Live"
        },
        {
          name: "HypeBook Insights",
          desc: "Futuristic Web3-native publishing platform for long-form articles.",
          link: "https://insights.hypebook.xyz",
          status: "In Development"
        }
      ]
    },
    {
      title: "Analytics & Data",
      icon: PieChart,
      projects: [
        {
          name: "HyperStats",
          desc: "Real-time protocol metrics, open interest, and volume tracking.",
          link: "https://hyperstats.xyz",
          status: "Live"
        },
        {
          name: "HL Tracker",
          desc: "Portfolio tracking and performance analysis for Hyperliquid traders.",
          link: "#",
          status: "Community"
        }
      ]
    }
  ]

  return (
    <div className="space-y-12">
      <div className="space-y-4">
        <Badge variant="outline" className="text-primary border-primary/20">Ecosystem</Badge>
        <h1 className="text-5xl font-bold tracking-tight text-white">Project Directory</h1>
        <p className="text-xl text-muted-foreground leading-relaxed">
          Discover the applications and protocols pushing the boundaries of what's possible on Hyperliquid.
        </p>
      </div>

      <div className="space-y-16">
        {categories.map((category) => (
          <section key={category.title} className="space-y-6">
            <div className="flex items-center gap-3 border-b border-[#333344] pb-4">
              <category.icon className="w-6 h-6 text-primary" />
              <h2 className="text-2xl font-bold text-white">{category.title}</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {category.projects.map((project) => (
                <div 
                  key={project.name}
                  className="p-6 bg-[#141419] border border-[#333344] rounded-xl hover:border-primary/30 transition-all group relative overflow-hidden"
                >
                  <div className="flex justify-between items-start mb-4">
                    <div className="space-y-1">
                      <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors">{project.name}</h3>
                      <Badge variant="secondary" className="text-[10px] py-0 px-2 h-5 bg-white/5 text-muted-foreground border-white/10 uppercase font-bold">
                        {project.status}
                      </Badge>
                    </div>
                    <a href={project.link} target="_blank" className="p-2 bg-white/5 rounded-lg text-muted hover:text-white transition-colors">
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{project.desc}</p>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>

      <section className="bg-primary/5 border border-primary/20 rounded-2xl p-10 text-center space-y-4">
        <Shield className="w-12 h-12 text-primary mx-auto mb-4" />
        <h2 className="text-2xl font-bold text-white">Disclaimer</h2>
        <p className="text-sm text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          Listing on HypeBook does not constitute an endorsement. Users should conduct their own research and exercise caution when interacting with third-party applications.
        </p>
      </section>
    </div>
  )
}
