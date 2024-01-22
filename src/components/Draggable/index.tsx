"use client";

import React, { PropsWithChildren } from "react";
import { useDraggable } from "@dnd-kit/core";
import { Tile } from "@/context/tileset";

interface DraggableProps {
  id: string;
  width: number;
  height: number;
  data: Tile;
}

export function Draggable(props: PropsWithChildren<DraggableProps>) {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: props.id,
    data: props.data,
  });

  const style = transform
    ? {
        transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
        width: props.width,
        height: props.height,
      }
    : undefined;

  return (
    <button ref={setNodeRef} style={style} {...listeners} {...attributes}>
      {props.children}
    </button>
  );
}
