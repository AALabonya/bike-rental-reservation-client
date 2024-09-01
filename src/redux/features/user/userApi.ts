// import { baseApi } from "../../api/baseApi";

// const userApi = baseApi.injectEndpoints({
//   endpoints: (builder) => ({
//     getMe: builder.query({
//       query: (token) => {
//         return {
//           url: `/users/me`,
//           method: "GET",
//           headers: { Authorization: `${token}` },
//         };
//       },
//     }),
// getAllUsers: builder.query({
//   query: (token) => {
//     return {
//       url: "/users",
//       method: "GET",
//       headers: { Authorization: `${token}` },
//     };
//   },
// }),
//     updateMe: builder.mutation({
//       query: (userInfo) => {
//         return {
//           url: "/users/me",
//           method: "PUT",
//           body: userInfo.data,
//           headers: { Authorization: `${userInfo.token}` },
//         };
//       },
//     }),
//   }),
// });

// export const { useGetMeQuery, useGetAllUsersQuery, useUpdateMeMutation } =
//   userApi;

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
    getAllUsers: builder.query({
      query: () => {
        return {
          url: "/users",
          method: "GET",
        };
      },
    }),
    updateProfile: builder.mutation({
      query: (data) => {
        return {
          url: `/users/me`,
          method: "PUT",
          body: data,
        };
      },
    }),
    updateUserToAdmin: builder.mutation({
      query: (id) => {
        return {
          url: `/users/${id}`,
          method: "PATCH",
        };
      },
    }),
    deleteUser: builder.mutation({
      query: (id) => {
        return {
          url: `/users/${id}`,
          method: "DELETE",
        };
      },
    }),
  }),
});

export const {
  useGetMeQuery,
  useGetAllUsersQuery,
  useUpdateProfileMutation,
  useUpdateUserToAdminMutation,
  useDeleteUserMutation,
} = userApi;
