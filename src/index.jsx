import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import { Login } from "./Components/Ex2/Login.jsx";
import { LoginContext } from "./Contexts/LoginContext.jsx";
import { Profile } from "./Components/Ex2/Profile.jsx";

const App = () => {
  const [showProfile, setShowProfile] = useState(false);
  const [userName, setUserName] = useState("");

  return (
    <LoginContext.Provider value={{ userName, setUserName, setShowProfile }}>
      <div>{showProfile ? <Profile /> : <Login />}</div>
    </LoginContext.Provider>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App />);
