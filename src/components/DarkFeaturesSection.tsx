import Image from "next/image";

const integrations = ["RD Station", "Gemini AI", "HubSpot", "Chat GPT", "Gmail", "Bitrix24", "WooCommerce", "Shopify"];
const aiSteps = ["New lead on WhatsApp", "AI Analysis", "AI leads the conversation", "Closing the deal"];

function IntegrationPill({ name }: { name: string }) {
  return (
    <div style={{ background: "rgba(255,255,255,0.07)", borderRadius: "40px", padding: "8px 20px", display: "flex", alignItems: "center", gap: "8px", flexShrink: 0, color: "rgba(255,255,255,0.8)", fontSize: "14px", fontWeight: 500, whiteSpace: "nowrap" }}>
      {name}
    </div>
  );
}

export function DarkFeaturesSection() {
  return (
    <section style={{ backgroundColor: "#18191c", padding: "80px 0 120px", position: "relative", overflow: "hidden" }}>
      {/* Blue glow */}
      <div aria-hidden="true" style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "300px", background: "radial-gradient(ellipse at center bottom, rgba(43,118,229,0.6) 0%, transparent 60%)", pointerEvents: "none" }} />

      {/* Header */}
      <div style={{ position: "relative", zIndex: 1, textAlign: "center", padding: "0 24px 80px" }}>
        <h2 style={{ fontSize: "48px", fontWeight: 700, color: "#fff", lineHeight: 1.1, maxWidth: "700px", margin: "0 auto", textAlign: "center" }}>
          Everything you need to succeed — without hiring
        </h2>
        <p style={{ fontSize: "16px", color: "rgba(255,255,255,0.6)", marginTop: "12px" }}>
          Designed for entrepreneurs, not for engineers
        </p>
      </div>

      {/* Feature 1: Build with blocks */}
      <div style={{ position: "relative", zIndex: 1, maxWidth: "1200px", margin: "0 auto", padding: "0 24px" }}>
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h3 style={{ fontSize: "28px", fontWeight: 700, color: "#fff", lineHeight: 1.3 }}>
              Build with blocks – or let AI build for you
            </h3>
            <p style={{ fontSize: "16px", color: "rgba(255,255,255,0.7)", lineHeight: 1.6, marginTop: "16px" }}>
              Create chatbots, automations, and AI assistants simply by connecting blocks — no programming required
            </p>
          </div>
          <div>
            <Image src="/images/product-dashboard.png" alt="Flow builder" width={600} height={400} style={{ width: "100%", height: "auto" }} />
          </div>
        </div>
      </div>

      {/* Integration marquee */}
      <div style={{ overflow: "hidden", padding: "48px 0", position: "relative", zIndex: 1 }}>
        <div style={{ display: "flex", width: "max-content" }}>
          <div className="animate-marquee" style={{ display: "flex", gap: "16px", flexShrink: 0 }}>
            {integrations.map((n) => <IntegrationPill key={n} name={n} />)}
          </div>
          <div className="animate-marquee" aria-hidden style={{ display: "flex", gap: "16px", flexShrink: 0 }}>
            {integrations.map((n) => <IntegrationPill key={n + "-2"} name={n} />)}
          </div>
        </div>
      </div>

      {/* Feature 3: AI Steps + Metrics */}
      <div style={{ position: "relative", zIndex: 1, maxWidth: "1200px", margin: "0 auto", padding: "0 24px" }}>
        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Left: Metrics card */}
          <div style={{ background: "rgba(255,255,255,0.05)", borderRadius: "12px", padding: "24px", border: "1px solid rgba(255,255,255,0.1)" }}>
            <h3 style={{ fontSize: "24px", fontWeight: 700, color: "#fff" }}>Real-time Metrics Control</h3>
            <p style={{ fontSize: "15px", color: "rgba(255,255,255,0.7)", marginTop: "12px", lineHeight: 1.6 }}>
              Monitor conversations and performance. Identify bottlenecks and expand with data—not with guesswork.
            </p>
            <Image src="/images/screenshot-1.webp" alt="Metrics dashboard" width={400} height={250} style={{ width: "100%", height: "auto", borderRadius: "8px", marginTop: "16px" }} />
          </div>

          {/* Right: AI steps */}
          <div>
            <div>
              {aiSteps.map((step) => (
                <div key={step} style={{ display: "flex", alignItems: "center", gap: "12px", padding: "12px 0", borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
                  <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#2b76e5", flexShrink: 0, display: "inline-block" }} />
                  <span style={{ fontSize: "14px", fontWeight: 500, color: "rgba(255,255,255,0.8)" }}>{step}</span>
                </div>
              ))}
            </div>
            <div style={{ background: "rgba(255,255,255,0.05)", borderRadius: "12px", padding: "24px", border: "1px solid rgba(255,255,255,0.1)", marginTop: "24px" }}>
              <h4 style={{ fontSize: "18px", fontWeight: 700, color: "#fff" }}>Let AI manage your chats</h4>
              <p style={{ fontSize: "14px", color: "rgba(255,255,255,0.7)", marginTop: "8px", lineHeight: 1.6 }}>
                Automatically qualify leads, manage chats, and scale your operations on WhatsApp—24/7, without manual work.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
