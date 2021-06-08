#!/usr/bin/node
// Forma de declarar una funcion declarativa
function myFuncion() {
  return (2);
};
console.log(myFuncion());

// Forma de declara una funcion expresiva o anonima

let laFuncion = function(a, b) {
  return (a + b);
};
console.log(laFuncion(2, 5));

// ejemplo de funcion
function saludarEstudiante(estudiante) {
  console.log(`hola ${estudiante}`);
};
saludarEstudiante("jordan");
