import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";
import backgroundImg from "@/public/images/background.png";
export const playWrapper = style({
  display: "flex",
  justifyContent: "space-evenly",
  flexDirection: "row",
  padding: "10px",

  "@media": {
    "screen and (max-width: 900px)": {
      flexDirection: "column",
      rowGap: "1rem",
    },
  },
});

export const playContainer = recipe({});
