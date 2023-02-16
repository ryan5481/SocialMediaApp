import MessageCard from "../components/messageCard";

const Messages = () => {
  return (
    <div className="mainPage">
      <div className="mainPageContents">
        <div className="messagesPageBoxContents">
          <div className="messagesListColumn">
            <div className="messagesListColumnHead">
              <h3>Messages</h3>
            </div>
            <div className="messagesList"></div>
            <MessageCard />
          </div>
          <div className="chatBox">
            <div className="chatBoxHead">
              <h3>friendName</h3>
            </div>
            <div className="chatBoxBody">messages Here</div>
            <div className="messageTypingFieldSpace">
              <input
                className="messageInputField"
                placeholder="Message..."
              ></input>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Messages;
