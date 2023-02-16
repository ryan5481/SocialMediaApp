import CustomizedMenus from "./customStyledMenu";
const MessageCard = (props) => {
  const friendsList = [
    {
      name: "Ryan ",
      image: "https://tse3.mm.bing.net/th?id=OIP.-dyAc44bZ9N8l9VsRDEYLQHaHa",
    },
    {
      name: "Sam ",
      image: "https://tse3.mm.bing.net/th?id=OIP.-dyAc44bZ9N8l9VsRDEYLQHaHa",
    },
    {
      name: "Ramy ",
      image: "https://tse3.mm.bing.net/th?id=OIP.-dyAc44bZ9N8l9VsRDEYLQHaHa",
    },
    {
      name: "Sita ",
      image: "https://tse3.mm.bing.net/th?id=OIP.-dyAc44bZ9N8l9VsRDEYLQHaHa",
    },
    {
      name: "Hari ",
      image: "https://tse3.mm.bing.net/th?id=OIP.-dyAc44bZ9N8l9VsRDEYLQHaHa",
    },
    {
      name: "Kalu ",
      image: "https://tse3.mm.bing.net/th?id=OIP.-dyAc44bZ9N8l9VsRDEYLQHaHa",
    },
    {
      name: "Hello ",
      image: "https://tse3.mm.bing.net/th?id=OIP.-dyAc44bZ9N8l9VsRDEYLQHaHa",
    },
    {
      name: "Ryan ",
      image: "https://tse3.mm.bing.net/th?id=OIP.-dyAc44bZ9N8l9VsRDEYLQHaHa",
    },
    {
      name: "Ryan ",
      image: "https://tse3.mm.bing.net/th?id=OIP.-dyAc44bZ9N8l9VsRDEYLQHaHa",
    },
    {
      name: "Ryan ",
      image: "https://tse3.mm.bing.net/th?id=OIP.-dyAc44bZ9N8l9VsRDEYLQHaHa",
    },
    {
      name: "Ryan ",
      image: "https://tse3.mm.bing.net/th?id=OIP.-dyAc44bZ9N8l9VsRDEYLQHaHa",
    },
    {
      name: "Ryan ",
      image: "https://tse3.mm.bing.net/th?id=OIP.-dyAc44bZ9N8l9VsRDEYLQHaHa",
    },
    {
      name: "Ryan ",
      image: "https://tse3.mm.bing.net/th?id=OIP.-dyAc44bZ9N8l9VsRDEYLQHaHa",
    },
    {
      name: "Ryan ",
      image: "https://tse3.mm.bing.net/th?id=OIP.-dyAc44bZ9N8l9VsRDEYLQHaHa",
    },
    {
      name: "Ryan ",
      image: "https://tse3.mm.bing.net/th?id=OIP.-dyAc44bZ9N8l9VsRDEYLQHaHa",
    },
    {
      name: "Ryan ",
      image: "https://tse3.mm.bing.net/th?id=OIP.-dyAc44bZ9N8l9VsRDEYLQHaHa",
    },
  ];

  return (
    <>
      {friendsList.map((item, id) => {
        return (
          <>
            <div className="recentChat">
              <div>
                <img src={item.image}></img>
              </div>
              <div className="recentChatRHS">
                <div className="recentChatRhsTop">
                  <div>
                    <div>{item.name}</div>
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
