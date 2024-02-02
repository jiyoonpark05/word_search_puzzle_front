import { globalFontFace, style } from "@vanilla-extract/css";
import { vars } from "./theme.css";
const comicSans = "GlobalComicSans";

globalFontFace(comicSans, {
  src: 'local("Comic Sans MS")',
});

export const font = style({
  fontFamily: comicSans,
});

export const background = style({
  backgroundColor: "#58BBA8",
  margin: 0,
  padding: 0,
  fontFamily: comicSans,
});

export const mainStlye = style({
  height: "calc(100vh - 43px)",
});
