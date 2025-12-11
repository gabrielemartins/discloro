import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";
import { QuoteProvider } from "@/lib/QuoteContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Discloro | Distribuidor de Cloro e Produtos Químicos",
  description:
    "Discloro - Distribuidor de cloro e produtos químicos para uso industrial, tratamento de água e piscinas. Qualidade, segurança e entrega em todo Brasil.",
  keywords: [
    "cloro",
    "hipoclorito de sódio",
    "tratamento de água",
    "produtos químicos",
    "piscinas",
    "distribuidor",
    "São Paulo",
    "Brasil",
  ],
  authors: [{ name: "Discloro" }],
  openGraph: {
    title: "Discloro | Distribuidor de Cloro e Produtos Químicos",
    description:
      "Distribuidor de cloro e produtos químicos para tratamento de uso industrial, água, piscinas.",
    url: "https://discloro.com.br",
    siteName: "Discloro",
    locale: "pt_BR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <QuoteProvider>
          <Header />
          <main className="pt-20">{children}</main>
          <Footer />
          <WhatsAppButton />
        </QuoteProvider>
      </body>
    </html>
  );
}
