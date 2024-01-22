import { style, globalStyle, styleVariants } from "@vanilla-extract/css";

export const container = style({
  padding: "1rem 0",
});

globalStyle(`${container} > ul`, {
  listStyle: "none",
  padding: 0,
  margin: 0,
});

export const layerButtonBase = style({
  padding: "0.5rem",
  borderBottom: "1px solid #eee",
  transition: "background-color 0.2s ease-in-out",
  cursor: "pointer",
  width: "100%",
  display: "flex",
  alignItems: "flex-start",

  selectors: {
    "&:hover": {
      backgroundColor: "#eee",
    },
  },
});

export const layerButton = styleVariants({
  default: [
    layerButtonBase,
    {
      backgroundColor: "none",
    },
  ],
  active: [
    layerButtonBase,
    {
      backgroundColor: "#eee",
    },
  ],
});
