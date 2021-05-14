import React from "react";
import { CgSun } from "react-icons/cg";
import { HiMoon } from "react-icons/hi";

export const Toggle = ({ theme, toggleTheme }) => {
  console.log("toggle", theme);
  return (
    <div onClick={toggleTheme}>
      {theme === "light" ? <HiMoon size={25} /> : <CgSun size={25} />}
    </div>
  );
};
