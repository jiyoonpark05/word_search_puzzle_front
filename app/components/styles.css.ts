import { style } from "@vanilla-extract/css";
import { vars } from "../theme.css";

export const headerStyle = style({
  display: "flex",
  justifyContent: "space-between",
  backgroundColor: vars.colors.yellow,
  padding: "12px",
});

export const wrapper = style({
  display: "flex",
  columnGap: "8px",
});

export const headerMenu = style({
  cursor: "pointer",
});

export const chipStyle = style({});
