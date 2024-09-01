import { IRental } from "@/Interface/TRental";
import { useGetRentalsQuery } from "@/redux/features/rentals/rentalApi";
import { FC, useState } from "react";
import ConfirmCost from "./ConfirmCost";
import PageTitleForHome from "@/components/Shared/PageTitleForHome";

const ManageRentalsTable: FC = () => {
  const { data: rentData, isLoading } = useGetRentalsQuery(undefined);
  console.log(rentData);

  const [dialogOpen, setDialogOpen] = useState(false);
  const [selectedRental, setSelectedRental] = useState<string | null>(null);

  if (isLoading) {
    return <p>loading.......</p>;
  }

  return (
    <>
      <div className="pt-12">
        <PageTitleForHome title="Return Bike Management" />
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border">
          <thead>
            <tr>
              <th className="px-4 py-2 border-b">Image</th>
              <th className="px-4 py-2 border-b">Bike Name</th>
              <th className="px-4 py-2 border-b">User Name</th>
              <th className="px-4 py-2 border-b">Start Time</th>
              <th className="px-4 py-2 border-b">Return Time</th>
              <th className="px-4 py-2 border-b">Total Cost</th>
              <th className="px-4 py-2 border-b">Payment</th>
              <th className="px-4 py-2 border-b">Action</th>
            </tr>
          </thead>
          <tbody>
            {rentData?.data.map((rental: IRental) => (
              <tr key={rental._id} className="text-center">
                <td className="px-4 py-2 border-b">
                  <div className="rounded-md overflow-hidden w-16 mx-auto">
                    <img
                      src={rental.bikeId.image || ""}
                      alt={rental.bikeId.name}
                      className="rounded-md transition-transform duration-200 hover:scale-105"
                    />
                  </div>
                </td>
                <td className="px-4 py-2 border-b">{rental.bikeId.name}</td>
                <td className="px-4 py-2 border-b">{rental.userId.name}</td>
                <td className="px-4 py-2 border-b">
                  {new Date(String(rental.startTime)).toLocaleDateString(
                    "en-US",
                    {
                      weekday: "short",
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    }
                  )}
                </td>
                <td className="px-4 py-2 border-b">
                  {rental.returnTime ? (
                    new Date(String(rental.returnTime)).toLocaleDateString(
                      "en-US",
                      {
                        weekday: "short",
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      }
                    )
                  ) : (
                    <span>Not Returned</span>
                  )}
                </td>
                <td className="px-4 py-2 border-b">{rental.totalCost}</td>
                <td className="px-4 py-2 border-b">
                  <span
                    className={`px-2 py-1 rounded-full text-white capitalize ${
                      rental.bookingPayment === "paid"
                        ? "bg-green-500"
                        : "bg-red-500"
                    }`}
                  >
                    {rental.bookingPayment}
                  </span>
                </td>
                <td className="px-4 py-1 border-b">
                  <button
                    onClick={() => {
                      setSelectedRental(rental._id);
                      setDialogOpen(true);
                    }}
                    className="px-2 text- py-1 bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors"
                  >
                    Calculate Cost
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <ConfirmCost
        id={selectedRental}
        open={dialogOpen}
        onClose={() => setDialogOpen(false)}
      />
    </>
  );
};

export default ManageRentalsTable;
