import { TilesetContext } from "@/context/tileset";
import { useContext } from "react";

export const useTileset = () => {
  const context = useContext(TilesetContext);
  if (!context)
    throw new Error("useTileset must be used within a AppAuthProvider");
  return context;
};
