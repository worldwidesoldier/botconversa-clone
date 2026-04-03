"use client";

import { useState } from "react";

const tabs = ["Atendimento 24/7", "Handoff Inteligente", "Painel de Controle", "Acompanhamento"];

// ── Visual mockups for each tab ──────────────────────────────────────────────

function Visual24h() {
  const times = ["08:30", "12:15", "19:42", "02:07", "05:53"];
  return (
    <div style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "16px", padding: "28px", display: "flex", flexDirection: "column", gap: "12px" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "4px" }}>
        <span style={{ color: "rgba(255,255,255,0.5)", fontSize: "12px", textTransform: "uppercase", letterSpacing: "0.08em" }}>Mensagens respondidas</span>
        <span style={{ background: "rgba(37,211,102,0.15)", color: "#25D366", borderRadius: "20px", padding: "3px 10px", fontSize: "11px", fontWeight: 700 }}>100% respondidas</span>
      </div>
      {times.map((t, i) => (
        <div key={t} style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <span style={{ fontSize: "11px", color: "rgba(255,255,255,0.3)", width: "38px", flexShrink: 0 }}>{t}</span>
          <div style={{ flex: 1, height: "36px", background: "#1e2330", borderRadius: "10px", display: "flex", alignItems: "center", paddingLeft: "12px", border: "1px solid rgba(255,255,255,0.05)" }}>
            <span style={{ fontSize: "12px", color: "rgba(255,255,255,0.7)" }}>
              {["Qual o horário? 🕐", "Preciso de um orçamento", "Estão abertos agora?", "Qual o valor do serviço?", "Podem me atender hoje?"][i]}
            </span>
          </div>
          <div style={{ width: "28px", height: "28px", borderRadius: "50%", background: "rgba(37,211,102,0.15)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
            <span style={{ color: "#25D366", fontSize: "12px" }}>✓</span>
          </div>
        </div>
      ))}
      <div style={{ marginTop: "4px", textAlign: "center" }}>
        <span style={{ fontSize: "13px", color: "rgba(255,255,255,0.35)" }}>Tempo médio de resposta: </span>
        <span style={{ fontSize: "13px", color: "#6B8FFF", fontWeight: 700 }}>&lt; 3 segundos</span>
      </div>
    </div>
  );
}

function VisualHandoff() {
  return (
    <div style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "16px", padding: "28px 24px" }}>
      {/* Flow */}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "0", marginBottom: "28px" }}>
        {/* Bot */}
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "8px" }}>
          <div style={{ width: "56px", height: "56px", borderRadius: "50%", background: "linear-gradient(135deg,#2B5CE6,#8847E8)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "24px" }}>🤖</div>
          <span style={{ fontSize: "11px", color: "rgba(255,255,255,0.5)" }}>Assistente IA</span>
        </div>
        {/* Arrow with label */}
        <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", padding: "0 12px" }}>
          <div style={{ width: "100%", height: "2px", background: "linear-gradient(90deg,#2B5CE6,#8847E8)", position: "relative" }}>
            <div style={{ position: "absolute", right: 0, top: "50%", transform: "translateY(-50%)", borderLeft: "8px solid #8847E8", borderTop: "5px solid transparent", borderBottom: "5px solid transparent" }} />
          </div>
          <span style={{ fontSize: "10px", color: "#a78bfa", marginTop: "6px", fontWeight: 600, whiteSpace: "nowrap" }}>Lead qualificado!</span>
        </div>
        {/* Human */}
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "8px" }}>
          <div style={{ width: "56px", height: "56px", borderRadius: "50%", background: "rgba(255,255,255,0.08)", border: "2px solid rgba(255,255,255,0.15)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "24px" }}>👤</div>
          <span style={{ fontSize: "11px", color: "rgba(255,255,255,0.5)" }}>Seu atendente</span>
        </div>
      </div>
      {/* Conversation history card */}
      <div style={{ background: "#1a1d24", borderRadius: "12px", padding: "14px 16px", border: "1px solid rgba(255,255,255,0.06)" }}>
        <p style={{ fontSize: "11px", color: "rgba(255,255,255,0.35)", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "10px" }}>Contexto passado para o atendente</p>
        {[
          "Cliente: interessado em câmbio de dólares",
          "Valor estimado: R$ 5.000",
          "Horário preferido: tarde",
          "Histórico: 3 mensagens anteriores",
        ].map((item, i) => (
          <div key={i} style={{ display: "flex", gap: "8px", alignItems: "flex-start", marginBottom: "6px" }}>
            <span style={{ color: "#6B8FFF", fontSize: "11px", flexShrink: 0, marginTop: "1px" }}>•</span>
            <span style={{ fontSize: "12px", color: "rgba(255,255,255,0.65)" }}>{item}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function VisualDashboard() {
  return (
    <div style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "16px", padding: "24px", display: "flex", flexDirection: "column", gap: "16px" }}>
      {/* Header row */}
      <div style={{ display: "flex", gap: "12px" }}>
        {[
          { label: "Conversas", value: "1.247", delta: "+18%", color: "#6B8FFF" },
          { label: "Respondidas", value: "95.3%", delta: "+2%", color: "#25D366" },
          { label: "Handoffs", value: "64", delta: "5.1%", color: "#a78bfa" },
        ].map(s => (
          <div key={s.label} style={{ flex: 1, background: "rgba(255,255,255,0.04)", borderRadius: "10px", padding: "12px", border: "1px solid rgba(255,255,255,0.06)" }}>
            <p style={{ fontSize: "10px", color: "rgba(255,255,255,0.35)", textTransform: "uppercase", letterSpacing: "0.07em", margin: "0 0 6px" }}>{s.label}</p>
            <p style={{ fontSize: "20px", fontWeight: 800, color: s.color, margin: "0 0 2px", lineHeight: 1 }}>{s.value}</p>
            <p style={{ fontSize: "10px", color: "rgba(255,255,255,0.35)", margin: 0 }}>{s.delta}</p>
          </div>
        ))}
      </div>
      {/* Bars */}
      <div>
        <p style={{ fontSize: "11px", color: "rgba(255,255,255,0.35)", textTransform: "uppercase", letterSpacing: "0.07em", marginBottom: "10px" }}>Atividade dos últimos 7 dias</p>
        <div style={{ display: "flex", alignItems: "flex-end", gap: "6px", height: "64px" }}>
          {[60,75,55,90,70,85,95].map((h, i) => (
            <div key={i} style={{ flex: 1, height: `${h}%`, borderRadius: "4px 4px 0 0", background: i === 6 ? "linear-gradient(180deg,#6B8FFF,#8847E8)" : "rgba(255,255,255,0.1)" }} />
          ))}
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", marginTop: "6px" }}>
          {["Seg","Ter","Qua","Qui","Sex","Sáb","Dom"].map(d => (
            <span key={d} style={{ flex: 1, textAlign: "center", fontSize: "10px", color: "rgba(255,255,255,0.25)" }}>{d}</span>
          ))}
        </div>
      </div>
    </div>
  );
}

function VisualMonitoring() {
  const checks = [
    { label: "Assistente operacional", ok: true  },
    { label: "Taxa de resposta: 99.2%", ok: true  },
    { label: "Latência média: 2.1s",   ok: true  },
    { label: "Última revisão: hoje",   ok: true  },
  ];
  return (
    <div style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "16px", padding: "24px", display: "flex", flexDirection: "column", gap: "12px" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "4px" }}>
        <span style={{ fontSize: "14px", fontWeight: 700, color: "#fff" }}>Status do Sistema</span>
        <span style={{ background: "rgba(37,211,102,0.15)", color: "#25D366", borderRadius: "20px", padding: "4px 12px", fontSize: "11px", fontWeight: 700 }}>● Tudo operacional</span>
      </div>
      {checks.map(c => (
        <div key={c.label} style={{ display: "flex", alignItems: "center", gap: "12px", background: "rgba(255,255,255,0.03)", borderRadius: "10px", padding: "12px 14px", border: "1px solid rgba(255,255,255,0.05)" }}>
          <div style={{ width: "20px", height: "20px", borderRadius: "50%", background: "rgba(37,211,102,0.15)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
            <span style={{ color: "#25D366", fontSize: "11px" }}>✓</span>
          </div>
          <span style={{ fontSize: "13px", color: "rgba(255,255,255,0.75)" }}>{c.label}</span>
        </div>
      ))}
      <div style={{ background: "rgba(43,92,230,0.1)", borderRadius: "10px", padding: "12px 14px", border: "1px solid rgba(43,92,230,0.2)", marginTop: "4px" }}>
        <p style={{ fontSize: "12px", color: "#6B8FFF", margin: 0, fontWeight: 500 }}>
          ⚡ Equipe ApexMind monitorando ativamente — ajustes feitos sem você precisar pedir
        </p>
      </div>
    </div>
  );
}

const tabContent = [
  {
    badge: "IA",
    title: "Responde automaticamente, a qualquer hora",
    description: "Seu assistente de IA responde perguntas repetitivas, envia informações e conduz o cliente — 24 horas por dia, 7 dias por semana, sem precisar de um atendente humano.",
    bullets: ["Responde em segundos, não em horas", "Entende linguagem natural e áudios", "Funciona fora do horário comercial"],
    visual: <Visual24h />,
  },
  {
    badge: "Handoff",
    title: "Transferência inteligente para o atendente certo",
    description: "Quando o cliente já está qualificado e pronto para avançar, o assistente faz o handoff automaticamente — passando todo o contexto da conversa para sua equipe.",
    bullets: ["Identifica o momento ideal da transferência", "Passa o histórico completo para o atendente", "Sua equipe foca só em quem está pronto"],
    visual: <VisualHandoff />,
  },
  {
    badge: "Dashboard",
    title: "Visibilidade total das suas conversas",
    description: "Acompanhe em tempo real quantas conversas foram atendidas, quais perguntas mais aparecem e como seu assistente está se saindo — em um painel intuitivo.",
    bullets: ["Histórico completo de conversas", "Métricas de desempenho do assistente", "Relatórios de handoffs realizados"],
    visual: <VisualDashboard />,
  },
  {
    badge: "Suporte",
    title: "A ApexMind acompanha você de perto",
    description: "Não é só configurar e abandonar. Nossa equipe monitora continuamente o assistente, faz ajustes, responde dúvidas e garante que tudo esteja funcionando perfeitamente.",
    bullets: ["Monitoramento contínuo do assistente", "Ajustes e melhorias ao longo do tempo", "Suporte direto via WhatsApp com nossa equipe"],
    visual: <VisualMonitoring />,
  },
];

export function SpecialToolsSection() {
  const [active, setActive] = useState(0);
  const content = tabContent[active];

  return (
    <section id="diferenciais" className="py-14 md:py-[100px]" style={{ background: "#18191c" }}>
      <div style={{ maxWidth: "1160px", margin: "0 auto", padding: "0 32px" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "56px" }}>
          <span style={{ display: "inline-block", background: "rgba(136,71,232,0.15)", color: "#a78bfa", borderRadius: "20px", padding: "5px 16px", fontSize: "12px", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "16px" }}>
            Nossos Diferenciais
          </span>
          <h2 style={{ fontSize: "clamp(28px,3.5vw,42px)", fontWeight: 800, color: "#fff", maxWidth: "680px", margin: "0 auto", lineHeight: 1.15, letterSpacing: "-0.02em" }}>
            Tudo que sua empresa precisa para atender melhor no WhatsApp
          </h2>
          <p style={{ fontSize: "17px", color: "rgba(255,255,255,0.5)", marginTop: "14px", lineHeight: 1.6 }}>
            Ferramentas poderosas, configuradas por nós, entregues pra você.
          </p>
        </div>

        {/* Tab bar */}
        <div style={{ display: "flex", gap: "8px", justifyContent: "center", marginBottom: "48px", flexWrap: "wrap" }}>
          {tabs.map((tab, i) => (
            <button
              key={tab}
              onClick={() => setActive(i)}
              style={{
                background: active === i ? "rgba(136,71,232,0.2)" : "transparent",
                border: `1px solid ${active === i ? "rgba(136,71,232,0.5)" : "rgba(255,255,255,0.1)"}`,
                borderRadius: "8px",
                padding: "10px 20px",
                color: active === i ? "#c084fc" : "rgba(255,255,255,0.45)",
                fontSize: "14px",
                fontWeight: active === i ? 700 : 500,
                cursor: "pointer",
                transition: "all 0.2s",
              }}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <span style={{ display: "inline-block", background: "rgba(136,71,232,0.15)", color: "#a78bfa", borderRadius: "20px", padding: "4px 14px", fontSize: "12px", fontWeight: 600, marginBottom: "18px" }}>
              {content.badge}
            </span>
            <h3 style={{ fontSize: "26px", fontWeight: 700, color: "#fff", lineHeight: 1.3, marginBottom: "14px" }}>
              {content.title}
            </h3>
            <p style={{ fontSize: "15px", color: "rgba(255,255,255,0.6)", lineHeight: 1.7, marginBottom: "28px" }}>
              {content.description}
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              {content.bullets.map((b) => (
                <div key={b} style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                  <div style={{ width: "20px", height: "20px", borderRadius: "50%", background: "rgba(136,71,232,0.2)", flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <span style={{ color: "#a78bfa", fontSize: "11px", fontWeight: 700 }}>✓</span>
                  </div>
                  <span style={{ fontSize: "14px", color: "rgba(255,255,255,0.75)", fontWeight: 500 }}>{b}</span>
                </div>
              ))}
            </div>
          </div>
          <div>{content.visual}</div>
        </div>
      </div>
    </section>
  );
}
