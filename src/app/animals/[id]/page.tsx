import AnimalDetailsPageCard from '@/components/animals/AnimalDetailsPageCard';
import { animals } from '@/data/animals';

export default async function AnimalDetailsPage({ params }: { params: { id: string } }) {
  // await params (as you want)
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
