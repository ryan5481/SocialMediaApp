import * as React from "react";

import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { BsFillChatFill, BsFillHeartFill } from "react-icons/bs";
import { MdSettings } from "react-icons/md";

const CustomNavbar = () => {
  const dispatch = useDispatch();
  const { isLoggedIn } = useSelector((state) => state.user);
  const navigate = useNavigate();

  return (
    <>
      <div className="navBar">
        <div className=" logoSpace ">
          <h1>DeSocial</h1>
        </div>
        <div className="allIcons">
          <div className="navBarItem" onClick={() => navigate("/messages")}>
            <BsFillChatFill className="navBarIcon messagesButton" size={30} />
            <p>Message</p>
          </div>

          <div className="navBarItem" onClick={() => navigate("/settings")}>
            <MdSettings className="navBarIcon notificationsButton" size={35} />
            <p>Settings</p>
          </div>
          <div className="navBarItem" onClick={() => navigate("/profile")}>
            <img
              src={
                "https://tse2.mm.bing.net/th?id=OIP.9B2RxsHDB_s7FZT0mljnhQHaHa"
              }
              alt="Avatar"
              className="navBarIcon profileButton"
              size={28}
            ></img>
            <p>Profile</p>
          </div>
        </div>
      </div>
    </>
  );
};
export default CustomNavbar;
