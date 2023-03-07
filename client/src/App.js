import ConditionalRoute from "./routes/conditionalRoute";
import NotificationCard from "./components/alerts/notification";

const App = () => {
  return (
    <div>
      <ConditionalRoute />
      <NotificationCard />
    </div>
  );
};

export default App;
