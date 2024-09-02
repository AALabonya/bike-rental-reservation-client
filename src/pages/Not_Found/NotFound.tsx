import { NavLink } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex justify-center">
      <div className="mt-36">
        <div>
          {" "}
          <h2 className="text-3xl">Page Not Found</h2>
        </div>

        <div className="mt-14 text-center bg-red-500 text-white py-2 font-semibold rounded">
          <NavLink className=" mt" to="/">
            Back To Home
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
