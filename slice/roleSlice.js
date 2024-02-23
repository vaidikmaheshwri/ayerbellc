import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  role: null,
  isLoading: false,
};
const roleSlice = createSlice({
  name: "role",
  initialState,
  reducers: {
    setUserRole: (state, action) => {
      state.role = action.payload;
      state.isLoading = false;
    },
  },
});
export const { setUserRole } = roleSlice.actions;
export default roleSlice.reducer;
