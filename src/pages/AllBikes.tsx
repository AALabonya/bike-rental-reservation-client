import { useState, ChangeEvent } from "react";
import { Search } from "lucide-react";
import { GrPowerReset } from "react-icons/gr";
import { useGetBikeQuery } from "@/redux/features/bikes/bikeApi";
import { IBike } from "@/Interface/IBike";
import PageTitleForHome from "@/components/Shared/PageTitleForHome";
import AllBikeCard from "@/components/Shared/AllBikeCard";

const Bikes = () => {
  const { data: bikes } = useGetBikeQuery(undefined);
  const bikeList = bikes?.data || []; // Safeguard to ensure data is present

  const [searchTerm, setSearchTerm] = useState("");
  const [availabilityFilter, setAvailabilityFilter] = useState("");
  const [brandFilter, setBrandFilter] = useState("");

  // Handle search input change
  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value.toLowerCase());
  };

  // Handle availability filter change
  const handleAvailabilityChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setAvailabilityFilter(e.target.value);
  };

  // Handle brand filter change
  const handleBrandChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setBrandFilter(e.target.value);
  };

  // Handle reset filters
  const resetFilters = () => {
    setSearchTerm("");
    setAvailabilityFilter("");
    setBrandFilter("");
  };

  // Filter bike list based on search, availability, and brand filters
  const filteredBikes = bikeList.filter((bike: IBike) => {
    const matchesSearch = bike.name.toLowerCase().includes(searchTerm);
    const matchesAvailability =
      availabilityFilter === ""
        ? true
        : availabilityFilter === "available"
        ? bike.isAvailable
        : !bike.isAvailable;
    const matchesBrand = brandFilter ? bike.brand === brandFilter : true;

    return matchesSearch && matchesAvailability && matchesBrand;
  });

  return (
    <div>
      <div
        className="bg-about-us bg-bottom h-64 flex justify-center items-center mt-20"
        style={{
          backgroundImage: 'url("https://i.ibb.co/GVnJgFf/breadcrumb.jpg")',
        }}
      >
        <h1 className="text-5xl font-bold text-white">Our Bikes</h1>
      </div>

      <div className="max-w-6xl mx-auto -mt-16 z-50">
        <div className="shadow-xl p-12 bg-white">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 items-end bg-white">
            {/* Search Bikes */}
            <div className="flex flex-col gap-3">
              <h2 className="font-medium">Search Bikes</h2>
              <div className="relative w-full">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-400" />
                <input
                  type="search"
                  placeholder="Search..."
                  className="w-full bg-gray-100 pl-8 py-2 border border-gray-300 rounded"
                  value={searchTerm}
                  onChange={handleSearchChange}
                />
              </div>
            </div>

            {/* Filter by Availability */}
            <div className="flex flex-col gap-3">
              <h2 className="font-medium">Filter by Availability</h2>
              <select
                className="w-full bg-gray-100 py-2 border border-gray-300 rounded"
                value={availabilityFilter}
                onChange={handleAvailabilityChange}
              >
                <option value="">Select Availability</option>
                <option value="available">Available</option>
                <option value="notAvailable">Not Available</option>
              </select>
            </div>

            {/* Filter by Brand */}
            <div className="flex flex-col gap-3">
              <h2 className="font-medium">Filter by Brand</h2>
              <select
                className="w-full bg-gray-100 py-2 border border-gray-300 rounded"
                value={brandFilter}
                onChange={handleBrandChange}
              >
                <option value="">Select A Brand</option>
                <option value="bajaj">Bajaj</option>
                <option value="hero">Hero</option>
                <option value="tvsmotor">TVS Motor</option>
                <option value="yamaha">Yamaha</option>
                <option value="honda">Honda</option>
                <option value="suzuki">Suzuki</option>
                <option value="rafi">Rafi</option>
                <option value="runner">Runner</option>
                <option value="sym">SYM</option>
                <option value="kawasaki">Kawasaki</option>
              </select>
            </div>

            {/* Reset Filters Button */}
            <button
              className="w-full bg-red-500 text-base font-semibold text-white py-2 rounded hover:bg-gray-700 flex items-center gap-5"
              onClick={resetFilters}
            >
              <GrPowerReset className="ml-5" /> <span>Reset</span>
            </button>
          </div>
        </div>
      </div>

      {/* Display Filtered Bikes */}
      <div className="container mx-auto px-5 lg:px-0">
        <div className="my-20">
          <div className="mt-12">
            <PageTitleForHome title="Featured Section" />
          </div>
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
            {filteredBikes.map((bike: IBike) => (
              <AllBikeCard key={bike.id} bike={bike} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bikes;
