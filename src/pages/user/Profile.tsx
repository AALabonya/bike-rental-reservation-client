import PageTitleForHome from "@/components/Shared/PageTitleForHome";
import { useGetMeQuery } from "@/redux/features/user/userApi";
import {
  Camera,
  Facebook,
  Instagram,
  Mail,
  MapPin,
  PhoneCall,
  SquarePen,
  Twitter,
  User,
  Youtube,
} from "lucide-react";
import { NavLink } from "react-router-dom";

const Profile = () => {
  // Fetch user data with the useGetMeQuery hook
  const { data, isLoading, isError } = useGetMeQuery(undefined, {
    pollingInterval: 1000,
  });
  console.log(data);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  // Adjusted to check for data.data
  if (isError || !data) {
    return <p>Error loading user data</p>;
  }

  // Extract the user object from data.data
  const user = data;
  console.log("user", user);

  return (
    <div className="p-4">
      <div className="">
        <PageTitleForHome title="My Profile" />
      </div>
      <div className="bg-white shadow-lg rounded-lg overflow-hidden dark:bg-black">
        <div className="relative">
          <img
            src="https://i.ibb.co/GVnJgFf/breadcrumb.jpg"
            alt="profile cover"
            className="w-full h-48 object-cover"
          />
          <div className="absolute bottom-4 right-4">
            <label
              htmlFor="cover"
              className="flex items-center gap-2 bg-blue-500 text-white py-1 px-2 rounded cursor-pointer hover:bg-blue-600"
            >
              <input type="file" name="cover" id="cover" className="sr-only" />
              <Camera size={20} />
              <span>Edit</span>
            </label>
          </div>
        </div>
        <div className="relative -mt-20 px-4 pb-6 text-center">
          <div className="relative mx-auto -mt-16 w-32 h-32 bg-white dark:bg-black p-1 rounded-full shadow-lg dark:bg-dark">
            <img
              src="https://i.ibb.co/nCsNfNW/doctor1.webp"
              alt="profile"
              className="w-full h-full rounded-full"
            />
            <label
              htmlFor="profile"
              className="absolute bottom-0 right-0 w-8 h-8 flex items-center justify-center rounded-full bg-blue-500 text-white cursor-pointer shadow-lg hover:bg-blue-600"
            >
              <Camera size={20} />
              <input
                type="file"
                name="profile"
                id="profile"
                className="sr-only"
              />
            </label>
          </div>
          <div className="mt-4">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
              {user.name}
            </h3>
            <p className="mt-1">
              <span className="bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-white text-sm capitalize px-2 py-1 rounded">
                {user.role}
              </span>
            </p>

            <div className="mt-10">
              <div className="bg-white shadow-md rounded-lg ">
                <div className="flex items-center justify-between p-4">
                  <NavLink
                    to="/userDash/edit-profile"
                    className="bg-blue-500 text-white rounded-md px-2 py-1 flex items-center gap-1 hover:bg-blue-600"
                  >
                    <SquarePen size={20} />
                    <span>Edit Profile</span>
                  </NavLink>
                </div>
                <div className="p-4 flex gap-6">
                  <div className="flex-1">
                    <p className="flex items-center gap-2 text-black dark:text-gray-300">
                      <User size={20} />
                      <span>{user.name}</span>
                    </p>
                    <p className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                      <MapPin size={20} />
                      <span>{user.address}</span>
                    </p>
                  </div>
                  <div className="flex-1">
                    <p className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                      <PhoneCall size={20} />
                      <span>{user.phone}</span>
                    </p>
                    <p className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                      <Mail size={20} />
                      <span>{user.email}</span>
                    </p>
                  </div>
                </div>
                <div className="p-4 text-center">
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                      Follow me on
                    </h4>
                    <div className="mt-2 flex justify-center gap-4 text-gray-600 dark:text-gray-300">
                      <Facebook className="text-blue-600 hover:text-blue-800 cursor-pointer" />
                      <Instagram className="text-pink-600 hover:text-pink-800 cursor-pointer" />
                      <Twitter className="text-blue-400 hover:text-blue-600 cursor-pointer" />
                      <Youtube className="text-red-600 hover:text-red-800 cursor-pointer" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
