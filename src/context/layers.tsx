"use client";

import { PropsWithChildren, createContext, useState } from "react";

interface LayersContextType {
  activeLayer: number;
  layers: string[];
  addLayer: (layer: string) => void;
  removeLayer: (layer: string) => void;
  updateLayer: (layer: string, newLayer: string) => void;
  handleChangeOrder: (index: number, direction: "up" | "down") => void;
  handleChangeActiveLayer: (index: number) => void;
}

export const LayersContext = createContext({} as LayersContextType);

export const LayersProvider = ({ children }: PropsWithChildren) => {
  const [activeLayer, setActiveLayer] = useState(0);

  const [layers, setLayers] = useState<string[]>([]);

  const addLayer = (layer: string) => {
    setLayers((layers) => [...layers, layer]);
  };

  const removeLayer = (layer: string) => {
    setLayers((layers) => layers.filter((l) => l !== layer));
  };

  const updateLayer = (layer: string, newLayer: string) => {
    setLayers((layers) => layers.map((l) => (l === layer ? newLayer : l)));
  };

  const handleChangeOrder = (index: number, direction: "up" | "down") => {
    if(layers.length <= 1) return;
    const upIndex = index - 1;
    const downIndex = index + 1;
    if (direction === "up" && upIndex < 0) return;
    if (direction === "down" && downIndex > layers.length - 1) return;
    const newLayers = [...layers];
    const layer = newLayers[index];
    newLayers.splice(index, 1);
    newLayers.splice(direction === "up" ? index - 1 : index + 1, 0, layer);
    setLayers(newLayers);
    setActiveLayer(direction === "up" ? index - 1 : index + 1);
  };

  const handleChangeActiveLayer = (index: number) => {
    setActiveLayer(index);
  };

  return (
    <LayersContext.Provider
      value={{
        activeLayer,
        layers,
        addLayer,
        removeLayer,
        updateLayer,
        handleChangeOrder,
        handleChangeActiveLayer,
      }}
    >
      {children}
    </LayersContext.Provider>
  );
};
