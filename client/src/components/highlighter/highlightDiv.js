import React, { useState, useEffect } from "react";
import CustomizedMenus from "../navigation components/customStyledMenu";

import "./styles.css";

const Day = ({ active, count, onClick }) => {
  return (
    <div onClick={onClick} className={active ? "day active" : "day"}>
      {count}
    </div>
  );
};

const HighlightDiv = () => {
  const [usersDataList, setUsersDataList] = useState([]);
  const fetchUsersData = async () => {
    const response = await fetch("http://localhost:9000/users");
    const data = await response.json();
    if (data) {
      setUsersDataList(data.usersList);
    }
  };

  useEffect(() => {
    fetchUsersData();
  }, []);

  const [chosen, setChosen] = useState();
  const test = [1, 2, 3, 4];

  return (
    <div className="App">
      {usersDataList.map((t) => (
        <Day
          key={t}
          count={t}
          active={t === chosen}
          onClick={() => setChosen(t)}
        />
      ))}
    </div>
  );
};

export default HighlightDiv;
