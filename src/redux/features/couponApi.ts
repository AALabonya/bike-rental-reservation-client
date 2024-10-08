import { TQueryParam, TResponseRedux } from "@/types";
import { baseApi } from "../api/baseApi";
import { TCoupon } from "@/pages/admin/CouponManagement";

const couponApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllCoupons: builder.query({
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
          url: `/coupons`,
          params: params,
        };
      },
      transformResponse: (response: TResponseRedux<TCoupon[] | []>) => {
        return {
          data: response.data,
          meta: response.meta,
        };
      },
      providesTags: ["coupons"],
    }),
    verifyCoupon: builder.mutation({
      query: (code) => {
        return {
          url: `/coupons/${code}`,
          method: "POST",
        };
      },
    }),
    createCoupons: builder.mutation({
      query: (data) => {
        return {
          url: `/coupons`,
          body: data,
          method: "POST",
        };
      },
      invalidatesTags: ["coupons"],
    }),
    updateCoupons: builder.mutation({
      query: (data) => {
        return {
          url: `/coupons/${data.id}`,
          body: data.data,
          method: "PUT",
        };
      },
      invalidatesTags: ["coupons"],
    }),
    deletecoupons: builder.mutation({
      query: (id) => {
        return {
          url: `coupons/${id}`,
          method: "DELETE",
        };
      },
      invalidatesTags: ["coupons"],
    }),
  }),
});

export const {
  useGetAllCouponsQuery,
  useVerifyCouponMutation,
  useUpdateCouponsMutation,
  useCreateCouponsMutation,
  useDeletecouponsMutation,
} = couponApi;
