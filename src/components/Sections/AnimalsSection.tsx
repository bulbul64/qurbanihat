

import SectionHeader from '../shared/SectionHeader';
import { Animal } from '@/types/animal';

import AnimalCard from '../animals/AnimalCard';

import Link from 'next/link';

export default function AnimalsSection({ animals }: { animals: Animal[] }) {
 

  return (
    <>
      <SectionHeader title="Animals" className="mt-16" />

      <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4 mt-8 px-3">
        {animals.map((animal) => (
          <Link
            href={`/animals/${animal.id}`}
            key={animal.id}
            role="button"
            tabIndex={0}

            className="cursor-pointer"
          >
            <AnimalCard animal={animal} />
          </Link>
        ))}
      </div>
    </>
  );
}
