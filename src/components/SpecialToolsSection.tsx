"use client";

import { useState } from "react";
import Image from "next/image";

const tabs = ["GPT Assistant", "GPT Specialist", "CRM Kanban", "Integrator"];

const tabContent = [
  {
    badge: "AI",
    title: "AI Assistant Built Into Your Flows",
    description: "Add the GPT Assistant block to any conversation flow and let AI handle complex questions, qualify leads, and guide customers — all inside WhatsApp.",
    bullets: ["Understands natural language & audio", "Responds 24/7 without human help", "Integrates with your existing flows"],
    image: "/images/screenshot-1.webp",
  },
  {
    badge: "AI Specialist",
    title: "Your Personal AI Sales Expert",
    description: "The GPT Specialist is a trained AI persona that knows your business inside and out — qualifying leads, handling objections, and closing deals automatically.",
    bullets: ["Trained on your product & services", "Handles objections intelligently", "Scales your sales team without hiring"],
    image: "/images/screenshot-2.webp",
  },
  {
    badge: "CRM",
    title: "Visual Pipeline for Every Deal",
    description: "See all your leads and conversations organized in a Kanban board. Move deals through stages, assign to team members, and never lose a potential customer.",
    bullets: ["Drag & drop lead management", "Works with any BotConversa plan", "Full conversation history"],
    image: "/images/screenshot-3.webp",
  },
  {
    badge: "Integrations",
    title: "Connect All Your Business Tools",
    description: "Connect BotConversa to your CRM, ERP, payment provider, or any tool you use. No-code integration builder with Zapier, Webhooks, and direct APIs.",
    bullets: ["Connect Zapier, HubSpot, and more", "No-code integration builder", "Automate data sync in real-time"],
    image: "/images/screenshot-4.webp",
  },
];

export function SpecialToolsSection() {
  const [active, setActive] = useState(0);
  const content = tabContent[active];

  return (
    <section style={{ background: "#18191c", padding: "80px 0" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 24px" }}>
        {/* Header */}
        <div style={{ textAlign: "center" }}>
          <span style={{ display: "inline-block", background: "rgba(43,118,229,0.15)", color: "#6ea8ff", borderRadius: "20px", padding: "4px 14px", fontSize: "12px", fontWeight: 600 }}>
            Exclusive Tools
          </span>
          <h2 style={{ fontSize: "40px", fontWeight: 700, color: "#fff", textAlign: "center", maxWidth: "700px", margin: "16px auto 0", lineHeight: 1.2 }}>
            Everything Your Business Needs to Sell on WhatsApp
          </h2>
          <p style={{ fontSize: "16px", color: "rgba(255,255,255,0.6)", textAlign: "center", marginTop: "12px" }}>
            Powerful tools designed to automate, qualify, and convert more customers—without complexity.
          </p>
        </div>

        {/* Tab bar */}
        <div style={{ display: "flex", gap: "8px", justifyContent: "center", marginTop: "48px", marginBottom: "40px", flexWrap: "wrap" }}>
          {tabs.map((tab, i) => (
            <button
              key={tab}
              onClick={() => setActive(i)}
              style={{
                background: active === i ? "rgba(255,255,255,0.1)" : "transparent",
                border: active === i ? "1px solid rgba(255,255,255,0.2)" : "1px solid transparent",
                borderRadius: "8px",
                padding: "10px 20px",
                color: active === i ? "#fff" : "rgba(255,255,255,0.5)",
                fontSize: "14px",
                fontWeight: active === i ? 600 : 500,
                cursor: "pointer",
              }}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="grid md:grid-cols-2 gap-20 items-center">
          <div style={{ maxWidth: "480px" }}>
            <span style={{ display: "inline-block", background: "rgba(43,118,229,0.15)", color: "#6ea8ff", borderRadius: "20px", padding: "4px 14px", fontSize: "12px", fontWeight: 600, marginBottom: "16px" }}>
              {content.badge}
            </span>
            <h3 style={{ fontSize: "28px", fontWeight: 700, color: "#fff", lineHeight: 1.3, marginBottom: "16px" }}>
              {content.title}
            </h3>
            <p style={{ fontSize: "15px", color: "rgba(255,255,255,0.65)", lineHeight: 1.7, marginBottom: "28px" }}>
              {content.description}
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
              {content.bullets.map((b) => (
                <div key={b} style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                  <div style={{ width: "20px", height: "20px", borderRadius: "50%", background: "rgba(43,118,229,0.15)", flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <span style={{ color: "#2b76e5", fontSize: "12px", fontWeight: 700 }}>✓</span>
                  </div>
                  <span style={{ fontSize: "14px", color: "rgba(255,255,255,0.8)", fontWeight: 500 }}>{b}</span>
                </div>
              ))}
            </div>
          </div>
          <div>
            <Image src={content.image} alt={content.title} width={600} height={400} style={{ borderRadius: "16px", boxShadow: "0 20px 60px rgba(0,0,0,0.4)", width: "100%", height: "auto" }} />
          </div>
        </div>
      </div>
    </section>
  );
}
