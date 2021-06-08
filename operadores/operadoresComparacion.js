#!/usr/bin/node
// Operador de asignacion, comparacion
let var1 = 20;
let var2 = "20";

// comparacion con el operador == y === diferencias
// (==) este operador compara el valor
/// (===) este operador compara el tipo de dato y valor

if(var1 == var2) {
  console.log("compara el valor");
}

if (var1 === var2) {
  console.log("esto nunca pasara");
}
