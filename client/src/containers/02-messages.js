import MessageCard from "../components/messageCard";
import { useState } from "react";
import { Link } from "react-scroll";
import { BsFillImageFill, BsFillEmojiSmileFill } from "react-icons/bs";

const Messages = () => {
  const [messageCardColor, setMessageCardColor] = useState();

  const handleCardClick = () => {};

  return (
    <div className="mainPage">
      <div className="mainPageContents">
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
              <p>messages Here</p>
              <p>messages Here</p>
              <p>messages Here</p>
              <p>messages Here</p>
              <p>messages Here</p>
              <p>messages Here</p>
              <p>messages Here</p>
              <p>messages Here</p>
              <p>messages Here</p>
              <p>messages Here</p>
              <p>messages Here</p>
              <p>messages Here</p>
              <p>messages Here</p>
              <p>messages Here</p>
              <p>messages Here</p>
              <p>messages Here</p>
              <p>messages Here</p>
              <p>messages Here</p>
              <p>messages Here</p>
              <p>messages Here</p>
              <p>messages Here</p>
              <p>messages Here</p>
              <p>messages Here</p>
              <p>messages Here</p>
              <p>messages Here</p>
              <p>messages Here</p>
              <p>messages Here</p>
              <p>messages Here</p>
              <p>messages Here</p>
              <p>messages Here</p>
              <p>messages Here</p>
              <p>messages Here</p>
              <p>messages Here</p>
              <p>messages Here</p>
              <p>messages Here</p>
              <p>messages Here</p>
              <p>messages Here</p>
              <p>messages Here</p>
              <p>messages Here</p>
              <p>messages Here</p>
              <p>messages Here</p>
              <p>messages Here</p>
              <p>messages Here</p>
              <p>messages Here</p>
              <p>messages Here</p>
              <p>messages Here</p>
              <p>messages Here</p>
              <p>messages Here</p>
              <p>messages Here</p>
              <p>messages Here</p>
              <p>messages Here</p>
              <p>messages Here</p>
              <p>messages Here</p>
              <p>messages Here</p>
              <p>messages Here</p>
              <p>messages Here</p>
              <p>messages Here</p>
              <p>messages Here</p>
              <p>messages Here</p>
              <p>messages Here</p>
              <p>messages Here</p>
              <p>messages Here</p>
              <p>messages Here</p>
              <p>messages Here</p>
              <p>messages Here</p>
              <p>messages Here</p>
              <p>messages Here</p>
              <p>messages Here</p>
              <p>messages Here</p>
              <p>messages Here</p>
              <p>messages Here</p>
              <p>messages Here</p>
              <p>messages Here</p>
              <p>messages Here</p>
              <p>messages Here</p>
              <p>messages Here</p>
              <p>messages Here</p>
              <p>messages Here</p>
              <p>messages Here</p>
              <p>messages Here</p>
              <p>messages Here</p>
              <p>messages Here</p>
              <p>messages Here</p>
            </div>

            <div className="chatBoxFooter">
              <input
                className="messageInputField"
                placeholder="Message..."
              ></input>
              <BsFillEmojiSmileFill className="emojiButton" size={30} />
              <BsFillImageFill className="uploadImgIcon" size={30} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Messages;
