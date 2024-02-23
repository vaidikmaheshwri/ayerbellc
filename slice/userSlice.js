import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  user: null,
  isLoading: false,
  accessToken: null,
};
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    getUserFetch: (state, action) => {
      state.isLoading = true;
    },
    getUserSuccess: (state, action) => {
      state.isLoading = false;
      state.user = action.payload;
      state.accessToken = action.payload.token;
    },
    getUserFailure: (state, action) => {
      state.isLoading = false;
    },
    logoutFetch: (state, action) => {
      state.isLoading = true;
    },
    logoutSuccess: (state, action) => {
      state.isLoading = false;
      state.user = null;
      state.accessToken = null;
    },
  },
});
export const { getUserFailure, getUserFetch, getUserSuccess, logoutFetch, logoutSuccess } = userSlice.actions;
export default userSlice.reducer;
