"use client";

import { GridProvider } from "@/context/grid";
import { LayersProvider } from "@/context/layers";
import { ModalProvider } from "@/context/modal";
import { TilesetProvider } from "@/context/tileset";
import { PropsWithChildren } from "react";

export const Providers = ({ children }: PropsWithChildren) => {
  return (
    <LayersProvider>
      <ModalProvider>
        <GridProvider>
          <TilesetProvider>{children}</TilesetProvider>
        </GridProvider>
      </ModalProvider>
    </LayersProvider>
  );
};
