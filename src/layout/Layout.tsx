import React from "react";

// SCSS.
import "./Layout.scss";
import ThemeProvider, {
  ThemeContext,
  useThemeContext,
} from "../context/ThemeContext";
import ActiveSectionContextProvider from "../context/ActiveSessionContext";
import { ThemeButton } from "../components/common/theme-button/ThemeButton";
import { Nav } from "../components/nav/Nav";

const css_prefix = "l__";

// Component props.
interface LayoutProps {
  children: JSX.Element;
}

const LayoutComponent: React.FunctionComponent<LayoutProps> = ({
  children,
}) => {
  const { theme } = useThemeContext();

  console.log(theme);

  return (
    <ThemeProvider>
      <ActiveSectionContextProvider>
        <Nav />

        <main
          className={`${css_prefix}main ${
            theme === "dark" ? css_prefix + "main-dark" : ""
          }`}
        >
          {children}
        </main>

        <div className={`${css_prefix}theme-button`}>
          <ThemeButton />
        </div>
      </ActiveSectionContextProvider>
    </ThemeProvider>
  );
};

export const Layout = LayoutComponent;
