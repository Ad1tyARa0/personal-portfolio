import React from "react";

// SCSS.
import "./Heading.scss";

const css_prefix = "c--c--h__";

// Component props.
interface HeadingProps {
  text: string;
  variant?: "subheading";
}

const HeadingComponent: React.FunctionComponent<HeadingProps> = ({
  text,
  variant,
}) => {
  return (
    <div
      className={`${css_prefix}main ${
        variant === "subheading" ? css_prefix + "main-alt" : ""
      }`}
    >
      {text}
    </div>
  );
};

export const Heading = HeadingComponent;
