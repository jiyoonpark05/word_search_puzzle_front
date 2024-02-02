import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";
import { vars } from "../../theme.css";

export const playWrapper = style({
  display: "grid",
  gridTemplateColumns: "2fr 1fr",
  padding: "8px 5%",

  "@media": {
    "screen and (max-width: 1000px)": {
      gridTemplateColumns: "auto",
      rowGap: "1rem",
      padding: "8px",
    },
  },
});

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
  color: vars.colors.black,
  fontWeight: 600,
  fontSize: "16px",
  padding: "8px 16px",
});

export const wordFound = style({
  color: vars.colors.textH4,
  fontWeight: 600,
  fontSize: "16px",
  padding: "8px 16px",
  textDecoration: "line-through",
});

export const playContainer = recipe({});
