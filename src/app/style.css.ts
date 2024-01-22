import { style } from "@vanilla-extract/css";

export const container = style({
  margin: "0 auto",
  padding: "0 2rem",
  minHeight: "100vh",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  height: "100%",
});

export const row = style({
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  height: "50%",
});
