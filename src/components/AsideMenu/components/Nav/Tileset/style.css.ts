import { style, globalStyle } from "@vanilla-extract/css";

export const container = style({
  padding: "1rem 0",
});

export const tilesetContainer = style({
  width: "100%",
  display: "grid",
  gridTemplateColumns: "repeat(auto-fill, minmax(32px, 1fr))",
  borderBottom: "1px solid #eee",
  padding: "1rem 0",
});