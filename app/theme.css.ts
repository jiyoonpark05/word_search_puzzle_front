import { createTheme } from "@vanilla-extract/css";

export const [themeClass, vars] = createTheme({
  colors: {
    black: "#000000",
    white: "#FFFFFF",
    whiteInput: "#F8F6E5",
    primary: "#77D5C2",
    yellow: "#F5CA5F",

    yellowBackground: "#FEE8B4",
    lightBrown: "#E5C894",
    brown: "#81353F",
    textH1: "#645531",
    textH2: "#887A67",
    textH3: "#F7F6E6",
  },
});
