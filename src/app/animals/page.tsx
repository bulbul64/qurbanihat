import Link from "next/link";
import { animals } from "@/data/animals";
import AnimalCard from "@/components/animals/AnimalCard";
import SectionHeader from "@/components/shared/SectionHeader";

export default function AnimalsPage() {
  return (
    <div className="max-w-7xl min-h-screen mx-auto px-6 py-10 space-y-8">

      <SectionHeader title="All Animals" className="text-center" />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {animals.map((animal) => (
          <Link key={animal.id} href={`/animals/${animal.id}`}>
            <AnimalCard animal={animal} />
          </Link>
        ))}
      </div>

    </div>
  );
}