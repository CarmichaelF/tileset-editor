"use client";

import { PropsWithChildren, createContext, useEffect, useState } from "react";

export interface Tile {
  // id: string;
  name: string;
  image: File & {
    width: number;
    height: number;
    src: string;
    x?: number;
    y?: number;
  };
}

interface Tileset {
  tabs: {
    [key: string]: Tile[];
  };
}

interface TilesetContextType {
  tabs: string[];
  activeTileset: number;
  tileset: Tileset;
  addTileset: ({ tile, tab }: { tile: Tile; tab?: string }) => void;
  removeTileset: ({ tile, tab }: { tile: Tile; tab: string }) => void;
  updateTileset: ({ tile, tab }: { tile: Tile; tab: string }) => void;
  handleChangeActiveTileset: (index: number) => void;
  activeTab?: string;
  activeTabIndex: number;
  handleChangeActiveTab: (index: number) => void;
}

export const TilesetContext = createContext({} as TilesetContextType);

export const TilesetProvider = ({ children }: PropsWithChildren) => {
  const [tilesetArray, setTilesetArray] = useState<Tileset>({
    tabs: {},
  } as Tileset);
  const [activeTileset, setActiveTileset] = useState(0);
  const [tabs, setTabs] = useState<string[]>([]);

  const [activeTab, setActiveTab] = useState<string>();
  const [activeTabIndex, setActiveTabIndex] = useState(0);

  const handleChangeActiveTab = (index: number) => {
    setActiveTabIndex(index);
  };

  const addTileset = ({ tile, tab }: { tile: Tile; tab?: string }) => {
    const tabName = tab || `tab-${activeTabIndex + 1}`;
    setTilesetArray((prevTilesetArray) => {
      return {
        ...prevTilesetArray,
        tabs: {
          ...prevTilesetArray.tabs,
          [tabName]: [...(prevTilesetArray.tabs[tabName] || []), tile],
        },
      };
    });
  };

  const removeTileset = ({ tile, tab }: { tile: Tile; tab: string }) => {
    setTilesetArray((prevTilesetArray) => {
      const newTilesetArray = { ...prevTilesetArray };
      newTilesetArray.tabs[tab] = newTilesetArray.tabs[tab].filter(
        (t) => t.name !== tile.name
      );
      return newTilesetArray;
    });
  };

  const updateTileset = ({ tile, tab }: { tile: Tile; tab: string }) => {
    setTilesetArray((prevTilesetArray) => {
      const newTilesetArray = { ...prevTilesetArray };
      newTilesetArray.tabs[tab] = newTilesetArray.tabs[tab].map((t) => {
        if (t.name === tile.name) {
          return tile;
        }
        return t;
      });
      return newTilesetArray;
    });
  };

  const handleChangeActiveTileset = (index: number) => {
    setActiveTileset(index);
  };

  useEffect(() => {
    setTabs(tilesetArray.tabs ? Object.keys(tilesetArray.tabs) : []);
  }, [tilesetArray]);

  useEffect(() => {
    setActiveTab(Object.keys(tilesetArray.tabs)[activeTabIndex]);
  }, [activeTabIndex, tilesetArray]);

  return (
    <TilesetContext.Provider
      value={{
        tabs,
        activeTab,
        activeTabIndex,
        handleChangeActiveTab,
        activeTileset,
        tileset: tilesetArray,
        addTileset,
        removeTileset,
        updateTileset,
        handleChangeActiveTileset,
      }}
    >
      {children}
    </TilesetContext.Provider>
  );
};
