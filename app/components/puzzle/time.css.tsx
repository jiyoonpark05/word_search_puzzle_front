import { background } from "@/app/layout.css";
import { style } from "@vanilla-extract/css";
import { vars } from "../../theme.css";

export const container = style({
  paddingBottom: "0.5rem",
});

export const leftTime = style({
  display: "flex",
  justifyContent: "center",
  color: vars.colors.black,
  fontSize: "48px",
  fontWeight: 600,
});

export const customProgress = style({
  width: "100%",
  height: "30px",
  borderRadius: "8px",

  "::-webkit-progress-bar": {
    backgroundColor: "#f8f6e5",
    borderRadius: "4px",
  },

  "::-webkit-progress-value": {
    backgroundColor: " #f5ca5f",
    borderRadius: "4px",
  },
});

export const buttonComplete = style({
  fontSize: "24px",
  textAlign: "center",
  fontWeight: 600,
  color: vars.colors.textH3,
  backgroundColor: "#075663",
  borderRadius: "8px",
  padding: "0.5rem 0 ",
  margin: "0.5rem 0",
  ":hover": { cursor: "pointer", backgroundColor: "#065f6d" },
});
