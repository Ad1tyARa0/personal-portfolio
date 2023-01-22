import React from "react";

// SCSS.
import "./Arrow.scss";

// Components -- common -- arrow
const css_prefix = "c--c--a__";

// Component props.
interface ArrowProps {
  orientation: "left" | "right";
  onClick: () => void;
}

const ArrowComponent: React.FunctionComponent<ArrowProps> = ({
  orientation,
  onClick,
}) => {
  return (
    <div
      className={`${css_prefix}arrow ${
        orientation === "left"
          ? css_prefix + "arrow-left"
          : orientation === "right"
          ? css_prefix + "arrow-right"
          : ""
      }`}
      onClick={onClick}
    >
      <div
        className={`${css_prefix}arrow-top ${
          orientation === "left" ? css_prefix + "arrow-top-left" : ""
        }`}
      ></div>
      <div
        className={`${css_prefix}arrow-bottom ${
          orientation === "left" ? css_prefix + "arrow-bottom-left" : ""
        }`}
      ></div>
    </div>
  );
};

export const Arrow = ArrowComponent;
