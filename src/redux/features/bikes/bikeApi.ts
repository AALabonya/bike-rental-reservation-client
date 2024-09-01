import { TQueryParam, TResponseRedux } from "@/types";
import { baseApi } from "../../api/baseApi";
import { IBike } from "@/Interface/IBike";

const userApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createBike: builder.mutation({
      query: (data) => {
        return {
          url: "/bikes",
          method: "POST",
          body: data,
        };
      },
      invalidatesTags: ["bikes"],
    }),
    getBike: builder.query({
      query: () => {
        return {
          url: `/bikes`,
          method: "GET",
        };
      },
    }),
    getAllBikes: builder.query({
      query: (args) => {
        const params = new URLSearchParams();
        if (args) {
          console.log(args);

          args.forEach((item: TQueryParam) => {
            if (item.value !== undefined) {
              params.append(item.name, item.value as string);
            }
          });
        }
        return {
          url: `/bikes`,
          params: params,
        };
      },
      transformResponse: (response: TResponseRedux<IBike[]>) => {
        return {
          data: response.data,
          meta: response.meta,
        };
      },
      providesTags: ["bikes"],
    }),
    getSingleBike: builder.query({
      query: (id) => {
        return {
          url: `/bikes/${id}`,
          method: "GET",
        };
      },
    }),
    updateBike: builder.mutation({
      query: ({ id, ...data }) => ({
        url: `bikes/${id}`,
        method: "PATCH",
        body: data,
      }),
    }),
    deleteBike: builder.mutation({
      query: (id) => {
        return {
          url: `/bikes/${id}`,
          method: "DELETE",
        };
      },
    }),
  }),
});

export const {
  useCreateBikeMutation,
  useGetBikeQuery,
  useGetSingleBikeQuery,
  useGetAllBikesQuery,
  useDeleteBikeMutation,
  useUpdateBikeMutation,
} = userApi;
