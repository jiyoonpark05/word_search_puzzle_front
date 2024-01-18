import { style } from "@vanilla-extract/css";
import { vars } from "./theme.css";

export const background = style({
  backgroundColor: "#58BBA8",
  // backgroundColor: vars.colors.white,
  margin: 0,
  padding: 0,
});

export const mainStlye = style({
  height: "calc(100vh - 43px)",
});
