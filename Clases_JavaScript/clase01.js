function encontrarMaximo(a,b){
    let maximo;
    if (a>b){
        maximo = a;
    }else {
        maximo = b;
    }
    console.log("El maximo entre: " +a+ " y " +b+ " es: " + maximo);
    }
    
    encontrarMaximo(5, 10);
    encontrarMaximo(20, 15);


// calcular si es mayor de edad
function esMayorDeEdad(edad){
    if (edad >= 18){
        console.log("Es mayor de edad");
    }else {
        console.log("Es menor de edad");
    }
}
esMayorDeEdad(20);
esMayorDeEdad(15);
esMayorDeEdad(18);