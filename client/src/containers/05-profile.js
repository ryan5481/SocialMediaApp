import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginStatus } from "../redux/reducers/userSlice";
import * as React from "react";

const Profile = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const loggedOut = () => {
    navigate("/login");
    dispatch(loginStatus());
  };
  return (
    <div className="profilePage">
      <div>
        <div className="profilePageHead">
          <div className="pfp Div">
            <img
              className="pfp"
              src={"../images/dummy_img.png"}
              alt="Avatar"
            ></img>
          </div>
          <div className="profileSummary">
            <div>
              <>userId</>
            </div>
            <div>
              <button className="button editProfile">Edit Profile</button>
            </div>
            <div>
              <button className="button logout" onClick={() => loggedOut()}>
                Log out
              </button>
            </div>
            <></>
            <div className="userStats">
              <div>posts</div>
              <div>followers</div>
              <div>following</div>
            </div>
          </div>
          <div className="userFullName">Full Name</div>
          <input className="userBio" placeholder="Bio"></input>
        </div>
      </div>
    </div>
  );
};

export default Profile;
