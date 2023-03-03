import * as React from "react";

import { useNavigate } from "react-router-dom";
import { BsFillChatFill } from "react-icons/bs";

const CustomNavbar = () => {
  const navigate = useNavigate();

  return (
    <div className="navBar">
      <div className=" logoSpace ">
        <h1>DeSocial</h1>
      </div>
      <div className="allIcons">
        <div className="navBarItem">
          <BsFillChatFill
            className="navBarIcon messagesButton"
            size={30}
            onClick={(e) => navigate("/messages")}
          />
          <p>Message</p>
        </div>

        <div className="navBarItem">
          <img
            src={
              "https://tse2.mm.bing.net/th?id=OIP.9B2RxsHDB_s7FZT0mljnhQHaHa"
            }
            alt="Avatar"
            className="navBarIcon profileButton"
            size={28}
            onClick={() => navigate("/profile")}
          ></img>
          <p>Profile</p>
        </div>
      </div>
    </div>
  );
};
export default CustomNavbar;
