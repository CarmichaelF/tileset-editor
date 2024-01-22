import { createVar, style } from "@vanilla-extract/css";

export const gridWidth = createVar();
export const gridHeight = createVar();

export const container = style({
  height: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

export const grid = style({
  display: "grid",
  gridTemplateColumns: gridWidth,
  gridTemplateRows: gridHeight,
  overflow: "hidden",
  border: "1px solid #000",
});