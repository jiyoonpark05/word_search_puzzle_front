import { style } from "@vanilla-extract/css";
import { vars } from "../../theme.css";

export const resultContainer = style({
  display: "flex",
  border: "solid 1.5px #928e83 ",
  borderRadius: "4px",
  padding: "1rem 0.5rem",
});

export const wrapper = style({});

export const setting = style({
  display: "flex",
  columnGap: "1rem",
});

export const settingTitle = style({
  color: "#7e725c",
});

export const settingValue = style({
  color: "#7e725c",
  fontWeight: 500,
});

export const bar = style({
  width: "2px",
  backgroundColor: "#928e83",
  margin: "0 15px 0 30px",
});

export const time = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "#837156",
  fontSize: "24px",
  fontWeight: 700,
});
