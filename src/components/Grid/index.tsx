"use client";

import { useGrid } from "@/hooks/useGrid";
import { Droppable } from "../Droppable";
import { container, grid, gridHeight, gridWidth } from "./style.css";
import { assignInlineVars } from "@vanilla-extract/dynamic";
import { useEffect } from "react";
import { Tile } from "@/context/tileset";

export interface GridProps {
  width: number;
  height: number;
  isDroppedId: string;
  data: Tile;
}

export const Grid = ({ isDroppedId, width, height, data }: GridProps) => {
  const { size, addTile, cells, createGrid } = useGrid();
  const cols = width / size;
  const rows = height / size;

  useEffect(() => {
    createGrid({ cols, rows });
  }, [width, height]);

  useEffect(() => {
    if (isDroppedId) {
      addTile({
        tile: data,
        id: isDroppedId,
      });
    }
  }, [isDroppedId]);

  return (
    <div className={container}>
      <div
        className={grid}
        style={assignInlineVars({
          [gridWidth]: `repeat(${cols}, ${size}px)`,
          [gridHeight]: `repeat(${rows}, ${size}px)`,
        })}
      >
        {cells.map(({ id, tile }, index) => {
          return (
            <Droppable
              id={id}
              key={index}
              style={{
                display: "flex",
                alignItems: "flex-end",
                justifyContent: "flex-start",
              }}
            >
              {tile ? (
                <img key={index} src={tile?.image.src} alt={tile?.name} />
              ) : (
                <div
                  style={{
                    width: size,
                    height: size,
                    boxShadow: "0px 0px 0px 0.5px rgba(0,0,0,0.2) inset",
                  }}
                />
              )}
            </Droppable>
          );
        })}
      </div>
    </div>
  );
};
