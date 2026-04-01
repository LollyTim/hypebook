"use client"

import { Badge } from "@/components/ui/badge"
import { Terminal, Wallet, Droplets, Code2, CheckCircle2, AlertTriangle, ExternalLink } from "lucide-react"

export default function TestnetPage() {
  return (
    <div className="space-y-12">
      <div className="space-y-4">
        <Badge variant="outline" className="text-primary border-primary/20">Testnet</Badge>
        <h1 className="text-4xl font-bold tracking-tight text-white">HyperEVM Testnet Setup</h1>
        <p className="text-xl text-muted-foreground leading-relaxed">
          Step-by-step guide to deploying and verifying smart contracts on the HyperEVM Testnet using Foundry.
          The testnet mirrors mainnet functionality — always validate here before deploying to mainnet.
        </p>
      </div>

      {/* Network Details */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-white">Network Details</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <NetRow label="Network Name" value="HyperEVM Testnet" />
          <NetRow label="Chain ID" value="998" />
          <NetRow label="RPC URL" value="https://rpc.hyperliquid-testnet.xyz/evm" />
          <NetRow label="Block Explorer" value="testnet.purrsec.com" />
          <NetRow label="Native Gas Token" value="HYPE (testnet)" />
          <NetRow label="Chainlist" value="chainlist.org/chain/998" />
        </div>
      </section>

      {/* Step 1 */}
      <StepSection step={1} icon={Wallet} title="Fund Your Wallet">
        <ol className="space-y-3 text-sm text-muted-foreground list-none">
          <StepItem n="a" text="Create a Hyperliquid account at app.hyperliquid-testnet.xyz and hold some testnet $USDC." />
          <StepItem n="b" text="Claim testnet $USDC from the official faucet (linked in the Hyperliquid testnet docs)." />
          <StepItem n="c" text="Swap testnet $USDC → $HYPE on the testnet trading platform." />
          <StepItem n="d" text="Transfer $HYPE from HyperCore → HyperEVM. You need HYPE on the EVM side for gas." />
        </ol>
        <div className="mt-4 bg-black/40 rounded-lg p-4 text-sm">
          <div className="text-muted-foreground text-xs mb-2">{"// Transfer HYPE from HyperCore to HyperEVM"}</div>
          <div className="text-accent font-mono">{"Send HYPE to: 0x2222222222222222222222222222222222222222"}</div>
        </div>
      </StepSection>

      {/* Step 2 */}
      <StepSection step={2} icon={Terminal} title="Add Network to MetaMask">
        <p className="text-sm text-muted-foreground mb-3">
          Go to <span className="text-accent">chainlist.org/chain/998</span> and click "Add to MetaMask", or add
          manually with the details below:
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
                  <td className="px-4 py-3 text-muted-foreground font-medium w-40">{k}</td>
                  <td className="px-4 py-3 text-accent font-mono">{v}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </StepSection>

      {/* Step 3 */}
      <StepSection step={3} icon={Code2} title="Enable Big Blocks for Deployment">
        <div className="flex items-start gap-3 p-4 bg-orange-500/10 border border-orange-500/20 rounded-xl mb-4">
          <AlertTriangle className="w-5 h-5 text-orange-400 shrink-0 mt-0.5" />
          <p className="text-sm text-orange-200">
            Small blocks have a <strong>2M gas limit</strong> — not enough to deploy most contracts.
            You <strong>must</strong> switch to big blocks (30M gas) before deploying.
          </p>
        </div>
        <p className="text-sm text-muted-foreground mb-3">Toggle your deployer address to big blocks using one of:</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 bg-[#141419] border border-[#333344] rounded-xl">
            <h4 className="font-bold text-white mb-1">Web Interface</h4>
            <p className="text-sm text-muted-foreground">Visit <span className="text-accent">hyperevm-block-toggle.vercel.app</span> and connect your wallet.</p>
          </div>
          <div className="p-4 bg-[#141419] border border-[#333344] rounded-xl">
            <h4 className="font-bold text-white mb-1">LayerZero CLI</h4>
            <p className="text-sm text-muted-foreground">Use the LayerZero CLI tool to switch block type programmatically.</p>
          </div>
        </div>
      </StepSection>

      {/* Step 4 */}
      <StepSection step={4} icon={Terminal} title="Deploy with Foundry">
        <p className="text-sm text-muted-foreground mb-4">
          HyperEVM is fully compatible with Foundry. Follow standard Foundry scripting practices.
          Use the testnet RPC and chain ID 998.
        </p>
        <div className="space-y-4">
          <CodeBlock label="Deploy command">
{`forge script script/Deploy.s.sol \\
  --rpc-url https://rpc.hyperliquid-testnet.xyz/evm \\
  --chain-id 998 \\
  --broadcast`}
          </CodeBlock>
          <CodeBlock label="Verify with Sourcify (the only working testnet verifier)">
{`forge verify-contract <CONTRACT_ADDRESS> \\
  src/YourContract.sol:YourContract \\
  --chain-id 998 \\
  --verifier sourcify \\
  --verifier-url https://sourcify.parsec.finance/verify`}
          </CodeBlock>
        </div>
        <div className="mt-4 flex items-start gap-3 p-4 bg-primary/5 border border-primary/20 rounded-xl">
          <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
          <p className="text-sm text-muted-foreground">
            <strong className="text-white">Sourcify</strong> is currently the only functional contract verification
            service on HyperEVM testnet. testnet.purrsec.com is the primary block explorer.
          </p>
        </div>
      </StepSection>

      {/* Quick Resources */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-white">Quick Resources</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { name: "Testnet App", url: "app.hyperliquid-testnet.xyz", desc: "Trade and transfer testnet funds" },
            { name: "Block Explorer", url: "testnet.purrsec.com", desc: "View transactions, contracts, blocks" },
            { name: "Chainlist", url: "chainlist.org/chain/998", desc: "One-click MetaMask network add" },
          ].map(r => (
            <div key={r.name} className="p-5 bg-[#141419] border border-[#333344] rounded-xl space-y-2">
              <div className="flex items-center justify-between">
                <h4 className="font-bold text-white">{r.name}</h4>
                <ExternalLink className="w-4 h-4 text-muted-foreground" />
              </div>
              <code className="text-xs text-accent font-mono">{r.url}</code>
              <p className="text-xs text-muted-foreground">{r.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

function NetRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-start gap-3 p-4 bg-[#141419] border border-[#333344] rounded-xl">
      <div>
        <div className="text-xs text-muted-foreground uppercase tracking-wider">{label}</div>
        <div className="text-white font-mono font-medium mt-0.5">{value}</div>
      </div>
    </div>
  )
}

function StepSection({ step, icon: Icon, title, children }: { step: number; icon: any; title: string; children: React.ReactNode }) {
  return (
    <section className="space-y-4">
      <div className="flex items-center gap-4">
        <div className="w-10 h-10 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center text-primary font-bold">
          {step}
        </div>
        <div className="flex items-center gap-2">
          <Icon className="w-5 h-5 text-primary" />
          <h2 className="text-xl font-bold text-white">{title}</h2>
        </div>
      </div>
      <div className="ml-14">{children}</div>
    </section>
  )
}

function StepItem({ n, text }: { n: string; text: string }) {
  return (
    <li className="flex gap-2">
      <span className="text-primary font-bold shrink-0">{n}.</span>
      <span>{text}</span>
    </li>
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
