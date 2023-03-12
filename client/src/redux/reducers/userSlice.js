import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  isLoggedIn: false,
  token: "",
  dbUserId: "",
  userName: "",
  fullName: "",
  selectedUserDetails: {},
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setLoginDetails: (state, actions) => {
      if (actions.payload) {
        state.dbUserId = actions.payload.dbUserId;
        state.userName = actions.payload.userName;
        state.fullName = actions.payload.fullName;
      }
      state.isLoggedIn = !state.isLoggedIn;
    },
    setUserDetails: (state, actions) => {
      state.selectedUserDetails = actions.payload;
    },
  },
});

export const { setLoginDetails, setUserDetails } = userSlice.actions;
export default userSlice.reducer;
