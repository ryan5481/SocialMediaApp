import { useState } from "react";
import MessageCard from "../components/cards/messageCard";
import CustomNavbar from "../components/navigation components/navbar";
import { BsFillImageFill, BsFillEmojiSmileFill } from "react-icons/bs";
import { IoIosSend } from "react-icons/io";
import { useSelector } from "react-redux";
const Messages = () => {
  const { dbUserId } = useSelector((state) => state.user);
  const [message, setMessage] = useState("");

  const handleChange = async (event) => {
    setMessage(event.target.value);
  };

  const handleOnClick = async () => {
    setMessage("");
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message, dbUserId }),
    };
    const res = await fetch(`http://localhost:9000/messages`, requestOptions);
  };

  return (
    <div className="full-page">
      <CustomNavbar />
      <div className="main-page">
        <div className="Page-Box-Contents">
          <div className="messages-List-Column">
            <div className="messages-List-ColumnHeader">
              <h3>Messages</h3>
            </div>
            <div className="messages-List-Div">
              <MessageCard />
            </div>
          </div>

          <div className="chat-Box">
            <div className="chat-Box-Header">
              <h3>friendName</h3>
            </div>
            <div className="chat-box-body">
              <p>messages Here</p>
            </div>

            <div className="chat-BoxFooter">
              <BsFillEmojiSmileFill className="emojiButton" size={40} />
              <BsFillImageFill className="uploadImgIcon" size={40} />
              <input
                className="message-input-field"
                placeholder="Type a message"
                onChange={handleChange}
                value={message}
              ></input>
              <IoIosSend
                size={50}
                className="send-icon"
                onClick={handleOnClick}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Messages;
