import { createSlice } from "@reduxjs/toolkit";

const initialState = false;

const authSlice = createSlice({
  name: 'loginStatus',
  initialState,
  reducers: {
    setLoginState(state, action) {
      return action.payload;
    }
  }
});

export const { setLoginState } = authSlice.actions

export default authSlice.reducer;