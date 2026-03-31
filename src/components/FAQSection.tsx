"use client";

import { useState } from "react";
import { PlusIcon, MinusIcon } from "@/components/icons";

const faqs = [
  { q: "What is the difference between the Starter and PRO plans?", a: "The difference between them is simple: the Starter Plan has everything you need to start selling with WhatsApp automations—access to campaigns, broadcasting, multi-agent support (up to 5 people per number), unlimited conversation flow creation, campaigns, and much more. The PRO Plan includes everything in the Starter Plan, plus the Official API, AI that understands audio and text, integrator and Kanban CRM in the annual plan, GPT Assistant, and access to the GPT Specialist. The perfect plan for those who want to implement AI right from the start." },
  { q: "Is there any support available in case of questions?", a: "Yes, our support team will be available via email and chat in the help center to assist you with any technical questions or content inquiries." },
  { q: "How does payment work? Can I pay in installments?", a: "We accept payment via credit card and Pix. Installments can be made in up to 12 interest-free payments using a credit card." },
  { q: "Is there a satisfaction guarantee?", a: "Yes. If you are not satisfied, you can request a full refund up to 7 days after purchasing the monthly plan or up to 30 days after purchasing the annual plan." },
  { q: "Do you have an official Meta API?", a: "Yes, the BotConversa in the PRO plan has an official coexistence API (the most advanced and technological level of the official Meta API)." },
  { q: "Do I have access to artificial intelligence within WhatsApp?", a: "Yes, by subscribing to the PRO Plan, you will have access to the 'GPT Assistant' block within BotConversa, where you can run OpenAI's AI on your WhatsApp." },
  { q: "Can I guarantee the Kanban CRM in the Starter plan?", a: "Yes, the Kanban CRM works on any BotConversa plan. Whether with or without the official API." },
  { q: "Can I secure the Integrator in the starter plan?", a: "Yes, the Integrator works seamlessly with any BotConversa plan." },
  { q: "I want to obtain more than one license, how do I do that?", a: "Simply make more than one purchase using the same email" },
];

export function FAQSection() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" style={{ background: "#f7faff", padding: "80px 24px" }}>
      <div style={{ textAlign: "center" }}>
        <h2 style={{ fontSize: "40px", fontWeight: 700, color: "#18191c", textAlign: "center", maxWidth: "800px", margin: "0 auto" }}>
          Any questions left?
        </h2>
        <p style={{ fontSize: "16px", color: "#6d6f74", textAlign: "center", maxWidth: "500px", margin: "12px auto 0" }}>
          Clear your main doubts and start harnessing the full power of the tool to sell more through WhatsApp.
        </p>
      </div>

      <div style={{ maxWidth: "800px", margin: "48px auto 0" }}>
        {faqs.map((item, i) => (
          <div key={i} style={{ borderBottom: "1px solid rgba(0,0,0,0.08)", padding: "20px 0" }}>
            <div
              role="button"
              tabIndex={0}
              aria-expanded={open === i}
              onClick={() => setOpen(open === i ? null : i)}
              onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); setOpen(open === i ? null : i); } }}
              style={{ display: "flex", justifyContent: "space-between", alignItems: "center", cursor: "pointer" }}
            >
              <span style={{ fontSize: "16px", fontWeight: 600, color: "#18191c", flex: 1, paddingRight: "16px" }}>{item.q}</span>
              <span style={{ color: "#18191c", flexShrink: 0 }}>
                {open === i ? <MinusIcon /> : <PlusIcon />}
              </span>
            </div>
            {open === i && (
              <p style={{ fontSize: "15px", lineHeight: 1.6, color: "#6d6f74", paddingTop: "12px", margin: 0 }}>{item.a}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
