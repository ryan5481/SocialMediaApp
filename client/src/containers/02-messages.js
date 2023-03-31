import { useState, useEffect } from "react";
import MessageCard from "../components/cards/messageCard";
import CustomNavbar from "../components/navigation components/navbar";
import { BsFillImageFill, BsFillEmojiSmileFill } from "react-icons/bs";
import { IoIosSend } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";

import axios from "axios";
import { io } from "socket.io-client";
const socket = io("http://localhost:9000");

const Messages = (props) => {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [latestMessage, setLatestMessage] = useState("");

  const {
    userName,
    dbUserId,
    fullName,
    // pfpImgName,
    selectedUserDetails,
  } = useSelector((state) => state.user);

  // console.log(selectedUserDetails);
  const handleChange = async (event) => {
    event.preventDefault();

    setMessage(event.target.value);
  };
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
  };

  const handleOnClick = async () => {
    if (message.trim() && userName) {
      socket.emit("message", {
        text: message,
        userName: userName,
        dbUserId: dbUserId,
        fullName: fullName,
        // pfpImgName: selectedUserDetails.pfpImgName,
        socketID: socket.id,
        dateTime: new Date().toLocaleDateString("en-US", options),
      });
      const res = await axios.post("http://localhost:9000" + "/messages", {
        text: message,
        userName: userName,
        dbUserId: dbUserId,
        fullName: fullName,
        // pfpImgName: selectedUserDetails.pfpImgName,
        socketID: socket.id,
        dateTime: new Date().toLocaleDateString("en-US", options),
      });
    }
    setMessage("");
  };

  useEffect(() => {
    socket.on("messageResponse", (data) => setMessages([...messages, data]));
  }, [socket, messages]);

  useEffect(() => {
    messages.map((item) => {
      item.userName == userName ? setLatestMessage(message) : null;
    });
  }, [message]);

  // console.log(messages);

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
              <MessageCard latestMessage={latestMessage} />
            </div>
          </div>

          <div className="chat-Box">
            <div className="chat-Box-Header">
              <h3>{selectedUserDetails.fullName}</h3>
            </div>
            {/* messages display */}
            <div className="chat-box-body">
              {messages.map((item) =>
                item.userName == userName ? (
                  <div className="message-chats" key={item.id}>
                    <p className="msg-time-stamp">{item.dateTime}</p>

                    <div className="message-sender">
                      <p>{item.text}</p>
                    </div>
                  </div>
                ) : (
                  <div className="message-chats" key={item.id}>
                    <p className="msg-time-stamp">{item.dateTime}</p>
                    {/* <div>
                      <img
                        src={require("../../src/uploads/profilePictures" +
                          item.pfpImgName)}
                      ></img>
                    </div> */}
                    <p1 className="msg-senders-name">{item.fullName}</p1>

                    <div className="message-recipient">
                      <p>{item.text}</p>
                    </div>
                  </div>
                )
              )}
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
