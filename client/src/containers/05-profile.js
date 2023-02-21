import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginStatus } from "../redux/reducers/userSlice";
import { MdSettings } from "react-icons/md";
import CustomNavbar from "../components/navbar";

import * as React from "react";

const Profile = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const loggedOut = () => {
    navigate("/login");
    dispatch(loginStatus());
  };
  return (
    <>
      <CustomNavbar />
      <div className="profilePage mainPage">
        <div className="profilePageContents profilePageDiv2">
          <div className="allProfileDetials profilePageDiv3">
            <div className="pfpDiv">
              <img
                className="pfp"
                src={
                  "https://tse2.mm.bing.net/th?id=OIP.9B2RxsHDB_s7FZT0mljnhQHaHa"
                }
                alt="Avatar"
              ></img>
            </div>
            <div className="profileSummary profilePageDiv3">
              <div className="userId">
                <>userId</>
              </div>
              <div>
                <button className="button editProfile">Edit profile</button>
              </div>
              <div>
                <button
                  className="button logoutButton"
                  onClick={() => loggedOut()}
                >
                  Log out
                </button>
              </div>
              {/* <MdSettings
              className=" settingsButton"
              size={30}
              onClick={() => navigate("/settings")}
            /> */}
              <div></div>
              <div className="userStats">
                <div>posts</div>
                <div>followers</div>
                <div>following</div>
              </div>
            </div>
          </div>

          <div className="nameAndBio profilePageDiv3">
            <div className="userFullName">Full Name</div>
            <input className="userBio" placeholder="Bio"></input>
          </div>
          <div className="postsSpace">
            <div>Posts</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
