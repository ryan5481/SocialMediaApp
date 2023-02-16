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

import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector, useEffect } from "react-redux";
import { TiHome } from "react-icons/ti";
import { BsFillChatFill, BsFillHeartFill } from "react-icons/bs";
import { MdAddBox } from "react-icons/md";

const CustomNavbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isLoggedIn } = useSelector((state) => state.user);

  return isLoggedIn ? (
    <>
      <div className="navBar">
        <div className=" logoSpace " onClick={() => navigate("/home")}>
          <h1>DeSocial</h1>
        </div>
        <div className="allIcons">
          <div>
            <TiHome
              className=" navBarIcon homeButton"
              size={32}
              onClick={() => navigate("/home")}
            />
          </div>
          <div>
            <BsFillChatFill
              className="navBarIcon messagesButton"
              size={30}
              onClick={() => navigate("/messages")}
            />
          </div>
          <div>
            <BsFillHeartFill
              className="navBarIcon notificationsButton"
              size={30}
              onClick={() => navigate("/notifications")}
            />
          </div>
          <div>
            <img
              src={
                "https://tse2.mm.bing.net/th?id=OIP.9B2RxsHDB_s7FZT0mljnhQHaHa"
              }
              alt="Avatar"
              className="navBarIcon profileButton"
              size={30}
              onClick={() => navigate("/profile")}
            ></img>
          </div>
          <div>
            <MdAddBox
              className="navBarIcon createButton"
              size={32}
              onClick={() => navigate("/create")}
            />
          </div>
        </div>
      </div>
    </>
  ) : (
    <div>
      {(useEffect) => {
        navigate("/login");
      }}
    </div>
  );
};
export default CustomNavbar;
