import { style } from "@vanilla-extract/css";
import { url } from "inspector";
import { vars } from "@app/theme.css";

export const textArea = style({
  position: "absolute",
  top: "70%",
  left: "0",
  height: "30%",
  width: "100%",
});

export const textBubble = style({
  width: "100%",
  height: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

export const defaultBubble = style({
  width: "100%",
  maxWidth: "1000px",
  maxHeight: "90%",
  aspectRatio: "16/9",
  margin: "0 3rem",
});

export const text = style({
  position: "absolute",
});
