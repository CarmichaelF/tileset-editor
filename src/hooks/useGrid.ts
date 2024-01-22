import { GridContext } from "@/context/grid";
import { useContext } from "react";

export const useGrid = () => {
  const context = useContext(GridContext);
  if (!context)
    throw new Error("useGrid must be used within a AppAuthProvider");
  return context;
};
