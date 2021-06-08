#!/usr/bin/node
// Creando un template de un objeto para crear multiples objetos apartir del mismo

function constructora(marca, modelo, annio) {
  this.marca = marca;
  this.modelo = modelo;
  this.annio = annio;
}

// Para crear un objeto apartir de un objeto se utiliza la palabra reservada new
let nuevoObjeto = new constructora("mazda", "mx-30", 2020);
console.log(nuevoObjeto);
console.log("ingresando al elemento: " + nuevoObjeto.modelo);
