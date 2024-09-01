import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface InitialStateProps {
  coupon: string | null;
  discount: number | null;
}

const initialState: InitialStateProps = {
  coupon: null,
  discount: null,
};

export const couponSlice = createSlice({
  name: "couponData",
  initialState,
  reducers: {
    setcouponData: (state, action: PayloadAction<InitialStateProps>) => {
      const { coupon, discount } = action.payload;
      state.coupon = coupon;
      state.discount = discount;
    },

    removecouponData: (state) => {
      state.coupon = null;
      state.discount = null;
    },
  },
});

export const { setcouponData, removecouponData } = couponSlice.actions;

export default couponSlice.reducer;
