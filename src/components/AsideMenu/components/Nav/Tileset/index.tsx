"use client";

import { useTileset } from "@/hooks/useTileset";
import { container } from "./style.css";
import { Draggable } from "@/components/Draggable";
import { Tabs } from "@/components/Tabs";

export const Tileset = () => {
  const { tabs, activeTab, activeTabIndex, tileset, handleChangeActiveTab } =
    useTileset();
  return (
    <div className={container}>
      <Tabs
        tabs={tabs.map((tab) => {
          return {
            name: tab,
            content: tileset.tabs[activeTab].map(({ name, image }, index) => {
              return (
                // <div
                //   // style={{ position: "absolute", left: image.x, top: image.y, height: image.height, width: image.width }}
                // >
                  <Draggable
                    id={`grid-${name}-${index}`}
                    width={image.width}
                    height={image.height}
                    data={{ name, image }}
                  >
                    <img src={image.src} alt={name} key={index} />
                  </Draggable>
                // </div>
              );
            }),
          };
        })}
        activeTabIndex={activeTabIndex}
        handleChangeActiveTab={handleChangeActiveTab}
      />
    </div>
  );
};
