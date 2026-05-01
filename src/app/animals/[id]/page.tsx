import AnimalDetailsPageCard from '@/components/animals/AnimalDetailsPageCard';
import { animals } from '@/data/animals';
import { Metadata } from 'next';



export async function generateMetadata({
  params,
}: {
  params: { id: string };
}): Promise<Metadata> {
  
  const { id } = await params;

  const animal = animals.find((a) => a.id === Number(id));

  if (!animal) {
    return {
      title: "Animal Not Found | Qurbani Hat",
      description: "The animal you are looking for does not exist.",
    };
  }

  return {
    title: `${animal.name} | Qurbani Hat`,
    description: `${animal.name} - ${animal.type} from ${animal.location}. Price ৳${animal.price}. View details and book now.`,
  };
}

export default async function AnimalDetailsPage({
  params,
}: {
  params: { id: string };
}) {
  const { id } = await params;

  const animal = animals.find((a) => a.id === Number(id));

  if (!animal) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <h1 className="text-3xl font-bold">Animal not found</h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen mt-10">
      <AnimalDetailsPageCard animal={animal} />
    </div>
  );
}