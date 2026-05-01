import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { MapPin, Calendar, Weight, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import { Animal } from '@/types/animal';
import { Button } from '../ui/button';
import { usePathname } from 'next/navigation';

const AnimalCard = ({ animal }: { animal: Animal }) => {
  const pathname = usePathname();

  const isAnimalsPage = pathname === '/animals';
  const { name, price, location, age, weight, image, category } = animal;

  return (
    <Card className="group overflow-hidden rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
      {/* IMAGE SECTION */}
      <div className="relative h-60 w-full overflow-hidden">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover group-hover:scale-105 transition duration-500 ease-out"
        />

        {/* dark overlay */}
        <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/10 to-transparent" />

        {/* category */}
        <Badge className="absolute top-4 left-4 bg-white/90 text-black text-xs px-3 py-1 rounded-full backdrop-blur">
          {category}
        </Badge>

        {/* hover arrow */}
        <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition">
          <ArrowRight className="text-white" />
        </div>
      </div>

      {/* CONTENT */}
      <div className="p-5 space-y-4">
        {/* name + price */}
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-lg font-semibold leading-tight group-hover:text-emerald-600 transition">
            {name}
          </h3>

          <p className="text-emerald-600 font-bold whitespace-nowrap">৳ {price.toLocaleString()}</p>
        </div>

        {/* location */}
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <MapPin size={16} />
          <span>{location}</span>
        </div>

        {/* info row */}
        <div className="flex items-center justify-between text-sm border-t pt-3 border-zinc-200 dark:border-zinc-700 text-muted-foreground">
          <div className="flex items-center gap-1">
            <Calendar size={16} />
            <span>{age} yrs</span>
          </div>

          <div className="flex items-center gap-1">
            <Weight size={16} />
            <span>{weight} kg</span>
          </div>
        </div>
        {isAnimalsPage && <Button className="w-full rounded-xl mt-2">Book Details</Button>}
      </div>
    </Card>
  );
};

export default AnimalCard;
