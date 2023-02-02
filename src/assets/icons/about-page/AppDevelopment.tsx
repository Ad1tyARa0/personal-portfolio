import React from "react";

// SCSS.
import "./AppDevelopment.scss";

// assets -- icons -- about - page -- app - development
const css_prefix = "a--i--a-p--a-d__";

// Component props.
interface AppDevelopmentProps {
  width?: string;
  height?: string;
  theme: string;
}

const AppDevelopmentComponent: React.FunctionComponent<AppDevelopmentProps> = ({
  width = "200px",
  height = "200px",
  theme,
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 121.18085 248.2895"
      version="1.1"
      id="svg5"
      xmlns="http://www.w3.org/2000/svg"
      //    xmlns:svg="http://www.w3.org/2000/svg"
      className={`${css_prefix}svg`}
    >
      <defs id="defs2" />
      <g id="layer1" transform="translate(-42.33969,-25.243277)">
        <g
          id="g2991"
          transform="matrix(0.59180821,0,0,0.59180821,212.79666,62.775344)"
        >
          <rect
            id="rect2328"
            width="202.11789"
            height="416.89801"
            x="-286.70447"
            y="-62.096394"
            ry="38.975067"
            className={`${css_prefix}rect ${
              theme === "dark" ? css_prefix + "rect-dark" : ""
            }`}
          />
          <rect
            id="rect2476"
            width="185.59708"
            height="398.72534"
            x="-278.44406"
            y="-53.010059"
            ry="30.837067"
            rx="30.706341"
            className={`${css_prefix}rect ${
              theme === "dark" ? css_prefix + "rect-dark" : ""
            }`}
          />
          <rect
            id="rect2500"
            width="60.40205"
            height="17.556526"
            x="-215.84654"
            y="-39.74379"
            ry="8.7782631"
            className={`${css_prefix}rect ${
              theme === "dark" ? css_prefix + "rect-dark" : ""
            }`}
          />
        </g>
      </g>
    </svg>
  );
};

export const AppDevelopment = AppDevelopmentComponent;
