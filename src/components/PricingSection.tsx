import Image from "next/image";
import { CheckIcon } from "@/components/icons";

const starterFeatures: Array<{ label?: string; text?: string }> = [
  { label: "Main Tools:" },
  { text: "Overview of Key Indicators" },
  { text: "Contact Organization: Tags and Custom Fields" },
  { label: "Automation:" },
  { text: "Flow Builder" },
  { text: "Keywords" },
  { text: "Message sequences" },
  { text: "Campaigns" },
];

const proFeatures: Array<{ label?: string; text?: string }> = [
  { label: "Everything in the Starter, plus:" },
  { text: "AI Assistant" },
  { text: "Broadcasts" },
  { label: "Exclusive Tools:" },
  { text: "Access to integrations (Zapier, Webhook, and APIs)" },
  { text: "Webhook Automation" },
  { text: "GPT Specialist" },
  { text: "CRM Kanban" },
  { text: "Integrator (3-month license)" },
  { text: "Access to META's Official API" },
  { text: "Reduces risk of blockage" },
  { text: "Coexistence Connection" },
];

function FeatureList({ features }: { features: Array<{ label?: string; text?: string }> }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
      {features.map((item, i) =>
        item.label ? (
          <p key={i} style={{ fontSize: "11px", textTransform: "uppercase", letterSpacing: "0.1em", color: "rgba(255,255,255,0.4)", margin: "8px 0 0" }}>
            {item.label}
          </p>
        ) : (
          <div key={i} style={{ display: "flex", gap: "8px", alignItems: "center" }}>
            <CheckIcon />
            <span style={{ fontSize: "14px", color: "rgba(255,255,255,0.8)" }}>{item.text}</span>
          </div>
        )
      )}
    </div>
  );
}

export function PricingSection() {
  return (
    <section id="pricing" style={{ background: "#18191c", padding: "80px 0" }}>
      <div style={{ textAlign: "center" }}>
        <h2 style={{ fontSize: "40px", fontWeight: 700, color: "#fff", textAlign: "center" }}>Plans &amp; Pricing</h2>
        <p style={{ fontSize: "16px", color: "rgba(255,255,255,0.6)", textAlign: "center", maxWidth: "500px", margin: "12px auto 0" }}>
          Choose the plan that matches your workflow – no hidden fees, no surprises
        </p>
      </div>

      <div style={{ maxWidth: "900px", margin: "48px auto 0", padding: "0 24px", display: "flex", gap: "24px", flexWrap: "wrap" }}>
        {/* Starter */}
        <div style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "16px", padding: "32px", flex: "1 1 300px" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <span style={{ fontSize: "24px", fontWeight: 700, color: "#fff" }}>Beginner</span>
            <span style={{ background: "rgba(255,255,255,0.1)", borderRadius: "20px", padding: "4px 12px", fontSize: "12px", color: "rgba(255,255,255,0.7)" }}>Annual Plan</span>
          </div>
          <div style={{ display: "flex", alignItems: "baseline", gap: "2px", marginTop: "20px" }}>
            <span style={{ fontSize: "20px", color: "#fff", lineHeight: 1 }}>BRL</span>
            <span style={{ fontSize: "48px", fontWeight: 800, color: "#fff" }}>189</span>
            <span style={{ fontSize: "14px", color: "rgba(255,255,255,0.6)", marginLeft: "4px" }}>/month</span>
          </div>
          <p style={{ fontSize: "12px", color: "rgba(255,255,255,0.5)", marginTop: "4px" }}>Charged as a single payment of R$2,268</p>
          <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.6)", marginTop: "16px" }}>Up to 5 team members</p>
          <div style={{ borderTop: "1px solid rgba(255,255,255,0.08)", margin: "20px 0" }} />
          <FeatureList features={starterFeatures} />
          <button style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.2)", color: "#fff", borderRadius: "8px", padding: "14px 24px", width: "100%", marginTop: "24px", fontSize: "14px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", cursor: "pointer" }}>
            START WITH STARTER
          </button>
        </div>

        {/* Pro */}
        <div style={{ background: "rgba(43,118,229,0.12)", border: "1px solid rgba(43,118,229,0.4)", borderRadius: "16px", padding: "32px", flex: "1 1 300px", position: "relative" }}>
          <div style={{ background: "linear-gradient(180deg, #6ea8ff 0%, #2b76e5 100%)", borderRadius: "20px", padding: "4px 14px", fontSize: "11px", fontWeight: 700, color: "#fff", position: "absolute", top: "-12px", right: "24px" }}>
            Recommended
          </div>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <span style={{ fontSize: "24px", fontWeight: 700, color: "#fff" }}>Pro</span>
            <span style={{ background: "rgba(255,255,255,0.1)", borderRadius: "20px", padding: "4px 12px", fontSize: "12px", color: "rgba(255,255,255,0.7)" }}>Annual Plan</span>
          </div>
          <div style={{ display: "flex", alignItems: "baseline", gap: "2px", marginTop: "20px" }}>
            <span style={{ fontSize: "20px", color: "#fff", lineHeight: 1 }}>BRL</span>
            <span style={{ fontSize: "48px", fontWeight: 800, color: "#fff" }}>199</span>
            <span style={{ fontSize: "14px", color: "rgba(255,255,255,0.6)", marginLeft: "4px" }}>/month</span>
          </div>
          <p style={{ fontSize: "12px", color: "rgba(255,255,255,0.5)", marginTop: "4px" }}>Charged as a single payment of R$2,388</p>
          <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.6)", marginTop: "16px" }}>Unlimited team members</p>
          <div style={{ borderTop: "1px solid rgba(255,255,255,0.08)", margin: "20px 0" }} />
          <FeatureList features={proFeatures} />
          <button style={{ background: "linear-gradient(180deg, #6ea8ff 0%, #2b76e5 100%)", border: "none", color: "#fff", borderRadius: "8px", padding: "14px 24px", width: "100%", marginTop: "24px", fontSize: "14px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", cursor: "pointer" }}>
            START WITH PRO
          </button>
        </div>
      </div>

      {/* Guarantee Banner */}
      <div style={{ maxWidth: "900px", margin: "40px auto 0", padding: "0 24px" }}>
        <div style={{ background: "linear-gradient(135deg, #4d7bf3 0%, #2b76e5 100%)", borderRadius: "16px", padding: "32px 40px", display: "flex", alignItems: "center", gap: "32px", flexWrap: "wrap" }}>
          <Image src="/images/feature-1.png" alt="Guarantee" width={120} height={120} style={{ objectFit: "contain", flexShrink: 0 }} />
          <div style={{ flex: "1 1 280px" }}>
            <div style={{ background: "rgba(255,255,255,0.2)", borderRadius: "20px", padding: "4px 12px", display: "inline-flex", alignItems: "center", gap: "6px", fontSize: "12px", color: "#fff" }}>
              <span>👍</span><span>Special 100% Risk-Free Guarantee</span>
            </div>
            <h3 style={{ fontSize: "28px", fontWeight: 700, color: "#fff", marginTop: "8px" }}>
              Try BotConversa for 7 Days – No Commitment
            </h3>
            <p style={{ fontSize: "14px", color: "rgba(255,255,255,0.85)", maxWidth: "600px", lineHeight: 1.6, marginTop: "8px" }}>
              We are confident that you will love being part of our ecosystem. However, if for any reason you are not satisfied, you can request a full refund within 7 days of purchasing a monthly plan — or within 30 days for annual plans.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
