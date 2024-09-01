// import React, { useState } from "react";
// import "./UserSideBar.css";
// import { MdHome } from "react-icons/md";
// import classNames from "classnames";
// import {
//   FaDribbbleSquare,
//   FaFacebookSquare,
//   FaGithub,
//   FaGoogle,
//   FaLinkedin,
// } from "react-icons/fa";
// import {
//   Bike,
//   Cog,
//   Handshake,
//   LayoutDashboard,
//   ListCheck,
//   LogOut,
//   PencilRuler,
//   User,
//   Users,
// } from "lucide-react";
// import { NavLink, Outlet } from "react-router-dom";
// import { CiBoxList, CiUser } from "react-icons/ci";

// export default function UserDashboard() {
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false);

//   const toggleSidebar = () => {
//     setIsSidebarOpen(!isSidebarOpen);
//   };

//   return (
//     <>
//       <div className="flex flex-col lg:flex-row justify-start min-h-screen lg:ml-10 ml-2">
//         {/* Sidebar Toggle Button for Medium Devices */}
//         <button className="lg:hidden text-gray-600 p-4" onClick={toggleSidebar}>
//           ☰
//         </button>

//         <div
//           className={classNames(
//             "flex flex-col justify-between lg:fixed bg-white border min-h-screen lg:w-[310px] transition-transform duration-300",
//             {
//               "translate-x-0": isSidebarOpen || window.innerWidth >= 1024, // Open sidebar on medium devices or larger
//               "-translate-x-full": !isSidebarOpen && window.innerWidth < 1024, // Close sidebar on medium devices
//             }
//           )}
// >
//   <div className="px-4 py-3">
//     <span className="grid place-content-center rounded-lg text-xs text-gray-600">
//       <div className="mt-1">
//         <img
//           src="https://i.ibb.co/nCsNfNW/doctor1.webp"
//           className="h-36 w-36 rounded-full"
//           alt=""
//         />
//         <h1 className="text-center text-lg font-medium mt-2 text-gray-800">
//           Paul K. Jensen
//         </h1>
//         <p className="text-center mt-1">855-4-57854</p>
//       </div>
//     </span>
//     <p className="border mt-8 mb-2"></p>

//     <nav className="grid md:grid-cols-1 grid-cols-2 items-start px-2 text-base font-medium lg:px-4">
//       {/* Routes for users and admins */}
//       <NavLink
//         to="/dashboard"
//         className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-green hover:bg-accent-foreground hover:text-white"
//       >
//         <LayoutDashboard size={22} />
//         Dashboard
//       </NavLink>
//       <NavLink
//         to="/dashboard/my-profile"
//         className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-green hover:bg-accent-foreground hover:text-white"
//       >
//         <CiUser size={22} />
//         Profile
//       </NavLink>

//       {/* Routes for admins */}
//       <NavLink
//         to="/dashboard/bike-management"
//         className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-green hover:bg-accent-foreground hover:text-white"
//       >
//         <Cog size={22} />
//         Bike Management
//       </NavLink>
//       <NavLink
//         to="/dashboard/user-management"
//         className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-green hover:bg-accent-foreground hover:text-white"
//       >
//         <Users size={22} />
//         User Management
//       </NavLink>
//       <NavLink
//         to="/dashboard/create-bike"
//         className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-green hover:bg-accent-foreground hover:text-white"
//       >
//         <PencilRuler size={22} />
//         Create Bikes
//       </NavLink>
//       <NavLink
//         to="/dashboard/return-bike"
//         className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-green hover:bg-accent-foreground hover:text-white"
//       >
//         <Handshake size={22} />
//         Return Bikes
//       </NavLink>

//       {/* Routes for users */}
//       <NavLink
//         to="/bikes"
//         className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-green hover:bg-accent-foreground hover:text-white"
//       >
//         <Bike size={22} />
//         All Bikes
//       </NavLink>
//       <NavLink
//         to="/bikes"
//         className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-green hover:bg-accent-foreground hover:text-white"
//       >
//         <ListCheck size={22} />
//         My Rentals
//       </NavLink>

//       {/* Route for both admin and user */}
//       <NavLink
//         to="/"
//         className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-green hover:bg-accent-foreground hover:text-white"
//       >
//         <LogOut size={22} />
//         Log Out
//       </NavLink>
//     </nav>
//   </div>

//   <div className="w-full p-4">
//     <div className="flex justify-center items-center md:text-xl text-[#b7b5b5] space-x-3">
//       <a target="_blank" href="https://github.com/Shimul-Zahan">
//         <FaGithub />
//       </a>
//       <a
//         target="_blank"
//         href="https://www.linkedin.com/in/shimul-zahan-b5035427b/"
//       >
//         <FaLinkedin />
//       </a>
//       <a target="_blank" href="https://www.facebook.com/shimul.zahan.9">
//         <FaFacebookSquare />
//       </a>
//       <FaDribbbleSquare />
//       <FaGoogle />
//     </div>
//   </div>
// </div>

//         <div className="w-full lg:ml-[320px] border rounded mr-10">
//           <Outlet />
//         </div>
//       </div>
//     </>
//   );
// }

import { useState } from "react";
import { Outlet } from "react-router-dom";
import SideBar from "./SideBar";
import DashNav from "./DashNav";

export default function UserDashboard() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
    // console.log(isSidebarOpen);
  };
  return (
    <>
      <div className="flex">
        {/* Sidebar of dashboard starts here */}
        <div
          className={`side_bar min-h-screen fixed w-64 xl:min-w-[300px] z-[99999] text-white transition-all duration-300 ${
            isSidebarOpen ? "-ml-64 lg:ml-0" : "lg:-ml-64 xl:-ml-[300px]"
          }`}
        >
          <SideBar></SideBar>
        </div>
        {/* Main content of Dashboard starts here */}
        <div
          className={`main_content w-svw transition-all duration-300 ${
            isSidebarOpen ? "lg:ml-64 xl:ml-[300px]" : ""
          }`}
        >
          <DashNav toggleSidebar={toggleSidebar}></DashNav>
          <div className="flex-1 px-6 mt-6">
            <Outlet></Outlet>
          </div>
        </div>
      </div>
    </>
  );
}
