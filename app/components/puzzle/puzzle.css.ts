import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";
import { RepeatWrapping } from "three";

export const boardContainer = style({
  position: "relative",
  width: "100%",
  height: "100%",
});

export const grid = style({
  position: "absolute",
  zIndex: 10,
  width: "100%",
  height: "100%",
  display: "grid",
  rowGap: 0,
  columnGap: 0,
  gridTemplateColumns: "repeat(10,1fr)",
  gridTemplateRows: "repeat(10,1fr)",
  cursor: "pointer",
});

export const wordTitle = style({
  userSelect: "none",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  fontSize: "2rem",
  aspectRatio: 1,
  fontWeight: 600,
});
