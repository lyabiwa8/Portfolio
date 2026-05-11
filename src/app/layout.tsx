import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ModernBackground } from "@/components/ModernBackground";
import { CustomCursor } from "@/components/CustomCursor";
import { getAssetPath } from "@/utils/imageLoader";

export const metadata: Metadata = {
  title: "Lya Biwa",
  description: "Portfolio professionnel de Lya Biwa, étudiante en communication. Créativité, stratégie et design.",
  icons: {
    icon: "/images/logos/logo-lya-final.png.png",
    apple: "/images/logos/logo-lya-final.png.png",
  },
  openGraph: {
    title: "Lya Biwa",
    description: "Créativité, stratégie et design en communication.",
    images: [
      {
        url: "/images/logos/logo-lya-final.png.png",
        width: 800,
        height: 600,
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="scroll-smooth" suppressHydrationWarning>
      <body className="antialiased selection:bg-accent/30 relative overflow-x-hidden w-full">
        <CustomCursor />
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





