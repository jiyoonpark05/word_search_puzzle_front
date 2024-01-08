import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";

export const modalWrapper = style({
  position: "absolute",
  width: "100%",
  display: "flex",
  justifyContent: "center",
  zIndex: "1",
  top: "50%",
  borderRadius: "8px",
});

export const modalContainer = recipe({
  base: {
    padding: "8px 16px",
    background: "#F8F5E5",
    marginBottom: "1rem",
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
  background: "black",
  padding: "1.5% 0",
  borderRadius: "24px 0 0 24px",
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
  rowGap: "1rem",
  color: "#887a67",
  fontSize: "1.5rem",
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
});

export const gameSettingValueItem = style({
  background: "#E5C894",
  padding: "0.5rem 1rem",
  borderRadius: "0.5rem",
});
