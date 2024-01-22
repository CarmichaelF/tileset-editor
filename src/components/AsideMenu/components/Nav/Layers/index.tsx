"use client";

import { container, layerButton } from "./style.css";
import { useLayers } from "@/hooks/useLayers";


export const Layers = () => {
  const {
    activeLayer,
    layers: renderedLayers,
    handleChangeActiveLayer,
  } = useLayers();

  return (
    <div className={container}>
      <ul>
        {renderedLayers.map((layer, index) => {
          return (
            <li key={layer}>
              <button
                className={
                  layerButton[activeLayer === index ? "active" : "default"]
                }
                onClick={() => handleChangeActiveLayer(index)}
              >
                {layer}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
