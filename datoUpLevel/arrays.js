#!/usr/bin/node
// definimos un array
let frutas = ["Pera", "manzana"];
console.log(frutas);

// mutando un array con algunos metodos del lenguaje
// push: insertar un elemento al final del array
frutas.push("Banano");
console.log(frutas);

// pop: Elimina el ultimo elemento de un array
frutas.pop("Pera");
console.log(frutas);

// unshift: inserta un elemento al inicio del array
frutas.unshift("Uva");
console.log(frutas);

// shift: elimina el primer elemento del array
frutas.shift();
console.log(frutas);

// indexOf: Puedo saber la posicion que ocupa el elemento en un array
console.log(frutas.indexOf("manzana"));

