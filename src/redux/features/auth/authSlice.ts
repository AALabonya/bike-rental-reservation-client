import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../store";
import { TUser } from "@/Interface/TUser";

export interface InitialStateProps {
  user: TUser | null;
  token: string | null;
}

const initialState: InitialStateProps = {
  user: null,
  token: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<InitialStateProps>) => {
      const { user, token } = action.payload;
      state.token = token;
      state.user = user;
    },
    logOut: (state) => {
      state.user = null;
      state.token = null;
    },
  },
});

export const { setUser, logOut } = authSlice.actions;

export const selectCurrentToken = (state: RootState) => state.auth.token;
export const selectCurrentUser = (state: RootState) => state.auth.user;

export default authSlice.reducer;
