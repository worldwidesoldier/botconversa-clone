const painPoints = [
  "Clientes esperando horas por uma resposta",
  "Mensagens se perdem entre os atendentes",
  "Perguntas repetitivas tomam o dia da equipe",
  "Nenhum seguimento — lead esfria e some",
  "Sem visibilidade do que está acontecendo",
  "Vendas perdidas por resposta lenta",
];
const gainPoints = [
  "IA responde em segundos, a qualquer hora",
  "Todas as conversas centralizadas e organizadas",
  "Equipe focada em clientes qualificados",
  "Handoff automático no momento certo",
  "Dashboard completo com métricas em tempo real",
  "Mais conversas convertidas, menos esforço",
];

export function SolutionComparison() {
  return (
    <section style={{ background: "#f7faff", padding: "100px 32px" }}>
      <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
        <div style={{ textAlign: "center" }}>
          <span style={{ display: "inline-block", background: "linear-gradient(135deg,rgba(43,92,230,0.1),rgba(136,71,232,0.1))", border: "1px solid rgba(136,71,232,0.2)", color: "#5b42d8", borderRadius: "20px", padding: "5px 16px", fontSize: "12px", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "16px" }}>
            Comparação
          </span>
          <h2 style={{ fontSize: "clamp(28px,3.5vw,42px)", fontWeight: 800, color: "#18191c", textAlign: "center", lineHeight: 1.15, letterSpacing: "-0.02em" }}>
            Por que sua empresa precisa da ApexMind
          </h2>
          <p style={{ fontSize: "16px", color: "#6d6f74", textAlign: "center", maxWidth: "500px", margin: "12px auto 0" }}>
            Veja a diferença entre atender manualmente e ter um assistente de IA trabalhando por você.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mt-12">
          {/* Without */}
          <div>
            <div style={{ background: "rgba(255,0,0,0.06)", borderRadius: "12px 12px 0 0", padding: "20px 24px" }}>
              <p style={{ fontSize: "18px", fontWeight: 700, color: "#dc2626", margin: 0 }}>Sem a ApexMind</p>
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
            <div style={{ background: "linear-gradient(135deg, rgba(43,92,230,0.08) 0%, rgba(136,71,232,0.08) 100%)", borderRadius: "12px 12px 0 0", padding: "20px 24px" }}>
              <p style={{ fontSize: "18px", fontWeight: 700, background: "linear-gradient(135deg, #2B5CE6 0%, #8847E8 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text", margin: 0 }}>Com a ApexMind</p>
            </div>
            <div style={{ background: "#fff", borderRadius: "0 0 12px 12px", border: "1px solid rgba(136,71,232,0.15)" }}>
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
          <a
            href="https://wa.me/18625761010"
            target="_blank"
            rel="noopener noreferrer"
            style={{ background: "linear-gradient(135deg, #2B5CE6 0%, #8847E8 100%)", borderRadius: "8px", padding: "16px 32px", color: "#fff", fontSize: "14px", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", display: "inline-flex", alignItems: "center", textDecoration: "none", border: "none", boxShadow: "0 8px 24px rgba(136,71,232,0.3)" }}
          >
            Quero automatizar agora
          </a>
        </div>
      </div>
    </section>
  );
}
