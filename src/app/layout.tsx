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
  title: "ApexMind — Automatize seu WhatsApp com Assistentes de IA",
  description: "Responda automaticamente, qualifique seus clientes e transfira para o atendente certo — sem perder nenhuma conversa.",
  icons: {
    icon: "/images/apexmind-logo.jpg",
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
