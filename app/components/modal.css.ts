import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";
import { vars } from "../theme.css";
import cross from "../../public/icons/cross.png";

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
    padding: "1rem 1rem 1rem 1rem",
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
  justifyContent: "space-between",
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

export const message = style({
  textAlign: "center",
  color: "#837156",
  paddingTop: "0.5rem",
});

export const wordGrid = style({
  display: "grid",
  gridTemplateColumns: "repeat(2,1fr)",
  padding: "8px",
  border: "1px solid #7e725c",
  marginTop: "10px",
});

export const word = style({
  // color: "#835a2a",
});

export const buttonArea = style({
  display: "flex",
  justifyContent: "center",
  columnGap: "1rem",
  paddingTop: "1.5rem",
});

export const buttonText = style({
  textDecoration: "none",
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
      cancel: {
        backgroundColor: "#df852e",
      },
      home: {
        backgroundColor: "#0cc6b6",

        ":hover": {
          backgroundColor: "#17d6c3",
        },

        ":before": {
          // content: "url(icons/cross.png)",
          width: "200px",
          height: "200px;",
          paddingRight: "0.3rem",
        },
      },
      confirm: {
        backgroundColor: "#66d267",

        ":hover": {
          backgroundColor: "#68d868",
        },

        ":before": {
          // content: "url(icons/cross.png)",
          width: "200px",
          height: "200px;",
          paddingRight: "0.3rem",
        },
      },
    },
  },
});
