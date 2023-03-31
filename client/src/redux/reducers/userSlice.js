import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  isLoggedIn: false,
  token: "",
  dbUserId: "",
  userName: "",
  fullName: "",
  email: "",
  phoneNumber: "",
  selectedUserDetails: {},
  pfpImgName: "",
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
        state.email = actions.payload.email;
        state.phoneNumber = actions.payload.phoneNumber;
        state.pfpImgName = actions.payload.pfpImgName;
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
