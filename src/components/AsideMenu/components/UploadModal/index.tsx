import { Modal } from "@/components/Modal";
import { container, modalTabs, tilesetContainer } from "./style.css";
import { useTileset } from "@/hooks/useTileset";
import { useModal } from "@/hooks/useModal";
import { Tabs } from "@/components/Tabs";
import { useState } from "react";
import { useGrid } from "@/hooks/useGrid";

export function UploadModal() {
  const { size } = useGrid();
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const { handleClose } = useModal();

  const { addTileset, activeTab, tileset } = useTileset();
  const handleCollectionOfImage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files[0];
    const img = new Image();
    img.src = URL.createObjectURL(file);
    img.onload = () => {
      addTileset({
        tab: activeTab,
        tile: {
          name: activeTab
            ? "tileset" + (tileset.tabs[activeTab].length + 1)
            : "tileset1",
          image: {
            ...file,
            width: img.width,
            height: img.height,
            src: URL.createObjectURL(file),
          },
        },
      });
      handleClose();
    };
  };

  const handleTilesetImage = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files[0];
    const img = new Image();
    img.src = URL.createObjectURL(file);
    img.onload = () => {
      const imagePieces = [];
      const rows = img.height / size;
      const columns = img.width / size;
      for (let x = 0; x < rows; x++) {
        for (let y = 0; y < columns; y++) {
          const canvas = document.createElement("canvas");
          canvas.width = size;
          canvas.height = size;
          const context = canvas.getContext("2d");
          context?.drawImage(
            img,
            y * size,
            x * size,
            size,
            size,
            0,
            0,
            canvas.width,
            canvas.height
          );
          imagePieces.push({
            url: canvas.toDataURL(),
            x: y * size,
            y: x * size,
          });
        }
      }
      imagePieces.forEach(({ url, x, y }, index) => {
        addTileset({
          tab: activeTab,
          tile: {
            name: activeTab
              ? "tileset" + (tileset.tabs[activeTab].length + 1)
              : "tileset1",
            image: {
              ...file,
              width: size,
              height: size,
              src: url,
              x,
              y,
            },
          },
        });
      });
      handleClose();
    };
  };

  const handleChangeActiveTab = (index: number) => {
    setActiveTabIndex(index);
  };

  return (
    <Modal className={container}>
      <h2>Upload Tileset</h2>
      <Tabs
        className={modalTabs}
        activeTabIndex={activeTabIndex}
        handleChangeActiveTab={handleChangeActiveTab}
        tabs={[
          {
            name: "Tileset Image",
            content: (
              <div className={tilesetContainer}>
                <span>Tileset Image</span>
                <input type="text" placeholder="Tile width" value={size} />
                <input type="text" placeholder="Tile height" value={size} />
                <input type="file" onChange={handleTilesetImage} />
              </div>
            ),
          },
          {
            name: "Collecton of images",
            content: (
              <div className={tilesetContainer}>
                <span>Collecton of images</span>
                <input type="file" onChange={handleCollectionOfImage} />
              </div>
            ),
          },
        ]}
      />
    </Modal>
  );
}
