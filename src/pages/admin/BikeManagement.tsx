import { useState } from "react";
import { MoreHorizontal } from "lucide-react";
import moment from "moment";
import { NavLink } from "react-router-dom";
import toast from "react-hot-toast";

import { IBike } from "@/Interface/IBike";
import {
  useDeleteBikeMutation,
  useGetBikeQuery,
} from "@/redux/features/bikes/bikeApi";
import PageTitleForHome from "@/components/Shared/PageTitleForHome";

const BikeManagement = () => {
  const { data: bikeData, isLoading, refetch } = useGetBikeQuery(undefined);

  const [deleteBike] = useDeleteBikeMutation();
  const bikes = bikeData?.data;
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const handleDeleteBike = async (id: string) => {
    const toastId = toast.loading("Marking bike as unavailable...");
    try {
      const res = await deleteBike(id).unwrap();
      refetch();
      toast.success(res.message, { id: toastId });
    } catch (error) {
      console.error("Bike marking failed:", error);
      toast.error("Failed to mark bike as unavailable.", { id: toastId });
    }
  };

  if (isLoading) {
    return <p className="p-4 text-center text-gray-500">Loading...</p>;
  }

  return (
    <div className="p-4">
      <div className="">
        <PageTitleForHome title="Bike Management" />
      </div>
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <div className="p-4 overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="w-[100px] hidden sm:table-cell">Image</th>
                <th className="text-left px-4 py-2">Name</th>
                <th className="text-left px-4 py-2">Availability</th>
                <th className="text-left px-4 py-2">Brand</th>
                <th className="text-left px-4 py-2">Bike CC</th>
                <th className="hidden md:table-cell text-left px-4 py-2">
                  Price
                </th>
                <th className="hidden md:table-cell text-left px-4 py-2">
                  Created At
                </th>
                <th className="text-left px-4 py-2">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {bikes.map((bike: IBike) => (
                <tr key={bike._id}>
                  <td className="hidden sm:table-cell p-4">
                    <img
                      alt="Bike img"
                      className="aspect-square rounded-md object-cover"
                      height="64"
                      src={bike.image}
                      width="64"
                    />
                  </td>
                  <td className="p-4 font-medium">{bike.name}</td>
                  {/* <td> <span
                      className={`inline-block px-2 py-1 rounded-full text-white ${
                        bike.isAvailable ? === "Available" ? "bg-green-500" : "bg-gray-500"
                      }`}
                    >
            
                    {bike.isAvailable ? "Available" : "Not Available"}
                    </span>
                  </td> */}
                  <td className="hidden md:table-cell px-4 py-2 text-sm text-gray-700">
                    <span
                      className={`inline-block px-2 py-1 rounded-full text-white ${
                        bike.isAvailable === true
                          ? "bg-green-500"
                          : "bg-gray-500"
                      }`}
                    >
                      {bike.isAvailable ? "Available" : "Not Available"}
                    </span>
                  </td>

                  <td className="p-4 capitalize">{bike.brand}</td>
                  <td className="p-4">{bike.cc} CC</td>
                  <td className="hidden md:table-cell p-4">
                    ${bike.pricePerHour}
                  </td>
                  <td className="hidden md:table-cell p-4">
                    {moment(bike.createdAt).format("DD-MM-YYYY")}
                  </td>
                  <td className="p-4">
                    <div className="relative">
                      <button
                        className="p-2 rounded-full hover:bg-gray-100 focus:outline-none"
                        aria-haspopup="true"
                        onClick={() =>
                          setOpenDropdown(
                            openDropdown === bike._id ? null : bike._id
                          )
                        }
                      >
                        <MoreHorizontal className="h-4 w-4" />
                        <span className="sr-only">Toggle menu</span>
                      </button>
                      {openDropdown === bike._id && (
                        <div className="absolute right-0 w-36 bg-white border border-gray-200 rounded-md shadow-lg">
                          <div className="py-1">
                            <NavLink to={`/userDash/update-bike/${bike._id}`}>
                              <button className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                                Edit
                              </button>
                            </NavLink>
                            <button
                              onClick={() => handleDeleteBike(bike._id)}
                              className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                            >
                              Delete
                            </button>
                          </div>
                        </div>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="p-4 border-t text-xs text-gray-500 flex justify-between items-center">
          {/* Add pagination or other footer content here */}
        </div>
      </div>
    </div>
  );
};

export default BikeManagement;
