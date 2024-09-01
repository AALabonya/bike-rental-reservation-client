/* eslint-disable @typescript-eslint/no-explicit-any */
import { FC, useEffect, useState } from "react";

import toast from "react-hot-toast";
import { IRental } from "@/Interface/TRental";
import { useGetAllRentalsQuery } from "@/redux/features/rentals/rentalApi";
import CouponPayment from "@/components/Shared/CouponPayment";

const MyRentals: FC = () => {
  const [couponDialogOpen, setCouponDialogOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<string>("unpaid");
  const [selectedRental, setSelectedRental] = useState<any>(null);

  const {
    data: allRentals,
    isError,
    isLoading,
    isSuccess,
    error,
  } = useGetAllRentalsQuery([
    {
      name: "bookingPayment",
      value: activeTab,
    },
  ]);

  useEffect(() => {
    if (isError) {
      console.log(error);
      toast.error("Something Went Wrong");
    }
  }, [isError, isSuccess, error]);

  // const handlePageChange = (page: number) => {
  //   setCurrentPage(page);
  // };

  const handlePayment = (rental: any) => {
    setSelectedRental(rental);
    setCouponDialogOpen(true);
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-96">
        <div className="loader" />
      </div>
    );
  }

  return (
    <div className="container py-12 mx-auto">
      <div className="">
        {/* Main content */}
        <div className="flex-1">
          <div className="border rounded-lg px-4 py-5 md:px-6 bg-white dark:bg-gray-800 shadow-md">
            <div className="flex flex-col sm:flex-row justify-between items-center py-3 gap-3.5">
              <h2 className="text-2xl font-semibold">My Rentals</h2>
            </div>
            <hr className="py-2" />

            {/* Tabs */}
            <div className="flex space-x-4">
              <button
                className={`px-4 py-2 font-semibold rounded ${
                  activeTab === "unpaid"
                    ? "bg-gray-800 text-white"
                    : "bg-gray-200 dark:bg-gray-700 dark:text-gray-300"
                }`}
                onClick={() => setActiveTab("unpaid")}
              >
                Unpaid
              </button>
              <button
                className={`px-4 py-2 font-semibold rounded ${
                  activeTab === "paid"
                    ? "bg-gray-800 text-white"
                    : "bg-gray-200 dark:bg-gray-700 dark:text-gray-300"
                }`}
                onClick={() => setActiveTab("paid")}
              >
                Paid
              </button>
            </div>

            <div className="overflow-x-auto mt-5">
              <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                <thead className="bg-gray-100 dark:bg-gray-900">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-200 uppercase tracking-wider">
                      Image
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-200 uppercase tracking-wider">
                      Name
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-200 uppercase tracking-wider">
                      Start Time
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-200 uppercase tracking-wider">
                      Return Time
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-200 uppercase tracking-wider">
                      Total Cost
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-200 uppercase tracking-wider">
                      Payment
                    </th>
                    {activeTab !== "paid" && (
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-200 uppercase tracking-wider">
                        Action
                      </th>
                    )}
                  </tr>
                </thead>
                <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
                  {(allRentals?.data?.length ?? 0) > 0 ? (
                    allRentals?.data?.map((rental: IRental, index: number) => (
                      <tr key={index}>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <img
                            src={rental.bikeId?.image || ""}
                            alt={rental.bikeId?.name}
                            className="w-16 h-16 object-cover rounded"
                          />
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                          {rental.bikeId?.name}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">
                          {new Date(rental.startTime).toLocaleDateString(
                            "en-US",
                            {
                              weekday: "short",
                              year: "numeric",
                              month: "long",
                              day: "numeric",
                            }
                          )}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm">
                          {rental.returnTime ? (
                            new Date(rental.returnTime).toLocaleDateString(
                              "en-US",
                              {
                                weekday: "short",
                                year: "numeric",
                                month: "long",
                                day: "numeric",
                              }
                            )
                          ) : (
                            <span className="text-center">Not Returned</span>
                          )}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm">
                          ${rental.totalCost}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm">
                          {rental.bookingPayment}
                        </td>
                        {activeTab !== "paid" && (
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                            <button
                              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                              onClick={() => handlePayment(rental)}
                            >
                              Pay Now
                            </button>
                          </td>
                        )}
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td
                        colSpan={6}
                        className="px-6 py-4 text-center text-sm text-gray-500"
                      >
                        No Rentals Available
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>

            <CouponPayment
              rental={selectedRental}
              open={couponDialogOpen}
              onClose={() => setCouponDialogOpen(false)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyRentals;
