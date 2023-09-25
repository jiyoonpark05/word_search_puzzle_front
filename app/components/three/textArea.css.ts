import { style } from "@vanilla-extract/css";
import { url } from "inspector";
import { vars } from "@app/theme.css";
import { transcode } from "buffer";

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

export const inputBubble = style({
  display: "flex",
  maxWidth: "1000px",
  background: "#fef6e0",
  borderRadius: "1rem",
  padding: "1rem 1rem",
  margin: "12rem auto",
});

export const input = style({
  width: "100%",
  background: "transparent",
  border: "0px",
});

export const sendButton = style({
  width: "4rem",
  height: "2rem",
  borderRadius: "0.5rem",
  background: "#81343f",

  ":hover": {
    // #81343f
  },
});
