import React, { useContext } from "react";
import { LoginContext } from "../../Contexts/LoginContext.jsx";

export const Login = () => {
  const { userName, setUserName, setShowProfile } = useContext(LoginContext);
  const handleLogin = () => {
    if (userName) {
      setShowProfile(true);
    }
  };

  const handleOnChange = (e) => {
    setUserName(e.target.value);
  };
  return (
    <>
      <label htmlFor="">UserName</label>
      <input
        type="text"
        onChange={(e) => {
          handleOnChange(e);
        }}
      />
      <button onClick={handleLogin}>Login</button>
    </>
  );
};
