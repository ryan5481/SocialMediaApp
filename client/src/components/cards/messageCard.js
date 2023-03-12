import React from "react";

import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CustomizedMenus from "../navigation components/customStyledMenu";
import { setUserDetails } from "../../redux/reducers/userSlice";
import { all } from "axios";
// // const usersDetailsObject = JSON.stringify(data.usersList);
const MessageCard = (props) => {
  const dispatch = useDispatch();
  const [usersDataList, setUsersDataList] = useState([]);

  const fetchUsersData = async () => {
    const res = await fetch("http://localhost:9000/users");
    const data = await res.json();
    const allUsers = JSON.stringify(data);
    alert(allUsers);
    if (res) {
      setUsersDataList(data.usersList);
    }
  };

  useEffect(() => {
    fetchUsersData();
  }, []);

  return (
    <>
      {usersDataList.map((item, id) => {
        return (
          <>
            <div
              className="recentChat"
              onClick={() => dispatch(setUserDetails(""))}
            >
              <div>
                <img src={item.image}></img>
              </div>
              <div className="recentChatRHS">
                <div className="recentChatRhsTop">
                  <div>
                    <div>{item.userName}</div>
                  </div>
                  <div className="chatTimeStamp" placeholder="10:00 pm">
                    10:00 pm
                  </div>
                </div>
                <div className="recentChatRhsBottom">
                  <div className="recentMessagePreview">Wassap man.</div>
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
