import { PlusCircle, Share2 } from "lucide-react";
import { useForm, Controller } from "react-hook-form";

const BikeDetails = () => {
  const { control, handleSubmit } = useForm({});

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <div>
      <div className="bg-cover bg-center h-64 flex justify-center items-center bg-gray-800">
        <h1 className="text-5xl font-bold text-white">Details of Bike</h1>
      </div>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 my-28">
          <div className="md:col-span-2 space-y-10">
            <h2 className="text-4xl font-bold">Cube Stereo Hybrid 120</h2>
            <div className="space-x-4">
              <button className="flex items-center px-4 py-2 border border-gray-800 text-gray-800 hover:bg-gray-800 hover:text-white transition">
                <PlusCircle className="mr-2" /> Login with Email
              </button>
              <button className="flex items-center px-4 py-2 border border-gray-800 text-gray-800 hover:bg-gray-800 hover:text-white transition">
                <Share2 className="mr-2" /> Share This Bike
              </button>
            </div>
            <div>
              <img
                src="https://probike.templaza.net/wp-content/uploads/2023/08/15.jpg"
                alt="Cube Stereo Hybrid 120"
                className="w-full"
              />
            </div>
            <div className="space-y-5">
              <h2 className="text-4xl font-bold">Description</h2>
              <p>
                The Arcadex serves as the connection between the human spirit
                and the natural world beyond, enhancing every sense, from the
                crispness of colours to the feeling of friendship among
                companions...
              </p>
            </div>
            <div className="space-y-5">
              <h2 className="text-4xl font-bold">Leave a Comment</h2>
              <p>
                Your email address will not be published. Required fields are
                marked *
              </p>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                <div>
                  <label className="block text-sm font-medium">
                    First Name
                  </label>
                  <Controller
                    name="firstName"
                    control={control}
                    rules={{ required: true }}
                    render={({ field }) => (
                      <textarea
                        {...field}
                        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                        placeholder="What's on your mind..."
                      />
                    )}
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium">
                      Your Name
                    </label>
                    <Controller
                      name="name"
                      control={control}
                      rules={{ required: true }}
                      render={({ field }) => (
                        <input
                          {...field}
                          type="text"
                          className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                          placeholder="Enter your full name"
                        />
                      )}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium">
                      Email Address
                    </label>
                    <Controller
                      name="email"
                      control={control}
                      rules={{ required: true }}
                      render={({ field }) => (
                        <input
                          {...field}
                          type="email"
                          className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                          placeholder="Enter your email"
                        />
                      )}
                    />
                  </div>
                </div>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="terms"
                    className="h-4 w-4 text-indigo-600 border-gray-300 rounded"
                  />
                  <label htmlFor="terms" className="ml-2 text-sm text-gray-600">
                    Save my name, email, and website in this browser for the
                    next time I comment.
                  </label>
                </div>
                <button
                  type="submit"
                  className="bg-indigo-600 text-white px-6 py-2 rounded-md hover:bg-indigo-700 transition"
                >
                  Comment
                </button>
              </form>
            </div>
          </div>
          <div>
            <div className="space-y-5">
              <div className="border p-6 rounded-md shadow-md">
                <div className="text-3xl font-bold">$100</div>
                <button className="mt-4 bg-indigo-600 text-white px-6 py-2 rounded-md hover:bg-indigo-700 transition w-full">
                  Book Now
                </button>
              </div>
              <div className="border p-6 rounded-md shadow-md">
                <h3 className="text-2xl font-bold mb-4">Specifications</h3>
                <ul className="space-y-3">
                  <li className="flex justify-between">
                    <span>Category</span>
                    <span>E-Bike</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Brand</span>
                    <span>Cube</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Battery</span>
                    <span>Bosch Power tube 750Wh</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Charger</span>
                    <span>Bosch 4A</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BikeDetails;
