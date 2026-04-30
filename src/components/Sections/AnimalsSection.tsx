'use client';

import SectionHeader from '../shared/SectionHeader';
import { Animal } from '@/types/animal';

import AnimalCard from '../animals/AnimalCard';
import { authClient } from '@/lib/auth-client';

import { useRouter } from 'next/navigation';

export default function AnimalsSection({ animals }: { animals: Animal[] }) {
  const { data: session } = authClient.useSession();
  const router = useRouter();

  const handleClick = (animalId: number) => {
    if (!session) {
      router.push('/auth/login');
      return;
    }

    router.push(`/animals/${animalId}`);
  };

  return (
    <>
      <SectionHeader title="Animals" className="mt-16" />

      <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4 mt-8 px-3">
        {animals.map((animal) => (
          <div
            key={animal.id}
            role="button"
            tabIndex={0}
            onClick={() => handleClick(animal.id)}
            className="cursor-pointer"
          >
            <AnimalCard animal={animal} />
          </div>
        ))}
      </div>
    </>
  );
}
