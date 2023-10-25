import React from "react";

// Components.
import { Nav } from "../components/nav/Nav";
import { ThemeButton } from "../components/common/theme-button/ThemeButton";

// Contexts.
import { useThemeContext } from "../context/ThemeContext";
import ActiveSectionContextProvider from "../context/ActiveSessionContext";

// SCSS.
import "./Layout.scss";

const css_prefix = "l__";

// Component props.
interface LayoutProps {
  children: JSX.Element;
}

const LayoutComponent: React.FunctionComponent<LayoutProps> = ({
  children,
}) => {
  const { theme } = useThemeContext();

  return (
    <ActiveSectionContextProvider>
      <main
        className={`${css_prefix}main ${
          theme === "dark" ? css_prefix + "main-dark" : ""
        }`}
      >
        <Nav />

        {children}
      </main>
    </ActiveSectionContextProvider>
  );
};

export const Layout = LayoutComponent;
