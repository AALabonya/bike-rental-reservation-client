import { TQueryParam, TResponseRedux } from "@/types";
import { baseApi } from "../../api/baseApi";
import { IRental } from "@/Interface/TRental";

const rentalsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllRentals: builder.query({
      query: (args) => {
        const params = new URLSearchParams();
        if (args) {
          args.forEach((item: TQueryParam) => {
            if (item.value !== undefined) {
              params.append(item.name, item.value as string);
            }
          });
        }
        return {
          url: `/rentals`,
          params: params,
        };
      },
      transformResponse: (response: TResponseRedux<IRental[]>) => {
        return {
          data: response.data,
          meta: response.meta,
        };
      },
      providesTags: ["rentals"],
    }),

    getRentals: builder.query({
      query: (args) => {
        const params = new URLSearchParams();
        if (args) {
          args.forEach((item: TQueryParam) => {
            if (item.value !== undefined) {
              params.append(item.name, item.value as string);
            }
          });
        }
        return {
          url: `/rentals/all`,
          params: params,
        };
      },
      transformResponse: (response: TResponseRedux<IRental[]>) => {
        return {
          data: response.data,
          meta: response.meta,
        };
      },
      providesTags: ["rentals"],
    }),
    createRentals: builder.mutation({
      query: (data) => {
        return {
          url: `/rentals`,
          body: data,
          method: "POST",
        };
      },
      invalidatesTags: ["rentals", "bikes"],
    }),
    returnRentals: builder.mutation({
      query: (data) => {
        return {
          url: `rentals/${data.bikeId}/return`,
          method: "PUT",
        };
      },
      invalidatesTags: ["rentals"],
    }),
    calculateRentals: builder.mutation({
      query: (id) => {
        return {
          url: `rentals/${id}/calculate`,
          method: "PUT",
        };
      },
      invalidatesTags: ["rentals"],
    }),
    deleteRentals: builder.mutation({
      query: (id) => {
        return {
          url: `rentals/${id}`,
          method: "DELETE",
        };
      },
      invalidatesTags: ["rentals"],
    }),
  }),
});

export const {
  useGetAllRentalsQuery,
  useGetRentalsQuery,
  useCreateRentalsMutation,
  useCalculateRentalsMutation,
  useReturnRentalsMutation,
  useDeleteRentalsMutation,
} = rentalsApi;
