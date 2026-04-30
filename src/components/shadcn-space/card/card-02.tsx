import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Calendar, Weight, ArrowRight } from "lucide-react";
import Image from "next/image";
import { Animal } from "@/types/animal";

const AnimalCard = ({ animal }: { animal: Animal }) => {
  const {  name, price, location, age, weight, image, category } = animal;

  return (
    <Card className="group overflow-hidden border border-zinc-200 dark:border-zinc-800 hover:shadow-xl transition duration-300">

      {/* Image */}
      <div className="relative w-full h-60 overflow-hidden">
        <Image
          src={image}
          alt={name}
          width={400}
          height={300}
          className="w-full h-full object-cover group-hover:scale-110 transition duration-300"
        />

        {/* Category badge */}
        <Badge className="absolute top-4 left-4 bg-black/70 text-white">
          {category}
        </Badge>

        {/* Arrow */}
        <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition">
          <ArrowRight className="text-white" />
        </div>
      </div>

      {/* Content */}
      <div className="p-5 space-y-4">

        {/* Title + Price */}
        <div className="flex justify-between items-start">
          <h3 className="text-lg font-semibold group-hover:text-primary transition">
            {name}
          </h3>

          <p className="text-primary font-bold">
            ৳ {price.toLocaleString()}
          </p>
        </div>

        {/* Location */}
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <MapPin size={16} />
          <span>{location}</span>
        </div>

        {/* Short Info */}
        <div className="flex justify-between text-sm border-t pt-3">

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