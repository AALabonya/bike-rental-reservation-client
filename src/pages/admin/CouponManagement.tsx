// /* eslint-disable @typescript-eslint/no-explicit-any */

// import {
//   useDeletecouponsMutation,
//   useGetAllCouponsQuery,
//   useUpdateCouponsMutation,
// } from "@/redux/features/couponApi";

// import toast from "react-hot-toast";
// import { CreateCouponModal } from "./CreateCoupon";
// import { useState } from "react";
// import { MoreHorizontal } from "lucide-react";
// export type TCoupon = {
//   _id: string;
//   coupon: string;
//   discount: number;
//   title: string;
// };
// const CouponManagement = () => {
//   const [openDropdown, setOpenDropdown] = useState<string | null>(null);
//   const [openModal, setOpenModal] = useState();
//   const [deleteCoupon] = useDeletecouponsMutation();
//   const [updateCoupon] = useUpdateCouponsMutation();
//   const {
//     data: couponsData,
//     isLoading,
//     isFetching,
//   } = useGetAllCouponsQuery(undefined);
//   console.log(couponsData);

//   const handleDropdownToggle = (_id: string) => {
//     setOpenDropdown(openDropdown === _id ? null : _id);
//   };
//   const handleCouponDelete = async (id: string) => {
//     if (window.confirm("Are you sure you want to delete this coupon?")) {
//       try {
//         const res = await deleteCoupon(id).unwrap();

//         if (res.success) {
//           toast.success("success");
//         }
//       } catch (error: any) {
//         toast.error("success");
//       }
//     }
//   };

//   return (
//     <div className="p-4">
//       <div className="flex justify-end mb-4">
//         <CreateCouponModal />
//       </div>

//       {isLoading || isFetching ? (
//         <div className="flex justify-center items-center">
//           <p>............</p>
//         </div>
//       ) : couponsData?.length < 1 || couponsData?.data?.success === false ? (
//         <div className="py-2 text-red-500">No data found</div>
//       ) : (
//         <div className="overflow-x-auto">
//           <table className="min-w-full divide-y divide-gray-200">
//             <thead className="bg-gray-50">
//               <tr>
//                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                   NO:
//                 </th>
//                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                   Coupon
//                 </th>
//                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                   Discount
//                 </th>
//                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                   Title
//                 </th>
//                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                   Action
//                 </th>
//               </tr>
//             </thead>
//             <tbody className="bg-white divide-y divide-gray-200">
//               {couponsData?.data?.map(
//                 ({ coupon, discount, title, _id }: TCoupon, index: number) => (
//                   <tr key={_id}>
//                     <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
//                       {index + 1}
//                     </td>
//                     <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
//                       {coupon}
//                     </td>
//                     <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
//                       {discount}%
//                     </td>
//                     <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
//                       {title}
//                     </td>
//                     <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
//                       {/* <button
//                         onClick={() => handleCouponDelete(_id)}
//                         className="text-red-600 hover:text-red-900"
//                       >
//                         <Delete className="inline w-5 h-5" />
//                       </button> */}
//                       <button
//                         onClick={() => handleDropdownToggle(_id)}
//                         className="p-2 text-gray-600 hover:text-gray-900"
//                       >
//                         <MoreHorizontal className="h-4 w-4" />
//                         <span className="sr-only">Actions</span>
//                       </button>
//                       {openDropdown === _id && (
//                         <div className="absolute right-24 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-10">
//                           <div className="divide-y divide-gray-200 flex flex-col">
//                             {/* <button
//                               // onClick={() => handleUpdateUser(user._id)}
//                               className="w-full px-4 py-2 text-left text-sm text-blue-600 hover:bg-blue-50"
//                             >
//                               Edit
//                             </button> */}

//                             <button
//                               onClick={() => setOpenModal(true)}
//                               className="rounded-md  py-2 px-5 text-blue-500 text-left"
//                             >
//                               Edit
//                             </button>
//                             <div
//                               onClick={() => setOpenModal(false)}
//                               className={`fixed z-[100] flex items-center justify-center ${
//                                 openModal
//                                   ? "opacity-1 visible"
//                                   : "invisible opacity-0"
//                               } inset-0 h-full w-full bg-black/20 backdrop-blur-sm duration-100`}
//                             >
//                               <div
//                                 onClick={(e_) => e_.stopPropagation()}
//                                 className={`absolute w-full rounded-lg bg-white dark:bg-gray-900 drop-shadow-2xl sm:w-[400px] ${
//                                   openModal
//                                     ? "opacity-1 translate-y-0 duration-300"
//                                     : "-translate-y-20 opacity-0 duration-150"
//                                 }`}
//                               >
//                                 <form className="px-5 pb-5 pt-3 lg:pb-10 lg:pt-5 lg:px-">
//                                   <svg
//                                     onClick={() => setOpenModal(false)}
//                                     className="mx-auto mr-0 w-10 cursor-pointer fill-black dark:fill-white"
//                                     viewBox="0 0 24 24"
//                                     fill="none"
//                                     xmlns="http://www.w3.org/2000/svg"
//                                   >
//                                     <g strokeWidth="0"></g>
//                                     <g
//                                       id="SVGRepo_tracerCarrier"
//                                       strokeLinecap="round"
//                                       strokeLinejoin="round"
//                                     ></g>
//                                     <g id="SVGRepo_iconCarrier">
//                                       <path d="M6.99486 7.00636C6.60433 7.39689 6.60433 8.03005 6.99486 8.42058L10.58 12.0057L6.99486 15.5909C6.60433 15.9814 6.60433 16.6146 6.99486 17.0051C7.38538 17.3956 8.01855 17.3956 8.40907 17.0051L11.9942 13.4199L15.5794 17.0051C15.9699 17.3956 16.6031 17.3956 16.9936 17.0051C17.3841 16.6146 17.3841 15.9814 16.9936 15.5909L13.4084 12.0057L16.9936 8.42059C17.3841 8.03007 17.3841 7.3969 16.9936 7.00638C16.603 6.61585 15.9699 6.61585 15.5794 7.00638L11.9942 10.5915L8.40907 7.00636C8.01855 6.61584 7.38538 6.61584 6.99486 7.00636Z"></path>
//                                     </g>
//                                   </svg>
//                                   <h1 className="pb-5 text-2xl backdrop-blur-sm text-center">
//                                     Update Coupon
//                                   </h1>
//                                   <div className="space-y-4">
//                                     <label
//                                       htmlFor="email_navigate_ui_modal"
//                                       className="block"
//                                     >
//                                       Coupon Name
//                                     </label>
//                                     <div className="relative">
//                                       <input
//                                         id="email_navigate_ui_modal"
//                                         type="email"
//                                         placeholder="example@gmail.com"
//                                         className="block w-full rounded-lg p-3 pl-10 outline-none drop-shadow-lg bg-white dark:bg-gray-700 dark:text-white"
//                                       />
//                                     </div>
//                                     <label
//                                       htmlFor="password_navigate_ui_modal"
//                                       className="block"
//                                     >
//                                       Code
//                                     </label>
//                                     <div className="relative">
//                                       <input
//                                         id="password_navigate_ui_modal"
//                                         type="password"
//                                         placeholder=".............."
//                                         className="block w-full rounded-lg p-3 pl-5 outline-none drop-shadow-lg bg-white dark:bg-gray-700 dark:text-white"
//                                       />
//                                     </div>
//                                     <label
//                                       htmlFor="password_navigate_ui_modal"
//                                       className="block"
//                                     >
//                                       Discount
//                                     </label>
//                                     <div className="relative">
//                                       <input
//                                         id="password_navigate_ui_modal"
//                                         type="password"
//                                         placeholder=".............."
//                                         className="block w-full rounded-lg p-3 pl-10 outline-none drop-shadow-lg bg-white dark:bg-gray-700 dark:text-white"
//                                       />
//                                     </div>
//                                   </div>
//                                   {/* button type will be submit for handling form submission*/}
//                                   <button
//                                     type="button"
//                                     className="relative w-full py-2 px-5 rounded-lg mt-3 bg-white drop-shadow-lg hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-800"
//                                   >
//                                     Submit
//                                   </button>
//                                 </form>
//                               </div>
//                             </div>

//                             <button
//                               onClick={() => handleCouponDelete(_id)}
//                               className="w-full px-4 py-2 text-left text-sm text-red-600 hover:bg-red-50"
//                             >
//                               Delete
//                             </button>
//                           </div>
//                         </div>
//                       )}
//                     </td>
//                   </tr>
//                 )
//               )}
//             </tbody>
//           </table>
//         </div>
//       )}
//     </div>
//   );
// };

// export default CouponManagement;
import {
  useDeletecouponsMutation,
  useGetAllCouponsQuery,
  useUpdateCouponsMutation,
} from "@/redux/features/couponApi";
import toast from "react-hot-toast";
import { CreateCouponModal } from "./CreateCoupon";
import { useState } from "react";
import { MoreHorizontal } from "lucide-react";

import PageTitleForHome from "@/components/Shared/PageTitleForHome";
export interface TCoupon {
  _id: string;
  title: string;
  coupon: string;
  discount: number;
}

const CouponManagement = () => {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [selectedCoupon, setSelectedCoupon] = useState<TCoupon | null>(null);
  const [deleteCoupon] = useDeletecouponsMutation();
  const [updateCoupon] = useUpdateCouponsMutation();

  const {
    data: couponsData,
    isLoading,
    isFetching,
  } = useGetAllCouponsQuery(undefined);

  const handleDropdownToggle = (_id: string) => {
    setOpenDropdown(openDropdown === _id ? null : _id);
  };

  const handleCouponDelete = async (id: string) => {
    if (window.confirm("Are you sure you want to delete this coupon?")) {
      try {
        const res = await deleteCoupon(id).unwrap();

        if (res.success) {
          toast.success("Coupon deleted successfully");
        }
      } catch (error: any) {
        toast.error("Failed to delete coupon");
      }
    }
  };

  const handleEditClick = (coupon: TCoupon) => {
    setSelectedCoupon(coupon);
    setOpenModal(true);
  };

  const handleUpdateSubmit = async (data: TCoupon) => {
    const loadingToast = toast.loading("Coupon is Updating...");
    console.log(data);

    if (data) {
      await updateCoupon({ data: data, id: selectedCoupon?._id })
        .unwrap()
        .then((res) => {
          if (res.success) {
            toast.success("Coupon updated successfully", { id: loadingToast });
          } else {
            toast.error("Failed to update coupon", { id: loadingToast });
          }
        })
        .catch(() => {
          toast.error("Failed to update coupon", { id: loadingToast });
        })
        .finally(() => {
          setOpenModal(false);
          setSelectedCoupon(null);
        });
    } else {
      toast.error("Please provide valid coupon data", { id: loadingToast });
    }
  };

  return (
    <div className="">
      <div className="pt-9">
        <PageTitleForHome title="Return Bike Management" />
      </div>
      <div className="">
        <CreateCouponModal />
      </div>

      {isLoading || isFetching ? (
        <div className="flex justify-center items-center">
          <p>Loading...</p>
        </div>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-white ">
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
              {couponsData?.data?.map(
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
                        onClick={() => handleDropdownToggle(_id)}
                        className="p-2 text-gray-600 hover:text-gray-900"
                      >
                        <MoreHorizontal className="h-4 w-4" />
                        <span className="sr-only">Actions</span>
                      </button>
                      {openDropdown === _id && (
                        <div className="absolute right-24 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-10">
                          <div className="divide-y divide-gray-200 flex flex-col">
                            <button
                              onClick={() =>
                                handleEditClick({
                                  coupon,
                                  discount,
                                  title,
                                  _id,
                                })
                              }
                              className="w-full px-4 py-2 text-left text-sm text-blue-600 hover:bg-blue-50"
                            >
                              Edit
                            </button>
                            <button
                              onClick={() => handleCouponDelete(_id)}
                              className="w-full px-4 py-2 text-left text-sm text-red-600 hover:bg-red-50"
                            >
                              Delete
                            </button>
                          </div>
                        </div>
                      )}
                    </td>
                  </tr>
                )
              )}
            </tbody>
          </table>
        </div>
      )}

      {openModal && selectedCoupon && (
        <div
          onClick={() => setOpenModal(false)}
          className="fixed z-[100] flex items-center justify-center inset-0 h-full w-full bg-black/20 backdrop-blur-sm duration-100"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="absolute w-full rounded-lg bg-white dark:bg-gray-900 drop-shadow-2xl sm:w-[400px]"
          >
            <form className="px-5 pb-5 pt-3 lg:pb-10 lg:pt-5 lg:px-">
              <svg
                onClick={() => setOpenModal(false)}
                className="mx-auto mr-0 w-10 cursor-pointer fill-black dark:fill-white"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M6.99486 7.00636C6.60433 7.39689 6.60433 8.03005 6.99486 8.42058L10.58 12.0057L6.99486 15.5909C6.60433 15.9814 6.60433 16.6146 6.99486 17.0051C7.38538 17.3956 8.01855 17.3956 8.40907 17.0051L11.9942 13.4199L15.5794 17.0051C15.9699 17.3956 16.6031 17.3956 16.9936 17.0051C17.3841 16.6146 17.3841 15.9814 16.9936 15.5909L13.4084 12.0057L16.9936 8.42059C17.3841 8.03007 17.3841 7.3969 16.9936 7.00638C16.603 6.61585 15.9699 6.61585 15.5794 7.00638L11.9942 10.5915L8.40907 7.00636C8.01855 6.61584 7.38538 6.61584 6.99486 7.00636Z"></path>
              </svg>
              <h1 className="pb-5 text-2xl backdrop-blur-sm text-center">
                Update Coupon
              </h1>
              <div className="space-y-4">
                <label htmlFor="couponName" className="block">
                  Coupon Name
                </label>
                <div className="relative">
                  <input
                    id="couponName"
                    type="text"
                    value={selectedCoupon.coupon}
                    onChange={(e) =>
                      setSelectedCoupon({
                        ...selectedCoupon,
                        coupon: e.target.value,
                      })
                    }
                    className="block w-full rounded-lg p-3 pl-10 outline-none drop-shadow-lg bg-white dark:bg-gray-700 dark:text-white"
                  />
                </div>
                <label htmlFor="couponCode" className="block">
                  Code
                </label>
                <div className="relative">
                  <input
                    id="couponCode"
                    type="text"
                    value={selectedCoupon.title}
                    onChange={(e) =>
                      setSelectedCoupon({
                        ...selectedCoupon,
                        title: e.target.value,
                      })
                    }
                    className="block w-full rounded-lg p-3 pl-5 outline-none drop-shadow-lg bg-white dark:bg-gray-700 dark:text-white"
                  />
                </div>
                <label htmlFor="discount" className="block">
                  Discount
                </label>
                <div className="relative">
                  <input
                    id="discount"
                    type="number"
                    value={selectedCoupon.discount}
                    onChange={(e) =>
                      setSelectedCoupon({
                        ...selectedCoupon,
                        discount: Number(e.target.value),
                      })
                    }
                    className="block w-full rounded-lg p-3 pl-10 outline-none drop-shadow-lg bg-white dark:bg-gray-700 dark:text-white"
                  />
                </div>
              </div>
              <button
                type="button"
                onClick={() => handleUpdateSubmit(selectedCoupon)}
                className="relative w-full py-2 px-5 rounded-lg mt-3 bg-white drop-shadow-lg hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-800"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default CouponManagement;
