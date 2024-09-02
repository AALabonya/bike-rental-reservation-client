// import { useCreateBikeMutation } from "@/redux/features/bikes/bikeApi";
// import {
//   useForm,
//   Controller,
//   SubmitHandler,
//   FieldValues,
// } from "react-hook-form";
// import toast from "react-hot-toast";

// const CreateBike = () => {
//   const { control, handleSubmit, reset } = useForm();
//   const [createBike] = useCreateBikeMutation();

//   const onSubmit: SubmitHandler<FieldValues> = async (item) => {
//     const items = {
//       name: item.name,
//       brand: item.brand,
//       model: item.model,
//       year: Number(item.year),
//       cc: Number(item.cc),
//       pricePerHour: Number(item.pricePerHour),
//       engineType: item.engineType,

//       maximumSpeed: item.maximumSpeed,
//       description: item.description,
//       isAvailable: item.isAvailable === "true",
//       image: item.image,
//     };
//     console.log(items);

//     try {
//       const result = await createBike(items).unwrap();
//       console.log(result);

//       toast.success("Bike uploaded successfully!");
//       reset(); // Reset the form after successful submission
//     } catch (err) {
//       console.error("Failed to create bike:", err);
//       toast.error("Failed to upload bike. Please try again.");
//     }
//   };

//   return (
//     <div className="w-full p-8">
//       <form onSubmit={handleSubmit(onSubmit)}>
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
//           <div className="md:col-span-2">
//             <div className="p-6 bg-white shadow rounded-lg">
//               <h2 className="text-2xl font-semibold mb-2">Upload A Bike</h2>
//               <p className="text-gray-600 mb-6">
//                 Add the details of a bike and upload the bike
//               </p>
//               <div className="grid gap-6">
//                 <div className="grid gap-2">
//                   <label className="font-medium">Bike Title</label>
//                   <Controller
//                     name="name"
//                     control={control}
//                     render={({ field }) => (
//                       <input
//                         {...field}
//                         type="text"
//                         className="p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-500"
//                         placeholder="Write your bike title"
//                       />
//                     )}
//                   />
//                 </div>

//                 <div className="grid md:grid-cols-2 gap-6">
//                   <div className="grid gap-2">
//                     <label className="font-medium">Bike Brand</label>
//                     <Controller
//                       name="brand"
//                       control={control}
//                       render={({ field }) => (
//                         <select
//                           {...field}
//                           className="p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-500"
//                         >
//                           <option value="" disabled>
//                             Select Brand
//                           </option>
//                           <option value="bajaj">Bajaj</option>
//                           <option value="hero">Hero</option>
//                           <option value="tvsmotor">TVS Motor</option>
//                           <option value="yamaha">Yamaha</option>
//                           <option value="honda">Honda</option>
//                           <option value="suzuki">Suzuki</option>
//                           <option value="rafi">Rafi</option>
//                           <option value="runner">Runner</option>
//                           <option value="sym">SYM</option>
//                           <option value="kawasaki">Kawasaki</option>
//                         </select>
//                       )}
//                     />
//                   </div>
//                   <div className="grid gap-2">
//                     <label className="font-medium">Bike Model</label>
//                     <Controller
//                       name="model"
//                       control={control}
//                       render={({ field }) => (
//                         <input
//                           {...field}
//                           type="text"
//                           className="p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-500"
//                           placeholder="Write your bike model"
//                         />
//                       )}
//                     />
//                   </div>
//                 </div>

//                 <div className="grid md:grid-cols-2 gap-6">
//                   <div className="grid gap-2">
//                     <label className="font-medium">Release Year</label>
//                     <Controller
//                       name="year"
//                       control={control}
//                       render={({ field }) => (
//                         <input
//                           {...field}
//                           type="text"
//                           className="p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-500"
//                           placeholder="Write your bike release year"
//                         />
//                       )}
//                     />
//                   </div>
//                   <div className="grid gap-2">
//                     <label className="font-medium">CC</label>
//                     <Controller
//                       name="cc"
//                       control={control}
//                       render={({ field }) => (
//                         <input
//                           {...field}
//                           type="number"
//                           className="p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-500"
//                           placeholder="Enter CC"
//                         />
//                       )}
//                     />
//                   </div>
//                 </div>

//                 <div className="grid md:grid-cols-2 gap-6">
//                   <div className="grid gap-2">
//                     <label className="font-medium">Price Per Hour</label>
//                     <Controller
//                       name="pricePerHour"
//                       control={control}
//                       render={({ field }) => (
//                         <input
//                           {...field}
//                           type="number"
//                           className="p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-500"
//                           placeholder="Enter price per hour"
//                         />
//                       )}
//                     />
//                   </div>
//                   <div className="grid gap-2">
//                     <label className="font-medium">Engine Type</label>
//                     <Controller
//                       name="engineType"
//                       control={control}
//                       render={({ field }) => (
//                         <input
//                           {...field}
//                           type="text"
//                           className="p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-500"
//                           placeholder="Write your bike's engine type"
//                         />
//                       )}
//                     />
//                   </div>
//                 </div>

//                 <div className="grid gap-2">
//                   <label className="font-medium">Maximum Speed</label>
//                   <Controller
//                     name="maximumSpeed"
//                     control={control}
//                     render={({ field }) => (
//                       <input
//                         {...field}
//                         type="text"
//                         className="p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-500"
//                         placeholder="Enter the maximum speed"
//                       />
//                     )}
//                   />
//                 </div>

//                 <div className="grid gap-2">
//                   <label className="font-medium">Description</label>
//                   <Controller
//                     name="description"
//                     control={control}
//                     render={({ field }) => (
//                       <textarea
//                         {...field}
//                         className="p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-500"
//                         placeholder="What about your bike..."
//                       ></textarea>
//                     )}
//                   />
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="space-y-6">
//             <div className="p-6 bg-white shadow rounded-lg">
//               <h3 className="text-xl font-semibold mb-4">Bike Availability</h3>
//               <div className="grid gap-2">
//                 <label className="flex items-center gap-2 font-medium">
//                   Availability
//                   <span className="text-gray-500">
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       fill="none"
//                       viewBox="0 0 24 24"
//                       strokeWidth="2"
//                       stroke="currentColor"
//                       className="w-5 h-5"
//                     >
//                       <path
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         d="M12 12h.01M3.515 9.515a9 9 0 0112.727 0m0 0A9 9 0 0120 21.486M3.515 9.515L12 12l8.485-2.485M12 12l8.485-2.485A9 9 0 0120 21.486M3.515 9.515A9 9 0 0012 12"
//                       />
//                     </svg>
//                   </span>
//                 </label>
//                 <Controller
//                   name="isAvailable"
//                   control={control}
//                   render={({ field }) => (
//                     <select
//                       {...field}
//                       className="p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-500"
//                     >
//                       <option value="true">Available</option>
//                       <option value="false">Not Available</option>
//                     </select>
//                   )}
//                 />
//               </div>
//             </div>

//             <div className="p-6 bg-white shadow rounded-lg">
//               <h3 className="text-xl font-semibold mb-4">Bike Image URL</h3>
//               <div className="grid gap-2">
//                 <label className="font-medium">Image URL</label>
//                 <Controller
//                   name="image"
//                   control={control}
//                   render={({ field }) => (
//                     <input
//                       {...field}
//                       type="text"
//                       className="p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-500"
//                       placeholder="Enter the URL of the bike image"
//                     />
//                   )}
//                 />
//               </div>
//             </div>
//           </div>
//         </div>

//         <button
//           type="submit"
//           className="mt-8 w-full py-3 px-6 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
//         >
//           Upload Bike
//         </button>
//       </form>
//     </div>
//   );
// };

// export default CreateBike;
import PageTitleForHome from "@/components/Shared/PageTitleForHome";
import { useCreateBikeMutation } from "@/redux/features/bikes/bikeApi";
import {
  useForm,
  Controller,
  SubmitHandler,
  FieldValues,
} from "react-hook-form";
import toast from "react-hot-toast";

const CreateBike = () => {
  const { control, handleSubmit, reset } = useForm({
    defaultValues: {
      name: "",
      brand: "",
      model: "",
      year: "",
      cc: "",
      pricePerHour: "",
      engineType: "",
      maximumSpeed: "",
      description: "",
      isAvailable: "true",
      image: "",
    },
  });
  const [createBike] = useCreateBikeMutation();

  const onSubmit: SubmitHandler<FieldValues> = async (item) => {
    const items = {
      name: item.name,
      brand: item.brand,
      model: item.model,
      year: Number(item.year),
      cc: Number(item.cc),
      pricePerHour: Number(item.pricePerHour),
      engineType: item.engineType,
      maximumSpeed: item.maximumSpeed,
      description: item.description,
      isAvailable: item.isAvailable === "true",
      image: item.image,
    };
    console.log(items);

    try {
      const result = await createBike(items).unwrap();
      console.log(result);

      toast.success("Bike uploaded successfully!");
      reset(); // Reset the form after successful submission
    } catch (err) {
      console.error("Failed to create bike:", err);
      toast.error("Failed to upload bike. Please try again.");
    }
  };
  return (
    <div className="w-full p-8">
      <div className="">
        <PageTitleForHome title="Create Bike" />
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="md:col-span-2">
            <div className="p-6 bg-white shadow rounded-lg">
              <div className="grid gap-6">
                <div className="grid gap-2">
                  <label className="font-medium text-black">Bike Title</label>
                  <Controller
                    name="name"
                    control={control}
                    rules={{ required: "Bike title is required" }}
                    render={({ field, fieldState }) => (
                      <div>
                        <input
                          {...field}
                          type="text"
                          className={`p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-500 ${
                            fieldState.error ? "border-red-500" : ""
                          }`}
                          placeholder="Write your bike title"
                        />
                        {fieldState.error && (
                          <p className="text-red-500">
                            {fieldState.error.message}
                          </p>
                        )}
                      </div>
                    )}
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="grid gap-2">
                    <label className="font-medium text-black">Bike Brand</label>
                    <Controller
                      name="brand"
                      control={control}
                      rules={{ required: "Bike brand is required" }}
                      render={({ field, fieldState }) => (
                        <div>
                          <select
                            {...field}
                            className={`p-2 border border-gray-300 text-black rounded focus:outline-none focus:ring focus:border-blue-500 ${
                              fieldState.error ? "border-red-500" : ""
                            }`}
                          >
                            <option value="" disabled>
                              Select Brand
                            </option>
                            <option value="bajaj">Bajaj</option>
                            <option value="hero">Hero</option>
                            <option value="tvsmotor">TVS Motor</option>
                            <option value="yamaha">Yamaha</option>
                            <option value="honda">Honda</option>
                            <option value="suzuki">Suzuki</option>
                            <option value="rafi">Rafi</option>
                            <option value="runner">Runner</option>
                            <option value="sym">SYM</option>
                            <option value="kawasaki">Kawasaki</option>
                          </select>
                          {fieldState.error && (
                            <p className="text-red-500">
                              {fieldState.error.message}
                            </p>
                          )}
                        </div>
                      )}
                    />
                  </div>
                  <div className="grid gap-2">
                    <label className="font-medium">Bike Model</label>
                    <Controller
                      name="model"
                      control={control}
                      rules={{ required: "Bike model is required" }}
                      render={({ field, fieldState }) => (
                        <div>
                          <input
                            {...field}
                            type="text"
                            className={`p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-500 ${
                              fieldState.error ? "border-red-500" : ""
                            }`}
                            placeholder="Write your bike model"
                          />
                          {fieldState.error && (
                            <p className="text-red-500">
                              {fieldState.error.message}
                            </p>
                          )}
                        </div>
                      )}
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="grid gap-2">
                    <label className="font-medium">Release Year</label>
                    <Controller
                      name="year"
                      control={control}
                      rules={{
                        required: "Release year is required",
                        pattern: {
                          value: /^\d{4}$/,
                          message: "Enter a valid year (e.g., 2023)",
                        },
                      }}
                      render={({ field, fieldState }) => (
                        <div>
                          <input
                            {...field}
                            type="text"
                            className={`p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-500 ${
                              fieldState.error ? "border-red-500" : ""
                            }`}
                            placeholder="Write your bike release year"
                          />
                          {fieldState.error && (
                            <p className="text-red-500">
                              {fieldState.error.message}
                            </p>
                          )}
                        </div>
                      )}
                    />
                  </div>
                  <div className="grid gap-2">
                    <label className="font-medium">CC</label>
                    <Controller
                      name="cc"
                      control={control}
                      rules={{
                        required: "CC is required",
                        min: {
                          value: 50,
                          message: "CC must be at least 50",
                        },
                      }}
                      render={({ field, fieldState }) => (
                        <div>
                          <input
                            {...field}
                            type="number"
                            className={`p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-500 ${
                              fieldState.error ? "border-red-500" : ""
                            }`}
                            placeholder="Enter CC"
                          />
                          {fieldState.error && (
                            <p className="text-red-500">
                              {fieldState.error.message}
                            </p>
                          )}
                        </div>
                      )}
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="grid gap-2">
                    <label className="font-medium">Price Per Hour</label>
                    <Controller
                      name="pricePerHour"
                      control={control}
                      rules={{
                        required: "Price per hour is required",
                        min: {
                          value: 1,
                          message: "Price per hour must be at least 1",
                        },
                      }}
                      render={({ field, fieldState }) => (
                        <div>
                          <input
                            {...field}
                            type="number"
                            className={`p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-500 ${
                              fieldState.error ? "border-red-500" : ""
                            }`}
                            placeholder="Enter price per hour"
                          />
                          {fieldState.error && (
                            <p className="text-red-500">
                              {fieldState.error.message}
                            </p>
                          )}
                        </div>
                      )}
                    />
                  </div>
                  <div className="grid gap-2">
                    <label className="font-medium">Engine Type</label>
                    <Controller
                      name="engineType"
                      control={control}
                      rules={{ required: "Engine type is required" }}
                      render={({ field, fieldState }) => (
                        <div>
                          <input
                            {...field}
                            type="text"
                            className={`p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-500 ${
                              fieldState.error ? "border-red-500" : ""
                            }`}
                            placeholder="Write your bike's engine type"
                          />
                          {fieldState.error && (
                            <p className="text-red-500">
                              {fieldState.error.message}
                            </p>
                          )}
                        </div>
                      )}
                    />
                  </div>
                </div>

                <div className="grid gap-2">
                  <label className="font-medium">Maximum Speed</label>
                  <Controller
                    name="maximumSpeed"
                    control={control}
                    rules={{ required: "Maximum speed is required" }}
                    render={({ field, fieldState }) => (
                      <div>
                        <input
                          {...field}
                          type="text"
                          className={`p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-500 ${
                            fieldState.error ? "border-red-500" : ""
                          }`}
                          placeholder="Enter the maximum speed"
                        />
                        {fieldState.error && (
                          <p className="text-red-500">
                            {fieldState.error.message}
                          </p>
                        )}
                      </div>
                    )}
                  />
                </div>

                <div className="grid gap-2">
                  <label className="font-medium">Description</label>
                  <Controller
                    name="description"
                    control={control}
                    rules={{ required: "Description is required" }}
                    render={({ field, fieldState }) => (
                      <div>
                        <textarea
                          {...field}
                          className={`p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-500 ${
                            fieldState.error ? "border-red-500" : ""
                          }`}
                          placeholder="What about your bike..."
                        ></textarea>
                        {fieldState.error && (
                          <p className="text-red-500">
                            {fieldState.error.message}
                          </p>
                        )}
                      </div>
                    )}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="space-y-6">
            <div className="p-6 bg-white shadow rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Bike Availability</h3>
              <div className="grid gap-2">
                <label className="flex items-center gap-2 font-medium">
                  Availability
                  <span className="text-gray-500">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="currentColor"
                      className="w-5 h-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 12h.01M3.515 9.515a9 9 0 0112.727 0m0 0A9 9 0 0120 21.486M3.515 9.515L12 12l8.485-2.485M12 12l8.485-2.485A9 9 0 0120 21.486M3.515 9.515A9 9 0 0012 12"
                      />
                    </svg>
                  </span>
                </label>
                <Controller
                  name="isAvailable"
                  control={control}
                  render={({ field, fieldState }) => (
                    <div>
                      <select
                        {...field}
                        className={`p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-500 ${
                          fieldState.error ? "border-red-500" : ""
                        }`}
                      >
                        <option value="true">Available</option>
                        <option value="false">Not Available</option>
                      </select>
                      {fieldState.error && (
                        <p className="text-red-500">
                          {fieldState.error.message}
                        </p>
                      )}
                    </div>
                  )}
                />
              </div>
            </div>

            <div className="p-6 bg-white shadow rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Bike Image URL</h3>
              <div className="grid gap-2">
                <label className="font-medium">Image URL</label>
                <Controller
                  name="image"
                  control={control}
                  rules={{
                    required: "Image URL is required",
                    pattern: {
                      value: /^https?:\/\/.+\.(jpg|jpeg|png|gif|webp)$/,
                      message: "Enter a valid image URL",
                    },
                  }}
                  render={({ field, fieldState }) => (
                    <div>
                      <input
                        {...field}
                        type="text"
                        className={`p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-500 ${
                          fieldState.error ? "border-red-500" : ""
                        }`}
                        placeholder="Enter the URL of the bike image"
                      />
                      {fieldState.error && (
                        <p className="text-red-500">
                          {fieldState.error.message}
                        </p>
                      )}
                    </div>
                  )}
                />
              </div>
            </div>
          </div>
        </div>

        <button
          type="submit"
          className="mt-8 w-full py-3 px-6 bg-red-600 text-white rounded-md hover:bg-red-700 "
        >
          Upload Bike
        </button>
      </form>
    </div>
  );
};

export default CreateBike;
