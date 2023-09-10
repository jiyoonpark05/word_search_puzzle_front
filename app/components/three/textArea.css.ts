import { style } from "@vanilla-extract/css";
import { vars } from "../../theme.css";

export const textArea = style({
  position: "absolute",
  top: "70%",
  left: "0",
  width: "100%",
  height: "30%",
});

export const textBubble = style({
  backgroundImage: "./textbubble_default.png",
});
