import MessageCard from "../components/cards/messageCard";
import { BsFillImageFill, BsFillEmojiSmileFill } from "react-icons/bs";
import CustomNavbar from "../components/navigation components/navbar";
import datetime from "../components/dateAndTime/getDateTime";
import { IoIosSend } from "react-icons/io";
import { useState } from "react";
const Messages = () => {
  const [message, setMessage] = useState("Hello");
  const handleOnKeyUp = async (event) => {
    setMessage(event.target.value);
    if (event.key === "Enter") {
      setMessage("");
      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(event.target.value, datetime),
      };
      const res = await fetch(`http://localhost:9000/messages`, requestOptions);
    }
  };
  return (
    <>
      <CustomNavbar />
      <div className="main-page">
        <div className="main-pageContents">
          <div className="messagesPageBoxContents">
            <div className="messagesListColumn">
              <div className="messagesListColumnHeader">
                <h3>Messages</h3>
              </div>
              <div className="messagesListDiv">
                <MessageCard />
              </div>
            </div>

            <div className="chatBox">
              <div className="chatBoxHeader">
                <h3>friendName</h3>
              </div>
              <div className="chatBoxBody">
                <p>messages Here</p>
              </div>

              <div className="chatBoxFooter">
                <BsFillEmojiSmileFill className="emojiButton" size={40} />
                <BsFillImageFill className="uploadImgIcon" size={40} />
                <input
                  className="message-input-field"
                  placeholder="Type a message"
                  onKeyUp={handleOnKeyUp}
                  value={message}
                ></input>
                <IoIosSend
                  size={50}
                  className="send-icon"
                  // onClick={() => handleOnclick()}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Messages;
