import React, { useEffect, useState } from "react";
import Snackbar from "@mui/material/Snackbar";
import { useSelector, useDispatch } from "react-redux";
import { resetAlertMessages } from "../../../redux/reducers/notificationSlice";

export default function TransitionsSnackbar() {
  const dispatch = useDispatch();
  const { isApiSuccessMsgOpen, apiSuccessMessage } = useSelector(
    (state) => state.notification
  );
  const [state, setState] = useState({
    open: false,
  });

  useEffect(() => {
    if (isApiSuccessMsgOpen) {
      toggleOpen(true);
      setTimeout(() => {
        dispatch(resetAlertMessages());
        toggleOpen(false);
      }, 5000);
    }
  }, [isApiSuccessMsgOpen]);

  const toggleOpen = (isOpen) => {
    setState({
      ...state,
      open: isOpen,
    });
  };

  return (
    <div>
      <Snackbar
        open={state.open}
        message={apiSuccessMessage}
        autoHideDuration={5000}
        TransitionComponent={state.Transition}
        key={state.Transition.name}
      />
    </div>
  );
}
