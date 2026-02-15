"use client"

import { Badge } from "@/components/ui/badge"
import { Code2, FileJson, Play, Copy, Terminal, Shield } from "lucide-react"

export default function SmartContractsPage() {
  return (
    <div className="space-y-12">
      <div className="space-y-4">
        <Badge variant="outline" className="text-primary border-primary/20">Code Examples</Badge>
        <h1 className="text-5xl font-bold tracking-tight text-white">Smart Contract Patterns</h1>
        <p className="text-xl text-muted-foreground leading-relaxed">
          Tested Solidity patterns for the HyperEVM. These examples demonstrate how to leverage L1-native features from within your contracts.
        </p>
      </div>

      <section className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-3xl font-bold text-white">1. Basic ERC-20 on HyperEVM</h2>
          <Badge variant="secondary">Standard</Badge>
        </div>
        <p className="text-muted-foreground">HyperEVM is fully EVM-compatible, meaning you can deploy standard OpenZeppelin contracts without modification.</p>
        <div className="bg-[#141419] border border-[#333344] rounded-xl p-6 font-mono text-sm overflow-x-auto">
          <pre className="text-accent">
{`// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract HypeToken is ERC20 {
    constructor() ERC20("HypeToken", "HYPE") {
        _mint(msg.sender, 1000000 * 10 ** decimals());
    }
}`}
          </pre>
        </div>
      </section>

      <section className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-3xl font-bold text-white">2. Interacting with L1 Precompiles</h2>
          <Badge className="bg-primary text-background">Native Feature</Badge>
        </div>
        <p className="text-muted-foreground">Use the <code>L1_Orderbook</code> precompile to query orderbook state directly from your contract.</p>
        <div className="bg-[#141419] border border-[#333344] rounded-xl p-6 font-mono text-sm overflow-x-auto">
          <pre className="text-primary">
{`interface IL1Orderbook {
    function getMidPrice(string calldata asset) external view returns (uint256);
}

contract PriceConsumer {
    IL1Orderbook public constant orderbook = IL1Orderbook(0x0000000000000000000000000000000000000101);

    function getHypePrice() public view returns (uint256) {
        return orderbook.getMidPrice("HYPE");
    }
}`}
          </pre>
        </div>
      </section>

      <section className="bg-destructive/5 border border-destructive/20 rounded-2xl p-8 flex gap-6 items-start">
        <Shield className="w-10 h-10 text-destructive shrink-0 mt-1" />
        <div className="space-y-2">
          <h4 className="font-bold text-white text-lg">Security Reminder</h4>
          <p className="text-muted-foreground">Always use the latest version of Solidity and perform audits on any contract handling significant user funds. HyperEVM's performance does not eliminate the need for standard smart contract security practices.</p>
        </div>
      </section>
    </div>
  )
}
