import React from "react";

// SCSS.
import "./Github.scss";

// assets -- icon -- githhub
const css_prefix = "a--i--g__";

// Component props.
interface GithubProps {
  height?: string;
  width?: string;
  theme: string;
  link: string;
}

const GithubComponent: React.FunctionComponent<GithubProps> = ({
  height = "20px",
  width = "20px",
  theme,
  link,
}) => {
  return (
    <a href={link}>
      <div
        className={`${css_prefix}main`}
        style={{ height: height, width: width }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          role="img"
          viewBox="0 0 24 24"
          fill="none"
          // stroke="#90fe22"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={`${css_prefix}github ${
            theme === "dark"
              ? css_prefix + "github-dark"
              : css_prefix + "github-light"
          }`}
        >
          <title>GitHub</title>

          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
        </svg>
      </div>
    </a>
  );
};

export const Github = GithubComponent;
