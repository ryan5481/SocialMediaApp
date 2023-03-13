import React, { useState } from "react";

import { useNavigate } from "react-router-dom";
import { BsFillChatFill } from "react-icons/bs";
import { AiFillHome } from "react-icons/ai";
import { SiAddthis } from "react-icons/si";
import CreatePopupCard from "../cards/CreatePopupCard";

const CustomNavbar = () => {
  const navigate = useNavigate();
  const [confirmCreatePopup, setConfirmCreatePopup] = useState(false);

  const handleClosePopup = () => {
    setConfirmCreatePopup(false);
  };

  return (
    <div className="navBar">
      <div className=" logoSpace ">
        <h1>DeSocial</h1>
      </div>
      <div className="allIcons">
        <div className="navBarItem">
          <AiFillHome
            className="navBarIcon home-button"
            size={30}
            onClick={(e) => navigate("/home")}
          />
          <p>Home</p>
        </div>
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
        <div className="navBarItem">
          <SiAddthis
            className="navBarIcon messagesButton"
            size={30}
            onClick={() => setConfirmCreatePopup(true)}
          />
          <p>Message</p>
        </div>
      </div>
      <CreatePopupCard
        handleClosePopup={handleClosePopup}
        confirmCreatePopup={confirmCreatePopup}
      />
    </div>
  );
};
export default CustomNavbar;
