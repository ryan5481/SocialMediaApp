import { useEffect, useState } from "react";
import CustomNavbar from "../components/navigation components/navbar";
import PostFromHomeCard from "../components/cards/PostFromHomeCard";
import MoreOptionsMenu from "../components/menu/moreOptionsMenu";
import { BsHeart, BsChat, BsThreeDots } from "react-icons/bs";
import { RxShare2 } from "react-icons/rx";
import { BiRepost } from "react-icons/bi";

const Home = () => {
  const [allUsersPostsList, setAllUsersPostsList] = useState([]);

  //Retrieve posts from all the users and display on the home page
  const fetchAllUsersPosts = async () => {
    const response = await fetch("http://localhost:9000/feed");
    const data = await response.json();
    // console.log(data.allUsersPosts);
    if (data) {
      setAllUsersPostsList(data.allUsersPosts.reverse());
    }
  };
  console.log(allUsersPostsList);
  // REFRESH HOME PAGE FEED >>>NOT WORKING YET!!!!
  // const refreshFeed = () => {
  //   console.log("refresh button clicked!");
  // };

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
          <PostFromHomeCard />
          <h4 style={{ textAlign: "center" }}>Latest feed</h4>
          <div className="refresh-feed-button-space">
            <button className="refresh-feed-button">Refresh</button>
          </div>

          <div>
            {allUsersPostsList.map((item, id) => {
              return (
                <>
                  <div className="feed-card">
                    <div className="feed-card-header">
                      <img
                        src={require("../../src/uploads/profilePictures/" +
                          item.pfpImgName)}
                        alt="Avatar"
                        className="profileButton"
                        size={40}
                        onClick={() => ""}
                      ></img>

                      <div className="feed-card-id-space">
                        <p1 style={{ fontWeight: "bold" }}>{item.fullName}</p1>
                        <p2 style={{ color: "lightgrey", fontSize: "15px" }}>
                          @{item.userName}
                        </p2>
                      </div>
                      <MoreOptionsMenu postId={item._id} />
                    </div>
                    <div className="feed-card-body ">
                      <p>{item.inputPostText}</p>
                      <div className="feed-image">
                        <img
                          src={require("../../src/uploads/usersPosts/" +
                            item.uploadToPostImageName)}
                          size={40}
                          alt="Feed"
                        ></img>
                      </div>
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
