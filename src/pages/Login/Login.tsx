import { TUser } from "@/Interface/TUser";
import { useLoginUserMutation } from "@/redux/features/auth/authApi";
import { setUser } from "@/redux/features/auth/authSlice";
import { useAppDispatch } from "@/redux/hooks";
import verifyToken from "@/utils/verify_token";
import { Eye, EyeOff } from "lucide-react";
import { FC, useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";

interface FormValues {
  email: string;
  password: string;
  rememberMe: boolean;
}

const Login: FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();
  const [loginUser, { isSuccess }] = useLoginUserMutation();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    if (isSuccess) {
      toast.success("User Logged In Successfully");
      // navigate("/userDash");
      navigate("/");
    }
  }, [isSuccess, navigate]);

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    try {
      const res = await loginUser(data).unwrap();
      const user = verifyToken(res?.token) as TUser;

      if (data.rememberMe) {
        localStorage.setItem(
          "user",
          JSON.stringify({ user, token: res?.token })
        );
      } else {
        sessionStorage.setItem(
          "user",
          JSON.stringify({ user, token: res?.token })
        );
      }

      dispatch(setUser({ user: user, token: res?.token }));
    } catch (error) {
      console.error("Login Error: ", error);
      toast.error(error?.data?.message || "Something went wrong");
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="flex min-h-screen ">
      <div className="container mx-auto flex items-center justify-center px-4 py-12">
        <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">
            Welcome back to
          </h2>
          <p className="text-3xl font-bold text-center text-gray-800 mb-5">
            CoxRide
          </p>
          <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email address
              </label>
              <input
                id="email"
                type="email"
                autoComplete="email"
                placeholder="Email address"
                className="mt-2 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                    message: "Invalid email address",
                  },
                })}
              />
              {errors.email && (
                <p className="mt-1 text-sm text-red-600">
                  {errors.email.message}
                </p>
              )}
            </div>
            <div className="relative">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                autoComplete="current-password"
                placeholder="Password"
                className="mt-2 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                {...register("password", { required: "Password is required" })}
              />
              <div
                className="absolute inset-y-0 right-0 pr-3 flex pt-7 items-center cursor-pointer"
                onClick={togglePasswordVisibility}
              >
                {showPassword ? (
                  <EyeOff className="h-5 w-5 text-gray-400" />
                ) : (
                  <Eye className="h-5 w-5 text-gray-400" />
                )}
              </div>
              {errors.password && (
                <p className="mt-1 text-sm text-red-600">
                  {errors.password.message}
                </p>
              )}
            </div>
            <div className="flex items-center justify-between">
              <div className="text-sm">
                <Link
                  to="#"
                  className="font-medium text-blue-600 hover:text-blue-500"
                >
                  Forgot your password?
                </Link>
              </div>
            </div>
            <div>
              <button
                type="submit"
                className="w-full py-2 px-4 bg-red-500 text-white font-medium rounded-md hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                Sign in
              </button>
            </div>
          </form>
          <div className="text-center mt-6">
            <p className="text-sm text-gray-600">
              Don&apos;t have an account?{" "}
              <Link
                to="/signUp"
                className="font-medium text-blue-600 hover:text-blue-500"
              >
                Sign Up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
