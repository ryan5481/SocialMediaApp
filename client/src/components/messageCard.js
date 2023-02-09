const MessageCard = (props) => {
  return (
    <>
      {props.friendsList.map((item, id) => {
        return (
          <div className="messageCard">
            <img src={item.pfp} style={{ width: "80px" }}></img>
            <div>{item.name}</div>
          </div>
        );
      })}
    </>
  );
};

export default MessageCard;
