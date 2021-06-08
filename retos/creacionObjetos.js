#!/usr/bin/node
// Funcion constructora o template del objeto
function objAutos(marca, modelo, annio) {
  this.marca = marca;
  this.modelo = modelo;
  this.annio = annio;
}

// lista de las modelos de la marca ford
const fordModelos = [
  "focus", "mondeo", "kuga", "s-max", "galaxy", "falcon", "taurus", "fiesta", "ka", "c-max", "b-max", "figo", "fusion", "ecosport"
]

// creacion de un array donde los elementos son cada uno de los objetos recien creados
let autosFordModelos = [];

// creacion del loop para insertar los diferentes objetos
for(let model of fordModelos) {
  autosFordModelos.push(new objAutos("Ford", model, 2020));
}
console.log(autosFordModelos);
