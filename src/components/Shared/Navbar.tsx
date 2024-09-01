import { logOut } from "@/redux/features/auth/authSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { LayoutDashboard, User } from "lucide-react";
import { useState, useEffect } from "react";
import toast from "react-hot-toast";
import { LuMenu, LuX } from "react-icons/lu";
import { TbLogout } from "react-icons/tb";

import { Link, NavLink, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // State to manage dropdown visibility
  const token = useAppSelector((state) => state.auth.token);

  const [isDarkMode, setIsDarkMode] = useState(
    () => localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    const rootElement = document.documentElement;

    if (isDarkMode) {
      rootElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      rootElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDarkMode]);

  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const handleLogout = async () => {
    dispatch(logOut());
    setIsDropdownOpen(false);
    toast.success("Logout Successfully");
    navigate("/");
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen); // Toggle dropdown visibility
  };

  return (
    <div className="flex justify-center">
      <header className="flex w-full fixed bg-white items-center justify-between border-b py-4 px-4 sm:px-[74px] min-h-[80px] tracking-wide  z-50 dark:bg-gray-900 text-black dark:text-white">
        <Link to={"/"}>
          <img
            src="https://i.ibb.co/pQcqj2B/henderson.png"
            alt="BikeRental"
            className="h-14 w-20"
          />
        </Link>

        <div
          className={`fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-40 lg:hidden transition-all duration-300 ${
            isOpen ? "block" : "hidden"
          }`}
          onClick={() => setIsOpen(false)}
        ></div>

        <div
          className={`fixed top-0 left-0 w-2/3 sm:w-1/2 bg-white dark:bg-gray-800 h-full z-50 p-6 transition-transform duration-300 ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          } lg:static lg:flex lg:items-center lg:w-auto lg:p-0 lg:translate-x-0 `}
        >
          <button
            onClick={() => setIsOpen(false)}
            className="lg:hidden absolute top-4 right-4 p-2 rounded-full bg-white dark:bg-gray-800 z-[100]"
          >
            <LuX size={25} />
          </button>

          <ul className="space-y-6 lg:space-y-0 lg:space-x-4 lg:flex lg:gap-x-2">
            <li className="group max-lg:border-b max-lg:py-3 px-3 relative">
              <Link to="/" className={"navlink  font-semibold text-lg"}>
                Home
              </Link>
            </li>
            <li className="group max-lg:border-b max-lg:py-3 px-3 relative">
              <Link to="/bikes" className={"navlink  font-semibold text-lg"}>
                All Bikes
              </Link>
            </li>
            <li className="group max-lg:border-b max-lg:py-3 px-3 relative">
              <Link to="/compare" className={"navlink  font-semibold text-lg"}>
                Comparison
              </Link>
            </li>
            <li className="group max-lg:border-b max-lg:py-3 px-3 relative">
              <Link to="/about-us" className={"navlink  font-semibold text-lg"}>
                About Us
              </Link>
            </li>
            <li className="group max-lg:border-b max-lg:py-3 px-3 relative">
              <Link
                to="/contact-us"
                className={"navlink  font-semibold text-lg"}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div className="flex items-center gap-x-4 lg:hidden">
          <button onClick={() => setIsOpen(true)} className="lg:hidden">
            <LuMenu size={25} />
          </button>
        </div>

        <div className="hidden lg:flex items-center gap-x-4">
          <label
            htmlFor="darkModeToggle"
            className="relative inline-block h-8 w-14 cursor-pointer rounded-full border border-gray-500 transition"
          >
            <input
              type="checkbox"
              id="darkModeToggle"
              className="peer sr-only"
              checked={isDarkMode}
              onChange={() => setIsDarkMode(!isDarkMode)}
            />
            <span className="absolute inset-y-0 start-0 z-10 m-1 inline-flex size-6 items-center justify-center rounded-full bg-white dark:bg-gray-800 text-black dark:text-white transition-all peer-checked:start-6">
              <svg
                data-unchecked-icon
                className="stroke-current text-gray-800 dark:text-gray-200 fill-none"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="5" />
                <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
              </svg>

              <svg
                data-checked-icon
                className="hidden stroke-current text-black dark:text-gray-200 fill-none"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
              </svg>
            </span>
          </label>
          {token ? (
            <div className="relative h-[65px]">
              <div
                tabIndex={0}
                role="button"
                className="relative font-medium text-base text-black mx-3 flex items-center h-full"
                onClick={toggleDropdown}
              >
                <img
                  className="rounded-full max-w-[48px] max-h-[48px] border-2 border-red-500"
                  src="https://i.ibb.co/pQcqj2B/henderson.png"
                  alt="User profile"
                />
              </div>

              {isDropdownOpen && (
                <div className="absolute right-0 top-16 z-50 w-fit rounded-sm bg-white shadow-md py-4 pl-5 pr-6 space-y-4">
                  <ul>
                    <li className="hover:bg-[#002172] transition-all ease-out duration-300 hover:text-white flex items-center">
                      <LayoutDashboard className="mr-2 h-4 w-4" />
                      <NavLink to={"/dashboard"}>Dashboard</NavLink>
                    </li>
                    <li className="hover:bg-[#002172] transition-all ease-out duration-300 hover:text-white flex items-center">
                      <User className="mr-2 h-4 w-4" />
                      <NavLink to={"/dashboard/my-profile"}>Profile</NavLink>
                    </li>
                    <li className="hover:bg-[#002172] transition-all ease-out duration-300 hover:text-white flex items-center pb-5">
                      <Link
                        to="/"
                        onClick={handleLogout}
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
          ) : (
            <Link to="/login">
              <button className="flex items-center bg-red-500 text-white font-bold rounded-md px-5 py-2">
                Login
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="ml-1 h-6 w-6"
                >
                  <path
                    fillRule="evenodd"
                    d="M15.59 4.59a1 1 0 00-1.42 1.42L16.17 8H9a7 7 0 100 14h8a1 1 0 100-2h-8a5 5 0 010-10h7.17l-2.59 2.59a1 1 0 101.42 1.42l4-4a1 1 0 000-1.42l-4-4z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </Link>
          )}
        </div>
      </header>
    </div>
  );
};

export default Navbar;
