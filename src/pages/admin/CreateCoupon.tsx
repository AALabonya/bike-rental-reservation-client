import { useState } from "react";
import CreateCouponForm from "./CreateCouponForm";

export function CreateCouponModal() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Trigger Button */}
      <button
        onClick={() => setOpen(true)}
        className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700"
      >
        Create Coupon
      </button>

      {/* Modal Overlay */}
      {open && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex lg:items-center lg:justify-center z-50 p-4">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg lg:w-1/4">
            <div className="">
              <h2 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-gray-100">
                Input Coupon Information
              </h2>
              <button
                onClick={() => setOpen(false)}
                className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300 text-2xl"
              >
                &times;
              </button>
            </div>
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mb-6">
              Input the coupon details below.
            </p>
            {/* Coupon Form */}
            <CreateCouponForm setOpen={setOpen} />
          </div>
        </div>
      )}
    </>
  );
}
