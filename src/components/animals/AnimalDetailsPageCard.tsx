'use client'
import { MapPin, Calendar, Weight } from "lucide-react";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Animal } from "@/types/animal";
import SectionHeader from "../shared/SectionHeader";
import Link from "next/link";
import Form from "../form/auth/Form";
import { useEffect } from "react";
import { toast } from "sonner";


export default function AnimalDetailsPageCard({
  animal,
}: {
  animal: Animal;
}) {

 useEffect(() => {
  toast.success(`${animal.name} details loaded`);
}, [animal.name]);

  return (
    <div className="max-w-6xl mx-auto px-6 py-10 space-y-6">

      {/* HEADER */}
      <SectionHeader
        title={`${animal.name} Details`}
        className="text-center"
      />

      {/* BACK LINK */}
      <div>
        <Link
          href="/animals"
          className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground transition"
        >
          ← Back to all animals
        </Link>
      </div>

      {/* CARD */}
      <div className="grid md:grid-cols-2 gap-10 rounded-2xl overflow-hidden border border-zinc-200 dark:border-zinc-800 shadow-lg bg-white dark:bg-zinc-950">

        {/* IMAGE */}
        <div className="relative w-full h-100 md:h-full min-h-100">
          <Image
            src={animal.image}
            alt={animal.name}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            loading="eager"
            className="object-contain group-hover:scale-110 group-hover:brightness-75 transition duration-500 ease-out"
          />

          <Badge className="absolute top-4 left-4 bg-white/90 text-black px-3 py-1 text-xs rounded-full">
            {animal.category}
          </Badge>
        </div>

        {/* INFO */}
        <div className="p-8 flex flex-col gap-6">

          {/* TITLE */}
          <div className="space-y-2">
            <h1 className="text-3xl font-bold leading-tight">
              {animal.name}
            </h1>

            <p className="text-emerald-600 text-2xl font-semibold">
              ৳ {animal.price.toLocaleString()}
            </p>
          </div>

          {/* META INFO */}
          <div className="space-y-4 text-muted-foreground">

            <div className="flex items-center gap-3">
              <MapPin size={18} />
              <span>{animal.location}</span>
            </div>

            <div className="flex items-center gap-3">
              <Calendar size={18} />
              <span>{animal.age} years old</span>
            </div>

            <div className="flex items-center gap-3">
              <Weight size={18} />
              <span>{animal.weight} kg</span>
            </div>

          </div>

          {/* DIVIDER */}
          <div className="border-t pt-4 space-y-2 text-sm text-muted-foreground">
            <p><span className="text-foreground font-medium">Type:</span> {animal.type}</p>
            <p><span className="text-foreground font-medium">Breed:</span> {animal.breed}</p>
          </div>

          {/* DESCRIPTION */}
          <div className="border-t pt-4 space-y-2">
            <h3 className="font-semibold text-base">Description</h3>
            <p className="text-muted-foreground leading-relaxed text-sm">
              {animal.description}
            </p>
          </div>
         
         {/* BOOKING SECTION */}
<div className="border-t pt-6 space-y-4">

  <h3 className="text-xl font-semibold">
    Book This Animal
  </h3>

<Form  />

</div>
        </div>
      </div>
    </div>
  );
}