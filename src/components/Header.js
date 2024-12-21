import React, { useContext } from "react";
import Switch from "@mui/material/Switch";
import { Context } from "../utils/Context";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";

const Header = () => {
  const { theme, toggleTheme } = useContext(Context);

  const isLightTheme = theme === "light";
  return (
    <div className="flex justify-between p-4 rounded border-2 shadow-md bg-gray-100 dark:bg-gray-800 dark:border-gray-800">
      <h1 className="font-bold text-2xl text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-pink-600 dark:from-indigo-400 dark:to-pink-400">
        PF Tracker
      </h1>
      <div className="flex items-center gap-2">
        <Switch
          checked={isLightTheme}
          onChange={toggleTheme}
          inputProps={{ "aria-label": "controlled" }}
        />
        {theme === "dark" ? (
          <Brightness4Icon className="text-white" />
        ) : (
          <Brightness7Icon className="text-yellow-500" />
        )}
      </div>
    </div>
  );
};

export default Header;
