import React, { useContext } from "react";
import { LoginContext } from "../../Contexts/LoginContext.jsx";

export const Profile = () => {
  const { userName, setShowProfile, setUserName } = useContext(LoginContext);

  const handleLogout = () => {
    setShowProfile(false);
    setUserName("");
  };
  return (
    <>
      <h1>Profile</h1>
      <h2>UserName: {userName}</h2>
      <button onClick={handleLogout}>Logout</button>
    </>
  );
};
