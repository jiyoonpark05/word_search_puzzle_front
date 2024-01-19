import { style } from "@vanilla-extract/css";
import { vars } from "../../theme.css";

export const container = style({
  flexBasis: "30%",
});

export const wordListTitle = style({
  color: vars.colors.whiteInput,
  fontSize: "24px",
});

export const wordListWrapper = style({
  overflow: "scroll",
  padding: "4px 8px",
  borderRadius: "8px",
  background: vars.colors.whiteInput,
  boxShadow: "0 4px 4px 0px rgba(0, 0, 0, 0.3)",
});

export const word = style({
  fontWeight: 600,
  fontSize: "16px",
  padding: "8px 16px",
});
