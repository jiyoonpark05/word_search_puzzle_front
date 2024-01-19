import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";
import { url } from "inspector";
import backgroundImg from "@/public/images/background.png";
export const playWrapper = style({
  display: "flex",
  justifyContent: "space-between",
  height: "100%",
  flexDirection: "row",
  padding: "10px",

  "@media": {
    "screen and (max-width: 700px)": {
      flexDirection: "column",
    },
  },
});

export const playContainer = recipe({});
