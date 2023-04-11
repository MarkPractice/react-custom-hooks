import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import BooksGrid from "./components/BooksGrid";
import Header from "./components/Header";
import QueryBar from "./components/QueryBar";
import { useState } from "react";
import PublisherBooksGrid from "./components/PublisherBooksGrid";

function App() {
  const [query, setQuery] = useState("quilting");
  const [limit, setLimit] = useState(10);
  return (
    <BrowserRouter>
      <div className="App">
        <Header title="Book Store" />
        <QueryBar setQuery={setQuery} setLimit={setLimit} />
        <Routes>
          <Route path="/" element={<BooksGrid query={query} limit={limit} />} />
          <Route
            path="/publisher/:publisher"
            element={<PublisherBooksGrid limit={limit} />}
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
