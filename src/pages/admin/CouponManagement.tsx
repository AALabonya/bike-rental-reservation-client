/* eslint-disable @typescript-eslint/no-explicit-any */

import {
  useDeletecouponsMutation,
  useGetAllCouponsQuery,
} from "@/redux/features/couponApi";

import { Delete } from "lucide-react";
import toast from "react-hot-toast";
import { CreateCouponModal } from "./CreateCoupon";
export type TCoupon = {
  _id: string;
  coupon: string;
  discount: number;
  title: string;
};
const CouponManagement = () => {
  const [deleteCoupon] = useDeletecouponsMutation();
  const {
    data: couponsData,
    isLoading,
    isFetching,
  } = useGetAllCouponsQuery(undefined);
  console.log(couponsData);

  const handleCouponDelete = async (id: string) => {
    if (window.confirm("Are you sure you want to delete this coupon?")) {
      try {
        const res = await deleteCoupon(id).unwrap();

        if (res.success) {
          toast.success("success");
        }
      } catch (error: any) {
        toast.error("success");
      }
    }
  };

  return (
    <div className="p-4">
      <div className="flex justify-end mb-4">
        <CreateCouponModal />
      </div>

      {isLoading || isFetching ? (
        <div className="flex justify-center items-center">
          <p>............</p>
        </div>
      ) : couponsData?.length < 1 || couponsData?.data?.success === false ? (
        <div className="py-2 text-red-500">No data found</div>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  NO:
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Coupon
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Discount
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Title
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Action
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {couponsData?.map(
                ({ coupon, discount, title, _id }: TCoupon, index: number) => (
                  <tr key={_id}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {index + 1}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {coupon}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {discount}%
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {title}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <button
                        onClick={() => handleCouponDelete(_id)}
                        className="text-red-600 hover:text-red-900"
                      >
                        <Delete className="inline w-5 h-5" />
                      </button>
                    </td>
                  </tr>
                )
              )}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default CouponManagement;
