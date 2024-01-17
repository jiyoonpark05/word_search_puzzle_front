import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";

export const playWrapper = style({
  width: "100%",
  display: "flex",
  flexDirection: "row",

  "@media": {
    "screen and (max-width: 700px)": {
      flexDirection: "column",
    },
  },
});

export const playContainer = recipe({});
