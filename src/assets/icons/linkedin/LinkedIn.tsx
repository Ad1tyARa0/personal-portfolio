import React from "react";

// SCSS.
import "./LinkedIn.scss";

// assets -- icons -- linkedin
const css_prefix = "a--i--l__";

// Component props.
interface LinkedInProps {
  height?: string;
  width?: string;
  theme: string;
  link: string;
}

const LinkedInComponent: React.FunctionComponent<LinkedInProps> = ({
  height = "20px",
  width = "20px",
  theme,
  link,
}) => {
  return (
    <a href={link} target="_blank">
      <div
        className={`${css_prefix}main`}
        style={{ height: height, width: width }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          role="img"
          viewBox="0 0 24 24"
          fill="none"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={`${css_prefix}linkedin ${
            theme === "dark"
              ? css_prefix + "linkedin-dark"
              : css_prefix + "linkedin-light"
          }`}
        >
          <title>LinkedIn</title>

          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>

          <rect x="2" y="9" width="4" height="12"></rect>

          <circle cx="4" cy="4" r="2"></circle>
        </svg>
      </div>
    </a>
  );
};

export const LinkedIn = LinkedInComponent;
