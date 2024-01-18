import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";
import { url } from "inspector";
import backgroundImg from "@/public/images/background.png";
export const playWrapper = style({
  display: "flex",
  width: "100%",
  height: "100%",
  flexDirection: "row",
  "@media": {
    "screen and (max-width: 700px)": {
      flexDirection: "column",
    },
  },
});

export const playContainer = recipe({});
