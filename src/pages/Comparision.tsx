import { IBike } from "@/Interface/IBike";
import { useGetAllBikesQuery } from "@/redux/features/bikes/bikeApi";
import { BikeIcon, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

interface Bike {
  _id: string; // Assume _id is a string, update if necessary
  name: string;
  image: string;
  brand: string;
  model: string;
  cc: number;
  pricePerHour: number;
  year: number;
}

export default function Comparison() {
  const { data: bikesData } = useGetAllBikesQuery(undefined);
  const [selectedBikes, setSelectedBikes] = useState<Bike[]>([]);

  const bikes = bikesData?.data?.map((bike: IBike) => ({
    ...bike,
    _id: bike._id, // Keep the original _id if it's not a number
  }));

  const handleBikeSelect = (bike: Bike) => {
    if (selectedBikes.length < 3) {
      setSelectedBikes([...selectedBikes, bike]);
    } else {
      setSelectedBikes([...selectedBikes.slice(1), bike]);
    }
  };

  const handleRemoveSelectedBike = (bikeId: string) => {
    setSelectedBikes(selectedBikes.filter((bike) => bike._id !== bikeId));
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-center">Compare Bikes</h1>

      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">
          Select up to 3 bikes to compare:
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 dark:text-black">
          {bikes?.map((bike: Bike) => (
            <button
              key={bike._id}
              onClick={() => handleBikeSelect(bike)}
              disabled={selectedBikes.some((b) => b._id === bike._id)}
              className="flex items-center justify-between w-full p-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
            >
              <span className="flex items-center gap-2">
                <BikeIcon className="h-4 w-4" />
                {bike.name}
              </span>
              {selectedBikes.some((b) => b._id === bike._id) && (
                <span className="bg-red-500 font-semibold text-white px-2 py-1 rounded-full text-xs">
                  Selected
                </span>
              )}
            </button>
          ))}
        </div>
      </div>

      {selectedBikes.length > 0 && (
        <div className="bg-gray-100 rounded-lg p-6 overflow-x-auto dark:text-black">
          <table className="">
            <thead>
              <tr>
                <th className="text-left p-2">Feature</th>
                {selectedBikes.map((bike) => (
                  <th key={bike._id} className="p-2">
                    <div className="flex gap-4">
                      <span>{bike.name}</span>
                      <div className="flex items-center gap-3">
                        <Link
                          to={`/bike-details/${bike._id}`}
                          className="text-blue-600 hover:underline"
                        >
                          Rent Bike
                        </Link>
                        <button
                          onClick={() => handleRemoveSelectedBike(bike._id)}
                          className="text-red-500 hover:text-red-700"
                        >
                          <X className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="font-medium p-2">Image</td>
                {selectedBikes.map((bike) => (
                  <td key={bike._id} className="p-2">
                    <img
                      src={bike.image}
                      alt={bike.name}
                      className="w-24 h-24 object-contain rounded-lg"
                    />
                  </td>
                ))}
              </tr>
              {["Brand", "Model", "CC", "pricePerHour", "Year"].map(
                (feature) => (
                  <tr key={feature}>
                    <td className="font-medium p-2">{feature}</td>
                    {selectedBikes.map((bike) => (
                      <td key={bike._id} className="p-2">
                        {feature === "pricePerHour"
                          ? `${bike.pricePerHour.toFixed(0)} BDT`
                          : bike[feature.toLowerCase() as keyof Bike]}
                      </td>
                    ))}
                  </tr>
                )
              )}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
