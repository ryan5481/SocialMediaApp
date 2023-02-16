import { Routes, Route } from "react-router-dom";
import Messages from "../containers/02-messages";
import Settings from "../containers/04-settings";
import Login from "../containers/Authentication/login";
import Home from "../containers/01-home";
import { useSelector } from "react-redux";
import SignUp from "../containers/Authentication/signup";

const ConditionalRoute = () => {
  const { isLoggedIn } = useSelector((state) => state.user);
  if ((isLoggedIn = false)) {
    return <GuestRoutes />;
  } else if ((isLoggedIn = true)) {
    return <UserRoutes />;
  } else {
    null;
  }
};
const GuestRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
};
const UserRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/messages" element={<Messages />} />
        <Route path="/notifications" element={<Notifications />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/create" element={<Create />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </>
  );
};

export default ConditionalRoute;
