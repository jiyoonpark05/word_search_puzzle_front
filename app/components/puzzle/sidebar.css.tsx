import { style } from "@vanilla-extract/css";
import { vars } from "../../theme.css";

export const container = style({
  flexBasis: "30%",
});

export const timmerWrapper = style({});

export const wordListTitle = style({
  padding: "1rem 1rem",
  background: "black",
});

export const wordListWrapper = style({
  maxHeight: "calc(100vh - 25%)",
  overflow: "scroll",
  background: vars.colors.yellowBackground,
});

export const word = style({
  fontWeight: 600,
  fontSize: "18px",
  padding: "1rem 1rem",
});
