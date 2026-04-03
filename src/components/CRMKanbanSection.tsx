function IconPhone() {
  return (
    <svg viewBox="0 0 24 24" fill="none" width="32" height="32" stroke="url(#crm-grad)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <defs>
        <linearGradient id="crm-grad" x1="0" y1="0" x2="24" y2="24" gradientUnits="userSpaceOnUse">
          <stop stopColor="#2B5CE6" /><stop offset="1" stopColor="#8847E8" />
        </linearGradient>
      </defs>
      <rect x="5" y="2" width="14" height="20" rx="2" />
      <circle cx="12" cy="17" r="1" fill="url(#crm-grad)" stroke="none" />
    </svg>
  );
}

function IconCheck() {
  return (
    <svg viewBox="0 0 24 24" fill="none" width="32" height="32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" stroke="#25D366" />
      <path d="M8 12.5l3 3 5-5.5" stroke="#25D366" />
    </svg>
  );
}

function IconZap() {
  return (
    <svg viewBox="0 0 24 24" fill="none" width="22" height="22" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <defs>
        <linearGradient id="zap-g" x1="0" y1="0" x2="24" y2="24" gradientUnits="userSpaceOnUse">
          <stop stopColor="#2B5CE6" /><stop offset="1" stopColor="#8847E8" />
        </linearGradient>
      </defs>
      <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" stroke="url(#zap-g)" />
    </svg>
  );
}

function IconShield() {
  return (
    <svg viewBox="0 0 24 24" fill="none" width="22" height="22" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <defs>
        <linearGradient id="shield-g" x1="0" y1="0" x2="24" y2="24" gradientUnits="userSpaceOnUse">
          <stop stopColor="#2B5CE6" /><stop offset="1" stopColor="#8847E8" />
        </linearGradient>
      </defs>
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="url(#shield-g)" />
      <path d="M9 12l2 2 4-4" stroke="url(#shield-g)" />
    </svg>
  );
}

function IconRepeat() {
  return (
    <svg viewBox="0 0 24 24" fill="none" width="22" height="22" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <defs>
        <linearGradient id="rep-g" x1="0" y1="0" x2="24" y2="24" gradientUnits="userSpaceOnUse">
          <stop stopColor="#2B5CE6" /><stop offset="1" stopColor="#8847E8" />
        </linearGradient>
      </defs>
      <path d="M17 2l4 4-4 4" stroke="url(#rep-g)" />
      <path d="M3 11V9a4 4 0 0 1 4-4h14" stroke="url(#rep-g)" />
      <path d="M7 22l-4-4 4-4" stroke="url(#rep-g)" />
      <path d="M21 13v2a4 4 0 0 1-4 4H3" stroke="url(#rep-g)" />
    </svg>
  );
}

const featureCards = [
  { Icon: IconZap,    title: "Configuração Rápida",     text: "Em poucos dias úteis seu assistente já está funcionando" },
  { Icon: IconShield, title: "Seu Número, Suas Regras", text: "Use o número que seus clientes já conhecem" },
  { Icon: IconRepeat, title: "Sem Interrupção",         text: "Você continua atendendo normalmente enquanto configuramos" },
];

export function CRMKanbanSection() {
  return (
    <section style={{ background: "#f7faff", padding: "100px 32px" }}>
      <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
        {/* Header */}
        <div style={{ textAlign: "center" }}>
          <span style={{ display: "inline-block", background: "linear-gradient(135deg, rgba(43,92,230,0.1), rgba(136,71,232,0.1))", border: "1px solid rgba(136,71,232,0.2)", color: "#5b42d8", borderRadius: "20px", padding: "5px 16px", fontSize: "12px", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase" }}>
            Conexão Simples
          </span>
          <h2 style={{ fontSize: "clamp(28px,3.5vw,42px)", fontWeight: 800, color: "#18191c", textAlign: "center", marginTop: "16px", lineHeight: 1.1, letterSpacing: "-0.02em" }}>
            Conectamos ao{" "}
            <span style={{ background: "linear-gradient(135deg,#2B5CE6,#8847E8)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              seu WhatsApp
            </span>
          </h2>
          <p style={{ fontSize: "16px", color: "#6d6f74", textAlign: "center", maxWidth: "480px", margin: "14px auto 0", lineHeight: 1.6 }}>
            Sem precisar trocar de número. Sem complicação técnica. Você escaneia um QR Code e o assistente já está funcionando.
          </p>
        </div>

        {/* 3-step flow */}
        <div style={{ background: "#fff", borderRadius: "20px", border: "1px solid rgba(0,0,0,0.07)", padding: "52px 48px", marginTop: "52px", boxShadow: "0 4px 32px rgba(0,0,0,0.05)" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "0", justifyContent: "center", flexWrap: "wrap", rowGap: "32px" }}>

            {/* Step 1 */}
            <div style={{ textAlign: "center", minWidth: "140px" }}>
              <div style={{ width: "80px", height: "80px", borderRadius: "20px", background: "linear-gradient(135deg, rgba(43,92,230,0.08), rgba(136,71,232,0.08))", border: "1px solid rgba(136,71,232,0.15)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 14px" }}>
                <IconPhone />
              </div>
              <p style={{ fontSize: "14px", fontWeight: 600, color: "#18191c", margin: "0 0 4px" }}>Seu número de WhatsApp</p>
              <p style={{ fontSize: "12px", color: "#9ca3af" }}>O mesmo que você já usa</p>
            </div>

            {/* Arrow */}
            <div style={{ padding: "0 20px", flexShrink: 0 }}>
              <svg viewBox="0 0 32 16" width="32" height="16" fill="none">
                <defs>
                  <linearGradient id="arr-g" x1="0" y1="0" x2="32" y2="0" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#2B5CE6" /><stop offset="1" stopColor="#8847E8" />
                  </linearGradient>
                </defs>
                <path d="M0 8h28M22 2l8 6-8 6" stroke="url(#arr-g)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>

            {/* Step 2 */}
            <div style={{ textAlign: "center", minWidth: "140px" }}>
              <div style={{ width: "80px", height: "80px", borderRadius: "20px", background: "linear-gradient(135deg, rgba(43,92,230,0.08), rgba(136,71,232,0.08))", border: "1px solid rgba(136,71,232,0.15)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 14px" }}>
                <svg viewBox="0 0 100 100" width="40" height="40" fill="none">
                  <defs>
                    <linearGradient id="qr-g1" x1="0" y1="0" x2="100" y2="100" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#2B5CE6" /><stop offset="1" stopColor="#8847E8" />
                    </linearGradient>
                  </defs>
                  <rect x="10" y="10" width="32" height="32" rx="4" fill="url(#qr-g1)" opacity="0.7" />
                  <rect x="16" y="16" width="20" height="20" rx="2" fill="white" />
                  <rect x="20" y="20" width="12" height="12" rx="1" fill="url(#qr-g1)" />
                  <rect x="58" y="10" width="32" height="32" rx="4" fill="url(#qr-g1)" opacity="0.7" />
                  <rect x="64" y="16" width="20" height="20" rx="2" fill="white" />
                  <rect x="68" y="20" width="12" height="12" rx="1" fill="url(#qr-g1)" />
                  <rect x="10" y="58" width="32" height="32" rx="4" fill="url(#qr-g1)" opacity="0.7" />
                  <rect x="16" y="64" width="20" height="20" rx="2" fill="white" />
                  <rect x="20" y="68" width="12" height="12" rx="1" fill="url(#qr-g1)" />
                  {[58,70,82].map(x => <rect key={x} x={x} y="58" width="8" height="8" rx="1" fill="url(#qr-g1)" opacity="0.6" />)}
                  {[58,82].map(x => <rect key={x} x={x} y="70" width="8" height="8" rx="1" fill="url(#qr-g1)" opacity="0.6" />)}
                  <rect x="58" y="82" width="20" height="8" rx="1" fill="url(#qr-g1)" opacity="0.6" />
                  <rect x="82" y="82" width="8" height="8" rx="1" fill="url(#qr-g1)" opacity="0.6" />
                </svg>
              </div>
              <p style={{ fontSize: "14px", fontWeight: 600, color: "#18191c", margin: "0 0 4px" }}>Escaneia o QR Code</p>
              <p style={{ fontSize: "12px", color: "#9ca3af" }}>Como conectar um aparelho</p>
            </div>

            {/* Arrow */}
            <div style={{ padding: "0 20px", flexShrink: 0 }}>
              <svg viewBox="0 0 32 16" width="32" height="16" fill="none">
                <path d="M0 8h28M22 2l8 6-8 6" stroke="url(#arr-g)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>

            {/* Step 3 */}
            <div style={{ textAlign: "center", minWidth: "140px" }}>
              <div style={{ width: "80px", height: "80px", borderRadius: "20px", background: "linear-gradient(135deg, rgba(43,92,230,0.08), rgba(136,71,232,0.08))", border: "1px solid rgba(136,71,232,0.15)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 14px" }}>
                <IconCheck />
              </div>
              <p style={{ fontSize: "14px", fontWeight: 600, color: "#18191c", margin: "0 0 4px" }}>Assistente online</p>
              <p style={{ fontSize: "12px", color: "#9ca3af" }}>Respondendo em segundos</p>
            </div>
          </div>

          {/* Info strip */}
          <div style={{ background: "linear-gradient(135deg, rgba(43,92,230,0.05), rgba(136,71,232,0.05))", border: "1px solid rgba(136,71,232,0.12)", borderRadius: "10px", padding: "14px 20px", textAlign: "center", maxWidth: "500px", margin: "40px auto 0", display: "flex", alignItems: "center", gap: "10px", justifyContent: "center" }}>
            <IconShield />
            <p style={{ fontSize: "14px", color: "#5b42d8", fontWeight: 500, margin: 0 }}>
              Funciona com o seu número atual — sem número novo ou chip separado
            </p>
          </div>
        </div>

        {/* Feature cards */}
        <div className="grid md:grid-cols-3 gap-6 mt-10">
          {featureCards.map(({ Icon, title, text }) => (
            <div key={title} style={{ background: "#fff", borderRadius: "14px", padding: "28px 24px", border: "1px solid rgba(0,0,0,0.06)", boxShadow: "0 2px 12px rgba(0,0,0,0.04)" }}>
              <div style={{ width: "44px", height: "44px", borderRadius: "12px", background: "linear-gradient(135deg, rgba(43,92,230,0.08), rgba(136,71,232,0.08))", border: "1px solid rgba(136,71,232,0.12)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <Icon />
              </div>
              <div style={{ fontSize: "16px", fontWeight: 700, color: "#18191c", marginTop: "14px" }}>{title}</div>
              <div style={{ fontSize: "14px", color: "#6d6f74", marginTop: "8px", lineHeight: 1.6 }}>{text}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
