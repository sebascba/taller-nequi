let movimientos = [1000, 2000,-1500, 4500, 7000, -3500];

let total = 0 
let cantidadRetiros = 0

for(let movimiento of movimientos){
    
    total += movimiento
    if(movimiento < 0){
        cantidadRetiros++
    }
    // console.log(`El monto total en la cuenta es ${total}`)
    // console.log(`la cantidad de retiros es ${cantidadRetiros}`)
};

console.log(`El monto total en la cuenta es ${total}`)
    console.log(`la cantidad de retiros es ${cantidadRetiros}`)

// si pongo el console.log() dentro del bucle me muestra el total y la cantidadRetiros acumulado en cada vuelta


