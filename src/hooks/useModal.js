import { useState } from "react";
import { usePublisherBooks } from "./useGoogle";

export default function useModal() {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [publisher, setPublisher] = useState(null);
  function closeModal() {
    setIsOpen(false);
  }
  function openModal() {
    setIsOpen(true);
  }
  return { modalIsOpen, closeModal, openModal, publisher, setPublisher };
}
