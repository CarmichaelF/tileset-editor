import { LayersContext } from "@/context/layers";
import { useContext } from "react";

export const useLayers = () => {
  const context = useContext(LayersContext);
  if (!context)
    throw new Error("useLayers must be used within a AppAuthProvider");
  return context;
};
