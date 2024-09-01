import {
  BaseQueryApi,
  BaseQueryFn,
  createApi,
  FetchArgs,
  FetchBaseQueryError,
  fetchBaseQuery,
} from "@reduxjs/toolkit/query/react";
import { RootState } from "../store";
import { logOut } from "../features/auth/authSlice";
import toast from "react-hot-toast";
import config from "@/config";

const baseQuery = fetchBaseQuery({
  baseUrl: `${config.url}/api`,
  credentials: "include",
  prepareHeaders: (headers, { getState }) => {
    const token = (getState() as RootState).auth.token;
    console.log(token);

    if (token) {
      headers.set("authorization", `Bearer ${token}`);
    }
    return headers;
  },
});

const baseQueryWithNoRefreshToken: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError
> = async (args, api, extraOptions) => {
  let result = await baseQuery(args, api, extraOptions);

  // Check the response for error status
  if (result?.error?.status === 401) {
    // Log the error for debugging purposes
    console.error("Unauthorized access. Error details:", result.error);
    toast.error("Session expired. Please log in again.");
  } else if (result?.error?.status === 404) {
    toast.error("Resource not found.");
  } else if (result?.error) {
    // Handle other possible errors
    toast.error(
      result.error.data?.message || "An error occurred. Please try again."
    );
  }

  return result;
};

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: baseQueryWithNoRefreshToken,
  endpoints: () => ({}),
  tagTypes: ["auth", "users", "userData", "bikes", "rentals", "coupons"],
});
