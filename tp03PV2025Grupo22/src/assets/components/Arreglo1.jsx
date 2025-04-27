import React, { useEffect } from 'react';
import App2 from './App2';

const productos = [
  { id: 1, nombre: 'Camisa', precio: 25 },
  { id: 2, nombre: 'Pantalón', precio: 40 },
  { id: 3, nombre: 'Zapatos', precio: 60 }
];

function Proproductos() {
 
  useEffect(() => {
    console.log(productos);
  }, []);  
  return (
    <div>
      <h2>Productos disponibles</h2>
      <ul>
        {productos.map(producto => (
          <li key={producto.id}>
            {producto.nombre} - ${producto.precio}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Proproductos;