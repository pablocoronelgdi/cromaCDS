import { Navy, Neutral, Pink, Blue, Stone } from "../foundations/colors";

const macroTheme = {
  primary: {
    dark: Navy[900],
    main: Navy[800],
    light: Navy[300],
    extraLight: Navy[50],
  },
  secondary: {
    dark: Pink[300],
    main: Pink[700],
    light: Pink[100],
    extraLight: Pink[500],
  },
  tertiary: {
    dark: Blue[700],
    main: Blue[500],
    light: Blue[200],
    extraLight: Blue[50],
  },
  complementary: {
    dark: Stone[300],
    main: Stone[200],
    light: Stone[50],
  },
  text: {
    light: Neutral[100],
    dark: Neutral[1100],
  },
};

export { macroTheme };
