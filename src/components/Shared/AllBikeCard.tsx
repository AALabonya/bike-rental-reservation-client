import { IBike } from "@/Interface/IBike";
import { useNavigate } from "react-router-dom";

type BikeCardProps = {
  bike: IBike;
};
const fallbackImage =
  "https://autobike.jollyany.co/images/tz_portfolio_plus/image_gallery/7/harley-davidson-mvx3y17umae-unsplash.jpg";
export default function AllBikeCard({ bike }: BikeCardProps) {
  const navigate = useNavigate();

  const handleViewDetails = () => {
    // Navigate to the bike details page with the bike's ID
    navigate(`/bike-details/${bike._id}`);
  };

  return (
    <>
      <div className="w-full max-w-md space-y-4 rounded-lg bg-white shadow-lg dark:bg-[#18181B]">
        <img
          className="h-[300px] w-full bg-gray-600 object-cover"
          src={bike.image || fallbackImage} // Use fallback image if bike.image is not available
          alt={bike.name || "Bike Image"}
        />
        <div className="p-5 space-y-6">
          <div className="flex flex-col space-y-1.5">
            <h3 className="text-2xl font-semibold ">{bike.name}</h3>
            <p className="text-sm text-gray-500 dark:text-white/60">
              {bike.description}
            </p>
          </div>
          <div className="grid grid-cols-2">
            <div className="flex gap-3 items-center">
              <img
                src="https://autobike.jollyany.co/images/gear.svg"
                alt=""
                className="w-8 h-8"
              />
              <h1>
                {bike.maximumSpeed} km/h <br />
                <small>Maximum Speed</small>
              </h1>
            </div>
            <div className="flex gap-6 items-center">
              <img
                src="https://autobike.jollyany.co/images/Age.svg"
                alt=""
                className="w-8 h-8"
              />
              <h1>
                15
                <br />
                <small>Minimum Age</small>
              </h1>
            </div>
          </div>
          <div className="grid grid-cols-2">
            <div className="flex gap-3 items-center">
              <img
                src="https://autobike.jollyany.co/images/calendar-48.png"
                alt=""
                className="w-8 h-8"
              />
              <h1>
                {bike.year}
                <br />
                <small>Year</small>
              </h1>
            </div>
            <div className="flex gap-3 items-center">
              <img
                src="https://autobike.jollyany.co/images/Cooling.svg"
                alt=""
                className="w-8 h-8"
              />
              <h1>
                {bike.engineType}
                <br />
                <small>Engine Type</small>
              </h1>
            </div>
          </div>
          <div className="grid grid-cols-2">
            <div className="flex gap-3 items-center">
              <img
                src="https://autobike.jollyany.co/images/motorbike-50.png"
                alt=""
                className="w-8 h-8"
              />
              <h1>
                {bike.brand} <br />
                <small>Brand</small>
              </h1>
            </div>
            <div className="flex gap-3 items-center">
              <img
                src="https://autobike.jollyany.co/images/layer-60.png"
                alt=""
                className="w-8 h-8"
              />
              <h1>
                {bike.model}
                <br />
                <small>Model</small>
              </h1>
            </div>
          </div>
          <button
            className="w-full rounded-lg bg-red-500 px-6 py-2 text-[12px] font-semibold text-white hover:bg-slate-900 sm:text-sm md:text-base"
            onClick={handleViewDetails}
          >
            View Details
          </button>
        </div>
      </div>
    </>
  );
}
