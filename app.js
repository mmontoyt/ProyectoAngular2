const texto = 'Programación Funcional en JS';
//Función 1
const split = function(str){
    return str.split(' ');
}
//Función 2
const count = function(vector){
    return vector.length;
}
const contarPalabra = function(str){
    return count(split(str));
}
const resultado = contarPalabra(texto);
console.log(resultado);


