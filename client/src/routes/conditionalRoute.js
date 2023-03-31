import { Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import Messages from "../containers/02-messages";
import Login from "../containers/Authentication/login";
import SignUp from "../containers/Authentication/signup";
import Profile from "../containers/05-profile";
import ErrorPage from "../containers/09-404errorPage";
import HighlightDiv from "../components/highlighter/highlightDiv";
import ResetPassword from "../components/forms/resetPassword";
import Home from "../containers/01-home";

const ConditionalRoute = () => {
  const { isLoggedIn } = useSelector((state) => state.user);
  if (isLoggedIn) {
    return <UserRoute />;
  } else {
    return <NonUserRoute />;
  }
};

const UserRoute = ({ socket }) => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login socket={socket} />} />
      <Route path="/signup" element={<Messages />} />
      <Route path="/resetpassword" element={<ResetPassword />} />
      <Route path="/home" element={<Home socket={socket} />} />
      <Route path="messages" element={<Messages socket={socket} />} />
      <Route path="/profile" element={<Profile socket={socket} />} />
      <Route path="*" element={<ErrorPage />} />
      {/* <Route path="/test" element={<HighlightDiv />} /> */}

      {/* The code on line above this line is for testing purpose, remove after testing */}
    </Routes>
  );
};

const NonUserRoute = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/messages" element={<Login />} />
        <Route path="/profile" element={<Login />} />
        <Route path="/home" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/resetpassword" element={<ResetPassword />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
};

export default ConditionalRoute;
