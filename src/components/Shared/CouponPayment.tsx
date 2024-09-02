import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { setRentalData } from "@/redux/features/rentals/rentalSlice";
import { useAppDispatch } from "@/redux/hooks";
import { IRental } from "@/Interface/TRental";
import { useGetAllCouponsQuery } from "@/redux/features/couponApi";
import toast from "react-hot-toast";

interface CouponPaymentDialogProps {
  rental: IRental | null;
  open: boolean;
  onClose: () => void;
}

const CouponPayment = ({ rental, open, onClose }: CouponPaymentDialogProps) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [discountCost, setDiscountCost] = useState<number>(0); // Initialize to 0

  const { data: couponsData } = useGetAllCouponsQuery(undefined);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    // Check if the rental object is available
    if (!rental) {
      console.error("Rental data is missing");
    }
  }, [rental]);

  const onSubmit = async (data: any) => {
    const loadingToast = toast.loading("Processing...");

    try {
      const couponCode = data.couponCode.trim();

      // Check if couponsData is available
      if (!couponsData?.data) {
        console.error("Coupons data is not available.");
        toast.error("No coupon data available.");
        return;
      }

      const couponDetail = couponsData.data.find(
        (couponItem: any) => couponItem?.coupon === couponCode
      );

      if (couponDetail) {
        const discountPercentage = couponDetail.discount;
        const totalCost = rental?.totalCost || 0;

        // Calculate discount
        const discountAmount = (totalCost * discountPercentage) / 100;
        const finalAmount = totalCost - discountAmount;

        // Update the discountCost state
        setDiscountCost(Math.max(finalAmount, 0));

        const rentalData = {
          bikeId: rental?._id,
          amount: finalAmount,
          isBooking: false,
          totalCost: rental?.totalCost,
          discountCost: Number(finalAmount),
        };

        dispatch(setRentalData(rentalData));

        toast.success("Coupon applied! You can now proceed to Payment.", {
          duration: 2000,
        });
      } else {
        toast.error("Invalid coupon code.");
      }
    } catch (error) {
      console.error("Error applying coupon:", error);
      toast.error("Something went wrong. Please try again.");
    } finally {
      toast.dismiss(loadingToast);
    }
  };

  const handleProceedToPayment = () => {
    navigate("/payment");
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg w-full max-w-lg p-6">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
            Payment with Coupon
          </h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
          >
            &times;
          </button>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="mt-4">
          <div className="mb-4">
            <div className="flex">
              <label
                htmlFor="couponCode"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                Your Coupon Code:
              </label>
              <input
                id="couponCode"
                type="text"
                placeholder="Enter Coupon Code"
                {...register("couponCode", { required: true })}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              />
              {errors.couponCode && (
                <p className="text-sm text-red-600 mt-1">
                  Coupon code is required.
                </p>
              )}
              <button
                type="submit"
                className="ml-4 bg-gray-600 text-white px-4 py-2 rounded-md"
              >
                Apply Coupon
              </button>
            </div>
          </div>
          <div className="mb-4">
            <h3 className="text-lg font-medium text-gray-900 dark:text-white">
              Your Total Cost: {rental?.totalCost}
            </h3>

            <h3 className="text-lg font-medium text-gray-900 dark:text-white">
              Your Discounted Cost: {discountCost}
            </h3>
          </div>
          <div className="flex justify-end space-x-4">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700"
            >
              Cancel
            </button>
            <button
              type="button"
              onClick={handleProceedToPayment}
              className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              Proceed to Payment
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CouponPayment;
