import { useState, useEffect } from "react";
import CustomizedMenus from "../navigation components/customStyledMenu";

const MessageCard = (props) => {
  const [usersDataList, setUsersDataList] = useState([]);
  const [highlightColor, setHighlightColor] = useState("");
  const fetchUsersData = async () => {
    const response = await fetch("http://localhost:9000/users");
    const data = await response.json();
    console.log(data);
    if (data) {
      setUsersDataList(data.usersList);
    }
  };

  useEffect(() => {
    fetchUsersData();
  }, []);

  const handleClick = () => {
    setHighlightColor("#0066cc");
  };

  return (
    <>
      {usersDataList.map((item, id) => {
        return (
          <>
            <div
              className="recentChat"
              style={{ backgroundColor: highlightColor }}
              onClick={() => handleClick()}
            >
              <div>
                <img src={item.image}></img>
              </div>
              <div className="recentChatRHS">
                <div className="recentChatRhsTop">
                  <div>
                    <div>{item.userName}</div>
                  </div>
                  <div className="chatTimeStamp" placeholder="10:00 pm">
                    10:00 pm
                  </div>
                </div>
                <div className="recentChatRhsBottom">
                  <div className="recentMessagePreview">Wassap man.</div>
                  <div>
                    <CustomizedMenus />
                  </div>
                </div>
              </div>
            </div>
          </>
        );
      })}
    </>
  );
};

export default MessageCard;
