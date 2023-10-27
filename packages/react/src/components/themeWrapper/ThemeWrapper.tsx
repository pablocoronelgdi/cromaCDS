import React, { ReactNode } from "react";
import { ThemeProvider } from "styled-components";
import * as Theme from "../../theme/theme";

type ThemeWrapperProps = {
  $theme: string;
  children: ReactNode;
};

const getMacroTheme = ($theme: string) => {
  const keys = Object.keys(Theme);
  let selectedTheme = null;
  keys.map((theme) => {
    if (theme === $theme) {
      selectedTheme = Theme[$theme as keyof Object];
    }
  });
  return selectedTheme ? selectedTheme : Theme["macro"];
};

const ThemeWrapper: React.FC<ThemeWrapperProps> = ({
  children,
  $theme = "macro",
}) => {
  console.log(getMacroTheme($theme));
  return (
    <>
      <ThemeProvider theme={getMacroTheme($theme)}>
        <>{children}</>
      </ThemeProvider>
    </>
  );
};

export default ThemeWrapper;
