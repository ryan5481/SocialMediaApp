import ConditionalRoute from "./routes/conditionalRoute";
import NotificationCard from "./components/alerts/notification";

import { io } from "socket.io-client";
const socket = io("http//:localhost:9000");

const App = () => {
  return (
    <div>
      <ConditionalRoute socket={socket} />
      <NotificationCard socket={socket} />
    </div>
  );
};

export default App;
