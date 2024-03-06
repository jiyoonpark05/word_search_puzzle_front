import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";
import { vars } from "../../theme.css";

export const container = style({
  display: "flex",
  justifyContent: "center",
});

export const profile = style({
  width: "6rem",
  height: "6rem",
  borderRadius: "100%",
  backgroundColor: "black",
});
