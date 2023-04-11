import { useState } from "react";
import { usePublisherBooks } from "./useGoogle";

export default function useModal() {
  const [modalIsOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }
  function openModal() {
    setIsOpen(true);
  }
  return { modalIsOpen, closeModal, openModal };
}
