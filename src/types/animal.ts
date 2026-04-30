export type Animal = {
  id: number;
  name: string;
  type: "Cow" | "Goat" | "Sheep" | "Buffalo" | "Camel";
  breed: string;
  price: number;
  weight: number;
  age: number;
  location: string;
  description: string;
  image: string;
  category: "Large Animal" | "Small Animal";
  healthStatus: "Excellent" | "Good" | "Average";
  deliveryAvailable: boolean;
  isVaccinated: boolean;
};