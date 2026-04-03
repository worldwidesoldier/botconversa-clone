import type { Metadata } from "next";
import { Nunito_Sans } from "next/font/google";
import "./globals.css";

const nunitoSans = Nunito_Sans({
  variable: "--font-nunito-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://apexmindcorp.com"),
  title: "ApexMind — Automatize seu WhatsApp com Assistentes de IA",
  description: "Responda automaticamente, qualifique seus clientes e transfira para o atendente certo — sem perder nenhuma conversa.",
  icons: {
    icon: "/images/apexmind-logo-final.png",
    apple: "/images/apexmind-logo-final.png",
    shortcut: "/images/apexmind-logo-final.png",
  },
  openGraph: {
    title: "ApexMind — Automatize seu WhatsApp com Assistentes de IA",
    description: "Responda automaticamente, qualifique seus clientes e transfira para o atendente certo — sem perder nenhuma conversa.",
    url: "https://apexmindcorp.com",
    siteName: "ApexMind",
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ApexMind — Automatize seu WhatsApp com Assistentes de IA",
    description: "Atendimento automático 24h no WhatsApp. Feito sob medida para o seu negócio.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${nunitoSans.variable}`}>
      <body className="min-h-full antialiased">{children}</body>
    </html>
  );
}
