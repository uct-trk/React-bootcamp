import React from "react";
import SwitchLanguage from "./SwitchLanguage";
import SwitchTheme from "./SwitchTheme";
import { useAuth } from "../context/AuthContext";

function Header() {
  const { user, dispatch } = useAuth();

  const login = () => {
    dispatch({
      type: "LOGIN",
      payload: {
        user: true,
      },
    });
  };

  const logout = () => {
    dispatch({
      type: "LOGOUT",
    });
  };

  return (
    <div>
      Header <br />
      {user ? (
        <button onClick={logout}>Çıkış Yap</button>
      ) : (
        <button onClick={login}>Giriş Yap</button>
      )}
      <hr />
      <SwitchTheme />
      <SwitchLanguage />
    </div>
  );
}

export default Header;
