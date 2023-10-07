import React from "react";

// SCSS.
import "./Heading.scss";

const css_prefix = "c--c--h__";

// Component props.
interface HeadingProps {
  text: string;
}

const HeadingComponent: React.FunctionComponent<HeadingProps> = ({ text }) => {
  return <div className={`${css_prefix}main`}>{text}</div>;
};

export const Heading = HeadingComponent;
