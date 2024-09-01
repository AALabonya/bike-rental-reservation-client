import { useState } from "react";
import { MoreHorizontal } from "lucide-react";
import {
  useDeleteUserMutation,
  useGetAllUsersQuery,
  useUpdateUserToAdminMutation,
} from "@/redux/features/user/userApi";
import toast from "react-hot-toast";

const UserManagement = () => {
  const {
    data: userData,
    isLoading,
    error,
    refetch,
  } = useGetAllUsersQuery(undefined);
  const users = userData?.data;
  const [updateUserToAdmin] = useUpdateUserToAdminMutation();
  const [deleteUser] = useDeleteUserMutation();
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 10;

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error loading users: {error.message}</p>;
  }

  if (!users) {
    return <p>No users found.</p>;
  }

  const handleDropdownToggle = (userId: string) => {
    setOpenDropdown(openDropdown === userId ? null : userId);
  };

  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);

  const totalPages = Math.ceil(users.length / usersPerPage);

  const handleClickPage = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleUpdateUser = async (id: string) => {
    const toastId = toast.loading("Updating user...");
    try {
      const res = await updateUserToAdmin(id).unwrap();
      refetch();
      toast.success(res.message, { id: toastId });
    } catch (error) {
      toast.error("User Update Process Failed...", { id: toastId });
    }
  };

  const handleDeleteUser = async (id: string) => {
    const toastId = toast.loading("Deleting user...");
    try {
      const res = await deleteUser(id).unwrap();
      refetch();
      toast.success(res.message, { id: toastId });
    } catch (error) {
      toast.error("User Delete Process Failed...", { id: toastId });
    }
  };

  return (
    <div className="p-4">
      <div className="shadow-md border border-gray-200 rounded-lg">
        <div className="p-4 border-b border-gray-200">
          <h1 className="text-2xl font-semibold text-gray-900">Manage User</h1>
        </div>
        <div className="p-4">
          <table className="min-w-full divide-y divide-gray-200">
            <thead>
              <tr>
                <th className="hidden sm:table-cell px-4 py-2 text-left text-sm font-medium text-gray-900">
                  Image
                </th>
                <th className="px-4 py-2 text-left text-sm font-medium text-gray-900">
                  Full Name
                </th>
                <th className="px-4 py-2 text-left text-sm font-medium text-gray-900">
                  Email
                </th>
                <th className="px-4 py-2 text-left text-sm font-medium text-gray-900">
                  Phone
                </th>
                <th className="px-4 py-2 text-left text-sm font-medium text-gray-900">
                  Address
                </th>
                <th className="hidden md:table-cell px-4 py-2 text-left text-sm font-medium text-gray-900">
                  Role
                </th>
                <th className="px-4 py-2 text-left text-sm font-medium text-gray-900">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {currentUsers.map((user) => (
                <tr key={user._id} className="bg-white hover:bg-gray-50">
                  <td className="hidden sm:table-cell px-4 py-2 text-sm text-gray-500">
                    <img
                      alt="User Avatar"
                      className="h-16 w-16 rounded-md object-cover"
                      src={user.image}
                    />
                  </td>
                  <td className="px-4 py-2 text-sm font-medium text-gray-900">
                    {user.firstName} {user.lastName}
                  </td>
                  <td className="px-4 py-2 text-sm text-gray-700">
                    {user.email}
                  </td>
                  <td className="px-4 py-2 text-sm text-gray-700">
                    {user.phone}
                  </td>
                  <td className="px-4 py-2 text-sm text-gray-700">
                    {user.address}
                  </td>
                  <td className="hidden md:table-cell px-4 py-2 text-sm text-gray-700">
                    <span
                      className={`inline-block px-2 py-1 rounded-full text-white ${
                        user.role === "admin" ? "bg-green-500" : "bg-gray-500"
                      }`}
                    >
                      {user.role}
                    </span>
                  </td>
                  <td className="px-4 py-2 text-sm text-gray-500">
                    <div className="relative">
                      <button
                        onClick={() => handleDropdownToggle(user._id)}
                        className="p-2 text-gray-600 hover:text-gray-900"
                      >
                        <MoreHorizontal className="h-4 w-4" />
                        <span className="sr-only">Actions</span>
                      </button>
                      {openDropdown === user._id && (
                        <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-10">
                          <div className="divide-y divide-gray-200">
                            <button
                              onClick={() => handleUpdateUser(user._id)}
                              className="w-full px-4 py-2 text-left text-sm text-blue-600 hover:bg-blue-50"
                            >
                              Make Admin
                            </button>
                            <button
                              onClick={() => handleDeleteUser(user._id)}
                              className="w-full px-4 py-2 text-left text-sm text-red-600 hover:bg-red-50"
                            >
                              Delete
                            </button>
                          </div>
                        </div>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="p-4 border-t border-gray-200">
          <div className="flex justify-between items-center">
            <button
              onClick={handlePreviousPage}
              disabled={currentPage === 1}
              className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300"
            >
              Previous
            </button>
            <span className="text-sm text-gray-600">
              Page {currentPage} of {totalPages}
            </span>
            <button
              onClick={handleNextPage}
              disabled={currentPage === totalPages}
              className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserManagement;
