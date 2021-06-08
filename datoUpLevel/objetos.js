#!/usr/bin/node
// Definiendo y inicializo un objeto
let myOficina = {
  silla: "gamer",
  escritorio: "madera",
  ventilador: "samurai",
  detalles: function() {
    console.log(`los marcas de los articulos de mi oficina son: ${this.silla}, ${this.escritorio}`);
  }
};

myOficina.detalles();
