import { BotConversaLogo, WhatsAppIcon, FacebookIcon, InstagramIcon, YouTubeIcon, LinkedInIcon } from "@/components/icons";

const sectionLinks = [
  { label: "Resources", href: "#" },
  { label: "Prices", href: "#pricing" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Frequently Asked Questions", href: "#faq" },
];

export function Footer() {
  return (
    <>
      {/* CTA section */}
      <section style={{ background: "#f7faff", padding: "80px 40px 0" }}>
        <div style={{ background: "rgba(110,168,255,0.08)", borderRadius: "24px", padding: "80px 60px", textAlign: "center", position: "relative", overflow: "hidden", maxWidth: "1200px", margin: "0 auto" }}>
          {/* Decorative left */}
          <span aria-hidden style={{ position: "absolute", left: "-20px", top: "50%", transform: "translateY(-50%)", opacity: 0.12, pointerEvents: "none" }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/logo-mark.png" alt="" width={180} height={180} />
          </span>
          {/* Decorative right */}
          <span aria-hidden style={{ position: "absolute", right: "-20px", top: "50%", transform: "translateY(-50%)", opacity: 0.12, color: "#25D366", pointerEvents: "none" }}>
            <WhatsAppIcon width={150} height={150} />
          </span>

          <h2 style={{ fontSize: "clamp(32px,5vw,48px)", fontWeight: 700, color: "#18191c", textAlign: "center", maxWidth: "600px", margin: "0 auto", position: "relative", zIndex: 1 }}>
            Transform conversations into sales today
          </h2>
          <p style={{ fontSize: "16px", color: "#6d6f74", textAlign: "center", maxWidth: "400px", margin: "8px auto 32px", position: "relative", zIndex: 1 }}>
            Respond instantly, engage, and convert more customers starting today
          </p>
          <a href="#" style={{ background: "linear-gradient(180deg, #6ea8ff 0%, #2b76e5 100%)", borderRadius: "8px", padding: "0 32px", height: "48px", fontSize: "14px", fontWeight: 700, letterSpacing: "0.08em", color: "#fff", textTransform: "uppercase", display: "inline-flex", alignItems: "center", textDecoration: "none", position: "relative", zIndex: 1 }}>
            Start Now
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ background: "#fff", padding: "48px 80px 32px", borderTop: "1px solid rgba(0,0,0,0.06)" }}>
        <div className="grid md:grid-cols-4 gap-10" style={{ maxWidth: "1200px", margin: "0 auto" }}>
          {/* Col 1 */}
          <div>
            <BotConversaLogo />
            <p style={{ fontSize: "13px", color: "#6d6f74", maxWidth: "220px", marginTop: "12px", lineHeight: 1.5 }}>
              The largest conversational marketing platform for WhatsApp in Brazil
            </p>
            <div style={{ marginTop: "16px", display: "flex", gap: "16px", alignItems: "center" }}>
              {[FacebookIcon, InstagramIcon, YouTubeIcon, LinkedInIcon].map((Icon, i) => (
                <a key={i} href="#" style={{ color: "#6d6f74", display: "flex" }}><Icon width={18} height={18} /></a>
              ))}
            </div>
          </div>

          {/* Col 2 */}
          <div>
            <h3 style={{ fontSize: "12px", textTransform: "uppercase", letterSpacing: "0.1em", color: "#6d6f74", fontWeight: 600, marginBottom: "16px" }}>Seções</h3>
            <nav>{sectionLinks.map((l) => <a key={l.href + l.label} href={l.href} style={{ fontSize: "14px", color: "#212327", display: "block", padding: "4px 0", textDecoration: "none" }}>{l.label}</a>)}</nav>
          </div>

          {/* Col 3 */}
          <div>
            <h3 style={{ fontSize: "12px", textTransform: "uppercase", letterSpacing: "0.1em", color: "#6d6f74", fontWeight: 600, marginBottom: "16px" }}>Seções</h3>
            <nav>{sectionLinks.slice(0, 2).map((l) => <a key={l.label} href={l.href} style={{ fontSize: "14px", color: "#212327", display: "block", padding: "4px 0", textDecoration: "none" }}>{l.label}</a>)}</nav>
          </div>

          {/* Col 4 */}
          <div>
            <p style={{ fontSize: "13px", color: "#6d6f74" }}>© 2024 BotConversa</p>
          </div>
        </div>

        <div style={{ borderTop: "1px solid rgba(0,0,0,0.06)", paddingTop: "16px", marginTop: "40px", maxWidth: "1200px", margin: "40px auto 0" }}>
          <p style={{ fontSize: "12px", color: "#6d6f74", textAlign: "center" }}>© 2024 BotConversa. All rights reserved.</p>
        </div>
      </footer>

      {/* Floating WhatsApp button */}
      <a
        href="https://wa.me/551199999999"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        style={{ position: "fixed", bottom: "24px", right: "24px", zIndex: 999, background: "#25D366", borderRadius: "50%", width: "56px", height: "56px", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 4px 16px rgba(37,211,102,0.4)", textDecoration: "none", color: "#fff" }}
      >
        <WhatsAppIcon width={28} height={28} />
      </a>
    </>
  );
}
