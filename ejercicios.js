/* A un número le sumamos 3 y el resultado lo  multiplicamos por 10
1. Función para la suma
2. Función que multiplique la suma por 10
3. Función que junte las dos funciones */

//Solución 1
const suma = num => num + 3; //Función flecha
const multiplicacion = suma => suma * 10;
const total = function(numero){
    return multiplicacion(suma(numero));
}

const t = total(3);
console.log(t);

//Solución 2
const sumNumero = function(a,b){
    return a + b;
}

const multiplica = function(c){
    return c*10;
}

const x = 4;
const resultado = multiplica(sumNumero(3,x));
console.log(resultado); 




