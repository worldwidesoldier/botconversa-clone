function IconCustom() {
  return (
    <svg viewBox="0 0 48 48" fill="none" width="52" height="52">
      <defs>
        <linearGradient id="custom-g" x1="0" y1="0" x2="48" y2="48" gradientUnits="userSpaceOnUse">
          <stop stopColor="#2B5CE6" /><stop offset="1" stopColor="#8847E8" />
        </linearGradient>
      </defs>
      {/* Hexagon-like shape */}
      <circle cx="24" cy="24" r="22" stroke="url(#custom-g)" strokeWidth="1.5" fill="rgba(136,71,232,0.06)" />
      {/* Nodes */}
      <circle cx="24" cy="12" r="3.5" fill="url(#custom-g)" />
      <circle cx="38" cy="30" r="3.5" fill="url(#custom-g)" />
      <circle cx="10" cy="30" r="3.5" fill="url(#custom-g)" />
      {/* Lines */}
      <path d="M24 15.5L38 26.5M24 15.5L10 26.5M38 26.5L10 26.5" stroke="url(#custom-g)" strokeWidth="1.2" strokeDasharray="3 3" />
      {/* Center */}
      <circle cx="24" cy="24" r="5" fill="url(#custom-g)" opacity="0.9" />
    </svg>
  );
}

const includes = [
  "Reunião de onboarding gratuita",
  "Assistente configurado do zero",
  "Acompanhamento e ajustes contínuos",
  "Suporte direto via WhatsApp",
];

export function PricingSection() {
  return (
    <section id="contato" style={{ background: "#18191c", padding: "100px 32px" }}>
      <div style={{ textAlign: "center", maxWidth: "680px", margin: "0 auto" }}>
        <span style={{ display: "inline-block", background: "rgba(136,71,232,0.15)", color: "#a78bfa", borderRadius: "20px", padding: "5px 16px", fontSize: "12px", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "20px" }}>
          Investimento
        </span>
        <h2 style={{ fontSize: "clamp(28px,3.5vw,42px)", fontWeight: 800, color: "#fff", lineHeight: 1.1, letterSpacing: "-0.02em" }}>
          Vamos conversar sobre o seu negócio
        </h2>
        <p style={{ fontSize: "17px", color: "rgba(255,255,255,0.5)", marginTop: "14px", lineHeight: 1.6 }}>
          Cada negócio tem suas particularidades. Fale com a gente e receba uma proposta personalizada.
        </p>
      </div>

      {/* CTA card */}
      <div style={{ maxWidth: "580px", margin: "52px auto 0" }}>
        <div style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(136,71,232,0.25)", borderRadius: "20px", padding: "52px 48px", textAlign: "center", position: "relative", overflow: "hidden" }}>
          {/* Top glow */}
          <div aria-hidden style={{ position: "absolute", top: "-60px", left: "50%", transform: "translateX(-50%)", width: "320px", height: "200px", background: "radial-gradient(ellipse, rgba(136,71,232,0.25) 0%, transparent 70%)", pointerEvents: "none" }} />

          <div style={{ position: "relative", zIndex: 1 }}>
            {/* Icon */}
            <div style={{ display: "flex", justifyContent: "center", marginBottom: "24px" }}>
              <IconCustom />
            </div>

            <h3 style={{ fontSize: "26px", fontWeight: 800, color: "#fff", marginBottom: "12px", letterSpacing: "-0.01em" }}>
              Feito sob medida para você
            </h3>
            <p style={{ fontSize: "15px", color: "rgba(255,255,255,0.6)", lineHeight: 1.7, maxWidth: "380px", margin: "0 auto 36px" }}>
              Nossa equipe entende seu negócio, configura o assistente ideal e acompanha você de perto.
            </p>

            {/* Include list */}
            <div style={{ display: "flex", flexDirection: "column", gap: "10px", marginBottom: "40px", textAlign: "left" }}>
              {includes.map((item) => (
                <div key={item} style={{ display: "flex", alignItems: "center", gap: "12px", background: "rgba(255,255,255,0.04)", borderRadius: "10px", padding: "12px 16px", border: "1px solid rgba(255,255,255,0.06)" }}>
                  <svg viewBox="0 0 20 20" fill="none" width="18" height="18" flexShrink={0}>
                    <circle cx="10" cy="10" r="9" stroke="rgba(167,139,250,0.4)" strokeWidth="1" />
                    <path d="M6.5 10l2.5 2.5 4.5-5" stroke="#a78bfa" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <span style={{ fontSize: "14px", color: "rgba(255,255,255,0.75)", fontWeight: 500 }}>{item}</span>
                </div>
              ))}
            </div>

            <a
              href="https://wa.me/18625761010"
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: "inline-flex", alignItems: "center", gap: "10px", background: "linear-gradient(135deg,#2B5CE6,#8847E8)", borderRadius: "10px", padding: "16px 36px", color: "#fff", fontSize: "15px", fontWeight: 700, textDecoration: "none", boxShadow: "0 8px 28px rgba(136,71,232,0.4)", letterSpacing: "0.02em" }}
            >
              <svg viewBox="0 0 24 24" fill="white" width="17" height="17">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Falar com a ApexMind
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
