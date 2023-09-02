// Main1.js
import React, { useState, useEffect } from "react";
import CharacterList from './CharacterList'; 

const BASE_URL = 'https://rickandmortyapi.com/api/character';

function Main2() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetch(BASE_URL)
      .then((response) => response.json())
      .then((data) => setCharacters(data.results.slice(0, 20)));
  }, []);

  return (
    <div>
      <header className="App-header">
        <CharacterList characters={characters} /> 
      </header>
    </div>
  );
}

export default Main2;
