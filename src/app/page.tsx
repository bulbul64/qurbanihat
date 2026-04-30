import Hero from "@/components/Sections/Hero";
import AnimalsSection from "@/components/Sections/AnimalsSection";
import { animals } from "@/data/animals";

export default function Home() {
  return (
    <div className="flex min-h-screen justify-center bg-zinc-50 dark:bg-black">
      <main>
        <Hero />
        <AnimalsSection animals={animals} />
      </main>
    </div>
  );
}