import animals from '@/data/animals.json';

import AnimalsSection from "@/components/Sections/AnimalsSection";
import Hero from "@/components/Sections/Hero";


export default  function Home() {


   console.log(animals)

  return (
    <div className="flex  min-h-screen  justify-center bg-zinc-50 font-sans dark:bg-black">
      <main>
        <Hero />
       <AnimalsSection animals={animals} />
      </main>
    </div>
  );
}
