#!/usr/bin/node
// Funcion constructora para crear objetos por medio de parametros

function autos(marca, modelo, anio) {
  this.marca = marca;         // La palabra reservada `this` la utilizamos para hacer referencia
  this.modelo = modelo;       // al objeto en el que estamos dentro del bloque
  this.anio = anio;
}

// Utilizamos la palabra reservada `new` que se utiliza para crear un objeto apartir de un objeto

let autoTesla = new autos("tesla", "teslaX", 2020);
console.log(autoTesla);

