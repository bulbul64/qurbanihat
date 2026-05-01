'use client';

import SectionHeader from '../shared/SectionHeader';
import { Animal } from '@/types/animal';

import AnimalCard from '../animals/AnimalCard';

import Link from 'next/link';

import { Button } from '../ui/button';
import { ArrowRight } from 'lucide-react';

export default function AnimalsSection({ animals }: { animals: Animal[] }) {
 
  

   
   

  return (
    <>
      <div className="flex justify-between items-center mt-10">
        <SectionHeader title="Featured Animals" />
       <Link href="/animals">
        <Button variant="link" className="flex items-center gap-2 text-2xl cursor-pointer" >
          View All
          <ArrowRight className="h-4 w-4" />
        </Button>
        </Link>
      
      </div>
      <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4 mt-8 px-3">
        {animals.slice(0, 4).map((animal) => (
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
