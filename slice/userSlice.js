import { createSlice } from "@reduxjs/toolkit";
const initialState={
        user:null,
        isLoading:false,
        
};
 const userSlice = createSlice({
    name: "user",
    initialState,
    reducers:{
        getUserFetch(state,action){
            state.isLoading=true;
            
        },
        getUserSuccess(state,action){
            state.isLoading=false;
            state.user=action.payload;
        },
        getUserFailure(state,action){
            state.isLoading=false;
        },
    }
});
export const {getUserFailure,getUserFetch,getUserSuccess}= userSlice.actions;
export default userSlice.reducer;