import React, { useState } from "react";
import Button from "./Button";

export default function QueryBar({ setQuery, setLimit }) {
  const [limitInput, setLimitInput] = useState("");
  const handleLimitChange = (event) => {
    setLimitInput(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const limit = parseInt(limitInput);
    setLimit(limit);
  };

  return (
    <div>
      <Button label="Quilting" onClick={() => setQuery("quilting")} />
      <Button label="Architecture" onClick={() => setQuery("architecture")} />
      <Button label="Coding" onClick={() => setQuery("coding")} />
      <form onSubmit={handleSubmit}>
        <label>
          Number:
          <input
            type="number"
            value={limitInput}
            onChange={handleLimitChange}
          />
        </label>
        <button type="submit">Set Limit</button>
      </form>
    </div>
  );
}
