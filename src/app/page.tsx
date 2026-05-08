import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Parcours } from "@/components/Parcours";
import { Portfolio } from "@/components/Portfolio";
import { Passions } from "@/components/Passions";
import { Contact } from "@/components/Contact";

export default function Home() {
  return (
    <main className="min-h-screen bg-beige-50">
      <Navbar />
      <Hero />
      <About />
      <Parcours />
      <Portfolio />
      <Passions />
      <Contact />
    </main>
  );
}
