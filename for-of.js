#!/usr/bin/node
// iteraciones
const estudiantesOnce = ["juan", "pablo", "pedro", "raul"];

function saludarEstudiante(estudiante) {
    console.log(`hola ${estudiante}`);
}

for(let i = 0; i < estudiantesOnce.length; i++) {
    saludarEstudiante(estudiantesOnce[i]);
}

for(let estudiante of estudiantesOnce) {
    saludarEstudiante(estudiante);
}