let usuarios = [
{ nombre: "Sebastian", movimientos: [1000, -5000, 1000] },
{ nombre: "Juan", movimientos: [1500, -1500, 7000] },
{ nombre: "Mario", movimientos: [-5000, 3000, -2000] }
]

for(let i = 0; i < usuarios.length; i++) {

let totalUsuario = 0

for(let x = 0; x < usuarios[i].movimientos.length; x++) {
totalUsuario = totalUsuario + usuarios[i].movimientos[x]
}

console.log("El usuario " + usuarios[i].nombre + " tiene un total de: " + totalUsuario);

}