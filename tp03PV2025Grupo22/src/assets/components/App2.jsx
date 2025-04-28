//Agregar aquí todos los import necesarios.
import React from "react";
import Arreglo2 from "./Arreglo2";

function App2(){
  const nombreMateria = "Programacion Visual";

  return (
    <div>
      <h1>Hola React</h1>
      <h2>Somos el grupo 22</h2>
      <h3>En la materia {nombreMateria}</h3>
      <Arreglo2 />
    </div>
  );
}

export default App2;