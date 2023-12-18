import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";

export const modalWrapper = style({
  position: "absolute",
  width: "100%",
  display: "flex",
  justifyContent: "center",
  zIndex: "1",
  top: "5%",
});

export const modalContainer = recipe({
  base: {
    width: "89%",
    padding: "8px 16px",
    background: "#F8F5E5",
  },
  variants: {
    size: {
      small: {},
      medium: {},
      large: {},
    },
  },
});

export const closeHeader = style({
  display: "flex",
  justifyContent: "right",
});
export const gameSetting = style({});

export const gameOption = style({
  display: "flex",
});

export const gameOptionTitle = style({
  fontSize: "1.5rem",
  paddingRight: "2rem",
});

export const gameOptionSetting = style({
  display: "flex",
  alignItems: "center",
  columnGap: "1rem",
});

export const gameOptionValue = style({
  fontSize: "1.5rem",
});
