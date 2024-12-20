import React, { useContext } from "react";
import Switch from "@mui/material/Switch";
import { Context } from "../utils/Context";

const Header = () => {
  const { lightTheme, setLightTheme } = useContext(Context);

  const handleChange = () => {
    setLightTheme(!lightTheme);
  };

  return (
    <div
      className={`flex justify-between p-4 rounded border-2 shadow-md ${
        lightTheme ? "bg-gray-100" : "bg-gray-800 border-gray-800"
      }`}
    >
      <h1
        className={`font-bold text-2xl ${
          lightTheme ? "text-gray-700" : "text-white"
        }`}
      >
        Personal Finance Tracker
      </h1>
      <div>
        <span
          className={`text-sm font-semibold ${
            lightTheme ? "text-gray-700" : "text-gray-50"
          }`}
        >
          Dark
        </span>
        <Switch
          checked={lightTheme}
          onChange={handleChange}
          inputProps={{ "aria-label": "controlled" }}
        />
        <span
          className={`text-sm font-semibold ${
            lightTheme ? "text-gray-700" : "text-gray-50"
          }`}
        >
          Light
        </span>
      </div>
    </div>
  );
};

export default Header;
