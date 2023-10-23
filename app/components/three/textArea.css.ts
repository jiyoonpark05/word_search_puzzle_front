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
    width: "100%",
    maxWidth: "1000px",
    aspectRatio: "16/9",
    justifyContent: "center",
  },
  variants: {
    type: {
      default: {
        padding: "0% 13% 0 12%",
        maxHeight: "90%",
      },
      select: {
        padding: "0% 3% 0 10%",
        marginBottom: "2rem",
        maxHeight: "110%",
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
  top: "10%",
  right: "2.5rem",
  width: "7rem",
  height: "5rem",
  backgroundColor: "red",
});

export const options = style({
  padding: "5% 10%",
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
