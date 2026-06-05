import { Navbar } from "@/components/landing/Navbar";
import { Hero } from "@/components/landing/Hero";
import { Features } from "@/components/landing/Features";
import { Stats } from "@/components/landing/Stats";
import { Footer } from "@/components/landing/Footer";

export default function Home() {
  return (
    <div className="bg-white">
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Features />
      </main>
      <Footer />
    </div>
  );
}
