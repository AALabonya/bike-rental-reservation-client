import { TResponseRedux } from "@/types";
import { baseApi } from "../../api/baseApi";
import { TUserData } from "@/Interface/TUser";

const userApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getMe: builder.query({
      query: () => {
        return {
          url: `/users/me`,
        };
      },
      transformResponse: (response: TResponseRedux<TUserData>) => {
        return response.data;
      },
      providesTags: ["userData"],
    }),
  }),
});

export const { useGetMeQuery } = userApi;
