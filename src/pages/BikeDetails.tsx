import { useGetSingleBikeQuery } from "@/redux/features/bikes/bikeApi";
import { setRentalData } from "@/redux/features/rentals/rentalSlice";
import { useAppDispatch } from "@/redux/hooks";
import { PlusCircle, Share2 } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";

const BikeDetails = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [openModal, setOpenModal] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      startDate: "",
      startTime: "",
    },
  });
  const { id } = useParams();
  const {
    data: singleBikeData,
    isLoading,
    isError,
    error,
  } = useGetSingleBikeQuery(id);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error: {error.message || "Unable to fetch bike details"}</div>;
  }

  // Ensure bike data is available
  if (!singleBikeData) {
    return <div>No bike data available</div>;
  }

  const bike = singleBikeData?.data;

  const onSubmit = async (data: any) => {
    const startDate = data.startDate;
    const startTime = data.startTime;
    const startTimeAndDate = new Date(
      `${startDate}T${startTime}:00Z`
    ).toISOString();

    const RentalData = {
      bikeId: bike._id,
      startTime: startTimeAndDate,
      amount: 100,
      isBooking: true,
    };
    dispatch(setRentalData(RentalData));
    reset();
    toast.success("Redirecting to Payment Page...", { duration: 1000 });
    setTimeout(() => navigate("/payment"), 1000);
  };

  return (
    <div>
      <div className="bg-cover bg-center h-64 flex justify-center items-center bg-gray-800">
        <h1 className="text-5xl font-bold text-white">Details of Bike</h1>
      </div>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 my-28">
          <div className="md:col-span-2 space-y-10">
            <h2 className="text-4xl font-bold">{bike.name || "Bike Name"}</h2>
            <div className="space-x-4 flex">
              <button className="flex items-center px-4 py-2 bg-red-500 text-white border border-gray-800 hover:bg-gray-800 hover:text-white transition">
                <PlusCircle className="mr-2" /> Login with Email
              </button>
              <button className="flex items-center px-4 py-2 border border-gray-800 bg-red-500 text-white hover:bg-gray-800 hover:text-white transition">
                <Share2 className="mr-2" /> Share This Bike
              </button>
            </div>
            <div>
              <img
                src={
                  bike.image || "https://via.placeholder.com/300?text=No+Image"
                }
                alt={bike.name || "Bike Image"}
                className="w-full"
              />
            </div>
            <div className="space-y-5">
              <h2 className="text-4xl font-bold">Description</h2>
              <p>{bike.description || "No description available"}</p>
            </div>
          </div>
          <div>
            <div className="space-y-5">
              <div className="border p-6 rounded-md shadow-md">
                <div className="text-3xl font-bold">
                  ${bike.pricePerHour || "Price not available"}
                </div>
                <div className="mx-auto flex w-72 items-center justify-center">
                  <button
                    onClick={() => setOpenModal(true)}
                    className={`rounded-md py-2 px-5 text-white ${
                      bike?.isAvailable
                        ? "bg-red-500 hover:bg-red-600"
                        : "bg-gray-500 cursor-not-allowed"
                    }`}
                    disabled={!bike?.isAvailable}
                  >
                    Book Now
                  </button>
                  <div
                    onClick={() => setOpenModal(false)}
                    className={`fixed z-[100] flex items-center justify-center ${
                      openModal ? "opacity-1 visible" : "invisible opacity-0"
                    } inset-0 h-full w-full bg-black/20 backdrop-blur-sm duration-100`}
                  >
                    <div
                      onClick={(e) => e.stopPropagation()}
                      className={`absolute w-full rounded-lg bg-white dark:bg-gray-900 drop-shadow-2xl sm:w-[500px] ${
                        openModal
                          ? "opacity-1 translate-y-0 duration-300"
                          : "-translate-y-20 opacity-0 duration-150"
                      }`}
                    >
                      <form
                        className="px-5 pb-5 pt-3 lg:pb-10 lg:pt-5 lg:px-10"
                        onSubmit={handleSubmit(onSubmit)}
                      >
                        <svg
                          onClick={() => setOpenModal(false)}
                          className="mx-auto mr-0 w-10 cursor-pointer fill-black dark:fill-white"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g strokeWidth="0"></g>
                          <g
                            id="SVGRepo_tracerCarrier"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></g>
                          <g id="SVGRepo_iconCarrier">
                            <path d="M6.99486 7.00636C6.60433 7.39689 6.60433 8.03005 6.99486 8.42058L10.58 12.0057L6.99486 15.5909C6.60433 15.9814 6.60433 16.6146 6.99486 17.0051C7.38538 17.3956 8.01855 17.3956 8.40907 17.0051L11.9942 13.4199L15.5794 17.0051C15.9699 17.3956 16.6031 17.3956 16.9936 17.0051C17.3841 16.6146 17.3841 15.9814 16.9936 15.5909L13.4084 12.0057L16.9936 8.42059C17.3841 8.03007 17.3841 7.3969 16.9936 7.00638C16.603 6.61585 15.9699 6.61585 15.5794 7.00638L11.9942 10.5915L8.40907 7.00636C8.01855 6.61584 7.38538 6.61584 6.99486 7.00636Z"></path>
                          </g>
                        </svg>
                        <h1 className="pb-8 text-4xl backdrop-blur-sm">
                          Book a Ride
                        </h1>
                        <div className="grid gap-4 py-4">
                          <div>
                            <label htmlFor="startDate" className="text-right">
                              Start Date
                            </label>
                            <input
                              id="startDate"
                              type="date"
                              className="col-span-3"
                              {...register("startDate", {
                                required: "Date is required",
                              })}
                            />
                            {errors.startDate && (
                              <p className="text-red-500 text-sm mt-1">
                                {errors.startDate.message}
                              </p>
                            )}
                          </div>
                          <div>
                            <label htmlFor="startTime" className="text-right">
                              Start Time
                            </label>
                            <input
                              id="startTime"
                              type="time"
                              className="col-span-3"
                              {...register("startTime", {
                                required: "Time is required",
                              })}
                            />
                            {errors.startTime && (
                              <p className="text-red-500 text-sm mt-1">
                                {errors.startTime.message}
                              </p>
                            )}
                          </div>
                        </div>
                        <button
                          type="submit"
                          className="w-full rounded bg-green-500 py-3 font-bold text-white"
                        >
                          Pay Now
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
                <div className="border-t mt-5 pt-5">
                  <div>
                    <div className="text-xl font-bold">Other Details</div>
                    <div className="text-sm">
                      <p>Location: {bike.location || "Not Available"}</p>
                      <p>Model Year: {bike.modelYear || "Not Available"}</p>
                      <p>Category: {bike.category || "Not Available"}</p>
                      <p>Available: {bike.available ? "Yes" : "No"}</p>
                    </div>
                  </div>
                  <div className="mt-5">
                    <h3 className="text-xl font-bold">Booking Notes:</h3>
                    <ul className="list-disc list-inside text-sm">
                      <li>Booking subject to availability.</li>
                      <li>
                        Please provide accurate start date and time information.
                      </li>
                      <li>
                        Payments are processed securely through our payment
                        gateway.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="p-6 border rounded-md shadow-md">
                <h3 className="text-xl font-bold">Safety Measures</h3>
                <p className="text-sm mt-3">
                  Our bikes are regularly serviced and maintained to ensure your
                  safety. Please adhere to traffic rules and wear appropriate
                  safety gear during your ride.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BikeDetails;
// import { Calendar } from "@/components/ui/calendar";
// import { ChangeEventHandler, useState } from "react";
// import { setHours, setMinutes } from "date-fns";
// import {
//   useForm,
//   Controller,
//   SubmitHandler,
//   FieldValues,
// } from "react-hook-form";
// import { useParams } from "react-router-dom";
// import { useGetSingleBikeQuery } from "@/redux/features/bikes/bikeApi";
// import toast from "react-hot-toast";
// import { useCreateRentMutation } from "@/redux/features/rentals/rentalApi";

// const BikeDetails = () => {
//   const { id } = useParams();
//   const [openModal, setOpenModal] = useState(false);
//   const [createRent] = useCreateRentMutation();
//   const { data: singleBikeData, isLoading } = useGetSingleBikeQuery(id, {
//     pollingInterval: 30000,
//   });

//   const bike = singleBikeData?.data;

//   const { control, handleSubmit } = useForm({});

//   const onSubmit: SubmitHandler<FieldValues> = (data) => {
//     console.log(data);
//   };

//   const [selected, setSelected] = useState<Date>();
//   const [timeValue, setTimeValue] = useState<string>("00:00");

//   const handleTimeChange: ChangeEventHandler<HTMLInputElement> = (e) => {
//     const time = e.target.value;
//     if (!selected) {
//       setTimeValue(time);
//       return;
//     }
//     const [hours, minutes] = time.split(":").map((str) => parseInt(str, 10));
//     const newSelectedDate = setHours(setMinutes(selected, minutes), hours);
//     setSelected(newSelectedDate);
//     setTimeValue(time);
//   };

//   const handleDaySelect = (date: Date | undefined) => {
//     if (!timeValue || !date) {
//       setSelected(date);
//       return;
//     }
//     const [hours, minutes] = timeValue
//       .split(":")
//       .map((str) => parseInt(str, 10));
//     const newDate = new Date(
//       date.getFullYear(),
//       date.getMonth(),
//       date.getDate(),
//       hours,
//       minutes
//     );
//     setSelected(newDate);
//   };
//   console.log(selected);

//   const handleRentBike = async () => {
//     const toastId = toast.loading("Bike rent processing...");
//     const data = {
//       bikeId: bike._id,
//       startTime: selected?.toISOString(),
//     };
//     console.log(data);

//     try {
//       const res = await createRent(data).unwrap();
//       console.log(res);

//       toast.success(res.message, { id: toastId });
//       console.log(res);
//       // redirect to payment page
//       window.location.href = res.data.paymentSession.payment_url;
//     } catch (error) {
//       toast.error("Bike rent process failed...", { id: toastId });
//     }
//   };

//   // const handleBookNow = () => {
//   //   if (!user) {
//   //     toast.error("You should log in first!");
//   //     return;
//   //   }
//   // };

//   if (isLoading) {
//     return (
//       <div className="flex justify-center items-center h-screen">
//         <div className="text-center text-2xl">Loading...</div>
//       </div>
//     );
//   }

//   return (
//     <div>
//       <div className="bg-gray-800 h-64 flex justify-center items-center text-white">
//         <h1 className="text-5xl font-bold">Details of Bike</h1>
//       </div>
//       <div className="container mx-auto p-4">
//         <div className="grid grid-cols-3 gap-10 my-28">
//           <div className="col-span-2 space-y-10">
//             <h2 className="text-4xl font-bold">{bike.name}</h2>
//             <div className="space-x-10">
//               <button className="bg-transparent text-black border border-black hover:bg-gray-800 hover:text-white px-4 py-2">
//                 Compare Bike
//               </button>
//               <button className="bg-transparent text-black border border-black hover:bg-gray-800 hover:text-white px-4 py-2">
//                 Share This Bike
//               </button>
//             </div>
//             <div>
//               <img src={bike.image} alt={bike.name} className="w-full h-auto" />
//             </div>
//             <div className="space-y-5">
//               <h2 className="text-4xl font-bold">Description</h2>
//               <p>{bike.description}</p>
//             </div>

//             <div className="space-y-5">
//               <div>
//                 <h2 className="text-4xl font-bold">Leave a Comment</h2>
//                 <p>
//                   Your email address will not be published. Required fields are
//                   marked *
//                 </p>
//               </div>

//               <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
//                 <div>
//                   <label className="block text-lg font-medium">Comment</label>
//                   <Controller
//                     name="comment"
//                     control={control}
//                     rules={{ required: true }}
//                     render={({ field }) => (
//                       <textarea
//                         {...field}
//                         placeholder="What's on your mind..."
//                         className="w-full p-2 border rounded"
//                       />
//                     )}
//                   />
//                 </div>
//                 <div className="grid grid-cols-2 gap-2">
//                   <div>
//                     <label className="block text-lg font-medium">
//                       Your Name
//                     </label>
//                     <Controller
//                       name="name"
//                       control={control}
//                       rules={{ required: true }}
//                       render={({ field }) => (
//                         <input
//                           {...field}
//                           type="text"
//                           placeholder="Enter your full name"
//                           className="w-full p-2 border rounded"
//                         />
//                       )}
//                     />
//                   </div>
//                   <div>
//                     <label className="block text-lg font-medium">
//                       Email Address
//                     </label>
//                     <Controller
//                       name="email"
//                       control={control}
//                       rules={{ required: true }}
//                       render={({ field }) => (
//                         <input
//                           {...field}
//                           type="email"
//                           placeholder="Enter your email"
//                           className="w-full p-2 border rounded"
//                         />
//                       )}
//                     />
//                   </div>
//                 </div>
//                 <div className="flex items-center space-x-2">
//                   <input id="terms" type="checkbox" className="form-checkbox" />
//                   <label htmlFor="terms" className="ml-2">
//                     Save my name, email, and website in this browser for the
//                     next time I comment.
//                   </label>
//                 </div>
//                 <button
//                   type="submit"
//                   className="bg-gray-800 text-white px-7 py-3 font-bold rounded uppercase"
//                 >
//                   Comment
//                 </button>
//               </form>
//             </div>
//           </div>
//           {/* dailagof  */}
//           <div className="col-span-1">
//             <div className="space-y-5">
//               <div className="bg-white p-4 rounded shadow-md">
//                 <div className="text-sm">
//                   <div className="font-semibold">Price</div>
//                   <div className="text-3xl font-bold">${bike.pricePerHour}</div>
//                 </div>

//                 <div className="mx-auto flex w-72 items-center justify-center">
//                   <button
//                     onClick={() => setOpenModal(true)}
//                     className="rounded-md bg-gray-700 py-2 px-5 text-white"
//                   >
//                     Book Now
//                   </button>
//                   <div
//                     onClick={() => setOpenModal(false)}
//                     className={`fixed z-[100] flex items-center justify-center ${
//                       openModal ? "opacity-1 visible" : "invisible opacity-0"
//                     } inset-0 h-full w-full bg-black/20 backdrop-blur-sm duration-100`}
//                   >
//                     <div
//                       onClick={(e_) => e_.stopPropagation()}
//                       className={`absolute w-full rounded-lg bg-white dark:bg-gray-900 drop-shadow-2xl sm:w-[500px] ${
//                         openModal
//                           ? "opacity-1 translate-y-0 duration-300"
//                           : "-translate-y-20 opacity-0 duration-150"
//                       }`}
//                     >
//                       <div className="mt-5 px-10 mb-4">
//                         <div>
//                           <div className="text-lg font-bold">Set Time</div>
//                           <p>Set your rent start time and enjoy your ride.</p>
//                           <form className="my-4">
//                             <label className="block mb-2">Set the time:</label>
//                             <input
//                               type="time"
//                               value={timeValue}
//                               onChange={handleTimeChange}
//                               className="p-2 border rounded"
//                             />
//                           </form>
//                           <Calendar
//                             mode="single"
//                             selected={selected}
//                             onSelect={handleDaySelect}
//                             footer={`Selected date: ${
//                               selected ? selected.toLocaleString() : "none"
//                             }`}
//                             className="rounded-md border p-4"
//                           />
//                           <button
//                             onClick={handleRentBike}
//                             className="bg-gray-800 text-white px-7 py-3 font-bold rounded uppercase mt-5"
//                           >
//                             Rent This Bike
//                           </button>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               <div className="bg-white p-4 rounded shadow-md">
//                 <div className="text-2xl font-bold">Specifications</div>
//                 <div className="text-sm">
//                   <ul className="space-y-2">
//                     <li className="flex justify-between">
//                       <span className="font-medium">Brand</span>
//                       <span>{bike.brand}</span>
//                     </li>
//                     <li className="flex justify-between">
//                       <span className="font-medium">Model</span>
//                       <span>{bike.model}</span>
//                     </li>
//                     <li className="flex justify-between">
//                       <span className="font-medium">Bike CC</span>
//                       <span>{bike.cc} CC</span>
//                     </li>
//                     <li className="flex justify-between">
//                       <span className="font-medium">Color</span>
//                       <span>{bike.color}</span>
//                     </li>
//                     <li className="flex justify-between">
//                       <span className="font-medium">Brakes</span>
//                       <span>{bike.brakes}</span>
//                     </li>
//                     <li className="flex justify-between">
//                       <span className="font-medium">Condition</span>
//                       <span>{bike.condition}</span>
//                     </li>
//                   </ul>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default BikeDetails;
