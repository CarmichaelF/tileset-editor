"use client";

import { ReactNode, createContext, useEffect, useState } from "react";

interface ModalContextType {
  isOpen: boolean;
  handleOpen: () => void;
  handleClose: () => void;
}

export const ModalContext = createContext<ModalContextType>(
  {} as ModalContextType
);

export const ModalProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "unset";
  }, [isOpen]);

  useEffect(() => {
    const handleOnKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        handleClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleOnKeyDown);
    }
    return () => {
      document.removeEventListener("keydown", handleOnKeyDown);
    };
  }, [isOpen]);

  return (
    <ModalContext.Provider
      value={{
        isOpen,
        handleOpen,
        handleClose,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};
