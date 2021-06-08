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

// Utilizando el metodo filter para obtener un nuevo array con el filtro establecido 
let filtroCarrito = carrito.filter(function(total) {
  return (total.precio > 600);
});
console.log(filtroCarrito);

// Utilizando el metodo map me genera un nuevo array
let nombreCarrito = carrito.map(function(articulo) {
  return articulo.nombre;
});
console.log(nombreCarrito);

// Utilizando el metodo find que devuelve un nuevo array
let searchCarrito = carrito.find(function(dato) {
  return (dato.nombre === "lentes");
});
console.log(searchCarrito);

// Utilizando el metodo forEach que devuelve un dato y no un array
carrito.forEach(function(dato) {
  console.log(dato.nombre);
});

// Utilizando el metodo some que devuelve un valor booleano dependiendo de la condicion de retorno
carrito.some(function(dato) {
  console.log(dato.precio <= 800);
});

