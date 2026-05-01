'use client';

import { Animal } from '@/types/animal';
import Image from 'next/image';

export default function TopBreeds({ animals }: { animals: Animal[] }) {


  return (
    <section className="mt-16 px-6">
      <h2 className="text-2xl font-semibold mb-6">Top Breeds</h2>

      <div className="grid md:grid-cols-4 gap-5">
        {animals.slice(0, 4).map((breed, i) => (
          <div
            key={i}
            className="group rounded-2xl overflow-hidden border bg-white hover:shadow-lg transition"
          >
            <div className="relative h-40 w-full">
              <Image
                src={breed.image}
                alt={breed.name}
                fill
                className="object-cover group-hover:scale-105 transition"
              />
            </div>

            <div className="p-4 text-center">
              <h3 className="font-medium">{breed.name}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}