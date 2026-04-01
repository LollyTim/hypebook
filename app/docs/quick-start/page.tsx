"use client"

import { Badge } from "@/components/ui/badge"
import { ArrowRight, Terminal, ExternalLink, AlertTriangle, CheckCircle2, Wallet } from "lucide-react"
import Link from "next/link"

export default function QuickStartPage() {
  return (
    <div className="space-y-10">
      <div className="space-y-4">
        <Badge variant="outline" className="text-primary border-primary/20">Quick Start</Badge>
        <h1 className="text-4xl font-bold tracking-tight text-white">Deploy Your First Contract on HyperEVM</h1>
        <p className="text-xl text-muted-foreground leading-relaxed">
          HyperEVM is a fully EVM-compatible smart contract platform on Hyperliquid L1.
          This guide gets you from zero to a deployed, verified contract on testnet — using Foundry.
        </p>
      </div>

      {/* prereqs */}
      <div className="bg-primary/5 border border-primary/20 rounded-xl p-6 space-y-3">
        <h3 className="font-bold text-white">Prerequisites</h3>
        <ul className="text-sm text-muted-foreground space-y-1">
          <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" /><span>Foundry installed — <span className="text-accent font-mono">curl -L https://foundry.paradigm.xyz | bash</span></span></li>
          <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" /><span>MetaMask or any EVM wallet</span></li>
          <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" /><span>A Hyperliquid testnet account with some HYPE for gas</span></li>
        </ul>
      </div>

      {/* Step 1 */}
      <StepSection step={1} title="Add HyperEVM Testnet to Your Wallet">
        <p className="text-sm text-muted-foreground mb-4">
          Add via <a href="https://chainlist.org/chain/998" target="_blank" className="text-accent underline">chainlist.org/chain/998</a> or manually:
        </p>
        <div className="bg-[#141419] border border-[#333344] rounded-xl overflow-hidden">
          <table className="w-full text-sm">
            <tbody className="divide-y divide-[#333344]">
              {[
                ["Network Name", "HyperEVM Testnet"],
                ["RPC URL", "https://rpc.hyperliquid-testnet.xyz/evm"],
                ["Chain ID", "998"],
                ["Currency Symbol", "HYPE"],
                ["Block Explorer", "https://testnet.purrsec.com"],
              ].map(([k, v]) => (
                <tr key={k} className="hover:bg-white/2">
                  <td className="px-4 py-3 text-muted-foreground w-40">{k}</td>
                  <td className="px-4 py-3 text-accent font-mono">{v}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="flex items-start gap-3 p-4 bg-orange-500/10 border border-orange-500/20 rounded-xl mt-4">
          <AlertTriangle className="w-4 h-4 text-orange-400 shrink-0 mt-0.5" />
          <p className="text-xs text-orange-200">
            The native gas token is <strong>HYPE</strong>, not PURR. PURR is a community meme token.
          </p>
        </div>
      </StepSection>

      {/* Step 2 */}
      <StepSection step={2} title="Get Testnet HYPE">
        <ol className="text-sm text-muted-foreground space-y-2">
          <li className="flex gap-2"><span className="text-primary font-bold">1.</span>Go to <a href="https://app.hyperliquid-testnet.xyz" target="_blank" className="text-accent underline">app.hyperliquid-testnet.xyz</a> and claim testnet USDC from the faucet.</li>
          <li className="flex gap-2"><span className="text-primary font-bold">2.</span>Swap testnet USDC → HYPE on the testnet exchange.</li>
          <li className="flex gap-2"><span className="text-primary font-bold">3.</span>Transfer HYPE from HyperCore to your EVM wallet address by sending to the system bridge address:</li>
        </ol>
        <div className="bg-[#141419] border border-[#333344] rounded-xl p-4 mt-3 font-mono text-sm">
          <div className="text-muted-foreground text-xs mb-1">{"// Bridge address (HyperCore → HyperEVM)"}</div>
          <div className="text-accent break-all">0x2222222222222222222222222222222222222222</div>
        </div>
      </StepSection>

      {/* Step 3 */}
      <StepSection step={3} title="Enable Big Blocks">
        <div className="flex items-start gap-3 p-4 bg-orange-500/10 border border-orange-500/20 rounded-xl mb-4">
          <AlertTriangle className="w-4 h-4 text-orange-400 shrink-0 mt-0.5" />
          <p className="text-sm text-orange-200">
            Default (small) blocks have a <strong>2M gas limit</strong> — not enough for contract deployment.
            Switch your address to <strong>big blocks (30M gas)</strong> first.
          </p>
        </div>
        <p className="text-sm text-muted-foreground">Toggle big blocks at:</p>
        <a href="https://hyperevm-block-toggle.vercel.app" target="_blank"
          className="flex items-center justify-between p-4 mt-2 bg-[#141419] border border-[#333344] rounded-xl group hover:border-primary/40 transition-all">
          <span className="text-white font-medium">hyperevm-block-toggle.vercel.app</span>
          <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
        </a>
      </StepSection>

      {/* Step 4 */}
      <StepSection step={4} title="Create & Deploy with Foundry">
        <div className="space-y-4">
          <CodeBlock label="Initialize a new Foundry project">
{`forge init my-hyperevm-contract
cd my-hyperevm-contract`}
          </CodeBlock>
          <CodeBlock label="Write your contract (src/Counter.sol — already exists in new projects)">
{`// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract Counter {
    uint256 public number;

    function setNumber(uint256 newNumber) public {
        number = newNumber;
    }

    function increment() public {
        number++;
    }
}`}
          </CodeBlock>
          <CodeBlock label="Deploy to HyperEVM Testnet">
{`forge create src/Counter.sol:Counter \\
  --rpc-url https://rpc.hyperliquid-testnet.xyz/evm \\
  --chain-id 998 \\
  --private-key $PRIVATE_KEY`}
          </CodeBlock>
        </div>
      </StepSection>

      {/* Step 5 */}
      <StepSection step={5} title="Verify on Purrsec">
        <p className="text-sm text-muted-foreground mb-4">
          Use Sourcify — the only working verifier for HyperEVM testnet. Replace <code className="text-accent">{"<CONTRACT_ADDRESS>"}</code> with your deployed address.
        </p>
        <CodeBlock label="Verify with Sourcify">
{`forge verify-contract <CONTRACT_ADDRESS> \\
  src/Counter.sol:Counter \\
  --chain-id 998 \\
  --verifier sourcify \\
  --verifier-url https://sourcify.parsec.finance/verify`}
        </CodeBlock>
        <p className="text-sm text-muted-foreground mt-4">
          View your verified contract on <a href="https://testnet.purrsec.com" target="_blank" className="text-accent underline">testnet.purrsec.com</a>.
        </p>
      </StepSection>

      {/* Next steps */}
      <section className="space-y-4 border-t border-[#333344] pt-8">
        <h2 className="text-xl font-bold text-white">Next Steps</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { title: "Smart Contract Patterns", desc: "ERC-20, WHYPE integration, and HyperEVM-specific patterns.", href: "/docs/examples/contracts" },
            { title: "HyperEVM Architecture", desc: "Deep dive into dual blocks, gas mechanics, and system addresses.", href: "/docs/hyperevm/architecture" },
            { title: "SDKs & APIs", desc: "Python, JS SDKs and the HyperCore REST/WebSocket API.", href: "/docs/sdk/python" },
          ].map(item => (
            <Link key={item.title} href={item.href}
              className="p-5 bg-[#141419] border border-[#333344] rounded-xl hover:border-primary/40 transition-all group">
              <h4 className="font-bold text-white group-hover:text-primary transition-colors mb-1">{item.title}</h4>
              <p className="text-xs text-muted-foreground">{item.desc}</p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  )
}

function StepSection({ step, title, children }: { step: number; title: string; children: React.ReactNode }) {
  return (
    <section className="space-y-4">
      <div className="flex items-center gap-4">
        <div className="w-9 h-9 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center text-primary font-bold text-sm shrink-0">
          {step}
        </div>
        <h2 className="text-xl font-bold text-white">{title}</h2>
      </div>
      <div className="ml-13 pl-1">{children}</div>
    </section>
  )
}

function CodeBlock({ label, children }: { label: string; children: string }) {
  return (
    <div className="bg-[#141419] border border-[#333344] rounded-xl overflow-hidden">
      <div className="px-4 py-2 bg-white/5 border-b border-[#333344] text-xs text-muted-foreground font-mono">{label}</div>
      <pre className="px-4 py-4 text-sm text-accent font-mono overflow-x-auto whitespace-pre-wrap">{children}</pre>
    </div>
  )
}
