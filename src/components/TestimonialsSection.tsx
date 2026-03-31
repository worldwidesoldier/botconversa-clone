import Image from "next/image";
import { StarIcon } from "@/components/icons";

const testimonials = [
  { quote: "We used to receive daily complaints about slow responses and an overwhelmed team. After implementing BotConversa's AI, everything changed. Now the AI understands natural messages, responds 24/7, and even closes sales on its own. In the first week, response time dropped from up to 24 hours to less than an hour.", name: "Bruna Dorneles", title: "Manager of Liberty Driving School", avatar: "/images/testimonial-1.jpg" },
  { quote: "Our old workflow used to fail whenever a customer exited the menu. Conversations got lost and customers became frustrated. With BotConversa's artificial intelligence, everything changed. The assistant now maintains natural conversations, responds to detailed questions about veterinary exams, and goes far beyond scripted answers.", name: "Cláudio Paiva", title: "CEO", avatar: "/images/testimonial-2.jpg" },
  { quote: "Managing students in different cities meant endless WhatsApp groups and tedious manual work. With BotConversa's AI, I standardized our sales and billing processes, automated spreadsheets, and reduced the manual workload. Now we handle more inquiries every day with organized and efficient workflows.", name: "Camila", title: "Manager at CEFOP", avatar: "/images/testimonial-7.png" },
  { quote: "With our previous bot, we struggled to achieve 5 appointments per week. After switching to BotConversa, we scheduled 15 consultations in just 10 business days—surpassing our previous goal by 50%. The AI assistant responds to leads quickly and clearly, instantly applying all the technical expertise of our clinic.", name: "Dr. Ricardo Rocha", title: "Urologist", avatar: "/images/testimonial-3.png" },
  { quote: "We used to handle multiple WhatsApp numbers and manual sales processes, which made everything chaotic. With BotConversa, I centralized all communication, easily built message flows, and finally gained full control over how we receive new students. Our team is now more productive, and our sales operations truly appear professional.", name: "Daniel Teixeira", title: "CEO of Barista Wave", avatar: "/images/testimonial-8.jpg" },
  { quote: "I noticed that customer messages were going unanswered on my secretary's WhatsApp. Now, every message—at any time—receives an instant response. Customers feel welcomed, have all their questions answered, and are ready to move forward.", name: "Dr. Marcelo Spinola", title: "CEO", avatar: "/images/testimonial-4.png" },
  { quote: "When I started seeing patients at my clinic, I quickly realized that slow responses were costing me appointments. With BotConversa, I automated scheduling and estimates, ensuring no one has to wait. After adding AI, the conversations became so natural that patients rarely ask for a real person now.", name: "Dr. José Freire", title: "Gynecologist", avatar: "/images/testimonial-5.png" },
  { quote: "My sales team used to spend hours answering the same questions, unable to keep up with demand, and we were losing sales due to slow responses. Now, AI handles repetitive inquiries 24/7, qualifies customers, and only hands off ready-to-buy leads to my team. We saw results in the first week.", name: "Carlos Rafael", title: "Manager at Plantão Íntimos", avatar: "/images/testimonial-6.jpg" },
  { quote: "The experience was amazing, the service was quick, and the results exceeded my expectations. I highly recommend it!", name: "John Victor", title: "CPTO at G4 Education", avatar: "/images/testimonial-9.jpg" },
  { quote: "If you are using WhatsApp in your business and not using BotConversa, you are literally missing out on money that should already be yours.", name: "Bruno Picinini", title: "Expert in AI & Content Marketing", avatar: "/images/testimonial-10.jpg" },
  { quote: "Nowadays, it makes no sense for an entrepreneur using WhatsApp not to take advantage of BotConversa automations to sell and provide better service.", name: "Max Peters", title: "CEO Adapts Org", avatar: "/images/testimonial-1.jpg" },
];

export function TestimonialsSection() {
  return (
    <section id="testimonials" style={{ background: "#f7faff", padding: "80px 0" }}>
      <div style={{ padding: "0 24px", textAlign: "center" }}>
        <h2 style={{ fontSize: "40px", fontWeight: 700, color: "#18191c", textAlign: "center" }}>Real outcomes from our clients</h2>
        <p style={{ fontSize: "16px", color: "#6d6f74", textAlign: "center", maxWidth: "600px", margin: "12px auto 0" }}>
          See how our platform is transforming WhatsApp customer service for businesses of all sizes, multiplying their results with less effort.
        </p>
      </div>

      <div
        style={{
          marginTop: "48px",
          display: "flex",
          gap: "20px",
          overflowX: "auto",
          scrollSnapType: "x mandatory",
          padding: "0 24px 24px",
          scrollbarWidth: "none",
          maskImage: "linear-gradient(to right, transparent 0%, black 5%, black 95%, transparent 100%)",
          WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 5%, black 95%, transparent 100%)",
        } as React.CSSProperties}
      >
        {testimonials.map((t, i) => (
          <div
            key={i}
            style={{ background: "#fff", border: "1px solid rgba(0,0,0,0.06)", borderRadius: "16px", padding: "28px", display: "flex", flexDirection: "column", gap: "16px", boxShadow: "0 2px 12px rgba(0,0,0,0.04)", scrollSnapAlign: "start", flexShrink: 0, width: "380px" }}
          >
            <div style={{ display: "flex", gap: "4px" }}>
              {Array.from({ length: 5 }).map((_, si) => <StarIcon key={si} />)}
            </div>
            <p style={{ fontSize: "15px", lineHeight: 1.6, color: "#212327", flex: 1 }}>{t.quote}</p>
            <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
              <Image src={t.avatar} alt={t.name} width={44} height={44} style={{ borderRadius: "50%", objectFit: "cover", flexShrink: 0 }} />
              <div>
                <p style={{ fontSize: "14px", fontWeight: 600, color: "#18191c" }}>{t.name}</p>
                <p style={{ fontSize: "12px", color: "#6d6f74" }}>{t.title}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
