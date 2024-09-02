import {
  BaseQueryFn,
  createApi,
  FetchArgs,
  FetchBaseQueryError,
  fetchBaseQuery,
} from "@reduxjs/toolkit/query/react";
import { RootState } from "../store";

import toast from "react-hot-toast";
// import config from "@/config";

const baseQuery = fetchBaseQuery({
  baseUrl: `https://bike-rental-reservation-system-backend-eight.vercel.app/api`,
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
  if (result?.error) {
    if (result.error.status === 401) {
      // Log the error for debugging purposes
      console.error("Unauthorized access. Error details:", result.error);
      toast.error("Session expired. Please log in again.");
    } else if (result.error.status === 404) {
      toast.error("Resource not found.");
    } else {
      // Handle other possible errors
      // Ensure `result.error.data` is checked for its existence
      const message = (result.error.data as { message?: string })?.message;
      toast.error(message || "An error occurred. Please try again.");
    }
  }

  return result;
};

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: baseQueryWithNoRefreshToken,
  endpoints: () => ({}),
  tagTypes: ["auth", "users", "userData", "bikes", "rentals", "coupons"],
});
