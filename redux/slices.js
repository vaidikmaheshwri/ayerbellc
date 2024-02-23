import { combineReducers } from "@reduxjs/toolkit";
import userReducer from "../slice/userSlice";
import roleReducer from "../slice/roleSlice";

export const RootReducer = combineReducers({
  role: roleReducer,
  user: userReducer,
});
