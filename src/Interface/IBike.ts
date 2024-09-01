export type IBike = {
  id: React.Key | null | undefined;
  _id: string;
  name: string;
  description: string;
  pricePerHour: number;
  isAvailable?: boolean;
  cc: number;
  year: number;
  model: string;
  brand: string;
  engineType: string;
  maximumSpeed: string;
  category: string;
  image: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
};
