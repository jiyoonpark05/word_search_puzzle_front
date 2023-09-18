import { style } from "@vanilla-extract/css";
import { vars } from "./theme.css";

export const background = style({
  minWidth: 560,
  backgroundColor: vars.colors.primary,
  margin: 0,
  padding: 0,
});

export const mainStlye = style({
  height: "100vh",
});
