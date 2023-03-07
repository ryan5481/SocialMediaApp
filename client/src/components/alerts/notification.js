import { useDispatch, useSelector } from "react-redux";
import { resetAlertMessages } from "../../redux/reducers/notificationSlice";
import { notification } from "antd";
import { useEffect } from "react";

const NotificationCard = () => {
  const dispatch = useDispatch();
  const { apiSuccessMessage, isApiSuccessMsgOpen } = useSelector(
    (state) => state.notification
  );
  const [api, contextHolder] = notification.useNotification();
  const openNotification = (placement) => {
    api.info({
      message: apiSuccessMessage,
      // description: " "
      placement,
    });
  };
  useEffect(() => {
    if (isApiSuccessMsgOpen) {
      openNotification();
      setTimeout(() => {
        dispatch(resetAlertMessages);
      }, 5000);
    }
  }, [isApiSuccessMsgOpen]);

  return <>{contextHolder}</>;
};
export default NotificationCard;
