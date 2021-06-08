#!/usr/bin/node
// juego de piedra, papel o tijera vs maquina
const usuario = process.argv[2];
const piedra = 'piedra';
const papel = 'papel';
const tijera = 'tijera';

function janKen(jugador) {
  const janKen = ["piedra", "papel", "tijera"]
  x = Math.floor((Math.random() * janKen.length));
  console.log("maquina:", janKen[x]);

  if(jugador == janKen[x]) {
    console.log(`empate ambos sacaron ${janKen[x]}`);
  }else if (jugador == piedra && janKen[x] == papel) {
    console.log(`Gano la maquina que saco ${janKen[x]}`);
  }else if (jugador == piedra && janKen[x] == tijera) {
    console.log(`Gano el jugador que saco ${jugador}`);
  }else if (jugador == tijera && janKen[x] == papel) {
    console.log(`Gano el jugador que saco ${jugador}`);
  }else if (jugador == tijera && janKen[x] == piedra) {
    console.log(`Gano la maquina, que saco: ${janken[x]}`);
  }else if (jugador == papel && janKen[x] == piedra) {
    console.log(`Gano el jugador, que saco: ${jugador}`);
  }else if (jugador == papel && janKen[x] == tijera) {
    console.log(`Gano la maquina, que saco: ${janKen[x]}`);
  }
  else {
    console.log('No saco nada');
  }
}

janKen(usuario);
