// import { Link } from "react-router-dom";
// import "../App.css";

// const Navbar = () => {
//   return (
//     <>
//       <div className="nav">
//         <p>
//           <Link to="/">Dashboard</Link>
//         </p>
//         <p>
//           <Link to="/messages">Messages</Link>
//         </p>
//         <p>
//           <Link to="/contactsList">Contacts List</Link>
//         </p>
//         <p>
//           <Link to="/settings">Settings</Link>
//         </p>
//       </div>
//     </>
//   );
// };

// export default Navbar;

//=> ABOVE IS OLD CODE

import * as React from "react";

import Sheet from "@mui/joy/Sheet";
import Settings from "@mui/icons-material/Settings";
import Person from "@mui/icons-material/Person";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import ChatBubbleRoundedIcon from "@mui/icons-material/ChatBubbleRounded";
import FavoriteRoundedIcon from "@mui/icons-material/FavoriteRounded";
import AddBoxRoundedIcon from "@mui/icons-material/AddBoxRounded";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

// The Menu is built on top of Popper v2, so it accepts `modifiers` prop that will be passed to the Popper.
// https://popper.js.org/docs/v2/modifiers/offset/

const CustomNavbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isLoggedIn } = useSelector((state) => state.user);
  const [menuIndex, setMenuIndex] = React.useState(null);
  const itemProps = {
    onClick: () => setMenuIndex(null),
  };
  const createHandleLeaveMenu = (index) => (getIsOnButton) => {
    setTimeout(() => {
      const isOnButton = getIsOnButton();
      if (!isOnButton) {
        setMenuIndex((latestIndex) => {
          if (index === latestIndex) {
            return null;
          }
          return latestIndex;
        });
      }
    }, 200);
  };

  return (
    <div className="navBar">
      <div className=" logoSpace " onClick={() => navigate("/home")}>
        Logo
      </div>
      <div className="allIcons">
        <div>
          <HomeRoundedIcon
            className=" navBarIcons homeButton"
            onClick={() => navigate("/home")}
          />
        </div>
        <div>
          <ChatBubbleRoundedIcon
            className="navBarIcons messagesButton"
            onClick={() => navigate("/messages")}
          />
        </div>
        <div>
          <FavoriteRoundedIcon
            className="navBarIcons notificationsButton"
            onClick={() => navigate("/notifications")}
          />
        </div>
        <div>
          <Person
            className="navBarIcons profileButton"
            onClick={() => navigate("/profile")}
          />
        </div>
        <div>
          <AddBoxRoundedIcon
            className="navBarIcons createButton"
            onClick={() => navigate("/create")}
          />
        </div>
        <div>
          <Settings
            className="navBarIcons settingsButton"
            onClick={() => navigate("/settings")}
          />
        </div>
      </div>
    </div>
  );
};
export default CustomNavbar;
