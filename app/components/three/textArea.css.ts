import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";
import { vars } from "../../theme.css";

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
  top: "-10%",
  width: "7rem",
  padding: "8px 12px",
  borderRadius: "20px",
  backgroundColor: vars.colors.yellowBackground,
});

export const options = style({
  padding: "4% 8%",
  textAlign: "center",
  ":hover": {
    cursor: "pointer",
    background: vars.colors.brown,
    opacity: "70%",
    color: vars.colors.white,
    borderRadius: "0.5rem",
  },
});

export const text = style({
  position: "absolute",
  top: "35%",
  left: "10%",
  color: vars.colors.textBubble,
  fontSize: "1.5rem",
});

export const inputBubble = style({
  display: "flex",
  maxWidth: "1000px",
  background: vars.colors.whiteInput,
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
  background: vars.colors.brown,

  ":hover": {
    cursor: "pointer",
  },
});
