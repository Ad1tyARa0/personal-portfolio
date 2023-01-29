import React from "react";

// SCSS.
import "./Button.scss";

// Components -- common -- button
const css_prefix = "c--c--b__";

// Component props.
interface ButtonProps {
  theme: string;
  title: string;
  children?: JSX.Element;
  handleClick: () => void;
}

const ButtonComponent: React.FunctionComponent<ButtonProps> = ({
  theme,
  title,
  children,
  handleClick,
}) => {
  return (
    <div
      className={`${css_prefix}main ${
        theme === "dark" ? css_prefix + "main-dark" : css_prefix + "main-light"
      }`}
      onClick={handleClick}
    >
      <div className={`${css_prefix}title`}>{title}</div>

      {children && <div className={`${css_prefix}body`}>{children}</div>}
    </div>
  );
};

export const Button = ButtonComponent;
