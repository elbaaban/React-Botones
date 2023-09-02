import React from "react";

function CharacterList({ characters }) {
  return (
    <div className="character-list">
      {characters.map((character) => (
        <div key={character.id} className="character-card">
          <h2>{character.name}</h2>
          <img src={character.image} alt={character.name} />
        </div>
      ))}
    </div>
  );
}

export default CharacterList;
