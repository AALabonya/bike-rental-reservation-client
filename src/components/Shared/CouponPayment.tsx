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
  const [discountCost, setDiscountCost] = useState<number>(
    rental?.totalCost || 0
  );
  const [couponApplied, setCouponApplied] = useState<boolean>(false);

  const { data: couponsData } = useGetAllCouponsQuery(undefined);

  useEffect(() => {
    const coupons = couponsData?.data as any;

    if (coupons?.discount && rental?.totalCost) {
      const discountAmount = (rental.totalCost * coupons.discount) / 100;
      const discountedCost = rental.totalCost - discountAmount;
      const adjustedDiscountCost = Math.max(discountedCost - 100, 0);

      setDiscountCost(adjustedDiscountCost);
      setCouponApplied(true);
    } else {
      setDiscountCost(Math.max((rental?.totalCost || 0) - 100, 0));
      setCouponApplied(false);
    }
  }, [couponsData?.data, rental?.totalCost]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    if (!rental) {
      console.error("Rental data is missing");
    }
  }, [rental]);

  const onSubmit = async (data: any) => {
    const loadingToast = toast.loading("Processing...");

    try {
      const couponCode = data.couponCode.trim();

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

        // Calculate discount amount
        const discountAmount = (totalCost * discountPercentage) / 100;
        // Calculate final amount after applying the discount
        const finalAmount = totalCost - discountAmount;
        // Adjust the final amount by subtracting the advance payment of 100 Taka
        const adjustedAmount = Math.max(finalAmount - 100, 0);

        // Update the discount cost in the state
        setDiscountCost(adjustedAmount);
        setCouponApplied(true);

        const rentalData = {
          bikeId: rental?._id,
          amount: adjustedAmount,
          isBooking: false,
          totalCost: rental?.totalCost,
          discountCost: Number(adjustedAmount),
        };

        dispatch(setRentalData(rentalData));

        toast.success("Coupon applied! You can now proceed to Payment.", {
          duration: 2000,
        });
      } else {
        setDiscountCost(Math.max((rental?.totalCost || 0) - 100 || 0));
        setCouponApplied(false);
        toast.error("Invalid coupon code. Proceeding with the total cost.");
      }
    } catch (error) {
      console.error("Error applying coupon:", error);
      toast.error("Something went wrong. Please try again.");
    } finally {
      toast.dismiss(loadingToast);
    }
  };

  const handleProceedToPayment = () => {
    const rentalData = {
      bikeId: rental?._id,
      amount: discountCost,
      isBooking: false,
      totalCost: rental?.totalCost,
      discountCost: Number(discountCost),
    };

    dispatch(setRentalData(rentalData));
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
            <label
              htmlFor="couponCode"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              Your Coupon Code:
            </label>
            <div className="flex">
              <input
                id="couponCode"
                type="text"
                placeholder="Enter Coupon Code"
                {...register("couponCode", { required: false })}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              />
              <button
                type="submit"
                className="ml-4 bg-gray-600 text-white px-4 py-2 rounded-md"
              >
                Apply Coupon
              </button>
            </div>
            {errors.couponCode && (
              <p className="text-sm text-red-600 mt-1">
                Coupon code is required.
              </p>
            )}
          </div>
          <div className="mb-4">
            <h3 className="text-base font-medium text-gray-900 dark:text-white">
              Your Total Cost: {rental?.totalCost}
            </h3>
            <h3 className="text-base font-medium text-gray-900 dark:text-white">
              Your Advance Payment: 100
            </h3>
            {couponApplied ? (
              <>
                <h3 className="text-base font-medium text-gray-900 dark:text-white">
                  Discounted Cost: {discountCost}
                </h3>
              </>
            ) : (
              <h3 className="text-base font-medium text-gray-900 dark:text-white">
                Final Payment after Advance:{" "}
                {Math.max((rental?.totalCost || 0) - 100, 0)}
              </h3>
            )}
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
