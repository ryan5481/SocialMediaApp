import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CustomizedMenus from "../navigation components/customStyledMenu";
import { setUserDetails } from "../../redux/reducers/userSlice";

const MessageCard = (props) => {
  const dispatch = useDispatch();
  const [usersDataList, setUsersDataList] = useState([]);
  const { selectedUserDetails } = useSelector((state) => state.user);

  const fetchUsersData = async () => {
    const res = await fetch("http://localhost:9000" + "/users");
    const data = await res.json();
    // console.log(data.usersList);
    // console.log(JSON.stringify(selectedUserDetails));

    if (res) {
      setUsersDataList(data.usersList);
    }
  };

  useEffect(async () => {
    await fetchUsersData();
  }, []);

  return (
    <>
      {usersDataList.map((item) => {
        return (
          <>
            <div
              className="recent-chat"
              onClick={() => item && dispatch(setUserDetails(item))}
              style={{
                backgroundColor:
                  selectedUserDetails._id == item._id ? "#1170dd" : null,
              }}
            >
              <div>
                <img
                  src={require("../../uploads/profilePictures/" +
                    item.pfpImgName)}
                ></img>
              </div>
              <div className="recent-chatRHS">
                <div className="recent-chatRhsTop">
                  <div>
                    <div style={{ fontWeight: "bold" }}>{item.fullName}</div>
                  </div>
                  <div className="chatTimeStamp" placeholder="10:00 pm">
                    10:00 pm
                  </div>
                </div>
                <div className="recent-chatRhsBottom">
                  <div
                    style={{ color: "lightgrey" }}
                    className="recentMessagePreview"
                  ></div>
                  <div>
                    <CustomizedMenus />
                  </div>
                </div>
              </div>
            </div>
          </>
        );
      })}
    </>
  );
};

export default MessageCard;
