/* 3. Imprime los números pares del 2 al 20:
Escribe un programa que utilice un bucle for para imprimir todos los números pares entre 2 y 20.*/


function pares(){
    var i=2;
    for (i=2;i<=20;i++){
        if(i%2==0){
            console.log(i);
        }
    }
    }
        
pares()