import React from "react";
import { useSite } from "../context";

function SwitchTheme() {
  const { theme, dispatch } = useSite();
  const switchTheme = () => {
    dispatch({
      type: "UPDATE_THEME",
    });
  };
  return (
    <>
      Mevcut Tema = {theme} <br />
      <button onClick={switchTheme}>Temayı değiştir</button>
    </>
  );
}

export default SwitchTheme;
