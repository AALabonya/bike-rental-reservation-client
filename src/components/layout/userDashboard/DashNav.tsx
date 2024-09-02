import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { TbLogout } from "react-icons/tb";
import { LayoutDashboard, User } from "lucide-react";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import toast from "react-hot-toast";
import { logOut } from "@/redux/features/auth/authSlice";
interface DashNavProps {
  toggleSidebar: () => void;
}
export interface IUser {
  name?: string;
  role?: string;
  avatar?: string;
}

export interface IAuthState {
  token: string | null;
  user: IUser | null;
}
const DashNav = ({ toggleSidebar }: DashNavProps) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const token = useAppSelector(
    (state: { auth: IAuthState }) => state.auth.token
  );
  const user = useAppSelector((state: { auth: IAuthState }) => state.auth.user);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const defaultImg =
    "https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?w=740&t=st=1696786604~exp=1696787204~hmac=c10645727b8724eecda4984ef1d8fbfba92a9c9072a57b851c28c9b1d8d62b81";

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  const handleLogout = async () => {
    dispatch(logOut());
    setIsDropdownOpen(false);
    toast.success("Logout Successfully");
    navigate("/");
  };

  return (
    <div className="min-w-full bg-white shadow-md flex items-center justify-end lg:gap-6 lg:justify-between pl-5 pr-3">
      <div className="hidden lg:flex">
        <button onClick={toggleSidebar}>
          <FaBars />
        </button>
      </div>
      <div className="">
        <div className="flex items-center">
          {token ? (
            <>
              <div className="flex flex-col items-end lg:mr-4 h-full">
                <h3 className="capitalize poppins-font text-[16px] font-semibold">
                  {user?.name || "User"}
                </h3>
                <p className="capitalize poppins-font text-[12px] text-[#464a53]">
                  {user?.role || "Admin"}
                </p>
              </div>
              {/* DashNav Profile dropdown */}
              <div className="relative h-[65px]">
                <div
                  tabIndex={0}
                  role="button"
                  className="relative font-medium text-base text-black mx-3 flex items-center h-full"
                  onClick={toggleDropdown}
                >
                  <img
                    className="rounded-lg max-w-[48px] max-h-[48px]"
                    src={user?.avatar || defaultImg}
                    alt="User profile"
                  />
                </div>
                {isDropdownOpen && (
                  <div className="pt-12 py-7">
                    <ul className="absolute right-0 top-16 z-50 w-fit rounded-sm bg-white shadow-md pt-4 pl-5 pr-6 space-y-4">
                      <li className="hover:bg-[#002172] transition-all ease-out duration-300 hover:text-white flex items-center">
                        <LayoutDashboard className="mr-2 h-4 w-4" />
                        <NavLink to={"/userDash"}>Dashboard</NavLink>
                      </li>
                      <li className="hover:bg-[#002172] transition-all ease-out duration-300 hover:text-white flex items-center">
                        <User className="mr-2 h-4 w-4" />
                        <NavLink to={"/userDash/profile"}>Profile</NavLink>
                      </li>
                      <li className="hover:bg-[#002172] transition-all ease-out duration-300 hover:text-white flex items-center pb-5">
                        <Link
                          onClick={handleLogout}
                          to="/"
                          className="text-[15px] flex items-center"
                        >
                          <TbLogout className="mr-2 text-[#e33226]" />
                          Logout
                        </Link>
                      </li>
                    </ul>
                  </div>
                )}
              </div>
            </>
          ) : (
            <div className="flex items-center">
              <p className="capitalize poppins-font text-[16px] font-semibold">
                Guest
              </p>
            </div>
          )}
        </div>
      </div>
      <div className="flex lg:hidden">
        <button onClick={toggleSidebar}>
          <FaBars />
        </button>
      </div>
    </div>
  );
};

export default DashNav;
