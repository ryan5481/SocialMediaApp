import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { BsFillChatFill } from "react-icons/bs";
import { AiFillHome } from "react-icons/ai";
import { SiAddthis } from "react-icons/si";
import CreatePopupCard from "../cards/CreatePopupCard";

const CustomNavbar = () => {
  const navigate = useNavigate();
  const [confirmCreatePopup, setConfirmCreatePopup] = useState(false);
  const { pfpImgName } = useSelector((state) => state.user);

  const handleClosePopup = () => {
    setConfirmCreatePopup(false);
  };

  return (
    <div className="navBar">
      <div className=" logoSpace ">
        <h1>DeSocial</h1>
      </div>
      <div className="allIcons">
        <div className="navBarItem" onClick={(e) => navigate("/home")}>
          <AiFillHome className="navBarIcon home-button" size={30} />
          <p>Home</p>
        </div>
        <div className="navBarItem" onClick={(e) => navigate("/messages")}>
          <BsFillChatFill className="navBarIcon messagesButton" size={30} />
          <p>Message</p>
        </div>

        <div className="navBarItem" onClick={() => navigate("/profile")}>
          <img
            src={require("../../uploads/profilePictures/" + pfpImgName)}
            alt="Avatar"
            className="navBarIcon profileButton"
            size={28}
          ></img>
          <p>Profile</p>
        </div>
        <div className="navBarItem" onClick={() => setConfirmCreatePopup(true)}>
          <SiAddthis className="navBarIcon messagesButton" size={30} />
          <p>Create</p>
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
