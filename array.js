#!/usr/bin/node
// Definiendo un array
let frutas = ["manzana", "Pera", "uvas", "banana"];
console.log(frutas);
// metodo para saber el numero de elementos de mi array ${.length}
console.log(`el numero de elementos en el array: ${frutas.length}`);
// metodo para eliminar un elemento con el metodo pop
frutas.pop("banana");
console.log(`eliminamos un elemento con el metodo pop: ${frutas}`);
// metodo para agregar un elemento con el metodo push
frutas.push("banana");
console.log(`Agregamos un elemento al final del array con el metodo, push ${frutas}`);
// metodo para agregar un elemento al inicio del array con el metodo .unshift
frutas.unshift("melocoton");
console.log(`Agregamos un elemento al inicio del array con el metodo, unshift: ${frutas}`);
// metodo para eliminar el primer elemento del array con el metodo shift
frutas.shift();
console.log(`shift ${frutas}`);
