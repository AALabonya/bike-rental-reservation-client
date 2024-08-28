import { useState, ChangeEvent } from "react";
import { Search } from "lucide-react";
import { GrPowerReset } from "react-icons/gr";
import FeaturedSection from "@/components/Shared/FeaturedSection";

const Bikes = () => {
  const [brand, setBrand] = useState("");
  const [category, setCategory] = useState("");
  const [status, setStatus] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  //   const { data } = baseApi.useGetBikeQuery(undefined);
  //   console.log(data);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };
  console.log({ brand, category, status, searchTerm });

  return (
    <div>
      <div
        className="bg-about-us bg-bottom h-64 flex justify-center items-center  mt-20"
        style={{
          backgroundImage: 'url("https://i.ibb.co/GVnJgFf/breadcrumb.jpg")',
        }}
      >
        <h1 className="text-5xl font-bold text-white">Our Bikes</h1>
      </div>
      <div className="max-w-6xl mx-auto -mt-16 z-50 ">
        <div className=" shadow-xl p-12  bg-white">
          <div className="grid grid-cols-5 gap-5 items-end bg-white">
            <div className="flex flex-col gap-3">
              <h2 className="font-medium ">Search Bikes</h2>
              <div className="relative w-full">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-400" />
                <input
                  type="search"
                  placeholder="Search..."
                  className="w-full bg-gray-100 pl-8 py-2 border border-gray-300 rounded"
                  value={searchTerm}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <h2 className="font-medium">Filter by Status</h2>
              <select
                className="w-full bg-gray-100 py-2 border border-gray-300 rounded"
                onChange={(e) => setStatus(e.target.value)}
                value={status}
              >
                <option value="">Select A Status</option>
                <option value="available">Available</option>
                <option value="notAvailable">Not Available</option>
              </select>
            </div>

            <div className="flex flex-col gap-3">
              <h2 className="font-medium">Filter by Category</h2>
              <select
                className="w-full bg-gray-100 py-2 border border-gray-300 rounded"
                onChange={(e) => setCategory(e.target.value)}
                value={category}
              >
                <option value="">Select A Category</option>
                <option value="eBike">E-Bike</option>
                <option value="roadBike">Road Bike</option>
                <option value="kidsBike">Kids Bike</option>
              </select>
            </div>

            <div className="flex flex-col gap-3">
              <h2 className="font-medium">Filter by Brand</h2>
              <select
                className="w-full bg-gray-100 py-2 border border-gray-300 rounded"
                onChange={(e) => setBrand(e.target.value)}
                value={brand}
              >
                <option value="">Select A Brand</option>
                <option value="brand1">Brand 1</option>
                <option value="brand2">Brand 2</option>
                <option value="brand3">Brand 3</option>
              </select>
            </div>

            <button
              className="w-full bg-red-500 text-base font-semibold text-white py-2 rounded hover:bg-gray-700 flex items-center gap-5"
              onClick={() => {
                setBrand("");
                setCategory("");
                setStatus("");
                setSearchTerm("");
              }}
            >
              <GrPowerReset className="ml-5" /> <span className="">Reset</span>
            </button>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-5 lg:px-0">
        <div className="my-20">
          <div className="">
            <FeaturedSection />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bikes;
