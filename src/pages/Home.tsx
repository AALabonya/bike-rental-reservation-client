import { useState } from "react";
import { FaCar, FaHome, FaHotel } from "react-icons/fa";
import { MdFlightTakeoff } from "react-icons/md";
import bgVdo from "../../src/assets/map.mp4";
import FeaturedSection from "@/components/Shared/FeaturedSection";
import Testimonials from "@/components/Shared/Testimonials";
import Pricing from "@/components/Shared/Pricing";
import CounterUp from "@/components/Shared/CounterUp";
import Contact from "./Contact";
import WhyChooseUs from "@/components/Shared/WhyChooseUs";
import SuccessStory from "@/components/Shared/SuccessStory";
const searchCategory = [
  { icon: <FaHome></FaHome>, name: "Search All", title: "Where to Go" },
  {
    icon: <FaHotel></FaHotel>,
    name: "Search Hotel",
    title: "Stay Somewhere great",
  },
  {
    icon: <MdFlightTakeoff />,
    name: "Search Air",
    title: "Explore Air Journey",
  },
  { icon: <FaCar></FaCar>, name: "Search Car", title: "Explore Car Journey" },
];

const Home = () => {
  const [placeHolder, setPlaceholder] = useState("Search All");
  const [title, setTitle] = useState("Where to Go");
  const [search, setSearch] = useState("");

  const handleClick = (item) => {
    setPlaceholder(item.name);
    setTitle(item.title);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    const searchValue = e.target.search.value;
    setSearch(searchValue);
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
                    {title}
                  </p>
                  <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 lg:gap-6 text-sm sm:text-lg lg:text-xl my-2 sm:my-4">
                    {searchCategory?.map((item, idx) => (
                      <div key={idx} className="h-6 sm:h-8">
                        <h2
                          onClick={() => handleClick(item)}
                          className={`flex items-center gap-1 sm:gap-2 hover:border-b-2 cursor-pointer ${
                            title === item.title ? "border-b-2" : ""
                          }`}
                        >
                          {item.icon} {item.name}
                        </h2>
                      </div>
                    ))}
                  </div>
                  <form onSubmit={handleSearch}>
                    <div className="relative w-full px-2 sm:px-0">
                      <input
                        type="search"
                        name="search"
                        id="search-dropdown"
                        className="block p-2.5 w-full z-50 text-sm text-gray-900 bg-white rounded-md border-blue-300 border"
                        placeholder={`Search ${placeHolder}...`}
                        required
                      />
                      <button
                        type="submit"
                        className="absolute top-0 right-0 p-2.5 bg-red-500 text-sm sm:text-xl w-1/3 sm:w-1/6 flex justify-center items-center gap-2 h-full text-white rounded-r-md border-none hover:bg-pink-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 transition-all duration-300"
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

      <FeaturedSection />
      <Pricing />
      <Testimonials />
      <WhyChooseUs />
      <CounterUp />

      <Contact />
      {/* <SuccessStory /> */}
    </div>
  );
};

export default Home;
