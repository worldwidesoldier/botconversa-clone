"use client";

import { useState } from "react";
import { PlusIcon, MinusIcon } from "@/components/icons";

const faqs = [
  {
    q: "Como funciona o processo de contratação?",
    a: "É simples: fazemos uma reunião para entender o seu negócio — produtos, serviços, perguntas frequentes e o jeito que você atende. Com isso, configuramos o assistente ideal. Em poucos dias úteis, ele já está respondendo seus clientes."
  },
  {
    q: "Preciso saber programar ou entender de tecnologia?",
    a: "Não. A ApexMind cuida de toda a parte técnica. Você só precisa responder perguntas sobre o seu negócio. O resto é com a gente."
  },
  {
    q: "Funciona com o meu número de WhatsApp atual?",
    a: "Sim. Conectamos diretamente ao número que você já usa. Seus clientes não precisam mudar nada — o atendimento melhora de forma transparente para eles."
  },
  {
    q: "Em quanto tempo o assistente fica pronto?",
    a: "Geralmente entre 3 a 7 dias úteis após a reunião inicial, dependendo da complexidade do seu atendimento."
  },
  {
    q: "O que acontece quando o cliente quer falar com um humano?",
    a: "O assistente identifica o momento certo — quando o cliente está qualificado ou tem uma necessidade específica — e faz o handoff automaticamente para um atendente da sua equipe, com todo o contexto da conversa."
  },
  {
    q: "Posso usar em mais de uma filial ou número?",
    a: "Sim. Cada número de WhatsApp é uma contratação separada. Entre em contato pelo WhatsApp para conversarmos sobre pacotes com múltiplos números."
  },
  {
    q: "Tenho acesso a algum painel para acompanhar as conversas?",
    a: "Sim. Você tem acesso a um dashboard completo com histórico de conversas, métricas de desempenho do assistente e relatório de handoffs realizados."
  },
  {
    q: "Como é feito o suporte após a configuração?",
    a: "Nossa equipe acompanha o funcionamento do assistente continuamente, faz ajustes quando necessário e está disponível pelo WhatsApp para qualquer dúvida."
  },
];

export function FAQSection() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" style={{ background: "#f7faff", padding: "100px 32px" }}>
      <div style={{ textAlign: "center" }}>
        <h2 style={{ fontSize: "40px", fontWeight: 800, color: "#18191c", textAlign: "center", maxWidth: "800px", margin: "0 auto" }}>
          Ficou alguma dúvida?
        </h2>
        <p style={{ fontSize: "16px", color: "#6d6f74", textAlign: "center", maxWidth: "500px", margin: "12px auto 0" }}>
          Respondemos as perguntas mais comuns. Se a sua não estiver aqui, fale diretamente com a gente no WhatsApp.
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
              <span style={{ color: "#8847E8", flexShrink: 0 }}>
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
