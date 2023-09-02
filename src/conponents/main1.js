import React, { useState } from "react";
import "../App.css"; 

function Main1() {
  const [contador, setContador] = useState(0);
  const sumarContador = () => setContador(contador + 1);

  return (
    <div>
      <header className="App-header">
        <div className="centered-content">
          <span className="counter">{contador}</span>
          <button className="btn btn-success me-2 center-button" type="button" onClick={sumarContador}>
            Boton que cuenta
          </button>
        </div>
      </header>
    </div>
  );
}

export default Main1;
