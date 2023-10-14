import React from "react";

// SCSS.
import "./PageBreak.scss";

const css_prefix = "__";

// Component props.
interface PageBreakProps {}

const PageBreakComponent: React.FunctionComponent<PageBreakProps> = () => {
  return <div style={{ height: "300px" }} />;
};

export const PageBreak = PageBreakComponent;
