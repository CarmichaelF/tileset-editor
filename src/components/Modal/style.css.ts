import { globalStyle, style } from "@vanilla-extract/css";

export const container = style({
  position: "fixed",
  top: "0",
  left: "-100vw",
  width: "100vw",
  height: "100vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  transition: "0.3s ease-in-out",
  pointerEvents: "none",
  visibility: "hidden",
});

export const containerActive = style({
  left: "0",
  pointerEvents: "all",
  visibility: "visible",
});

globalStyle(`${container} .overlay`, {
  position: "fixed",
  top: "0",
  left: "0",
  width: "100%",
  height: "100%",
  backgroundColor: "rgba(0, 0, 0, 0.5)",
  zIndex: 100,
  opacity: 0,
  transition: "0.3s ease-in-out",
  pointerEvents: "none",
  visibility: "hidden",
});

globalStyle(`${containerActive} .overlay`, {
  opacity: 1,
  pointerEvents: "all",
  visibility: "visible",
});

export const modal = style({
  margin: "0 auto",
  minWidth: "400px",
  minHeight: "400px",
  padding: "0 2rem",
  backgroundColor: "white",
  zIndex: 200,
});
