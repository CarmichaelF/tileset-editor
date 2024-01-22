import { globalStyle } from "@vanilla-extract/css";

globalStyle("html, body", {
  margin: 0,
  boxSizing: "border-box",
});

globalStyle(`button, input[type='button']`, {
  border: "none",
  backgroundColor: "transparent",
  cursor: "pointer",
  padding: 0,
});
