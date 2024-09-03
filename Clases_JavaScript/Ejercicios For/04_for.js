/* 4. Imprime los números impares del 1 al 19:
Escribe un programa que utilice un bucle for para imprimir todos los números impares entre 1 y 19. */

function impares() {
    var i=1;
    for (i=1;i<=19;i++){
        if(i%3==0 || i == 1){
            console.log(i)
        }
    }
}

impares()