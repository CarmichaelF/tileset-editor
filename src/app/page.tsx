"use client";

import { Grid } from "@/components/Grid";
import { container, row } from "./style.css";
import { AsideMenu } from "@/components/AsideMenu";
import { Providers } from "@/providers";
import "./global.css";
import { useState } from "react";
import { getEventCoordinates } from "@dnd-kit/utilities";
import { DndContext, pointerWithin } from "@dnd-kit/core";
import { Tile } from "@/context/tileset";
import { useGrid } from "@/hooks/useGrid";

export default function Home() {
  const [isDroppedId, setIsDroppedId] = useState<string>();
  const [droppedData, setDroppedData] = useState<Tile>();

  const { size, handleChangeSize } = useGrid();

  const handleDragEnd = (event) => {
    if (event.active) setDroppedData(event.active.data.current);
    if (event.over) setIsDroppedId(event.over.id);
  };

  const snapBottomLeftToCursor = (_ref) => {
    let { activatorEvent, draggingNodeRect, transform } = _ref;

    if (draggingNodeRect && activatorEvent) {
      const activatorCoordinates = getEventCoordinates(activatorEvent);

      if (!activatorCoordinates) {
        return transform;
      }

      const offsetX = activatorCoordinates.x - draggingNodeRect.left;
      const offsetY = activatorCoordinates.y - draggingNodeRect.bottom;
      return {
        ...transform,
        x: transform.x + offsetX - draggingNodeRect.width / 2 + size / 2,
        y: transform.y + offsetY + size / 2,
      };
    }

    return transform;
  };

  // useEffect(() => {
  //   handleChangeSize(16);
  // }, []);

  return (
    <Providers>
      <DndContext
        onDragEnd={handleDragEnd}
        modifiers={[snapBottomLeftToCursor]}
        collisionDetection={pointerWithin}
      >
        <div className={container}>
          <div className={row}>
            <Grid
              width={512}
              height={320}
              isDroppedId={isDroppedId}
              data={droppedData}
            />
          </div>
          <div className={row}>
            <AsideMenu />
          </div>
        </div>
      </DndContext>
    </Providers>
  );
}
