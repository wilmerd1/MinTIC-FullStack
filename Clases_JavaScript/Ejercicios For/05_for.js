/* 5. Imprime la tabla de multiplicar del 5:
Escribe un programa que utilice un bucle for para imprimir la tabla de multiplicar del 5, desde 5x1 hasta 5x10.*/

function tablaCinco() {
    var numero = 5;
    for(i=1;i<=10;i++){
        console.log(numero+" x "+i+" = "+numero*i);
    }
    
}

tablaCinco();