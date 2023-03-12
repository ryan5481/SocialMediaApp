import { useEffect, useState } from "react";
import CustomNavbar from "../components/navigation components/navbar";
import {
  BsFillImageFill,
  BsFillEmojiSmileFill,
  BsHeart,
  BsChat,
} from "react-icons/bs";
import { RxShare2 } from "react-icons/rx";
import { BiRepost } from "react-icons/bi";
import { useSelector } from "react-redux";

const Home = () => {
  const [inputPostText, setInputPostText] = useState("");
  const [allUsersPostsList, setAllUsersPostsList] = useState([]);
  const { dbUserId, userName, fullName } = useSelector((state) => state.user);

  // Make posts from the homepage
  const handleChange = async (event) => {
    setInputPostText(event.target.value);
  };
  const handleOnClick = async () => {
    setInputPostText(" ");
    fetchAllUsersPosts();
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ dbUserId, userName, fullName, inputPostText }),
    };
    const res = await fetch(`http://localhost:9000/feed`, requestOptions);
  };

  //Retrieve posts from all the users and display on the home page
  const fetchAllUsersPosts = async () => {
    const response = await fetch("http://localhost:9000/feed");
    const data = await response.json();
    // console.log(data.allUsersPosts);
    if (data) {
      setAllUsersPostsList(data.allUsersPosts);
    }
  };

  console.log(allUsersPostsList);
  useEffect(() => {
    fetchAllUsersPosts();
  }, []);

  return (
    <div className="full-page">
      <CustomNavbar />

      <div className="home-page">
        <div className="empty-gap"></div>
        <div className="feeds-column">
          <h2 style={{ textAlign: "center" }}>Home</h2>
          <div className="home-card">
            <img
              src={
                "https://tse2.mm.bing.net/th?id=OIP.9B2RxsHDB_s7FZT0mljnhQHaHa"
              }
              alt="Avatar"
              className="profileButton"
              size={40}
              onClick={() => ""}
            ></img>
            <div>
              <textarea
                placeholder="What's happening?"
                value={inputPostText}
                onChange={handleChange}
              ></textarea>
              <div className="home-card-footer">
                <div className="home-card-icons">
                  <BsFillEmojiSmileFill className="emojiButton" size={20} />
                  <input type="file" className="uploadImgIcon" size={20} />
                </div>
                <button className="button" onClick={handleOnClick}>
                  Post
                </button>
              </div>
            </div>
          </div>
          <h4 style={{ textAlign: "center" }}>Latest feed</h4>

          <div>
            {allUsersPostsList.map((item, id) => {
              return (
                <>
                  <div className="feed-card">
                    <div className="feed-card-header">
                      <img
                        src={
                          "https://tse2.mm.bing.net/th?id=OIP.9B2RxsHDB_s7FZT0mljnhQHaHa"
                        }
                        alt="Avatar"
                        className="profileButton"
                        size={40}
                        onClick={() => ""}
                      ></img>
                      <div className="feed-card-id-space">
                        <p1 style={{ fontWeight: "bold" }}>{item.fullName}</p1>
                        <p2 style={{ color: "grey", fontSize: "15px" }}>
                          {" "}
                          @{item.userName}
                        </p2>
                      </div>
                    </div>
                    <div className="feed-card-body ">
                      <p>{item.inputPostText}</p>
                    </div>
                    <div className="feed-card-footer">
                      <BsHeart size={20} />
                      <BsChat size={20} />
                      <BiRepost size={30} />
                      <RxShare2 size={20} />
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
        <div className="extras"></div>
      </div>
    </div>
  );
};

export default Home;
