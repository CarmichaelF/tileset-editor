"use client";

import { createPortal } from "react-dom";
import { container, containerActive, modal } from "./style.css";
import { useModal } from "@/hooks/useModal";
import { PropsWithChildren } from "react";

interface ModalProps {
  className?: string;
}

export function Modal({ className, children }: PropsWithChildren<ModalProps>) {
  const { isOpen, handleClose } = useModal();

  return createPortal(
    <div className={`${container} ${isOpen && containerActive}`}>
      <div className={`${modal} ${className}`}>{children}</div>
      <div className="overlay" onClick={handleClose} />
    </div>,
    document.body
  );
}
