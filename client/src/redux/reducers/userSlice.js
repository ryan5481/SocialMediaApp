import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  isLoggedIn: false,
  token: "",
  dbUserId: "",
};

//What is createSlice in Redux Toolkit?
//createSlice is a higher order function that accepts an initial state, an object full of reducer functions and a slice name.

// In Redux-Toolkit, the createSlice method helps us create a slice of the redux-store.
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setLoginDetails: (state, actions) => {
      if (actions.payload) {
        state.dbUserId = actions.payload.dbUserId;
      }
      state.isLoggedIn = !state.isLoggedIn;
    },
  },
});

export const { setLoginDetails } = userSlice.actions;
export default userSlice.reducer;
