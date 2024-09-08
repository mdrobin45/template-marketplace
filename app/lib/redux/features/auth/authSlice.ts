import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { auth } from "auth";
import dbConnect from "utils/db";

interface InitialStateType {
   isAuthenticated: boolean;
   loading: boolean;
}

const initialState: InitialStateType = {
   isAuthenticated: false,
   loading: false,
};

const checkAuth = createAsyncThunk("auth/checkAuth", async () => {
   await dbConnect();
   const session = await auth();
   const isAuthenticated = session?.user ? true : false;
   return isAuthenticated;
});

export const authSlice = createSlice({
   name: "auth",
   initialState,
   reducers: {
      logout: (state) => {
         state.isAuthenticated = false;
      },
   },
   extraReducers: (builder) => {
      builder
         .addCase(checkAuth.pending, (state) => {
            state.loading = true;
         })
         .addCase(checkAuth.fulfilled, (state) => {
            state.isAuthenticated = true;
            state.loading = false;
         })
         .addCase(checkAuth.rejected, (state) => {
            state.isAuthenticated = false;
            state.loading = false;
         });
   },
});
export const { logout } = authSlice.actions;
export default authSlice.reducer;
