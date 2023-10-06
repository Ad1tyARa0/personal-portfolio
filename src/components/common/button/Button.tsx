import React from "react";

// SCSS.
import "./Button.scss";

// Components -- common -- button
const css_prefix = "c--c--b__";

// Component props.
interface ButtonProps {
  theme: string;
  title?: string;
  handleClick: () => void;
  icon?: JSX.Element;
  appearence: "primary" | "secondary";
}

const ButtonComponent: React.FunctionComponent<ButtonProps> = ({
  theme,
  title,
  handleClick,
  icon,
  appearence,
}) => {
  return (
    <div
      className={`${css_prefix}main ${
        theme === "dark"
          ? css_prefix + `main-dark-${appearence}`
          : css_prefix + `main-light-${appearence}`
      }`}
      onClick={handleClick}
    >
      {title && (
        <div
          className={`${css_prefix}title ${
            theme === "dark" ? css_prefix + "icon-dark" : ""
          }`}
        >
          {title}
        </div>
      )}

      {icon && <div className={`${css_prefix}icon`}>{icon}</div>}
    </div>
  );
};

export const Button = ButtonComponent;
