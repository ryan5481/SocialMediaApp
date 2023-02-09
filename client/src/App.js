import { Routes, Route } from "react-router-dom";
import Home from "./containers/01-home";
import Messages from "./containers/02-messages";
import CustomNavbar from "./components/navbar";
import Login from "./containers/Authentication/login";
import Signup from "./containers/Authentication/signup";
import Notifications from "./containers/03-notifications";
import Create from "./containers/04-create";
import Profile from "./containers/05-profile";

const App = (props) => {
  return (
    <>
      <CustomNavbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/messages" element={<Messages />} />
        <Route path="/notifications" element={<Notifications />} />
        <Route path="/create" element={<Create />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </>
  );
};

export default App;
