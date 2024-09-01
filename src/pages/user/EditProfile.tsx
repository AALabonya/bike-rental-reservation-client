import { useState } from "react";
import {
  useGetMeQuery,
  useUpdateProfileMutation,
} from "@/redux/features/user/userApi";
import { useNavigate } from "react-router-dom";

const EditProfile = () => {
  const { data, isLoading, isError } = useGetMeQuery({
    pollingInterval: 1000,
  });
  const [updateUser, { isLoading: isUpdating }] = useUpdateProfileMutation();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: data?.name || "",
    address: data?.address || "",
    phone: data?.phone || "",
    email: data?.email || "",
    role: data?.role || "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await updateUser(formData);
    navigate("/userDash/profile"); // Navigate back to profile after update
  };

  if (isLoading || isError) {
    return <p>Loading...</p>;
  }

  return (
    <div className="p-4">
      <div className="bg-white shadow-lg rounded-lg p-6 dark:bg-black">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
          Edit Profile
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 dark:text-gray-300">
              Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-2 border rounded dark:bg-gray-700 dark:text-white"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 dark:text-gray-300">
              Address
            </label>
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              className="w-full p-2 border rounded dark:bg-gray-700 dark:text-white"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 dark:text-gray-300">
              Phone
            </label>
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full p-2 border rounded dark:bg-gray-700 dark:text-white"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 dark:text-gray-300">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 border rounded dark:bg-gray-700 dark:text-white"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 dark:text-gray-300">
              Role
            </label>
            <input
              type="text"
              name="role"
              value={formData.role}
              onChange={handleChange}
              className="w-full p-2 border rounded dark:bg-gray-700 dark:text-white"
            />
          </div>
          <button
            type="submit"
            className="bg-red-500 w-full text-white py-2 px-4 rounded hover:bg-blue-600"
            disabled={isUpdating}
          >
            {isUpdating ? "Updating..." : "Save Changes"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditProfile;
