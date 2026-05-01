import Hero from "@/components/Sections/Hero";
import AnimalsSection from "@/components/Sections/AnimalsSection";
import { animals } from "@/data/animals";
import { Metadata } from "next";
import QurbaniTips from "@/components/Sections/QurbaniTips";
import TopBreeds from "@/components/Sections/TopBreeds";
import About from "@/components/Sections/About";
export const metadata: Metadata = {
  title: "Qurbani Hat | Buy Healthy Animals Online",
  description:"Browse healthy, well-raised animals for Qurbani. Check details, compare prices, and book your animal easily and securely.",
};
export default function Home() {
  return (
    <div className="flex min-h-screen justify-center dark:bg-black">
      <main>
        <Hero />
        <QurbaniTips />
        <About />
        <TopBreeds animals={animals} />
        <AnimalsSection animals={animals} />
      </main>
    </div>
  );
}