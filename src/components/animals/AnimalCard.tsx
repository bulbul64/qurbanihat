import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Calendar, Weight, ArrowRight } from "lucide-react";
import Image from "next/image";
import { Animal } from "@/types/animal";


const AnimalCard = ({ animal }: { animal: Animal }) => {
  const { name, price, location, age, weight, image, category } = animal;

 

  return (
    <Card className="group cursor-pointer overflow-hidden rounded-2xl border border-zinc-200 dark:border-zinc-800 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">

      {/* Image */}
      <div className="relative w-full h-60 overflow-hidden">
        <Image
          src={image}
          alt={name}
          width={400}
          height={300}
          className="w-full h-full object-contain group-hover:scale-110 group-hover:brightness-75 transition duration-500 ease-out"
        />

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent" />

        {/* Category badge */}
        <Badge className="absolute top-4 left-4 bg-white/90 text-black backdrop-blur px-3 py-1 rounded-full text-xs font-medium">
          {category}
        </Badge>

        {/* Arrow */}
        <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition duration-300">
          <ArrowRight className="text-white transform translate-x-2 group-hover:translate-x-0 transition duration-300" />
        </div>
      </div>

      {/* Content */}
      <div className="p-5 space-y-4">

        {/* Title + Price */}
        <div className="flex justify-between items-start">
          <h3 className="text-lg font-semibold group-hover:text-primary transition">
            {name}
          </h3>

          <p className="text-emerald-600 dark:text-emerald-400 font-bold text-lg">
            ৳ {price.toLocaleString()}
          </p>
        </div>

        {/* Location */}
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <MapPin size={16} />
          <span>{location}</span>
        </div>

        {/* Short Info */}
        <div className="flex justify-between text-sm border-t border-zinc-200 dark:border-zinc-700 pt-3 text-muted-foreground">

          <div className="flex items-center gap-1">
            <Calendar size={16} />
            <span>{age} yrs</span>
          </div>

          <div className="flex items-center gap-1">
            <Weight size={16} />
            <span>{weight} kg</span>
          </div>

        </div>

      </div>
    </Card>
  );
};

export default AnimalCard;