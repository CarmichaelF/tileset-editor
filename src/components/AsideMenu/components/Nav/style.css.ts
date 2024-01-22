import { style, globalStyle } from "@vanilla-extract/css";

export const navbar = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "1rem",
  borderBottom: "1px solid #eee",
  gap: "1rem",
  listStyle: "none",
});

globalStyle(`${navbar} label`, {
  cursor: "pointer",
});

globalStyle(`${navbar} input`, {
  display: "none",
});