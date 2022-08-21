import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useAuthRouter } from "../../context/AuthContextRouter";

function Login() {
  const { setUser } = useAuthRouter();
  const navigate = useNavigate();
  const location = useLocation();

  const loginHandle = () => {
    setUser({
      id: 1,
      username: "ugurcanturk",
    });
    navigate(location?.state?.return_url || "/", {
      replace: true,
      state: {
        name: "ugurcan",
      },
    });
  };
  return (
    <>
      <div>Login</div>
      <button onClick={loginHandle}>Giriş Yap</button>
    </>
  );
}

export default Login;
