import { useCalculateRentalsMutation } from "@/redux/features/rentals/rentalApi";
import { ErrorResponse } from "@/types";

import { SerializedError } from "@reduxjs/toolkit";
import { useEffect } from "react";
import toast from "react-hot-toast";

interface ConfirmCostDialogProps {
  id: string | null;
  open: boolean;
  onClose: () => void;
}

const ConfirmCost = ({ id, open, onClose }: ConfirmCostDialogProps) => {
  const [returnCost, { isSuccess, isError, error }] =
    useCalculateRentalsMutation();

  useEffect(() => {
    if (isError) {
      const errorResponse = error as ErrorResponse | SerializedError;
      const errorMessage =
        (errorResponse as ErrorResponse)?.data?.message ||
        "Something Went Wrong";
      toast.error(errorMessage);
    } else if (isSuccess) {
      toast.success("Cost Calculated successfully");
    }
  }, [isError, isSuccess, error]);

  const handleConfirmCost = async (id: string) => {
    await returnCost(id);
    onClose(); // Close the dialog after confirming the cost
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg shadow-lg max-w-lg w-full p-6">
        <div className="mb-4">
          <h2 className="text-xl font-semibold">Confirm Calculate Cost</h2>
          <p className="mt-2 text-gray-600">
            Are you sure you want to confirm the cost for returning the rental?
          </p>
        </div>
        <div className="flex justify-end space-x-4 mt-6">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={() => handleConfirmCost(id as string)}
            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmCost;
