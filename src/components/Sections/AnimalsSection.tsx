import SectionHeader from "../shared/SectionHeader";
import { Animal } from "@/types/animal";
import Link from "next/link";
import AnimalCard from "../animals/AnimalCard";

export default function AnimalsSection({
  animals,
}: {
  animals: Animal[];
}) {
  return (
    <>
      <SectionHeader title="Animals" className="mt-16" />

      <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4 mt-8 px-3">
        {animals.map((animal) => (
          <Link key={animal.id} href={`/animals/${animal.id}`}>
            <AnimalCard animal={animal} />
          </Link>
        ))}
      </div>
    </>
  );
}