import { style, styleVariants } from "@vanilla-extract/css";

export const tabsContainer = style({
  width: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  justifyContent: "flex-start",
  borderBottom: "1px solid #eee",
});

export const tabButtonBase = style({
  padding: "0.5rem",
  transition: "0.2s ease-in-out",
  cursor: "pointer",

  selectors: {
    "&:hover": {
      backgroundColor: "#eee",
    },
  },
});

export const tabButton = styleVariants({
  default: [
    tabButtonBase,
    {
      backgroundColor: "none",
    },
  ],
  active: [
    tabButtonBase,
    {
      backgroundColor: "#eee",
    },
  ],
});
