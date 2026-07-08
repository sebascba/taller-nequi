let movimientos = [1000, 2000, -1500, 4500, 7000, -3500];
let posicionEncontrada = -1;

for (let i = 0; i < movimientos.length; i++) {
  
  if (movimientos[i] === 0) {
    console.log(`Movimiento de $0 ignorado en la posición ${i}.`);
    continue; 
  }

  if (movimientos[i] < 0) {
    posicionEncontrada = i;
    console.log(`¡Éxito! El primer pago se encontró en la posición: ${posicionEncontrada} (Valor: ${movimientos[i]})`);
    break; 
  }
}

if (posicionEncontrada === -1) {
  console.log("No se registró ningún pago en la lista de movimientos.");
}