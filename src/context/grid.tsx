"use client";

import { createContext, useState } from "react";
import { Tile } from "./tileset";

interface Cell {
  id: string;
  tile?: Tile;
}

interface GridContextType {
  cells: Cell[];
  createGrid: ({ cols, rows }: { cols: number; rows: number }) => void;
  addTile: ({ tile, id }: { tile: Tile; id: string }) => void;
  size: number;
  handleChangeSize: (size: number) => void;
}

export const GridContext = createContext<GridContextType>(
  {} as GridContextType
);

export const GridProvider = ({ children }) => {
  const [size, setSize] = useState(16);
  const [cells, setCells] = useState<Cell[]>([] as Cell[]);
  const createGrid = ({ cols, rows }: { cols: number; rows: number }) => {
    const arraySize = Array(cols * rows).fill(0);

    const mappedCells = arraySize.map((_, index) => {
      const id = `Droppable-grid-${index}`;
      return {
        id,
      };
    });

    setCells(mappedCells);
  };

  const addTile = ({ tile, id }: { tile: Tile; id: string }) => {
    setCells((prevCells) => {
      return prevCells.map((cell) => {
        if (cell.id === id) {
          return {
            ...cell,
            tile,
          };
        }
        return cell;
      });
    });
  };

  const handleChangeSize = (size: number) => {
    setSize(size);
  };

  return (
    <GridContext.Provider value={{ cells, createGrid, addTile, size, handleChangeSize }}>
      {children}
    </GridContext.Provider>
  );
};
