import React from 'react';
import AnimalCard from '../shadcn-space/card/card-02';
import SectionHeader from '../shared/SectionHeader';
import { Animal } from '@/types/animal';

export default function AnimalsSection({ animals }: { animals: Animal[] }) {
  return (
    <>
      <SectionHeader title='Animals' className='mt-16' />
      <div className='grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1  gap-4 mt-8'>
        {animals.map((animal) => (
          <AnimalCard key={animal.id} animal={animal} />
        ))}
      </div>
    </>
  );
}
