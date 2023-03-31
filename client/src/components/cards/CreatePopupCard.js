import React from "react";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { BsFillEmojiSmileFill } from "react-icons/bs";
import { Dialog } from "@mui/material";

const CreatePopupCard = (props) => {
  const [inputPostText, setInputPostText] = useState("");
  // const [allUsersPostsList, setAllUsersPostsList] = useState([]);
  const { dbUserId, userName, fullName, pfpImgName } = useSelector(
    (state) => state.user
  );
  const handleChange = async (event) => {
    setInputPostText(event.target.value);
  };
  const handleOnClick = async () => {
    setInputPostText(" ");

    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        dbUserId,
        userName,
        fullName,
        inputPostText,
        pfpImgName,
      }),
    };
    const res = await fetch(`http://localhost:9000/feed`, requestOptions);
    if (res.status == 200) alert("Your post was sent.");
    props.handleClosePopup();
  };
  return (
    <Dialog
      open={props.confirmCreatePopup}
      onClose={props.handleClosePopup}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      className="delete-alert"
    >
      <div className="create-popup-card">
        <img
          src={require("../../uploads/profilePictures/" + pfpImgName)}
          alt="Avatar"
          className="profileButton"
          size={40}
          onClick={() => ""}
        ></img>
        <div classname="create-popup-card-contents">
          <textarea
            placeholder="What's happening?"
            value={inputPostText}
            onChange={handleChange}
          ></textarea>
          <div className="create-popup-card-footer">
            <div className="home-card-icons">
              <BsFillEmojiSmileFill
                className="emojiButton"
                style={{ color: "white" }}
                size={20}
              />
              <input type="file" className="uploadImgIcon" size={20} />
            </div>
            <button className="button" onClick={handleOnClick} autoFocus>
              Post
            </button>
            <button className="button" onClick={props.handleClosePopup}>
              Cancel
            </button>
          </div>
        </div>
      </div>
    </Dialog>
  );
};
export default CreatePopupCard;
