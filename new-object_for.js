#!/usr/bin/node
// Creando un objeto apartir de una funcion constructora y pasandole una lista de parametros
const entrada1 = process.argv[2];
const entrada2 = process.argv[3];
const entrada3 = process.argv[4];

// funcion constructora
function autos(marca, modelo, anio) {
  this.marca = marca;
  this.modelo = modelo;
  this.anio = anio;
}
// array para guardar los elementos de mi entrada
let aggAutos = [];

for(let i = 0; i < 10; i++) {
  let marca = process.argv[2];
  let modelo = process.argv[3];
  let anio = process.argv[4];
  aggAutos.push(new autos(marca, modelo, anio));
}

for(let i = 0; i < aggAutos.length; i++) {
  console.log(aggAutos[i]);
}
