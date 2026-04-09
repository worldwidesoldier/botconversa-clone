// WhatsApp chat mockup — pixel-accurate dark mode replica
function ChatMockup() {
  const msgs = [
    { text: "Oi! Qual o horário de vocês hoje?", sent: false, time: "14:22" },
    { text: "Olá! Atendemos até às 18h hoje. Posso te ajudar em algo mais? 😊", sent: true, time: "14:22", read: true },
    { text: "Quero agendar uma consulta pra amanhã", sent: false, time: "14:23" },
    { text: "Claro! Temos horários às 9h, 11h e 15h. Qual prefere?", sent: true, time: "14:23", read: true },
    { text: "11h tá ótimo!", sent: false, time: "14:24" },
  ];

  // Double blue tick (read receipt)
  const BlueTick = () => (
    <svg viewBox="0 0 16 11" width="16" height="11" fill="none" style={{ display: "inline-block", verticalAlign: "middle", marginLeft: "3px" }}>
      <path d="M1 5.5L4.5 9L10 3" stroke="#53BDEB" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M6 5.5L9.5 9L15 3" stroke="#53BDEB" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );

  return (
    <div style={{ borderRadius: "12px", overflow: "hidden", maxWidth: "360px", width: "100%", boxShadow: "0 24px 64px rgba(0,0,0,0.5)", border: "1px solid rgba(255,255,255,0.06)" }}>
      {/* Status bar */}
      <div style={{ background: "#1f2c34", padding: "6px 16px 4px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <span style={{ fontSize: "11px", color: "#e9edef", fontWeight: 600 }}>9:14</span>
        <div style={{ display: "flex", gap: "6px", alignItems: "center" }}>
          {/* Signal bars */}
          <svg viewBox="0 0 17 12" width="17" height="12" fill="#e9edef">
            <rect x="0" y="7" width="3" height="5" rx="0.5"/>
            <rect x="4.5" y="4.5" width="3" height="7.5" rx="0.5"/>
            <rect x="9" y="2" width="3" height="10" rx="0.5"/>
            <rect x="13.5" y="0" width="3" height="12" rx="0.5"/>
          </svg>
          {/* Battery */}
          <svg viewBox="0 0 25 12" width="25" height="12" fill="none">
            <rect x="0.5" y="0.5" width="21" height="11" rx="3" stroke="#e9edef" strokeOpacity="0.35"/>
            <rect x="22" y="3.5" width="2.5" height="5" rx="1" fill="#e9edef" fillOpacity="0.4"/>
            <rect x="2" y="2" width="16" height="8" rx="2" fill="#e9edef"/>
          </svg>
        </div>
      </div>

      {/* WhatsApp header */}
      <div style={{ background: "#1f2c34", padding: "8px 12px 10px", display: "flex", alignItems: "center", gap: "10px", borderBottom: "1px solid rgba(255,255,255,0.04)" }}>
        {/* Back arrow */}
        <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="#00a884" strokeWidth="2" strokeLinecap="round">
          <path d="M19 12H5M12 5l-7 7 7 7"/>
        </svg>
        {/* Avatar — ApexMind logo */}
        <div style={{ flexShrink: 0 }}>
          <div style={{ width: "76px", height: "76px", borderRadius: "50%", overflow: "hidden", background: "#ffffff", display: "flex", alignItems: "center", justifyContent: "center" }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/apexmind-logo-new.png" alt="ApexMind" width={76} height={76} style={{ width: "100%", height: "100%", objectFit: "contain", padding: "6px" }} />
          </div>
        </div>
        {/* Name + status */}
        <div style={{ flex: 1 }}>
          <p style={{ color: "#e9edef", fontSize: "14px", fontWeight: 600, margin: 0, lineHeight: 1.2 }}>ApexMind</p>
          <p style={{ color: "#00a884", fontSize: "11.5px", margin: 0 }}>online</p>
        </div>
        {/* Action icons: video · phone · more */}
        <div style={{ display: "flex", gap: "20px", alignItems: "center" }}>
          {/* Video call */}
          <svg viewBox="0 0 24 24" width="21" height="21" fill="#aebac1">
            <path d="M17 10.5V7a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-3.5l4 4v-11l-4 4z"/>
          </svg>
          {/* Phone call */}
          <svg viewBox="0 0 24 24" width="20" height="20" fill="#aebac1">
            <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z"/>
          </svg>
          {/* Three dots */}
          <svg viewBox="0 0 24 24" width="20" height="20" fill="#aebac1">
            <circle cx="12" cy="5" r="1.5"/><circle cx="12" cy="12" r="1.5"/><circle cx="12" cy="19" r="1.5"/>
          </svg>
        </div>
      </div>

      {/* Chat background */}
      <div style={{ background: "#0b141a", padding: "12px 10px", display: "flex", flexDirection: "column", gap: "3px", minHeight: "280px", position: "relative" }}>
        {/* Date separator */}
        <div style={{ textAlign: "center", margin: "4px 0 8px" }}>
          <span style={{ background: "#182229", color: "#8696a0", fontSize: "11px", borderRadius: "6px", padding: "4px 10px", display: "inline-block" }}>HOJE</span>
        </div>

        {msgs.map((m, i) => (
          <div key={i} style={{ display: "flex", justifyContent: m.sent ? "flex-end" : "flex-start", marginBottom: "2px" }}>
            <div style={{
              background: m.sent ? "#005c4b" : "#202c33",
              borderRadius: m.sent ? "7.5px 7.5px 0 7.5px" : "0 7.5px 7.5px 7.5px",
              padding: "6px 9px 6px 9px",
              maxWidth: "76%",
              minWidth: "60px",
              position: "relative",
              boxShadow: "0 1px 1px rgba(0,0,0,0.3)",
            }}>
              <p style={{ fontSize: "13.5px", color: "#e9edef", margin: 0, lineHeight: 1.45, wordBreak: "break-word" }}>{m.text}</p>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "flex-end", gap: "2px", marginTop: "2px" }}>
                <span style={{ fontSize: "10.5px", color: "#8696a0" }}>{m.time}</span>
                {m.sent && <BlueTick />}
              </div>
            </div>
          </div>
        ))}

        {/* Typing indicator */}
        <div style={{ display: "flex", justifyContent: "flex-start", marginTop: "2px" }}>
          <div style={{ background: "#202c33", borderRadius: "0 7.5px 7.5px 7.5px", padding: "10px 14px", boxShadow: "0 1px 1px rgba(0,0,0,0.3)" }}>
            <div style={{ display: "flex", gap: "4px", alignItems: "center" }}>
              {[0,1,2].map(i => (
                <div key={i} style={{ width: "7px", height: "7px", borderRadius: "50%", background: "#8696a0", animation: `waDot 1.4s ease-in-out ${i*0.2}s infinite` }} />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Input bar */}
      <div style={{ background: "#1f2c34", padding: "8px 10px", display: "flex", alignItems: "center", gap: "8px" }}>
        <div style={{ flex: 1, background: "#2a3942", borderRadius: "24px", padding: "8px 16px", display: "flex", alignItems: "center" }}>
          <svg viewBox="0 0 24 24" width="18" height="18" fill="#8696a0"><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm4.24 16L12 15.45 7.77 18l1.12-4.81-3.73-3.23 4.92-.42L12 5l1.92 4.53 4.92.42-3.73 3.23L16.23 18z"/></svg>
          <span style={{ fontSize: "13px", color: "#8696a0", marginLeft: "8px", flex: 1 }}>Mensagem</span>
          <svg viewBox="0 0 24 24" width="18" height="18" fill="#8696a0"><path d="M12 15c1.66 0 3-1.34 3-3V6c0-1.66-1.34-3-3-3S9 4.34 9 6v6c0 1.66 1.34 3 3 3zm5.91-3c-.49 0-.9.36-.98.85C16.52 15.2 14.47 17 12 17s-4.52-1.8-4.93-4.15c-.08-.49-.49-.85-.98-.85-.61 0-1.09.54-1 1.14.49 3 2.89 5.35 5.91 5.78V21c0 .55.45 1 1 1s1-.45 1-1v-2.08c3.02-.43 5.42-2.78 5.91-5.78.1-.6-.39-1.14-1-1.14z"/></svg>
        </div>
        <div style={{ width: "40px", height: "40px", borderRadius: "50%", background: "#00a884", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
          <svg viewBox="0 0 24 24" width="20" height="20" fill="white"><path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/></svg>
        </div>
      </div>
    </div>
  );
}

// Metrics dashboard mockup — with Atendimentos em Aberto + Conversas Recentes
function MetricsMockup() {
  const abertos = [
    { num: "9876-5432", status: "Aguardando",     color: "#f59e0b" },
    { num: "8295-8808", status: "Em Atendimento", color: "#25D366" },
    { num: "9989-1416", status: "Em Atendimento", color: "#25D366" },
  ];
  const recentes = [
    { name: "Carlos Silva",   status: "Auto",   msg: "Qual o horário de atendimento?", min: "2" },
    { name: "Ana Costa",      status: "Humano", msg: "Gostaria de agendar uma visita", min: "5" },
    { name: "Roberto Mendes", status: "Auto",   msg: "Vocês têm promoção?",            min: "12" },
    { name: "Juliana Santos", status: "Auto",   msg: "Preciso de uma cotação",         min: "18" },
  ];

  return (
    <div style={{ background: "#111418", borderRadius: "16px", border: "1px solid rgba(255,255,255,0.07)", overflow: "hidden", maxWidth: "480px", width: "100%" }}>
      {/* macOS chrome */}
      <div style={{ background: "#1a1d24", padding: "12px 18px", borderBottom: "1px solid rgba(255,255,255,0.06)", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <div style={{ display: "flex", gap: "6px" }}>
          {["#FF5F57","#FEBC2E","#28C840"].map(c => <div key={c} style={{ width: "10px", height: "10px", borderRadius: "50%", background: c, opacity: 0.7 }} />)}
        </div>
        <span style={{ fontSize: "11px", color: "rgba(255,255,255,0.35)", fontWeight: 500 }}>painel.apexmind.com</span>
        <div style={{ width: "46px" }} />
      </div>

      <div style={{ padding: "16px 18px" }}>
        {/* KPI strip */}
        <div style={{ display: "flex", gap: "8px", marginBottom: "14px" }}>
          {[
            { label: "Total de Conversas", value: "1.247", badge: "↑18%", badgeColor: "#25D366" },
            { label: "Tempo de Resposta",  value: "2.3s",  badge: null,   badgeColor: "#6B8FFF" },
            { label: "Leads Qualificados", value: "312",   badge: "↑9%",  badgeColor: "#a78bfa" },
          ].map(k => (
            <div key={k.label} style={{ flex: 1, background: "rgba(255,255,255,0.04)", borderRadius: "8px", padding: "8px 10px", border: "1px solid rgba(255,255,255,0.05)" }}>
              <p style={{ fontSize: "8.5px", color: "rgba(255,255,255,0.3)", textTransform: "uppercase", letterSpacing: "0.06em", margin: "0 0 4px" }}>{k.label}</p>
              <div style={{ display: "flex", alignItems: "baseline", gap: "4px" }}>
                <span style={{ fontSize: "17px", fontWeight: 800, color: k.badgeColor, lineHeight: 1 }}>{k.value}</span>
                {k.badge && <span style={{ fontSize: "8px", color: k.badgeColor, fontWeight: 700 }}>{k.badge}</span>}
              </div>
            </div>
          ))}
        </div>

        {/* Row: atendimentos em aberto + chart */}
        <div style={{ display: "flex", gap: "10px", marginBottom: "12px" }}>
          {/* Atendimentos em aberto — esquerda */}
          <div style={{ flex: 1.1, background: "rgba(255,255,255,0.03)", borderRadius: "8px", padding: "10px", border: "1px solid rgba(255,255,255,0.05)" }}>
            <p style={{ fontSize: "8.5px", color: "rgba(255,255,255,0.3)", margin: "0 0 8px", textTransform: "uppercase", letterSpacing: "0.06em" }}>Atendimentos em Aberto</p>
            {abertos.map((a, i) => (
              <div key={i} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: i < 2 ? "8px" : 0, background: "rgba(255,255,255,0.03)", borderRadius: "6px", padding: "5px 7px" }}>
                <div>
                  <p style={{ fontSize: "9px", color: "rgba(255,255,255,0.6)", margin: "0 0 2px", fontWeight: 600 }}>···{a.num}</p>
                  <span style={{ fontSize: "7.5px", fontWeight: 700, color: a.color, background: `${a.color}1a`, borderRadius: "3px", padding: "1px 5px" }}>{a.status}</span>
                </div>
                <div style={{ fontSize: "7px", color: a.color === "#25D366" ? "#25D366" : "#f59e0b", background: a.color === "#25D366" ? "rgba(37,211,102,0.12)" : "rgba(245,158,11,0.12)", borderRadius: "4px", padding: "2px 6px", fontWeight: 600 }}>
                  {a.color === "#25D366" ? "ASSUMIR" : "AGUARD."}
                </div>
              </div>
            ))}
          </div>

          {/* Horizontal bar chart — direita */}
          <div style={{ flex: 1, background: "rgba(255,255,255,0.03)", borderRadius: "8px", padding: "10px 10px 10px", border: "1px solid rgba(255,255,255,0.05)" }}>
            <p style={{ fontSize: "8.5px", color: "rgba(255,255,255,0.3)", margin: "0 0 9px", textTransform: "uppercase", letterSpacing: "0.06em" }}>Conversas / semana</p>
            {[
              { day: "Seg", val: 35, max: 90 },
              { day: "Ter", val: 52, max: 90 },
              { day: "Qua", val: 44, max: 90 },
              { day: "Qui", val: 68, max: 90 },
              { day: "Sex", val: 58, max: 90 },
              { day: "Sáb", val: 75, max: 90 },
              { day: "Dom", val: 90, max: 90 },
            ].map((d, i) => (
              <div key={i} style={{ display: "flex", alignItems: "center", gap: "5px", marginBottom: i < 6 ? "5px" : 0 }}>
                <span style={{ fontSize: "7.5px", color: "rgba(255,255,255,0.28)", width: "20px", flexShrink: 0, textAlign: "right" }}>{d.day}</span>
                <div style={{ flex: 1, height: "5px", background: "rgba(255,255,255,0.06)", borderRadius: "3px", overflow: "hidden" }}>
                  <div style={{
                    height: "100%",
                    width: `${(d.val / d.max) * 100}%`,
                    borderRadius: "3px",
                    background: i === 6
                      ? "linear-gradient(90deg,#25D366,#00c85a)"
                      : "rgba(37,211,102,0.38)",
                  }} />
                </div>
                <span style={{ fontSize: "7px", color: i === 6 ? "#25D366" : "rgba(255,255,255,0.22)", width: "14px", flexShrink: 0, fontWeight: i === 6 ? 700 : 400 }}>{d.val}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Conversas Recentes */}
        <div style={{ background: "rgba(255,255,255,0.03)", borderRadius: "8px", border: "1px solid rgba(255,255,255,0.05)", overflow: "hidden" }}>
          <div style={{ padding: "8px 12px", borderBottom: "1px solid rgba(255,255,255,0.05)", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <span style={{ fontSize: "10px", fontWeight: 700, color: "#e9edef" }}>Conversas Recentes</span>
            <div style={{ background: "rgba(255,255,255,0.06)", borderRadius: "5px", padding: "2px 8px", display: "flex", alignItems: "center", gap: "4px" }}>
              <svg viewBox="0 0 16 16" width="9" height="9" fill="rgba(255,255,255,0.3)"><path d="M6.5 1a5.5 5.5 0 1 0 0 11 5.5 5.5 0 0 0 0-11ZM0 6.5a6.5 6.5 0 1 1 11.59 4.09l3.41 3.41-1 1L10.58 11.6A6.5 6.5 0 0 1 0 6.5z"/></svg>
              <span style={{ fontSize: "8px", color: "rgba(255,255,255,0.25)" }}>Buscar</span>
            </div>
          </div>
          {/* Header row */}
          <div style={{ display: "grid", gridTemplateColumns: "1.2fr 52px 1.4fr 28px", padding: "5px 12px 4px", borderBottom: "1px solid rgba(255,255,255,0.04)" }}>
            {["Cliente","Status","Última Mensagem","min"].map(h => (
              <span key={h} style={{ fontSize: "7.5px", color: "rgba(255,255,255,0.22)", textTransform: "uppercase", letterSpacing: "0.06em" }}>{h}</span>
            ))}
          </div>
          {recentes.map((r, i) => (
            <div key={i} style={{ display: "grid", gridTemplateColumns: "1.2fr 52px 1.4fr 28px", padding: "7px 12px", borderBottom: i < 3 ? "1px solid rgba(255,255,255,0.03)" : "none", alignItems: "center" }}>
              <span style={{ fontSize: "10px", fontWeight: 600, color: "#e9edef" }}>{r.name}</span>
              <span style={{
                fontSize: "8px", fontWeight: 700, borderRadius: "4px", padding: "2px 6px", display: "inline-block", width: "fit-content",
                color: r.status === "Humano" ? "#6B8FFF" : "#25D366",
                background: r.status === "Humano" ? "rgba(107,143,255,0.15)" : "rgba(37,211,102,0.12)",
              }}>{r.status}</span>
              <span style={{ fontSize: "9px", color: "rgba(255,255,255,0.4)", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{r.msg}</span>
              <span style={{ fontSize: "9px", color: "rgba(255,255,255,0.25)", textAlign: "right" }}>{r.min}</span>
            </div>
          ))}
        </div>

        {/* Live */}
        <div style={{ display: "flex", alignItems: "center", gap: "5px", marginTop: "10px" }}>
          <span style={{ width: "5px", height: "5px", borderRadius: "50%", background: "#25D366", display: "inline-block" }} />
          <span style={{ fontSize: "10px", color: "rgba(255,255,255,0.3)" }}>Atualizado em tempo real</span>
        </div>
      </div>
    </div>
  );
}

const steps = [
  "Cliente manda mensagem",
  "IA analisa o contexto",
  "Resposta automática enviada",
  "Handoff para atendente (quando necessário)",
];

export function DarkFeaturesSection() {
  return (
    <section id="como-funciona" className="pt-14 pb-16 md:pt-[100px] md:pb-[120px]" style={{ backgroundColor: "#18191c", position: "relative", overflow: "hidden" }}>
      {/* Top glow */}
      <div aria-hidden style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "280px", background: "radial-gradient(ellipse at 50% -10%, rgba(43,92,230,0.35) 0%, rgba(136,71,232,0.15) 50%, transparent 70%)", pointerEvents: "none" }} />

      {/* Section header */}
      <div style={{ position: "relative", zIndex: 1, textAlign: "center", padding: "0 24px 72px" }}>
        <span style={{ display: "inline-block", background: "rgba(136,71,232,0.15)", color: "#a78bfa", borderRadius: "20px", padding: "5px 16px", fontSize: "12px", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "20px" }}>
          Como Funciona
        </span>
        <h2 style={{ fontSize: "clamp(32px,4vw,48px)", fontWeight: 800, color: "#fff", lineHeight: 1.1, maxWidth: "680px", margin: "0 auto", letterSpacing: "-0.02em" }}>
          Tudo que seu negócio precisa — sem contratar mais ninguém
        </h2>
        <p style={{ fontSize: "17px", color: "rgba(255,255,255,0.5)", marginTop: "14px", maxWidth: "500px", margin: "14px auto 0", lineHeight: 1.6 }}>
          A ApexMind configura tudo. Você só aproveita os resultados.
        </p>
      </div>

      {/* Feature 1 */}
      <div style={{ position: "relative", zIndex: 1, maxWidth: "1160px", margin: "0 auto", padding: "0 32px" }}>
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h3 style={{ fontSize: "28px", fontWeight: 700, color: "#fff", lineHeight: 1.3 }}>
              Seu assistente configurado do zero — por nós
            </h3>
            <p style={{ fontSize: "16px", color: "rgba(255,255,255,0.6)", lineHeight: 1.7, marginTop: "16px" }}>
              Você não precisa saber programar, nem entender de IA. A ApexMind entende o seu negócio e constrói o assistente ideal para responder seus clientes com precisão.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px", marginTop: "24px" }}>
              {["Atendimento configurado para o seu negócio", "Sem código, sem configuração técnica", "Funciona 24h por dia, 7 dias por semana"].map(item => (
                <div key={item} style={{ display: "flex", gap: "10px", alignItems: "center" }}>
                  <span style={{ width: "18px", height: "18px", borderRadius: "50%", background: "rgba(136,71,232,0.2)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, fontSize: "10px", color: "#a78bfa", fontWeight: 700 }}>✓</span>
                  <span style={{ fontSize: "14px", color: "rgba(255,255,255,0.75)" }}>{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <ChatMockup />
          </div>
        </div>
      </div>

      {/* Steps marquee */}
      <div style={{ overflow: "hidden", padding: "72px 0 64px", position: "relative", zIndex: 1 }}>
        <div style={{ display: "flex", width: "max-content" }}>
          {[0, 1].map(dupe => (
            <div key={dupe} className="animate-marquee" aria-hidden={dupe > 0} style={{ display: "flex", gap: "16px", flexShrink: 0 }}>
              {steps.map((step, i) => (
                <div key={step} style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "40px", padding: "10px 24px", display: "flex", alignItems: "center", gap: "10px", flexShrink: 0 }}>
                  <span style={{ width: "22px", height: "22px", borderRadius: "50%", background: "linear-gradient(135deg,#2B5CE6,#8847E8)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "11px", fontWeight: 700, color: "#fff", flexShrink: 0 }}>
                    {i + 1}
                  </span>
                  <span style={{ color: "rgba(255,255,255,0.8)", fontSize: "14px", fontWeight: 500, whiteSpace: "nowrap" }}>{step}</span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Feature 2 */}
      <div style={{ position: "relative", zIndex: 1, maxWidth: "1160px", margin: "0 auto", padding: "0 32px" }}>
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div style={{ background: "rgba(255,255,255,0.04)", borderRadius: "16px", padding: "28px", border: "1px solid rgba(255,255,255,0.08)" }}>
            <h3 style={{ fontSize: "22px", fontWeight: 700, color: "#fff", marginBottom: "10px" }}>Painel de Controle em Tempo Real</h3>
            <p style={{ fontSize: "14px", color: "rgba(255,255,255,0.6)", lineHeight: 1.6, marginBottom: "20px" }}>
              Acompanhe conversas, handoffs e desempenho do assistente — tudo em um único lugar.
            </p>
            <MetricsMockup />
          </div>

          <div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              {steps.map((step, i) => (
                <div key={step} style={{ display: "flex", alignItems: "center", gap: "14px", padding: "14px 0", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
                  <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: "linear-gradient(135deg,#2B5CE6,#8847E8)", flexShrink: 0 }} />
                  <span style={{ fontSize: "14px", fontWeight: 500, color: "rgba(255,255,255,0.75)" }}>{step}</span>
                </div>
              ))}
            </div>
            <div style={{ background: "rgba(255,255,255,0.04)", borderRadius: "14px", padding: "24px", border: "1px solid rgba(255,255,255,0.08)", marginTop: "24px" }}>
              <h4 style={{ fontSize: "18px", fontWeight: 700, color: "#fff", marginBottom: "8px" }}>IA que entende o contexto do seu negócio</h4>
              <p style={{ fontSize: "14px", color: "rgba(255,255,255,0.6)", lineHeight: 1.6 }}>
                O assistente é treinado com as informações reais da sua empresa — produtos, serviços, horários e perguntas frequentes.
              </p>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 0.3; transform: translateY(0); }
          50% { opacity: 1; transform: translateY(-3px); }
        }
        @keyframes waDot {
          0%, 60%, 100% { opacity: 0.3; transform: scale(0.8); }
          30% { opacity: 1; transform: scale(1.15); }
        }
      `}</style>
    </section>
  );
}
