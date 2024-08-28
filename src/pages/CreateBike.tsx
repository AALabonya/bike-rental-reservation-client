import {
  useForm,
  Controller,
  SubmitHandler,
  FieldValues,
} from "react-hook-form";

const CreateBike = () => {
  const { control, handleSubmit } = useForm();

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    console.log(data);
  };

  return (
    <div className="w-full p-8">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="md:col-span-2">
            <div className="p-6 bg-white shadow rounded-lg">
              <h2 className="text-2xl font-semibold mb-2">Upload A Bike</h2>
              <p className="text-gray-600 mb-6">
                Add the details of a bike and upload the bike
              </p>
              <div className="grid gap-6">
                <div className="grid gap-2">
                  <label className="font-medium">Bike Title</label>
                  <Controller
                    name="name"
                    control={control}
                    render={({ field }) => (
                      <input
                        {...field}
                        type="text"
                        className="p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-500"
                        placeholder="Write your bike title"
                      />
                    )}
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="grid gap-2">
                    <label className="font-medium">Bike Brand</label>
                    <Controller
                      name="brand"
                      control={control}
                      render={({ field }) => (
                        <select
                          {...field}
                          className="p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-500"
                        >
                          <option value="" disabled>
                            Select Brand
                          </option>
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
                  <div className="grid gap-2">
                    <label className="font-medium">Bike Model</label>
                    <Controller
                      name="model"
                      control={control}
                      render={({ field }) => (
                        <input
                          {...field}
                          type="text"
                          className="p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-500"
                          placeholder="Write your bike model"
                        />
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
                      render={({ field }) => (
                        <input
                          {...field}
                          type="text"
                          className="p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-500"
                          placeholder="Write your bike release year"
                        />
                      )}
                    />
                  </div>
                  <div className="grid gap-2">
                    <label className="font-medium">Frame Size</label>
                    <Controller
                      name="frame"
                      control={control}
                      render={({ field }) => (
                        <input
                          {...field}
                          type="text"
                          className="p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-500"
                          placeholder="Write your bike frame size"
                        />
                      )}
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="grid gap-2">
                    <label className="font-medium">Max. Support</label>
                    <Controller
                      name="support"
                      control={control}
                      render={({ field }) => (
                        <input
                          {...field}
                          type="text"
                          className="p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-500"
                          placeholder="Write your bike's maximum support hr..."
                        />
                      )}
                    />
                  </div>
                  <div className="grid gap-2">
                    <label className="font-medium">Color</label>
                    <Controller
                      name="color"
                      control={control}
                      render={({ field }) => (
                        <select
                          {...field}
                          className="p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-500"
                        >
                          <option value="" disabled>
                            Select Color
                          </option>
                          <option value="black">Black</option>
                          <option value="red">Red</option>
                          <option value="gray">Gray</option>
                          <option value="blue">Blue</option>
                        </select>
                      )}
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="grid gap-2">
                    <label className="font-medium">Category</label>
                    <Controller
                      name="category"
                      control={control}
                      render={({ field }) => (
                        <select
                          {...field}
                          className="p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-500"
                        >
                          <option value="" disabled>
                            Select Category
                          </option>
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
                  <div className="grid gap-2">
                    <label className="font-medium">Weight</label>
                    <Controller
                      name="weight"
                      control={control}
                      render={({ field }) => (
                        <input
                          {...field}
                          type="text"
                          className="p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-500"
                          placeholder="Write your bike's weight"
                        />
                      )}
                    />
                  </div>
                </div>

                <div className="grid gap-2">
                  <label className="font-medium">Description</label>
                  <Controller
                    name="description"
                    control={control}
                    render={({ field }) => (
                      <textarea
                        {...field}
                        className="p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-500"
                        placeholder="What about your bike..."
                      ></textarea>
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
                        d="M12 12h.01M3.515 9.515a9 9 0 0112.728 0l1.394 1.394a9 9 0 010 12.728l-1.394 1.394a9 9 0 01-12.728 0l-1.394-1.394a9 9 0 010-12.728z"
                      />
                    </svg>
                  </span>
                </label>
                <Controller
                  name="isAvailable"
                  control={control}
                  defaultValue="true"
                  render={({ field }) => (
                    <select
                      {...field}
                      className="p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-500"
                    >
                      <option value="true">Available</option>
                      <option value="false">Unavailable</option>
                    </select>
                  )}
                />
              </div>
            </div>
            <div className="p-6 bg-white shadow rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Product Image</h3>
              <Controller
                name="image"
                control={control}
                render={({ field }) => (
                  <input
                    {...field}
                    type="file"
                    className="block w-full text-sm text-gray-600 border border-gray-300 rounded cursor-pointer focus:outline-none"
                  />
                )}
              />
            </div>
          </div>
        </div>
        <div className="mt-6">
          <button
            type="submit"
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-500 transition duration-300"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateBike;
