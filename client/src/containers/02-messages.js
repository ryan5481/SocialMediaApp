import { useState, useEffect, useRef } from "react";
import MessageCard from "../components/cards/messageCard";
import CustomNavbar from "../components/navigation components/navbar";
import { BsFillImageFill, BsFillEmojiSmileFill } from "react-icons/bs";
import { IoIosSend } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";

import { io } from "socket.io-client";
const socket = io("http://localhost:9000");

const Messages = (props) => {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const {
    userName,
    dbUserId,
    fullName,
    // pfpImgName,
    selectedUserDetails,
  } = useSelector((state) => state.user);
  const lastMessageRef = useRef(null);

  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
  };

  const handleSendMessage = async (e) => {
    e.preventDefault();
    if (message.trim() && userName) {
      socket.emit("message", {
        text: message,
        userName: userName,
        dbUserId: dbUserId,
        fullName: fullName,
        pfpImgName: selectedUserDetails.pfpImgName,
        socketID: socket.id,
        dateTime: new Date().toLocaleDateString("en-US", options),
      });
    }
    setMessage("");
  };

  useEffect(() => {
    socket.on(
      "messageHistory",
      (messagesHistoryFromDb) => {
        setMessages(messagesHistoryFromDb);
      },
      []
    );
  });

  console.log(messages);

  useEffect(() => {
    socket.on("messageResponse", (data) => setMessages([...messages, data]));
  }, [socket, messages]);

  useEffect(() => {
    lastMessageRef.current?.scrollIntoView({ behaviour: "smooth" });
  }, [messages]);

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
              <h3>{selectedUserDetails.fullName}</h3>
            </div>
            {/* messages display */}
            <div className="chat-box-body">
              {messages.map((item) =>
                item.userName == userName ? (
                  <div className="message-chats" key={item.id}>
                    <p className="msg-time-stamp">{item.dateTime}</p>

                    <div
                      className="message-sender"
                      style={{ width: `${item.text.length * 10}px` }}
                    >
                      <p>{item.text}</p>
                    </div>
                  </div>
                ) : (
                  <div className="message-chats" key={item.id}>
                    <p className="msg-time-stamp">{item.dateTime}</p>

                    <div className="message-recipient">
                      <img
                        src={require("../uploads/profilePictures/" +
                          item.pfpImgName)}
                        className="profileButton"
                      ></img>

                      <div
                        className="message-recipient-bubble"
                        style={{ width: `${item.text.length * 10}px` }}
                      >
                        <p>{item.text}</p>
                      </div>
                    </div>
                  </div>
                )
              )}
              <div ref={lastMessageRef} />
            </div>

            <form className="chat-BoxFooter" onSubmit={handleSendMessage}>
              <BsFillEmojiSmileFill className="emojiButton" size={40} />
              <BsFillImageFill className="uploadImgIcon" size={40} />
              <input
                className="message-input-field"
                placeholder="Type a message"
                onChange={(e) => setMessage(e.target.value)}
                value={message}
                // onKeyDown={handleOnKeyDown}
              ></input>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Messages;
