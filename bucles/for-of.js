#!/usr/bin/node
// iteraciones
const estudiantesOnce = ["juan", "pablo", "pedro", "raul"];

function saludarEstudiante(estudiante) {
    console.log(`hola ${estudiante}`);
}

// Creacion de un loop for tradicional
for(let i = 0; i < estudiantesOnce.length; i++) {
    saludarEstudiante(estudiantesOnce[i]);
}

// Creacion de un loop for of
for(let estudiante of estudiantesOnce) {
    saludarEstudiante(estudiante);
}
