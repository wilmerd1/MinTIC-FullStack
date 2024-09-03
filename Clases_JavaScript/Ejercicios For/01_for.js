/* 1. Imprime los números del 1 al 10:
Escribe un programa que utilice un bucle for para imprimir los números del 1 al 10 en la consola.*/


function bucleNumeros() {
    var numeros = 0;
    for (var i = 1; i <= 10; i++) {
        numeros = i;
        console.log("Numero: " + numeros);
    }
}
bucleNumeros();