import { Link, NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";
import { FaMotorcycle } from "react-icons/fa";
import { VscGitPullRequestCreate } from "react-icons/vsc";
import { SiNginxproxymanager } from "react-icons/si";
import {
  FaDribbbleSquare,
  FaFacebookSquare,
  FaGithub,
  FaGoogle,
  FaLinkedin,
} from "react-icons/fa";
import {
  CircleUser,
  Handshake,
  LayoutDashboard,
  ListChecks,
  LogOut,
  Users,
} from "lucide-react";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { logOut, selectCurrentToken } from "@/redux/features/auth/authSlice";
import verifyToken from "@/utils/verify_token";
import { JwtPayload } from "jwt-decode";
import toast from "react-hot-toast";

const SideBar = () => {
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);
  const [isDropDownOpen2, setIsDropDownOpen2] = useState(false);
  const token = useAppSelector(selectCurrentToken);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const { role } = verifyToken(token as string) as JwtPayload;

  const handleLogout = () => {
    dispatch(logOut());
    toast.success("User logged out successfully!");
    navigate("/");
  };

  const sideLinks = (
    <>
      <div className="px-4 py-3">
        <span className="grid place-content-center rounded-lg text-xs text-gray-600">
          <div className="mt-1">
            <img
              src="https://i.ibb.co/nCsNfNW/doctor1.webp"
              className="h-32 w-32 rounded-full"
              alt=""
            />
            <h1 className="text-center text-lg font-medium mt-2 text-gray-800">
              Paul K. Jensen
            </h1>
            <p className="text-center mt-1">855-4-57854</p>
          </div>
        </span>
        <p className="border mt-8 mb-2"></p>

        <nav className="grid md:grid-cols-1 grid-cols-1 items-start px-2 text-base font-medium lg:px-4">
          {/* Routes for users */}
          <NavLink
            to="/userDash"
            className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-green hover:bg-accent-foreground hover:text-white"
          >
            <LayoutDashboard size={22} />
            Dashboard
          </NavLink>
          <NavLink
            to="/userDash/profile"
            className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-green hover:bg-accent-foreground hover:text-white"
          >
            <CircleUser size={22} />
            Profile
          </NavLink>

          {/* Routes for admins */}
          {role === "admin" && (
            <>
              <NavLink
                to="/userDash/bike-management"
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-green hover:bg-accent-foreground hover:text-white"
              >
                <SiNginxproxymanager size={22} />
                Bike Management
              </NavLink>
              <NavLink
                to="/userDash/user-management"
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-green hover:bg-accent-foreground hover:text-white"
              >
                <Users size={22} />
                User Management
              </NavLink>
              <NavLink
                to="/userDash/create-bike"
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-green hover:bg-accent-foreground hover:text-white"
              >
                <VscGitPullRequestCreate size={22} />
                Create Bikes
              </NavLink>
              <NavLink
                to="/userDash/return-bike"
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-green hover:bg-accent-foreground hover:text-white"
              >
                <Handshake size={22} />
                Return Bikes
              </NavLink>
            </>
          )}

          <p className="border mt-8 mb-2"></p>

          {/* Routes for both admin and user */}
          <NavLink
            to="/bikes"
            className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-green hover:bg-accent-foreground hover:text-white"
          >
            <FaMotorcycle size={25} />
            All Bikes
          </NavLink>
          <NavLink
            to="/userDash/rental"
            className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-green hover:bg-accent-foreground hover:text-white"
          >
            <ListChecks size={22} />
            My Rentals
          </NavLink>

          <NavLink
            to="/"
            className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-green hover:bg-accent-foreground hover:text-white"
            onClick={handleLogout}
          >
            <LogOut size={22} />
            Log Out
          </NavLink>
        </nav>
      </div>

      <div className="w-full p-4">
        <div className="flex justify-center items-center md:text-xl text-[#b7b5b5] space-x-3">
          <a target="_blank" href="https://github.com/Shimul-Zahan">
            <FaGithub />
          </a>
          <a
            target="_blank"
            href="https://www.linkedin.com/in/shimul-zahan-b5035427b/"
          >
            <FaLinkedin />
          </a>
          <a target="_blank" href="https://www.facebook.com/shimul.zahan.9">
            <FaFacebookSquare />
          </a>
          <FaDribbbleSquare />
          <FaGoogle />
        </div>
      </div>
    </>
  );

  return (
    <div className="w-full shadow-lg xl:min-w-[300px] min-h-screen flex flex-col overflow-auto h-[100vh] bg-white">
      <div className="flex items-center ml-5">
        <Link to="/">
          <div className="flex items-center">
            <Link to={"/"}>
              <img
                src="https://i.ibb.co/pQcqj2B/henderson.png"
                alt="BikeRental"
                className="h-16 w-[30vh]"
              />
            </Link>
          </div>
        </Link>
      </div>

      {/* Sidebar Contents (Routes of dashboard) starts here */}
      <div className="p-4 flex-grow overflow-y-auto">
        <ul className="flex flex-col text-white gap-2 w-full">{sideLinks}</ul>
      </div>
    </div>
  );
};

export default SideBar;
