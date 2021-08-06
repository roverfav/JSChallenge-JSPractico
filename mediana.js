
// Saca el Promedio
function calcularMediaAritmetica(lista) {
    const sumaLista = lista.reduce(
        function (valorAcumulado = 0, nuevoElemento) {
            return valorAcumulado + nuevoElemento;
        }
    );
    const promedioLista = sumaLista / lista.length;
    return promedioLista;
}

// Array de ejemplo
//const lista1 = [
//    100,
//    200,
//    500,
//    400000000
//];

// Revisa si un numero es par o inpar
function esPar(numerito){
    if (numerito % 2 === 0){
        return true;
    } else {
        return false;
    }
}

let mediana;

function calcularMediana(lista1){
    lista1 = lista1.sort(function(a,b){return a-b});
    // Ubica la mita de la lista
const mitadLista1 = parseInt(lista1.length / 2);

    // Calculo principal
if (esPar(lista1.length)){
    const elemento1 = lista1[mitadLista1 - 1];
    const elemento2 = lista1[mitadLista1];

    const promedioElemento1y2 = calcularMediaAritmetica([elemento1, elemento2]);

    mediana = promedioElemento1y2;
    return mediana;

} else{
    mediana = lista1[mitadLista1];
    return mediana;
}
    
}
//calcularMediana([1, 6, 3, 2]);
