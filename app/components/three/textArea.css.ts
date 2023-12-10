import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";

export const textArea = style({
  position: "absolute",
  top: "70%",
  left: "0",
  height: "30%",
  width: "100%",
});

export const textBubble = style({
  display: "flex",
  width: "100%",
  height: "100%",
  justifyContent: "center",
  alignItems: "center",
});

export const bubbleWrapper = recipe({
  base: {
    display: "flex",
    position: "absolute",
    width: "100%",
    maxWidth: "1000px",
    aspectRatio: "16/9",
    justifyContent: "center",
  },
  variants: {
    type: {
      default: {
        maxHeight: "90%",
      },
      select: {
        maxHeight: "90%",
      },
    },
  },
});

export const bubble = style({
  width: "100%",
  height: "100%",
  maxWidth: "900px",
});

export const selectWrapper = style({
  position: "absolute",
  right: "3%",
  width: "7rem",
  padding: "8px 12px",
  borderRadius: "20px",
  backgroundColor: "#FEE8B4",
});

export const options = style({
  padding: "4% 8%",
  textAlign: "center",
  ":hover": {
    cursor: "pointer",
    background: "#81353F",
    opacity: "70%",
    color: "white",
    borderRadius: "0.5rem",
  },
});

export const text = style({
  position: "absolute",
  top: "50%",
  left: "25%",
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
  outline: "none",
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
