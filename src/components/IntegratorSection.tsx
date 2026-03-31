import Image from "next/image";

const leftCards = [
  { title: "Marketing & CRM", tags: ["HubSpot", "RD Station", "ActiveCampaign", "Pipedrive"] },
  { title: "E-commerce", tags: ["Shopify", "WooCommerce", "Hotmart", "Kiwify"] },
];
const rightCards = [
  { title: "Communication", tags: ["Gmail", "Slack", "Discord", "Telegram"] },
  { title: "Automation", tags: ["Zapier", "Make", "n8n", "Webhook"] },
];
const marqueeItems = [
  { src: "/images/integration-1.webp", label: "RD Station" },
  { src: "/images/integration-2.webp", label: "Gemini AI" },
  { src: "/images/integration-3.webp", label: "HubSpot" },
  { src: "/images/integration-4.webp", label: "ChatGPT" },
  { src: "/images/integration-5.webp", label: "Gmail" },
  { src: "/images/integration-6.webp", label: "Bitrix24" },
  { src: "/images/integration-7.webp", label: "WooCommerce" },
  { src: "/images/integration-8.webp", label: "Shopify" },
];

function CategoryCard({ title, tags }: { title: string; tags: string[] }) {
  return (
    <div style={{ background: "rgba(255,255,255,0.05)", borderRadius: "12px", padding: "20px", border: "1px solid rgba(255,255,255,0.1)", marginBottom: "16px" }}>
      <p style={{ fontSize: "12px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", color: "rgba(255,255,255,0.4)", marginBottom: "12px" }}>
        {title}
      </p>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
        {tags.map((tag) => (
          <span key={tag} style={{ background: "rgba(255,255,255,0.08)", borderRadius: "20px", padding: "4px 10px", fontSize: "12px", color: "rgba(255,255,255,0.7)" }}>
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}

export function IntegratorSection() {
  return (
    <section style={{ background: "#18191c", padding: "80px 24px" }}>
      {/* Header */}
      <div style={{ textAlign: "center" }}>
        <span style={{ display: "inline-block", background: "rgba(43,118,229,0.15)", color: "#6ea8ff", borderRadius: "20px", padding: "4px 14px", fontSize: "12px", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "16px" }}>
          Integrator
        </span>
        <h2 style={{ fontSize: "40px", fontWeight: 700, color: "#fff", textAlign: "center", maxWidth: "700px", margin: "0 auto", lineHeight: 1.2 }}>
          Connect Your Entire Business
        </h2>
        <p style={{ fontSize: "16px", color: "rgba(255,255,255,0.6)", textAlign: "center", maxWidth: "500px", margin: "12px auto 0" }}>
          Integrate with your CRM, ERP, payment provider, or any internal system. No-code, no limits.
        </p>
      </div>

      {/* Hub visual — desktop */}
      <div className="hidden md:grid" style={{ gridTemplateColumns: "1fr auto 1fr", gap: "32px", alignItems: "center", maxWidth: "1000px", margin: "48px auto 0" } as React.CSSProperties}>
        <div>{leftCards.map((c) => <CategoryCard key={c.title} {...c} />)}</div>

        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
          <div style={{ background: "rgba(43,118,229,0.15)", borderRadius: "24px", width: "180px", height: "180px", boxShadow: "0 0 60px rgba(43,118,229,0.4), 0 0 120px rgba(43,118,229,0.2)", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
            <Image src="/images/logo-mark.png" alt="BotConversa" width={60} height={60} />
            <p style={{ fontWeight: 700, color: "#fff", fontSize: "14px", marginTop: "8px" }}>BotConversa</p>
          </div>
        </div>

        <div>{rightCards.map((c) => <CategoryCard key={c.title} {...c} />)}</div>
      </div>

      {/* Mobile: stacked cards */}
      <div className="md:hidden" style={{ marginTop: "48px" }}>
        {[...leftCards, ...rightCards].map((c) => <CategoryCard key={c.title} {...c} />)}
      </div>

      {/* Marquee */}
      <div style={{ overflow: "hidden", marginTop: "48px" }}>
        <div style={{ display: "flex", width: "max-content" }}>
          {[0, 1].map((dupeIdx) => (
            <div key={dupeIdx} className="animate-marquee" aria-hidden={dupeIdx > 0} style={{ display: "flex", gap: "16px", flexShrink: 0 }}>
              {marqueeItems.map((item) => (
                <div key={item.label} style={{ background: "rgba(255,255,255,0.07)", borderRadius: "40px", padding: "8px 16px", display: "flex", alignItems: "center", gap: "8px" }}>
                  <Image src={item.src} alt={item.label} width={40} height={40} style={{ borderRadius: "8px" }} />
                  <span style={{ color: "rgba(255,255,255,0.6)", fontSize: "13px", whiteSpace: "nowrap" }}>{item.label}</span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
