import React, { useState, useEffect } from "react";
import bgVdo from "../../src/assets/map.mp4";
import FeaturedSection from "@/components/Shared/FeaturedSection";
import Testimonials from "@/components/Shared/Testimonials";
import Pricing from "@/components/Shared/Pricing";
import CounterUp from "@/components/Shared/CounterUp";
import Contact from "./Contact";
import WhyChooseUs from "@/components/Shared/WhyChooseUs";
import SuccessStory from "@/components/Shared/SuccessStory";
import { useGetAllBikesQuery } from "@/redux/features/bikes/bikeApi";
import PageTitleForHome from "@/components/Shared/PageTitleForHome";
import { IBike } from "@/Interface/IBike";
import WheelSpin from "./WheelSpin/WheelSpin";

const Home = () => {
  const { data: allBikes } = useGetAllBikesQuery(undefined);
  const [searchQuery, setSearchQuery] = useState("");
  const [displayedBikes, setDisplayedBikes] = useState<IBike[]>([]);

  useEffect(() => {
    // Display all bikes initially
    setDisplayedBikes(allBikes?.data || []);
  }, [allBikes]);

  const handleSearch = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const query = searchQuery.toLowerCase();

    // Filter bikes based on the search query and availability
    const filteredBikes = (allBikes?.data || []).filter(
      (bike) => bike.isAvailable && bike.name.toLowerCase().includes(query)
    );

    setDisplayedBikes(filteredBikes);
  };

  return (
    <div>
      <div className="mt-20 relative">
        <div className="overflow-hidden relative">
          <div className="rounded-xl hero overflow-hidden h-[400px] sm:h-[500px] lg:h-[600px] w-full text-white relative">
            <video
              src={bgVdo}
              autoPlay
              loop
              muted
              className="h-full w-full object-cover"
            />
            <div className="hero-overlay bg-black bg-opacity-30"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center z-20">
                <div>
                  <p className="font-semibold text-white text-xs sm:text-xl md:text-3xl lg:text-5xl">
                    Where To Go
                  </p>
                  <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 lg:gap-6 text-sm sm:text-lg lg:text-xl my-2 sm:my-4">
                    <div className="h-6 sm:h-8">
                      <h2 className="flex items-center gap-1 sm:gap-2 hover:border-b-2 cursor-pointer">
                        Search bike Availability
                      </h2>
                    </div>
                  </div>
                  <form onSubmit={handleSearch}>
                    <div className="relative px-2 sm:px-0 w-96">
                      <input
                        type="search"
                        name="search"
                        id="search-dropdown"
                        className="block p-2.5 w-full z-50 text-sm text-gray-900 bg-white rounded-md border-blue-300 border"
                        placeholder="Search..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        required
                      />
                      <button
                        type="submit"
                        className="absolute top-0 right-0 p-2.5 bg-red-500 text-sm sm:text-xl flex justify-center items-center gap-2 h-full text-white rounded-r-md border-none hover:bg-pink-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 transition-all duration-300"
                      >
                        Search
                        <span className="sr-only">Search</span>
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-5 lg:px-0">
        <div className="my-20">
          <div className="mt-12">
            <PageTitleForHome title="Featured Section" />
          </div>
          <div className="grid md:grid-cols-2 grid-cols-1 lg:grid-cols-3 gap-5">
            {displayedBikes.length > 0 ? (
              displayedBikes.map((bike: IBike) => (
                <FeaturedSection key={bike.id} bike={bike} />
              ))
            ) : (
              <p className="text-center text-lg">
                No bikes available based on your search.
              </p>
            )}
          </div>
        </div>
      </div>
      <WhyChooseUs />
      <WheelSpin />
      <Pricing />

      <Testimonials />

      <CounterUp />

      <Contact />
      <SuccessStory />
    </div>
  );
};

export default Home;
