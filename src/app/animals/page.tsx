'use client';
import Link from 'next/link';
import { animals } from '@/data/animals';
import AnimalCard from '@/components/animals/AnimalCard';
import SectionHeader from '@/components/shared/SectionHeader';
import AddShortByPrice from '@/components/shadcn-space/select/select-01';
import { useState } from 'react';

export default function AnimalsPage() {




  

 const [sortOrder, setSortOrder] = useState("");

 const sortedAnimals = animals.sort((a, b) => {
   if (sortOrder === "low") {
     return a.price - b.price;
   } else if (sortOrder === "high") {
     return b.price - a.price;
   }
   return 0;
 });

 console.log(sortOrder)

  return (
    <div className="max-w-7xl min-h-screen mx-auto px-6 py-10 space-y-8">
      <div className="flex justify-between items-center">
        <SectionHeader title="All Animals" className="text-center" />
        <AddShortByPrice setSortOrder={setSortOrder}  />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {sortedAnimals.map((animal) => (
          <Link key={animal.id} href={`/animals/${animal.id}`}>
            <AnimalCard animal={animal} />
          </Link>
        ))}
      </div>
    </div>
  );
}
