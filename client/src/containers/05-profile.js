import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { setLoginDetails } from "../redux/reducers/userSlice";
import CustomNavbar from "../components/navigation components/navbar";

import * as React from "react";

const Profile = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    pfpImgName,
    userName,
    fullName,
    email,
    phoneNumber,
    dbUserId,
  } = useSelector((state) => state.user);
  const [currentUsersPosts, setCurrentUsersPosts] = useState([]);

  const handleLogOut = () => {
    dispatch(setLoginDetails(false));
    navigate("/login");
  };

  const fetchUsersIdsPosts = async (id) => {
    const response = await fetch(`http://localhost:9000/feed/${dbUserId}`);
    const data = await response.json();
    setCurrentUsersPosts(data);
  };

  // console.log(currentUsersPosts);

  useEffect(() => {
    fetchUsersIdsPosts();
  }, []);

  return (
    <div className="full-page">
      <CustomNavbar />

      <div className="profile-page">
        <div className="profilePageContents ">
          <div className="profile-detials-div">
            <div>
              <img
                className="pfp"
                src={require("../../src/uploads/profilePictures/" + pfpImgName)}
                alt="Avatar"
              ></img>{" "}
            </div>
            <div className="profile-details">
              <p>Username: {userName}</p>
              <p className="userFullName">
                Name: {fullName.replace(/\b(\w)/g, (s) => s.toUpperCase())}
              </p>
              <p>Email: {email}</p>
              <p>Phone number: {phoneNumber}</p>
              <div className="userStats">
                <p>99 posts</p>
                <p>99 followers</p>
                <p>99 following</p>
              </div>
            </div>
            <div className="profile-buttons-container">
              <div>
                <button className="button editProfile">Edit profile</button>
              </div>
              <button
                className="button logoutButton"
                onClick={() => handleLogOut()}
              >
                Log out
              </button>
            </div>
          </div>

          <div className="bio"></div>

          <div className="posts-container">
            <div className="">POSTS</div>
            <>
              {currentUsersPosts.reverse().map((item) => {
                return (
                  <>
                    <img
                      className="profile-page-posts"
                      src={require("../../src/uploads/usersPosts/" +
                        item.uploadToPostImageName)}
                      alt="Post"
                    ></img>
                    {/* <div className="post-img-overlay-mid">
                      <div className="post-img-overlay-text">Likes</div>
                    </div> */}
                  </>
                );
              })}
            </>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
