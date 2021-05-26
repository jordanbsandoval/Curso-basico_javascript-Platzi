#!/usr/bin/node
let estudiantes = ["juan", "pedro", "pablo", "armando"];

function saludarEstudiante(estudiante) {
    console.log(`hola ${estudiante}`);
}

while(estudiantes.length > 0) {
    console.log(estudiantes)
    let estudiante = estudiantes.shift();
    saludarEstudiante(estudiante);
}