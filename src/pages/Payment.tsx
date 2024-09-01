import {
  CardCvcElement,
  CardExpiryElement,
  CardNumberElement,
  Elements,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { FC, FormEvent, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  useCreateRentalsMutation,
  useReturnRentalsMutation,
} from "@/redux/features/rentals/rentalApi";
import { removeRentalData } from "@/redux/features/rentals/rentalSlice";
import { useGetMeQuery } from "@/redux/features/user/userApi";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import toast from "react-hot-toast";
import { useCretePaymentIntentMutation } from "@/redux/features/paymentApi/paymentApi";

const stripePromise = loadStripe(
  "pk_test_51OEEFQJz4BJljXPPJ7Cu0q26sp26wg5NZ9E0YBD1Go5Lg7cCH156DalWuScQq2EfOM4YFyugked85M43O1mUikIL00gZFfZIow"
);

const PaymentForm: FC = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [createRental, { isError }] = useCreateRentalsMutation();
  const [returnRental] = useReturnRentalsMutation();
  const [cratePaymentIntent, { isError: paymentIntentCreateError }] =
    useCretePaymentIntentMutation();

  const rentalData = useAppSelector((state) => state.rental);
  console.log("renttttttttttttttt", rentalData);

  const { data: userData, isLoading } = useGetMeQuery(undefined);
  const [isPaymentSuccessful, setIsPaymentSuccessful] = useState(false);
  const [name, setName] = useState(userData?.name || "");
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (isError) {
      toast.error("Something Went Wrong");
    }
  }, [isError]);

  useEffect(() => {
    if (paymentIntentCreateError) {
      toast.error("Something Went Wrong");
    }
  }, [paymentIntentCreateError]);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    try {
      const paymentData = {
        amount: rentalData.amount,
        currency: "bdt",
      };

      const { data: secretData } = await cratePaymentIntent(paymentData);

      const card = elements.getElement(CardNumberElement);
      if (!secretData || !secretData.data) {
        throw new Error("Failed to retrieve payment intent secret");
      }
      if (!card) {
        return;
      }

      const paymentResult = await stripe.confirmCardPayment(secretData?.data, {
        payment_method: {
          card: card!,
          billing_details: {
            name: name,
            email: userData?.email,
            phone: userData?.phone,
            address: {
              line1: userData?.address,
            },
          },
        },
      });

      if (paymentResult.error) {
        toast.error(paymentResult.error.message);
      } else {
        if (paymentResult.paymentIntent?.status === "succeeded") {
          setIsPaymentSuccessful(true);
          dispatch(removeRentalData());
          if (rentalData.isBooking) {
            await createRental(rentalData);
          } else {
            await returnRental(rentalData);
            toast.success("Bike Returned Successfully");
          }
        }
      }
    } catch (error) {
      console.log(error);
      toast.error("Payment failed!");
    }
  };

  const handleRedirect = () => {
    navigate("/userDash/rental");
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className=" lg:flex lg:items-start lg:gap-12 mt-2">
      <form
        onSubmit={handleSubmit}
        className="w-full rounded-lg border p-4 shadow-sm sm:p-6 lg:max-w-xl lg:p-8"
      >
        <div className="mb-6 grid grid-cols-2 gap-4">
          <div className="col-span-2 sm:col-span-1">
            <label
              htmlFor="name"
              className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Enter Full Name"
              onChange={(e) => setName(e.target.value)}
              defaultValue={userData?.name}
              className="h-10 w-full px-3 py-2 mb-1 border rounded-md"
            />
          </div>

          <div className="col-span-2 sm:col-span-1">
            <label
              htmlFor="card-number"
              className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
            >
              Card number*
            </label>
            <CardNumberElement
              id="card-number"
              className="h-10 w-full px-3 py-2 mb-1 border rounded-md"
              options={{
                showIcon: true,
                placeholder: "Card Number",
              }}
            />
          </div>

          <div>
            <label
              htmlFor="expire-date"
              className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
            >
              Card expiration*
            </label>
            <CardExpiryElement
              id="expire-date"
              className="h-10 w-full px-3 py-2 mb-1 border rounded-md"
            />
          </div>
          <div>
            <label
              htmlFor="cvc"
              className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
            >
              CVC*
            </label>
            <CardCvcElement
              id="cvc"
              className="h-10 w-full px-3 py-2 mb-1 border rounded-md"
            />
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700"
          disabled={!stripe || !elements}
        >
          Pay now
        </button>
      </form>

      <div className="mt-6 grow sm:mt-8 lg:mt-0">
        <div className="space-y-4 rounded-lg border p-6">
          <div className="space-y-2">
            <dl className="flex items-center justify-between gap-4">
              <dt className="text-base font-normal text-gray-500 dark:text-gray-400">
                Price
              </dt>
              <dd className="text-base font-medium text-gray-900 dark:text-white">
                ৳{rentalData.amount || 100}
              </dd>
            </dl>

            {/* <dl className="flex items-center justify-between gap-4">
              <dt className="text-base font-normal text-gray-500 dark:text-gray-400">
                Tax Fee
              </dt>
              <dd className="text-base font-medium text-green-500">-৳ 00.00</dd>
            </dl> */}
          </div>

          <dl className="flex items-center justify-between gap-4 border-t border-gray-200 pt-2 dark:border-gray-700">
            <dt className="text-base font-bold text-gray-900 dark:text-white">
              Total Price
            </dt>
            <dd className="text-base font-bold text-gray-900 dark:text-white">
              ৳{rentalData.amount || 100}
            </dd>
          </dl>
        </div>

        {/* <div className="mt-6 flex items-center justify-center gap-8">
          <img
            className="h-8 w-auto"
            src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/brand-logos/visa.svg"
            alt="Visa"
          />
          <img
            className="h-8 w-auto"
            src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/brand-logos/mastercard.svg"
            alt="Mastercard"
          />
        </div> */}
      </div>

      {isPaymentSuccessful && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full">
            <p className="mb-4 text-gray-700">
              Payment was successful! You will be redirected to your rentals
              page.
            </p>
            <button
              onClick={handleRedirect}
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700"
            >
              Ok
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

const PaymentPage: FC = () => {
  return (
    <Elements stripe={stripePromise}>
      <section className="py-8 md:py-16 mt-20">
        <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
          <div className="mx-auto max-w-5xl">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl">
              Payment
            </h2>
            <p className="mt-1 text-gray-600 dark:text-gray-400"></p>

            <PaymentForm />
          </div>
        </div>
      </section>
    </Elements>
  );
};

export default PaymentPage;
