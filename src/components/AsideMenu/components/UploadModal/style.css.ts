import { style, globalStyle } from "@vanilla-extract/css";

export const container = style({
  display: "flex",
  flexDirection: "column",
  gap: "1rem",
});

export const tilesetContainer = style({
  display: "flex",
  flexDirection: "column",
});

export const modalTabs = style({
  width: "100%",
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
});

globalStyle(`${modalTabs} .tab-content`, {
  display: "flex",
  flexDirection: "column",
  gap: "1rem",
  padding: "1rem 0",
});
