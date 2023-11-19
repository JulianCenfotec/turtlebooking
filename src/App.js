import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [inputValue, setInputValue] = useState(''); // Estado para el valor del input
  const [saludo, setSaludo] = useState('Hola Mundo'); // Estado para el saludo

  // Manejar el cambio en el input
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  // Manejar el clic en el botón
  const handleButtonClick = () => {
    // Actualizar el saludo con el valor del input
    setSaludo(`Hola ${inputValue || 'Mundo'}`);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p className="Hola-Mundo">{saludo}</p>

        {/* Añadir un campo de entrada de texto (input) */}
        <input
          type="text"
          placeholder="Dime tu nombre"
          value={inputValue}
          onChange={handleInputChange}
        />
         <div style={{ margin: '10px' }}></div>
        {/* Añadir un botón con el evento onClick */}
        <button onClick={handleButtonClick}>Oprimeme</button>
      </header>
    </div>
  );
}

export default App;
