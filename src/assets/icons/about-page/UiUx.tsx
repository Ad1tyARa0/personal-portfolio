import React from "react";

// SCSS.
import "./UiUx.scss";

// assets -- icons -- about - page -- ui - ux
const css_prefix = "a--i--a-p--u-u__";

// Component props.
interface UiUxProps {
  width?: string;
  height?: string;
  theme: string;
}

const UiUxComponent: React.FunctionComponent<UiUxProps> = ({
  width = "150px",
  height = "150px",
  theme,
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 206.39722 171.38659"
      version="1.1"
      id="svg5"
      xmlns="http://www.w3.org/2000/svg"
      className={`${css_prefix}svg`}
    >
      <defs id="defs2" />
      <g id="layer1" transform="translate(-1.9176804,-67.595256)">
        <g
          id="g3758"
          transform="matrix(1.2263497,0,0,1.2263497,-31.158329,-92.167993)"
        >
          <rect
            className={`${css_prefix}rect ${
              theme === "dark" ? css_prefix + "rect-dark" : ""
            }`}
            id="rect1104"
            width="35.09079"
            height="35.09079"
            x="28.556942"
            y="139.02524"
            ry="17.545395"
          />
          <rect
            className={`${css_prefix}rect ${
              theme === "dark" ? css_prefix + "rect-dark" : ""
            }`}
            id="rect1186"
            width="24.857016"
            height="24.857016"
            x="33.673828"
            y="144.14212"
            ry="12.428508"
          />
          <rect
            className={`${css_prefix}rect ${
              theme === "dark" ? css_prefix + "rect-dark" : ""
            }`}
            id="rect1214"
            width="43.112"
            height="50.432903"
            x="88.095924"
            y="131.35419"
            ry="10.981353"
          />
          <path
            className={`${css_prefix}path ${
              theme === "dark" ? css_prefix + "path-dark" : ""
            }`}
            d="m 63.229494,156.61549 25.870925,-0.0897 v 0"
            id="path1329"
          />
          <path
            className={`${css_prefix}path ${
              theme === "dark" ? css_prefix + "path-dark" : ""
            }`}
            d="m 131.5668,156.57064 h 26.97498"
            id="path1331"
          />
          <rect
            className={`${css_prefix}rect ${
              theme === "dark" ? css_prefix + "rect-dark" : ""
            }`}
            id="rect1624"
            width="43.112"
            height="50.432903"
            x="151.08246"
            y="218.51723"
            ry="10.981353"
          />
          <rect
            className={`${css_prefix}rect ${
              theme === "dark" ? css_prefix + "rect-dark" : ""
            }`}
            id="rect1626"
            width="43.112"
            height="50.432903"
            x="28.049852"
            y="218.51723"
            ry="10.981353"
          />
          <path
            className={`${css_prefix}path ${
              theme === "dark" ? css_prefix + "path-dark" : ""
            }`}
            d="m 128.46727,178.35693 c 17.10503,8.24567 25.9973,22.87172 26.0951,44.11956"
            id="path1908"
          />
          <path
            className={`${css_prefix}path ${
              theme === "dark" ? css_prefix + "path-dark" : ""
            }`}
            d="M 91.428581,179.0894 C 77.057527,184.66422 68.06438,195.99361 68.543632,222.03647"
            id="path3059"
          />
          <rect
            className={`${css_prefix}rect ${
              theme === "dark" ? css_prefix + "rect-dark" : ""
            }`}
            id="rect3486"
            width="35.09079"
            height="35.09079"
            x="158.20277"
            y="139.02524"
            ry="17.545395"
          />
          <rect
            className={`${css_prefix}rect ${
              theme === "dark" ? css_prefix + "rect-dark" : ""
            }`}
            id="rect3488"
            width="24.857016"
            height="24.857016"
            x="163.31967"
            y="144.14212"
            ry="12.428508"
          />
        </g>
      </g>
    </svg>
  );
};

export const UiUx = UiUxComponent;
