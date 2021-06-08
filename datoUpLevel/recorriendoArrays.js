#!/usr/bin/node
// Recorriendo un array por medio de un filtadro gracias al modulo filter

// Creo un array con elementos de tipo objeto
const carrito = [
  {nombre: "zapatos", precio: 200},
  {nombre: "computador", precio: 800},
  {nombre: "lentes", precio: 100},
  {nombre: "cama", precio: 300},
  {nombre: "tv", precio: 450}
]

// filtro del precio mas alto en el carrito
let filtroCarrito = carrito.filter(function(total) {
  return (total.precio > 600);
});

console.log(filtroCarrito);
