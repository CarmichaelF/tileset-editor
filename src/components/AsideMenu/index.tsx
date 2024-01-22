"use client";

import {
  IoAddOutline,
  IoArrowUp,
  IoArrowDown,
  IoCloseOutline,
} from "react-icons/io5";
import { container } from "./style.css";
import { Nav } from "./components/Nav";
import { Layers } from "./components/Nav/Layers";
import { useLayers } from "@/hooks/useLayers";
import { Tileset } from "./components/Nav/Tileset";
import { useTileset } from "@/hooks/useTileset";
import { Modal } from "../Modal";
import { useModal } from "@/hooks/useModal";
import { UploadModal } from "./components/UploadModal";

interface AsideMenuProps {}

export const AsideMenu = () => {
  const { handleOpen } = useModal();
  const { handleChangeOrder, activeLayer, addLayer, layers } = useLayers();

  return (
    <aside className={container}>
      <div>
        <Nav
          items={[
            {
              icon: <IoAddOutline size={20} />,
              onClick: () => {
                addLayer("layer" + (layers.length + 1));
              },
            },
            {
              icon: <IoArrowUp size={20} />,
              onClick: () => {
                handleChangeOrder(activeLayer, "up");
              },
            },
            {
              icon: <IoArrowDown size={20} />,
              onClick: () => {
                handleChangeOrder(activeLayer, "down");
              },
            },
            {
              icon: <IoCloseOutline size={20} />,
              onClick: () => {},
            },
          ]}
        >
          <Layers />
        </Nav>
      </div>
      <div>
        <Nav
          items={[
            {
              icon: <IoAddOutline size={20} />,
              onClick: handleOpen,
            },
          ]}
        >
          <Tileset />
        </Nav>
        <UploadModal />
      </div>
    </aside>
  );
};
