"use client";

import React, { PropsWithChildren } from "react";
import { useDroppable } from "@dnd-kit/core";

interface DroppableProps {
  id: string;
  style?: React.CSSProperties;
}

export function Droppable(props: PropsWithChildren<DroppableProps>) {
  const { isOver, setNodeRef } = useDroppable({
    id: props.id,
  });

  const style = {
    border: isOver ? "2px solid green" : undefined,
    ...props.style,
  };

  return (
    <div ref={setNodeRef} style={style}>
      {props.children}
    </div>
  );
}
