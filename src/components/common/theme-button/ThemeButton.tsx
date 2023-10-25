import React from "react";

// SCSS.
import "./ThemeButton.scss";
import { ThemeContext } from "../../../context/ThemeContext";

const css_prefix = "c--c--t-b__";

// Component props.
interface ThemeButtonProps {}

const ThemeButtonComponent: React.FunctionComponent<ThemeButtonProps> = () => {
  const { theme, switchTheme } = React.useContext(ThemeContext);

  return (
    <svg
      aria-hidden="true"
      width="50px"
      height="50px"
      viewBox="0 0 32 32"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      className={`${css_prefix}main ${
        theme === "light" ? css_prefix + "light" : css_prefix + "dark"
      }`}
      onClick={() => switchTheme(theme === "light" ? "dark" : "light")}
    >
      <g
        id="Symbols"
        stroke="none"
        strokeWidth="1"
        fill={theme === "light" ? "none" : "#6a0f8e"}
        fillRule="evenodd"
      >
        <g id="Group" transform="translate(1.000000, 1.000000)">
          <circle
            id="Oval"
            stroke={theme === "light" ? "#6a0f8e" : "rgba(255, 255, 255, 0.15)"}
            cx="15"
            cy="15"
            r="15"
          ></circle>
          <path
            d="M15,30 L15,0 C6.71572875,0 0,6.71572875 0,15 C0,23.2842712 6.71572875,30 15,30 Z"
            id="Oval"
            fill={theme === "light" ? "#6a0f8e" : "rgba(255, 255, 255, 0.15)"}
          ></path>
        </g>
      </g>
    </svg>
  );
};

export const ThemeButton = ThemeButtonComponent;
