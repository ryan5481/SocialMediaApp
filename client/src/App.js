import { Routes, Route } from "react-router-dom";
import Messages from "./containers/02-messages";
import Login from "./containers/Authentication/login";
import Signup from "./containers/Authentication/signup";
import Profile from "./containers/05-profile";
import ErrorPage from "./containers/09-404errorPage";
import TransitionsSnackbar from "./components/forms/alerts/snackBar";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/messages" element={<Messages />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      {/* <TransitionsSnackbar /> */}
    </>
  );
};

export default App;
