"use client"

import { Badge } from "@/components/ui/badge"
import { Code2, Shield, AlertTriangle, Info } from "lucide-react"

export default function SmartContractsPage() {
  return (
    <div className="space-y-12">
      <div className="space-y-4">
        <Badge variant="outline" className="text-primary border-primary/20">Code Examples</Badge>
        <h1 className="text-5xl font-bold tracking-tight text-white">Smart Contract Patterns</h1>
        <p className="text-xl text-muted-foreground leading-relaxed">
          Practical Solidity patterns for HyperEVM. HyperEVM is Cancun-compatible — any standard Ethereum
          contract works without modification. These examples also show HyperEVM-specific integrations.
        </p>
      </div>

      {/* Pattern 1 */}
      <ContractSection
        number={1}
        title="ERC-20 Token"
        badge="Standard"
        badgeVariant="secondary"
        description="HyperEVM is fully EVM-compatible. Deploy any OpenZeppelin contract without changes. This is a minimal ERC-20 example."
      >
        <CodeBlock label="src/MyToken.sol">{`// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract MyToken is ERC20, Ownable {
    constructor(address initialOwner)
        ERC20("MyToken", "MTK")
        Ownable(initialOwner)
    {
        _mint(msg.sender, 1_000_000 * 10 ** decimals());
    }

    function mint(address to, uint256 amount) public onlyOwner {
        _mint(to, amount);
    }
}`}
        </CodeBlock>
        <CodeBlock label="Deploy with Foundry">{`forge create src/MyToken.sol:MyToken \\
  --constructor-args <YOUR_ADDRESS> \\
  --rpc-url https://rpc.hyperliquid-testnet.xyz/evm \\
  --chain-id 998 \\
  --private-key $PRIVATE_KEY`}
        </CodeBlock>
      </ContractSection>

      {/* Pattern 2 */}
      <ContractSection
        number={2}
        title="Wrapped HYPE (WHYPE) Integration"
        badge="HyperEVM Native"
        badgeVariant="default"
        description="HYPE is the native gas token on HyperEVM. To use it in DeFi protocols (swaps, liquidity pools), wrap it into WHYPE — a standard ERC-20 backed 1:1 by HYPE."
      >
        <div className="bg-primary/5 border border-primary/20 rounded-xl p-5 space-y-1 mb-4">
          <div className="text-xs text-muted-foreground uppercase tracking-wider">WHYPE Contract Address (Mainnet & Testnet)</div>
          <code className="text-accent font-mono text-sm break-all">0x5555555555555555555555555555555555555555</code>
          <div className="text-xs text-muted-foreground mt-1">Immutable, canonical deployment. Name: Wrapped HYPE, Symbol: WHYPE, Decimals: 18</div>
        </div>
        <CodeBlock label="src/WHYPEIntegration.sol">{`// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

interface IWHYPE {
    function deposit() external payable;
    function withdraw(uint256 wad) external;
    function transfer(address to, uint256 amount) external returns (bool);
    function balanceOf(address account) external view returns (uint256);
    function approve(address spender, uint256 amount) external returns (bool);
}

contract WHYPEVault {
    IWHYPE public constant WHYPE =
        IWHYPE(0x5555555555555555555555555555555555555555);

    mapping(address => uint256) public shares;

    // Wrap native HYPE into WHYPE and deposit into vault
    function deposit() external payable {
        require(msg.value > 0, "Send HYPE to deposit");
        WHYPE.deposit{value: msg.value}();
        shares[msg.sender] += msg.value;
    }

    // Unwrap WHYPE back to native HYPE and return to user
    function withdraw(uint256 amount) external {
        require(shares[msg.sender] >= amount, "Insufficient shares");
        shares[msg.sender] -= amount;
        WHYPE.withdraw(amount);
        (bool ok, ) = msg.sender.call{value: amount}("");
        require(ok, "HYPE transfer failed");
    }

    receive() external payable {}
}`}
        </CodeBlock>
      </ContractSection>

      {/* Pattern 3 */}
      <ContractSection
        number={3}
        title="Reading HyperCore Prices (Oracle)"
        badge="HyperEVM Native"
        badgeVariant="default"
        description="HyperEVM contracts can read live oracle prices from HyperCore. The system precompile at the read address allows querying mark prices and other L1 state."
      >
        <div className="flex items-start gap-3 p-4 bg-orange-500/10 border border-orange-500/20 rounded-xl mb-4">
          <AlertTriangle className="w-4 h-4 text-orange-400 shrink-0 mt-0.5" />
          <p className="text-sm text-orange-200">
            HyperCore precompile addresses for reading L1 data are documented in the official Hyperliquid GitBook
            under <strong>HyperEVM → System Addresses & Precompiles</strong>. Always verify addresses from the
            official source before production deployment. The pattern below illustrates the interface shape.
          </p>
        </div>
        <CodeBlock label="src/HyperCoreOracle.sol">{`// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

// Interface shape — verify exact ABI from official Hyperliquid docs
// https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/hyperevm
interface IHyperCoreRead {
    // Returns oracle mid price for a HyperCore perp/spot asset
    // Asset index matches the index in /info "meta" endpoint
    function getOraclePrice(uint32 assetIndex) external view returns (uint64 price, uint32 decimals);
}

contract PriceConsumer {
    // Verify this address from official Hyperliquid documentation
    IHyperCoreRead public immutable hyperCore;

    constructor(address hyperCorePrecompile) {
        hyperCore = IHyperCoreRead(hyperCorePrecompile);
    }

    function getAssetPrice(uint32 assetIndex) public view returns (uint64, uint32) {
        return hyperCore.getOraclePrice(assetIndex);
    }
}`}
        </CodeBlock>
        <div className="flex items-start gap-3 p-4 bg-white/5 border border-white/10 rounded-xl mt-2">
          <Info className="w-4 h-4 text-accent shrink-0 mt-0.5" />
          <p className="text-sm text-muted-foreground">
            Asset indexes match the <code className="text-primary">universe</code> array from the{" "}
            <code className="text-primary">{"meta"}</code> Info API endpoint.
            Spot assets use index <code className="text-primary">10000 + spotIndex</code>.
          </p>
        </div>
      </ContractSection>

      {/* Pattern 4 */}
      <ContractSection
        number={4}
        title="HyperCore → HyperEVM Bridge Transfer"
        badge="System Address"
        badgeVariant="secondary"
        description="To programmatically move HYPE from HyperCore to a HyperEVM contract, send to the system bridge address. This works from both EOAs and contracts."
      >
        <CodeBlock label="src/BridgeReceiver.sol">{`// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract BridgeReceiver {
    // This is the system address that receives HYPE
    // sent from HyperCore → HyperEVM
    address public constant BRIDGE =
        0x2222222222222222222222222222222222222222;

    event Received(address indexed from, uint256 amount);

    // Your contract can receive HYPE bridged from HyperCore
    receive() external payable {
        emit Received(msg.sender, msg.value);
    }

    // Forward HYPE to the bridge (HyperEVM → HyperCore direction
    // requires using the official bridge UI or SDK)
    function getBalance() public view returns (uint256) {
        return address(this).balance;
    }
}`}
        </CodeBlock>
      </ContractSection>

      {/* Security reminder */}
      <section className="bg-destructive/5 border border-destructive/20 rounded-2xl p-8 flex gap-6 items-start">
        <Shield className="w-10 h-10 text-destructive shrink-0 mt-1" />
        <div className="space-y-2">
          <h4 className="font-bold text-white text-lg">Security Checklist</h4>
          <ul className="text-sm text-muted-foreground space-y-1">
            <li className="flex gap-2"><span className="text-primary">•</span>Always verify precompile addresses from the official Hyperliquid GitBook before production use.</li>
            <li className="flex gap-2"><span className="text-primary">•</span>Use the latest stable OpenZeppelin contracts (v5+).</li>
            <li className="flex gap-2"><span className="text-primary">•</span>Deploy to testnet (Chain ID: 998) and test thoroughly before mainnet (Chain ID: 999).</li>
            <li className="flex gap-2"><span className="text-primary">•</span>Get an audit for contracts handling significant user funds.</li>
            <li className="flex gap-2"><span className="text-primary">•</span>HyperEVM performance doesn't eliminate reentrancy, overflow, or access control risks.</li>
          </ul>
        </div>
      </section>
    </div>
  )
}

function ContractSection({ number, title, badge, badgeVariant, description, children }: {
  number: number; title: string; badge: string; badgeVariant: "default" | "secondary" | "outline";
  description: string; children: React.ReactNode
}) {
  return (
    <section className="space-y-5">
      <div className="flex items-center justify-between flex-wrap gap-3">
        <h2 className="text-2xl font-bold text-white">{number}. {title}</h2>
        <Badge variant={badgeVariant} className={badgeVariant === "default" ? "bg-primary text-background" : ""}>{badge}</Badge>
      </div>
      <p className="text-muted-foreground">{description}</p>
      <div className="space-y-3">{children}</div>
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
