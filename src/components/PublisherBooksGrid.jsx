import PublisherBookCard from "./PublisherBookCard";
import { usePublisherBooks } from "../hooks/useGoogle";
import { useParams } from "react-router-dom";

export default function PublisherBooksGrid({ limit }) {
  const { publisher } = useParams();
  const { publisherBooks, error, isLoading } = usePublisherBooks(
    publisher,
    limit
  );

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Something went wrong...</p>;
  return (
    <main className="books__grid">
      {publisherBooks?.map((book) => {
        return (
          <PublisherBookCard
            key={book?.id}
            title={book.volumeInfo?.title}
            imgUrl={book?.volumeInfo}
          />
        );
      })}
    </main>
  );
}
