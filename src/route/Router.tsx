import Mainlayout from "@/components/layout/Mainlayout";
import UserDashboard from "@/components/layout/userDashboard/UserDashboard";
import About from "@/pages/About";
import AllBikes from "@/pages/AllBikes";
import BikeDetails from "@/pages/BikeDetails";

import Home from "@/pages/Home";
import Login from "@/pages/Login/Login";
import SignUp from "@/pages/Login/SignUp";

import { createBrowserRouter } from "react-router-dom";
import Profile from "@/pages/user/Profile";
import EditProfile from "@/pages/user/EditProfile";
import BikeManagement from "@/pages/admin/BikeManagement";
import UserManagement from "@/pages/admin/UserManagement";
import ReturnBike from "@/pages/admin/ReturnBike";
import CreateBike from "@/pages/CreateBike";
import UpdateBike from "@/pages/admin/UpdateBike";
import MyRentals from "@/pages/MyRental";
import ProtectedRoute from "@/components/layout/ProtectedRoute";
import Welcome from "@/components/Shared/Welcome";
import ContactUs from "@/pages/ContactUs";
import Comparision from "@/pages/Comparision";
import CouponManagement from "@/pages/admin/CouponManagement";
import NotFound from "@/pages/Not_Found/NotFound";
import ErrorHandler from "@/pages/ErrorHandler";
import Confirmation from "@/pages/Confirmation";
import PaymentPage from "@/pages/Payment";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Mainlayout />,
    errorElement: <ErrorHandler />,
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
        path: "contact-us",
        element: <ContactUs />,
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
        path: "/bike-details/:id",
        element: <BikeDetails />,
      },
      {
        path: "/bikes",
        element: <AllBikes />,
      },

      {
        path: "/compare",
        element: <Comparision />,
      },

      {
        path: "/payment",
        element: <PaymentPage />,
      },
    ],
  },
  {
    path: "userDash",
    element: (
      <ProtectedRoute>
        <UserDashboard />
      </ProtectedRoute>
    ),
    errorElement: <ErrorHandler />,
    children: [
      {
        index: true,
        element: <Welcome />,
      },
      {
        path: "create-bike",
        element: <CreateBike />,
      },
      {
        path: "update-bike/:id",
        element: <UpdateBike />,
      },
      {
        path: "profile",
        element: <Profile />,
      },
      {
        path: "edit-profile",
        element: <EditProfile />,
      },
      {
        path: "bike-management",
        element: <BikeManagement />,
      },
      {
        path: "user-management",
        element: <UserManagement />,
      },
      {
        path: "return-bike",
        element: <ReturnBike />,
      },
      {
        path: "coupon-management",
        element: <CouponManagement />,
      },
      {
        path: "rental",
        element: <MyRentals />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);
export default router;
