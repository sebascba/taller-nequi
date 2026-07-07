const prompt = require('prompt-sync')();
let opcion;
do {
    opcion = prompt("Elige entre Ver saldo, Enviar dinero, Recargar, Salir: ").toLowerCase();
    if(opcion === "ver saldo"){
        console.log("Tu saldo es")
    }else if(opcion === "envia dinero"){
        console.log("Envia dinero a")
    }else if(opcion === "recargar"){
        console.log("Recargar")
    }else if(opcion === "salir"){
        console.log("adios")
    }
} while (opcion !=="salir"){
};