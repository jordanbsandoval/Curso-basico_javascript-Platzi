#!/usr/bin/node
let frutas = ["manzana", "Pera", "uvas", "banana"];
console.log(frutas);
console.log(`el numero de elementos en el array: ${frutas.length}`);
frutas.pop("banana");
console.log(`eliminamos un elemento con el metodo pop: ${frutas}`);
frutas.push("banana");
console.log(`Agregamos un elemento al final del array con el metodo, push ${frutas}`);
frutas.unshift("melocoton");
console.log(`Agregamos un elemento al inicio del array con el metodo, unshift: ${frutas}`);