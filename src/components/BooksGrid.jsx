import BookCard from "./BookCard";
import Modal from "react-modal";
import { useGoogleBooks, usePublisherBooks } from "../hooks/useGoogle";
import useModal from "../hooks/useModal";
import { useState } from "react";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    color: "black",
  },
};

export default function BooksGrid({ query, limit }) {
  const { books, error, isLoading } = useGoogleBooks(query, limit);
  const [publisher, setPublisher] = useState(null);
  const { modalIsOpen, closeModal, openModal } = useModal();
  const { publisherBooks } = usePublisherBooks(publisher, 3);
  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Something went wrong...</p>;
  return (
    <main className="books__grid">
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Publishers other books"
        ariaHideApp={false}>
        <div>
          <h2>Books by the same publisher: {publisher}</h2>
          <ul>
            {publisherBooks?.map((book) => {
              return <li key={book.id}>{book.volumeInfo.title}</li>;
            })}
          </ul>
        </div>
      </Modal>

      {books.map((book) => {
        return (
          <BookCard
            key={book.id}
            publisher={book.volumeInfo?.publisher}
            setPublisher={setPublisher}
            title={book.volumeInfo.title}
            imgUrl={book.volumeInfo}
            openModal={openModal}
          />
        );
      })}
    </main>
  );
}
