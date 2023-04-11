import { useEffect } from "react";
import { useState } from "react";
import { getBooks, getPublishersBooks } from "../api/apiCalls";

export function useGoogleBooks(query, limit) {
  const [books, setBooks] = useState([]);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    setError(false);
    getBooks(query, limit)
      .then((books) => {
        setBooks(books);
      })
      .catch((err) => {
        setError(true);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [query, limit]);
  return { books, error, isLoading };
}

export function usePublisherBooks(publisher, limit) {
  const [publisherBooks, setBooks] = useState([]);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    setError(false);
    getPublishersBooks(publisher, limit)
      .then((books) => {
        setBooks(books);
      })
      .catch((err) => {
        setError(true);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [publisher, limit]);
  return { publisherBooks, error, isLoading };
}
