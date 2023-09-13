import { style } from "@vanilla-extract/css";
import { url } from "inspector";
import { vars } from "@app/theme.css";

export const textArea = style({
  position: "absolute",
  top: "70%",
  left: "0",
  width: "100%",
  height: "30%",
});

export const textBubble = style({
  display: "flex",
  width: "100%",
  height: 100,
  justifyContent: "center",
  alignItems: "center",
});

export const defaultBubble = style({
  maxHeight: "90%",
  aspectRatio: "16/9",
});
