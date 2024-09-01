import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import {
  useGetSingleBikeQuery,
  useUpdateBikeMutation,
} from "@/redux/features/bikes/bikeApi";
import toast from "react-hot-toast";
interface BikeFormData {
  name: string;
  isAvailable: boolean;
  brand: string;
  model: string;
  year: number;
  description: string;
  engineType: string;
  pricePerHour: number;
  cc: number;
  maximumSpeed: string;
}

const UpdateBike = () => {
  const { id } = useParams(); // Get the bike ID from the URL parameters
  const { data: bikeData, isLoading, refetch } = useGetSingleBikeQuery(id); // Fetch the bike data by ID

  const [updateBike] = useUpdateBikeMutation();
  const navigate = useNavigate();
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<BikeFormData>({
    defaultValues: {
      name: "",
      isAvailable: true,
      brand: "",
      model: "",
      year: 0,
      description: "",
      engineType: "",
      pricePerHour: 0,
      cc: 0,
      maximumSpeed: "",
    },
  });

  useEffect(() => {
    if (bikeData) {
      // Reset the form with the fetched bike data
      reset({
        name: bikeData?.data?.name || "",
        isAvailable: bikeData?.data?.isAvailable ?? true,
        brand: bikeData?.data?.brand || "",
        model: bikeData?.data?.model || "",
        year: bikeData?.data?.year || 0,
        engineType: bikeData?.data?.engineType || "",
        pricePerHour: bikeData?.data?.pricePerHour || 0,
        cc: bikeData?.data?.cc || 0,
        description: bikeData?.data?.description || "",
        maximumSpeed: bikeData?.data?.maximumSpeed || "",
      });
    }
  }, [bikeData, reset]);

  const onSubmit: SubmitHandler<BikeFormData> = async (data) => {
    const updatedData = {
      ...data,
      pricePerHour: Number(data.pricePerHour),
      cc: Number(data.cc),
      year: Number(data.year),
    };
    try {
      await updateBike({ id, ...updatedData }).unwrap();
      await refetch();
      toast.success("Bike updated successfully!");

      navigate("/userDash/bike-management");
      window.location.reload();
    } catch (error) {
      console.error("Update failed:", error);
      toast.error("Failed to update bike.");
    }
  };

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="w-full p-8">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
        <div className="space-y-6">
          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                Bike Title
              </label>
              <Controller
                name="name"
                control={control}
                render={({ field }) => (
                  <input
                    {...field}
                    type="text"
                    className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    placeholder="Write your bike title"
                  />
                )}
              />
              {errors.name && (
                <p className="text-red-500 text-sm">{errors.name.message}</p>
              )}
            </div>
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                Availability
              </label>
              <Controller
                name="isAvailable"
                control={control}
                render={({ field }) => (
                  <select
                    {...field}
                    className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  >
                    <option value="true">Available</option>
                    <option value="false">Not Available</option>
                  </select>
                )}
              />
              {errors.isAvailable && (
                <p className="text-red-500 text-sm">
                  {errors.isAvailable.message}
                </p>
              )}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                Bike Brand
              </label>
              <Controller
                name="brand"
                control={control}
                render={({ field }) => (
                  <select
                    {...field}
                    className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  >
                    <option value="">Select Brand</option>
                    <option value="trek">Trek</option>
                    <option value="specialized">Specialized</option>
                    <option value="giant">Giant</option>
                    <option value="cannondale">Cannondale</option>
                    <option value="scott">Scott</option>
                    <option value="santa_cruz">Santa Cruz</option>
                    <option value="bianchi">Bianchi</option>
                  </select>
                )}
              />
              {errors.brand && (
                <p className="text-red-500 text-sm">{errors.brand.message}</p>
              )}
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                Bike Model
              </label>
              <Controller
                name="model"
                control={control}
                render={({ field }) => (
                  <input
                    {...field}
                    type="text"
                    className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    placeholder="Write your bike model"
                  />
                )}
              />
              {errors.model && (
                <p className="text-red-500 text-sm">{errors.model.message}</p>
              )}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                Release Year
              </label>
              <Controller
                name="year"
                control={control}
                render={({ field }) => (
                  <input
                    {...field}
                    type="number"
                    className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    placeholder="Write your bike release year"
                  />
                )}
              />
              {errors.year && (
                <p className="text-red-500 text-sm">{errors.year.message}</p>
              )}
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                Engine Type
              </label>
              <Controller
                name="engineType"
                control={control}
                render={({ field }) => (
                  <input
                    {...field}
                    type="text"
                    className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    placeholder="Write your bike's engine type"
                  />
                )}
              />
              {errors.engineType && (
                <p className="text-red-500 text-sm">
                  {errors.engineType.message}
                </p>
              )}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                Price Per Hour
              </label>
              <Controller
                name="pricePerHour"
                control={control}
                render={({ field }) => (
                  <input
                    {...field}
                    type="number"
                    className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    placeholder="Enter price per hour"
                  />
                )}
              />
              {errors.pricePerHour && (
                <p className="text-red-500 text-sm">
                  {errors.pricePerHour.message}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                CC
              </label>
              <Controller
                name="cc"
                control={control}
                render={({ field }) => (
                  <input
                    {...field}
                    type="number"
                    className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    placeholder="Enter CC"
                  />
                )}
              />
              {errors.cc && (
                <p className="text-red-500 text-sm">{errors.cc.message}</p>
              )}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                Description
              </label>
              <Controller
                name="description"
                control={control}
                render={({ field }) => (
                  <textarea
                    {...field}
                    className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    rows="4"
                    placeholder="Write a description of your bike"
                  />
                )}
              />
              {errors.description && (
                <p className="text-red-500 text-sm">
                  {errors.description.message}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                Maximum Speed
              </label>
              <Controller
                name="maximumSpeed"
                control={control}
                render={({ field }) => (
                  <input
                    {...field}
                    type="text"
                    className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    placeholder="Enter maximum speed"
                  />
                )}
              />
              {errors.maximumSpeed && (
                <p className="text-red-500 text-sm">
                  {errors.maximumSpeed.message}
                </p>
              )}
            </div>
          </div>
        </div>

        <div className="flex justify-end">
          <button
            type="submit"
            className="inline-flex items-center px-4 py-2 bg-indigo-600 text-white font-semibold rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            Update Bike
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateBike;
