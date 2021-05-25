#!/usr/bin/node

let user = process.argv[2];

if (user < 18) {
  console.log("Es menor de edad");
}else if (user > 18) {
  console.log("Es mayor de edad");
}else if (user > 18 && user < 40) {
  console.log("es mayor de edad pero no es de la tercera edad");
}else {
  console.log("persona de la tercera edad");
}
