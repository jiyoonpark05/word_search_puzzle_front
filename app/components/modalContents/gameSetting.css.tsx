import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";
import { vars } from "../../theme.css";

export const wrapper = style({});

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
