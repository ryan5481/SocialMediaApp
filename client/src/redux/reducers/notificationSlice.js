import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  isApiSuccessMsgOpen: false,
  apiSuccessMessage: "",
};

const notificationSlice = createSlice({
  name: "notification",
  initialState,
  reducers: {
    setAlertMessages: (state, actions) => {
      state.apiSuccessMessage = actions.payload;
      state.isApiSuccessMsgOpen = true;
    },
    resetAlertMessages: (state, actions) => {
      state.apiSuccessMessage = "";
      state.isApiSuccessMsgOpen = false;
    },
  },
});

export const { setAlertMessages, resetAlertMessages } =
  notificationSlice.actions;
export default notificationSlice.reducer;
