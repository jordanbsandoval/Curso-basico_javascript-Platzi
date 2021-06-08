#!/usr/bin/node
// Objects
let miMotoRun = {
    marca : "yamaha",
    modelo : "xtz",
    anio : 2021,
    descripcion : function() {
        console.log(`La marca : ${this.marca} modelo : ${this.modelo} y anio : ${this.anio}`);
    }
}
miMotoRun.descripcion();