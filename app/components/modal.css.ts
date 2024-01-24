import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";
import { vars } from "../theme.css";

export const modalBackground = style({
  position: "absolute",
  zIndex: 20,
  width: "100%",
  height: "100%",
  top: 0,
  backgroundColor: vars.colors.black,
  opacity: "50%",
});

export const modalWrapper = style({
  position: "absolute",
  width: "100%",
  display: "flex",
  justifyContent: "center",
  zIndex: 30,
  top: "40%",
});

export const modalContainer = recipe({
  base: {
    padding: "1rem 2rem",
    background: vars.colors.whiteInput,
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
  color: vars.colors.textH1,
  fontSize: "2rem",
  fontWeight: "bold",

  "@media": {
    "screen and (max-width: 600px)": {
      fontSize: "1.5rem",
    },
  },
});

export const message = style({});

export const buttonArea = style({
  display: "flex",
  justifyContent: "center",
  columnGap: "1rem",
  paddingTop: "1.5rem",
});

export const button = recipe({
  base: {
    width: "fit-content",
    padding: "0.25rem 1rem",
    borderRadius: "0.5rem",
    fontSize: "1.2rem",

    color: vars.colors.white,

    ":hover": {
      cursor: "pointer",
    },

    "@media": {
      "screen and (max-width: 600px)": {
        fontSize: "1rem",
      },
    },
  },
  variants: {
    type: {
      confirm: {},
      cancel: {
        backgroundColor: "#df852e",
      },
      home: {
        backgroundColor: "#0cc6b6",
        ":before": {
          content: "-",
          width: "200px",
          height: "200px;",
          paddingRight: "0.3rem",
        },
      },
      result: {
        backgroundColor: "#66d267",
      },
    },
  },
});

export const buttonConfim = style({
  width: "fit-content",
  padding: "0.25rem 1rem",
  borderRadius: "0.5rem",
  fontSize: "1.2rem",
  backgroundColor: vars.colors.brown,
  color: vars.colors.white,

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
  color: vars.colors.textH1,
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
  fontSize: "1.5rem",
});

export const gameSettingValue = style({
  display: "flex",
  columnGap: "0.5rem",
  color: vars.colors.textH2,
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
      backgroundColor: vars.colors.yellowBackground,
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
      true: {
        backgroundColor: vars.colors.yellowBackground,
        outline: `${vars.colors.brown} dotted thick`,
      },
      false: { backgroundColor: vars.colors.lightBrown },
    },
  },
});
