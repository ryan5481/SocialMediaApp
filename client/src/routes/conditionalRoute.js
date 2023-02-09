import { Routes, Route } from "react-router-dom";
import Dashboard from "../containers/01-dashboard";
import Messages from "../containers/02-messages";
import ContactsList from "../containers/03-contactsList";
import Settings from "../containers/04-settings";
import Login from "../containers/Authentication/login";
import { useSelector } from "react-redux";
import CustomNavbar from "../components/navbar";

const ConditionalRoute = () => {
  const { isLoggedIn } = useSelector((state) => state.user);
  if ((isLoggedIn = false)) {
    return <GuestRoutes />;
  } else {
    return <UserRoutes />;
  }
};
const GuestRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
    </Routes>
  );
};
const UserRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/messages" element={<Messages />} />
        <Route path="/contactsList" element={<ContactsList />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </>
  );
};

export default ConditionalRoute;
