import React, { useEffect } from 'react';
import App2 from './App2';

const productos = [
  { id: 1, nombre: 'Camisa', precio: 25 },
  { id: 2, nombre: 'Pantalón', precio: 40 },
  { id: 3, nombre: 'Remera', precio:20  },
  { id: 4, nombre: 'Buzos', precio: 60 },
  { id: 5, nombre: 'Camperas', precio: 65 },
  { id: 6, nombre: 'Gorras', precio: 15 },
  { id: 7, nombre: 'zapatos', precio: 60 },
 
];

function Productos() {
 
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

export default Productos;