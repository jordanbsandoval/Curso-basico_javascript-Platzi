#!/usr/bin/node
// Escribe una funcion constructora en el que pueda crear muchos objetos de acuerdo a mi entrada

// creo mis entradas
const marca = process.argv[2];
const modelo = process.argv[3];
const anio = process.argv[4];

// creo la funcion constructora
function creatorObj(marca, modelo, anio) {
  this.marca = marca;
  this.modelo = modelo;
  this.anio = anio;
}

// defino un array donde guardare mis objetos creados apartir de mi funcion constructora
let arrayObjects = [];

// bucle para crear tantos objetos como mi condicion lo requiera
for(let i = 0; i < 10; i++) {
  arrayObjects[i] = (new creatorObj(marca, modelo, anio));
}

// bucle para observar mis objetos creados apartir de una funcion constructora
for(let i = 0; i < arrayObjects.length; i++) {
  console.log(arrayObjects[i]);
}
