import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ModernBackground } from "@/components/ModernBackground";
import { getAssetPath } from "@/utils/imageLoader";

export const metadata: Metadata = {
  title: "Lya Biwa",
  description: "Portfolio professionnel de Lya Biwa, étudiante en communication. Créativité, stratégie et design.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="scroll-smooth">
      <head>
        <link rel="icon" href={getAssetPath("/favicon.png")} />
      </head>
      <body className="antialiased selection:bg-accent/30 relative">
        <ModernBackground />
        <Navbar />
        <main className="min-h-screen relative z-10">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}





