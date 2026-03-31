const newLeads = [
  { name: "Maria Silva", sub: "Restaurant owner", detail: "WhatsApp 11 99999-8888", time: "2 min ago" },
  { name: "João Santos", sub: "E-commerce", detail: "WhatsApp 21 88888-7777", time: "15 min ago" },
];
const qualifiedLeads = [
  { name: "Ana Costa", sub: "Clinic", detail: "$1,200 potential", time: "1 hour ago" },
  { name: "Pedro Lima", sub: "Law firm", detail: "$3,500 potential", time: "3 hours ago" },
];
const closedLeads = [
  { name: "Lucia Ferreira", sub: "Real estate", detail: "✓ Closed $2,800", time: "Yesterday" },
  { name: "Carlos Mendez", sub: "Retail", detail: "✓ Closed $890", time: "2 days ago" },
];

function Card({ name, sub, detail, time }: { name: string; sub: string; detail: string; time: string }) {
  return (
    <div style={{ background: "#f8fafc", borderRadius: "8px", padding: "12px", border: "1px solid rgba(0,0,0,0.06)", marginBottom: "8px" }}>
      <div style={{ fontSize: "13px", fontWeight: 600, color: "#18191c" }}>{name}</div>
      <div style={{ fontSize: "12px", color: "#6d6f74", marginTop: "2px" }}>{sub}</div>
      <div style={{ fontSize: "12px", color: "#6d6f74", marginTop: "2px" }}>{detail}</div>
      <div style={{ fontSize: "11px", color: "rgba(0,0,0,0.3)", textAlign: "right", marginTop: "6px" }}>{time}</div>
    </div>
  );
}

export function CRMKanbanSection() {
  return (
    <section style={{ background: "#f7faff", padding: "80px 24px" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        {/* Header */}
        <div style={{ textAlign: "center" }}>
          <span style={{ display: "inline-block", background: "#e8f0fe", color: "#2b76e5", borderRadius: "20px", padding: "4px 14px", fontSize: "12px", fontWeight: 600 }}>
            Introducing
          </span>
          <h2 style={{ fontSize: "48px", fontWeight: 800, color: "#18191c", textAlign: "center", marginTop: "16px", lineHeight: 1.15 }}>
            Introducing…{" "}
            <span style={{ background: "linear-gradient(135deg, #2b76e5, #6ea8ff)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              CRM Kanban
            </span>
          </h2>
          <p style={{ fontSize: "16px", color: "#6d6f74", textAlign: "center", maxWidth: "500px", margin: "16px auto 0" }}>
            Organize your leads, track every deal, and close more sales—without leaving WhatsApp.
          </p>
        </div>

        {/* Kanban board */}
        <div style={{ background: "#fff", borderRadius: "16px", border: "1px solid rgba(0,0,0,0.08)", padding: "24px", marginTop: "48px", boxShadow: "0 4px 24px rgba(0,0,0,0.06)" }}>
          <div className="grid md:grid-cols-3 gap-4">
            <div>
              <div style={{ fontSize: "12px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", color: "#6d6f74", marginBottom: "12px" }}>New Lead</div>
              {newLeads.map((c) => <Card key={c.name} {...c} />)}
            </div>
            <div>
              <div style={{ fontSize: "12px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", color: "#6d6f74", marginBottom: "12px" }}>Qualified</div>
              {qualifiedLeads.map((c) => <Card key={c.name} {...c} />)}
            </div>
            <div>
              <div style={{ fontSize: "12px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", color: "#6d6f74", marginBottom: "12px" }}>Closed</div>
              {closedLeads.map((c) => <Card key={c.name} {...c} />)}
            </div>
          </div>
        </div>

        {/* Feature cards */}
        <div className="grid md:grid-cols-3 gap-6 mt-12">
          {[
            { icon: "📊", title: "Visual Pipeline", text: "See all leads in stages at a glance" },
            { icon: "✅", title: "Works With Any Plan", text: "Starter or Pro — CRM Kanban is included" },
            { icon: "👥", title: "Team Collaboration", text: "Assign leads, add notes, track by team member" },
          ].map(({ icon, title, text }) => (
            <div key={title} style={{ background: "#fff", borderRadius: "12px", padding: "24px", border: "1px solid rgba(0,0,0,0.06)", boxShadow: "0 2px 8px rgba(0,0,0,0.04)" }}>
              <div style={{ width: "40px", height: "40px", borderRadius: "50%", background: "#e8f0fe", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "20px" }}>{icon}</div>
              <div style={{ fontSize: "16px", fontWeight: 700, color: "#18191c", marginTop: "12px" }}>{title}</div>
              <div style={{ fontSize: "14px", color: "#6d6f74", marginTop: "8px", lineHeight: 1.5 }}>{text}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
