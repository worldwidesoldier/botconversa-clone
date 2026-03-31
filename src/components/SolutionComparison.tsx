const painPoints = [
  "Slow, manual responses — customers wait hours",
  "Messages get lost across multiple team members",
  "No follow-up system — leads go cold",
  "Team overwhelmed with repetitive questions",
  "No data or insights on conversation performance",
  "Sales lost due to slow response times",
];
const gainPoints = [
  "AI responds instantly, 24/7 — zero wait time",
  "All conversations centralized, team aligned",
  "Automated follow-up sequences keep leads warm",
  "AI handles FAQs — team focuses on high-value sales",
  "Real-time metrics dashboard for full visibility",
  "3x faster response = 3x more conversions",
];

export function SolutionComparison() {
  return (
    <section style={{ background: "#f7faff", padding: "80px 24px" }}>
      <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
        <div style={{ textAlign: "center" }}>
          <h2 style={{ fontSize: "40px", fontWeight: 700, color: "#18191c", textAlign: "center", lineHeight: 1.2 }}>
            Why Your Business Needs BotConversa
          </h2>
          <p style={{ fontSize: "16px", color: "#6d6f74", textAlign: "center", maxWidth: "500px", margin: "12px auto 0" }}>
            See the difference between handling WhatsApp manually vs. with BotConversa automation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mt-12">
          {/* Without */}
          <div>
            <div style={{ background: "rgba(255,0,0,0.06)", borderRadius: "12px 12px 0 0", padding: "20px 24px" }}>
              <p style={{ fontSize: "18px", fontWeight: 700, color: "#dc2626", margin: 0 }}>Without BotConversa</p>
            </div>
            <div style={{ background: "#fff", borderRadius: "0 0 12px 12px", border: "1px solid rgba(255,0,0,0.1)" }}>
              {painPoints.map((p, i) => (
                <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: "12px", padding: "16px 24px", borderBottom: i < painPoints.length - 1 ? "1px solid rgba(0,0,0,0.05)" : "none" }}>
                  <span style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", width: "20px", height: "20px", borderRadius: "50%", background: "rgba(220,38,38,0.12)", color: "#dc2626", fontSize: "12px", fontWeight: 700, flexShrink: 0 }}>×</span>
                  <span style={{ fontSize: "14px", color: "#374151", lineHeight: 1.5 }}>{p}</span>
                </div>
              ))}
            </div>
          </div>

          {/* With */}
          <div>
            <div style={{ background: "rgba(43,118,229,0.08)", borderRadius: "12px 12px 0 0", padding: "20px 24px" }}>
              <p style={{ fontSize: "18px", fontWeight: 700, color: "#2b76e5", margin: 0 }}>With BotConversa</p>
            </div>
            <div style={{ background: "#fff", borderRadius: "0 0 12px 12px", border: "1px solid rgba(43,118,229,0.15)" }}>
              {gainPoints.map((g, i) => (
                <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: "12px", padding: "16px 24px", borderBottom: i < gainPoints.length - 1 ? "1px solid rgba(0,0,0,0.05)" : "none" }}>
                  <span style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", width: "20px", height: "20px", borderRadius: "50%", background: "rgba(22,163,74,0.12)", color: "#16a34a", fontSize: "12px", fontWeight: 700, flexShrink: 0 }}>✓</span>
                  <span style={{ fontSize: "14px", color: "#374151", lineHeight: 1.5 }}>{g}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div style={{ textAlign: "center", marginTop: "40px" }}>
          <a href="#pricing" style={{ background: "linear-gradient(180deg, #6ea8ff 0%, #2b76e5 100%)", borderRadius: "8px", padding: "16px 32px", color: "#fff", fontSize: "14px", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", display: "inline-flex", alignItems: "center", textDecoration: "none", border: "none" }}>
            Start Automating Today
          </a>
        </div>
      </div>
    </section>
  );
}
