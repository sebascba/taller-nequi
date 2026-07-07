const prompt = require('prompt-sync')();

let intento;
let pinCorrecto = 4321;
let numeroIntentos = 0 ;

intento = Number(prompt('Escribe tu pin: '));

while(pinCorrecto !== intento){
    console.log("El pin es incorrecto")
    numeroIntentos++
    console.log("intento #", numeroIntentos);
    intento = Number(prompt("ingresa un pin diferente: "));
    if (pinCorrecto===intento){
        break
    }
};

console.log("Welcome to the app");