import Mainlayout from "@/components/layout/Mainlayout";
import UserDashboard from "@/components/layout/userDashboard/UserDashboard";
import About from "@/pages/About";
import AllBikes from "@/pages/AllBikes";
import BikeDetails from "@/pages/BikeDetails";
import CreateBike from "@/pages/CreateBike";
import Home from "@/pages/Home";
import Login from "@/pages/Login/Login";
import SignUp from "@/pages/Login/SignUp";
import UpdateBike from "@/pages/UpdateBike";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Mainlayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "about-us",
        element: <About />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "signUp",
        element: <SignUp />,
      },
      {
        path: "/bike-details",
        element: <BikeDetails />,
      },
      {
        path: "/bikes",
        element: <AllBikes />,
      },
    ],
  },
  {
    path: "userDash",
    element: <UserDashboard />,
    children: [
      {
        path: "create-bike",
        element: <CreateBike />,
      },
      {
        path: "update-bike",
        element: <UpdateBike />,
      },
    ],
  },
]);
export default router;
