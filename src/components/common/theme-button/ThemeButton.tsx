import React from "react";

// SCSS.
import "./ThemeButton.scss";

const css_prefix = "c--c--t-b__";

// Component props.
interface ThemeButtonProps {
  theme: string;
  switchTheme: (payload: string) => void;
}

const ThemeButtonComponent: React.FunctionComponent<ThemeButtonProps> = ({
  theme,
  switchTheme,
}) => {
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
        fill={theme === "light" ? "none" : "#1D1D1D"}
        fillRule="evenodd"
      >
        <g id="Group" transform="translate(1.000000, 1.000000)">
          <circle
            id="Oval"
            stroke={theme === "light" ? "#1D1D1D" : "#dfd3c3"}
            cx="15"
            cy="15"
            r="15"
          ></circle>
          <path
            d="M15,30 L15,0 C6.71572875,0 0,6.71572875 0,15 C0,23.2842712 6.71572875,30 15,30 Z"
            id="Oval"
            fill={theme === "light" ? "#1D1D1D" : "#dfd3c3"}
          ></path>
        </g>
      </g>
    </svg>
  );
};

export const ThemeButton = ThemeButtonComponent;
