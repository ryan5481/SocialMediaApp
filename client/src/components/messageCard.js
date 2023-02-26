import { useState, useEffect } from "react";
import CustomizedMenus from "./customStyledMenu";

const MessageCard = (props) => {
  const dummyUsersData = [{ name: "Ryan", image: "" }];

  const [usersDataList, setUsersDataList] = useState([]);

  const fetchUsersData = async () => {
    const response = await fetch("http://localhost:9000/users");

    const data = await response.json();

    if (data) {
      setUsersDataList(data.usersList);
    }
  };

  console.log(usersDataList);

  useEffect(() => {
    fetchUsersData();
  }, []);

  return (
    <>
      {usersDataList.map((item, id) => {
        return (
          <>
            <div className="recentChat">
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
