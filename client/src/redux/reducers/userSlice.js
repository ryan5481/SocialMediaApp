import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  isLoggedIn: false,
  token: "",
};

//What is createSlice in Redux Toolkit?
//createSlice is a higher order function that accepts an initial state, an object full of reducer functions and a slice name.

// In Redux-Toolkit, the createSlice method helps us create a slice of the redux-store.
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginStatus: (state, actions) => {
      state.isLoggedIn = !state.isLoggedIn;
    },
  },
});

export const { loginStatus } = userSlice.actions;
export default userSlice.reducer;
