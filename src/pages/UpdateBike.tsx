import { useForm, Controller } from "react-hook-form";
const UpdateBike = () => {
  const { control, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="w-full p-8">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
        <div className="space-y-6">
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
                    type="text"
                    className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    placeholder="Write your bike release year"
                  />
                )}
              />
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                Frame Size
              </label>
              <Controller
                name="frame"
                control={control}
                render={({ field }) => (
                  <input
                    {...field}
                    type="text"
                    className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    placeholder="Write your bike frame size"
                  />
                )}
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                Max. Support
              </label>
              <Controller
                name="support"
                control={control}
                render={({ field }) => (
                  <input
                    {...field}
                    type="text"
                    className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    placeholder="Write your bike maximum support"
                  />
                )}
              />
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                Color
              </label>
              <Controller
                name="color"
                control={control}
                render={({ field }) => (
                  <select
                    {...field}
                    className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  >
                    <option value="">Select Color</option>
                    <option value="black">Black</option>
                    <option value="red">Red</option>
                    <option value="gray">Gray</option>
                    <option value="blue">Blue</option>
                  </select>
                )}
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                Category
              </label>
              <Controller
                name="category"
                control={control}
                render={({ field }) => (
                  <select
                    {...field}
                    className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  >
                    <option value="">Select Category</option>
                    <option value="road_bike">Road Bike</option>
                    <option value="mountain_bike">Mountain Bike</option>
                    <option value="hybrid_bike">Hybrid Bike</option>
                    <option value="cruiser_bike">Cruiser Bike</option>
                    <option value="electric_bike">Electric Bike</option>
                    <option value="bmx_bike">BMX Bike</option>
                    <option value="gravel_bike">Gravel Bike</option>
                  </select>
                )}
              />
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                Weight
              </label>
              <Controller
                name="weight"
                control={control}
                render={({ field }) => (
                  <input
                    {...field}
                    type="text"
                    className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    placeholder="Write your bike weight"
                  />
                )}
              />
            </div>
          </div>

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
                  placeholder="What about your bike..."
                  rows="4"
                />
              )}
            />
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              Availability
            </label>
            <Controller
              name="isAvailable"
              control={control}
              defaultValue="true"
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
          </div>
        </div>

        <button
          type="submit"
          className="px-4 py-2 text-white bg-indigo-600 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Update Bike
        </button>
      </form>
    </div>
  );
};

export default UpdateBike;
