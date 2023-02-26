import { Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import Messages from "../containers/02-messages";
import Login from "../containers/Authentication/login";
import SignUp from "../containers/Authentication/signup";
import Profile from "../containers/05-profile";
import ErrorPage from "../containers/09-404errorPage";

const ConditionalRoute = () => {
  const { isLoggedIn } = useSelector((state) => state.user);
  if (isLoggedIn) {
    return <UserRoute />;
  } else {
    return <NonUserRoute />;
  }
};

const UserRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<Messages />} />
      <Route path="/login" element={<Messages />} />
      <Route path="/signup" element={<Messages />} />
      <Route path="/messages" element={<Messages />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="*" element={<ErrorPage />} />
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
        <Route path="/signup" element={<SignUp />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
};

export default ConditionalRoute;
