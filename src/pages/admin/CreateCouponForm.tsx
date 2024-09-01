/* eslint-disable @typescript-eslint/no-explicit-any */
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";

import { useState } from "react";

import toast from "react-hot-toast";
import { useCreateCouponsMutation } from "@/redux/features/couponApi";

interface CreateCouponFormProps {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const CreateCouponForm: React.FC<CreateCouponFormProps> = ({ setOpen }) => {
  const [createCoupon, { isLoading }] = useCreateCouponsMutation();
  const [couponCode, setCouponCode] = useState("");

  function generateCouponCode(length: number): string {
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let result = "";
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      result += characters[randomIndex];
    }
    return result;
  }

  const handleGenerateCouponCode = () => {
    const newCouponCode = generateCouponCode(8);
    setCouponCode(newCouponCode);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const couponInfo = {
      coupon: couponCode,
      title: data.title,
      discount: Number(data.discount),
    };

    try {
      const res = await createCoupon(couponInfo).unwrap();

      if (res.success) {
        toast.success("success");
      }
    } catch (error: any) {
      toast.error("error");
    }
    setOpen(false);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <label htmlFor="title">Coupon Title</label>
        <input type="text" id="title" {...register("title")} />
        {errors.title && (
          <p className="text-red-500">{errors.title.message as string}</p>
        )}
      </div>
      <div>
        <label htmlFor="discount">Coupon Discount</label>
        <input type="number" id="discount" {...register("discount")} />
        {errors.discount && (
          <p className="text-red-500">{errors.discount.message as string}</p>
        )}
      </div>
      <div>
        <label htmlFor="couponCode">Coupon Code</label>
        <div className="flex items-center">
          <input type="text" id="couponCode" value={couponCode} readOnly />
          <button type="button" onClick={handleGenerateCouponCode}>
            Generate Code
          </button>
        </div>
      </div>

      <div className="flex items-center justify-start">
        <button type="submit">
          {isLoading ? "Creating..." : "Create Coupon"}
        </button>
      </div>
    </form>
  );
};

export default CreateCouponForm;
