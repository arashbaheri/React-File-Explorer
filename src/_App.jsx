import React, { useState } from "react";

// List -> item
// input -> term
// filter ->

const names = [
  "reyhane",
  "sepehr",
  "sajjad",
  "hossein",
  "hesan",
  "melika",
  "arash",
  "zabih",
  "hossein",
  "hassan",
  "amir",
  "soheil",
  "mohammad",
];

const App = () => {
  const [term, setTerm] = useState("");

  const handleSearchInput = ({ target }) => setTerm(target.value);

  return (
    <div>
      <input value={term} onChange={handleSearchInput} />
      <div>
        <ul>
          {names
            .filter((name) => name.startsWith(term))
            .map((name, i) => (
              <li key={`n-${i}`}>{name}</li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default App;
