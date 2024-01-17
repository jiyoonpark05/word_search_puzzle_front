import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";

export const modalBackground = style({
  position: "absolute",
  zIndex: 1,
  width: "100%",
  height: "100%",
  top: 0,
  backgroundColor: "black",
  opacity: "50%",
});

export const modalWrapper = style({
  position: "absolute",
  width: "100%",
  display: "flex",
  justifyContent: "center",
  zIndex: 2,
  top: "40%",
});

export const modalContainer = recipe({
  base: {
    padding: "1rem 2rem 2rem 2rem",
    background: "#F8F5E5",
    borderRadius: "0.5rem",
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
  padding: "1.5% 0",
  borderRadius: "24px 0 0 24px",
});

export const crossIcon = style({
  width: "1.5rem",
  height: "1.5rem",
  cursor: "pointer",
});

export const modalName = style({
  color: "#6e685b",
  fontSize: "2rem",
  fontWeight: "bold",

  "@media": {
    "screen and (max-width: 600px)": {
      fontSize: "1.5rem",
    },
  },
});

export const buttonArea = style({
  display: "flex",
  flexDirection: "row-reverse",
});

export const buttonConfim = style({
  width: "fit-content",
  padding: "0.25rem 1rem",
  borderRadius: "0.5rem",
  fontSize: "1.2rem",
  backgroundColor: "#80373F",
  color: "white",

  ":hover": {
    cursor: "pointer",
  },

  "@media": {
    "screen and (max-width: 600px)": {
      fontSize: "1rem",
    },
  },
});

export const gameSetting = style({
  display: "flex",
  minWidth: "18rem",
  columnGap: "10%",
  padding: "1rem 0.5rem",
});

export const gameOption = style({
  display: "flex",
});

export const gameOptionSetting = style({
  display: "flex",
  alignItems: "center",
  columnGap: "1rem",
});

export const gameSettingTitle = style({
  display: "flex",
  flexDirection: "column",
  rowGap: "1.5rem",
  color: "#887a67",
  fontSize: "1.5rem",
  "@media": {
    "screen and (max-width: 600px)": {
      fontSize: "1.2rem",
    },
  },
});

export const gameSettingValueWrapper = style({
  display: "flex",
  flexDirection: "column",
  rowGap: "1rem",
  color: "#645531",
  fontSize: "1.5rem",
});

export const gameSettingValue = style({
  display: "flex",
  columnGap: "0.5rem",
  color: "#645531",
  fontSize: "1.5rem",

  "@media": {
    "screen and (max-width: 600px)": {
      fontSize: "1.2rem",
    },
  },
});

export const gameSettingValueItem = recipe({
  base: {
    padding: "0.5rem 1rem",
    borderRadius: "0.5rem",

    ":hover": {
      cursor: "pointer",
      backgroundColor: "#FEE8B4",
      borderRadius: "0.5rem",
    },

    "@media": {
      "screen and (max-width: 600px)": {
        padding: "0.25rem 0.5rem",
      },
    },
  },
  variants: {
    isSelected: {
      true: { backgroundColor: "#FEE8B4", outline: "#7F3840 dotted thick" },
      false: { backgroundColor: "#E5C894" },
    },
  },
});
