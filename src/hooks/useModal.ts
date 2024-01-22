import { ModalContext } from "@/context/modal";
import { useContext } from "react";

export const useModal = () => {
  const context = useContext(ModalContext);
  if (!context)
    throw new Error("useModal must be used within a AppAuthProvider");
  return context;
};
