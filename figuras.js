//Código del cuadrádo

function perimetroCuadrado(lado){
    return lado * 4;
} 

function areaCuadrado(lado){
    return (lado * lado);
} 

//Código del triángulo

function perimetroTriangulo(lado1, lado2, base){
    return lado1 + lado2 + base;
} 

function areaTriangulo(base, altura){
    return (base * altura) / 2;
} 

//Código del circúlo
function diametroCirculo(radio){
    return radio * 2;
} 

//PI 

const PI = Math.PI;

function circunferenciaCirculo(radio){
    const diametro = diametroCirculo(radio);
    return diametro * PI;
} 

function areaCirculo(radio){
    return (radio * radio) * PI;
}

//TRIÁNGULO ISÓSCELES

//var lado1Isosceles = 10;
//var lado2Isosceles = 10;
//var baseIsosceles = 5
//var alturaIsosceles = Math.sqrt((lado1Isosceles * lado1Isosceles) - ((baseIsosceles * baseIsosceles) / 4));

//if (lado1Isosceles === lado2Isosceles){
    //console.log(alturaIsosceles);
//} else{
 //console.log("Este no es un triangulo isosceles");
//}

function alturaIsosceles(b, a){
    if (a === a){
        var altura = Math.sqrt((a * a) - ((b * b) / 4));
        return altura;
    } else{
     console.log("Este no es un triangulo isosceles");
    }
}

//Conexión con sitio web

//Cuadrádo

function calcularPerimetroCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}

function calcularAreaCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const area = areaCuadrado(value);
    alert(area);
}

//Triángulo
function calcularPerimetroTriangulo(){
    const lado1 = document.getElementById("InputTrianguloLado1");
    const ladoTriangulo1 = parseFloat(lado1.value);

    const lado2 = document.getElementById("InputTrianguloLado2");
    const ladoTriangulo2 = parseFloat(lado2.value);

    const base = document.getElementById("InputTrianguloBase");
    const baseTriangulo = parseFloat(base.value);

    const perimetro = perimetroTriangulo(ladoTriangulo1, ladoTriangulo2, baseTriangulo);
    alert(perimetro);
}

function calcularAreaTriangulo(){
    const base = document.getElementById("InputTrianguloBase");
    const baseTriangulo = parseFloat(base.value);

    const altura = document.getElementById("InputTrianguloAltura");
    const alturaTriangulo = parseFloat(altura.value);

    const area = areaTriangulo(baseTriangulo, alturaTriangulo);
    alert(area);
}


//Círculo

function calcularDiametroCirculo(){
    const input = document.getElementById("InputCirculo");
    const value = input.value;

    const diametro = diametroCirculo(value);
    alert(diametro);
}

function calcularCircunferenciaCirculo(){
    const input = document.getElementById("InputCirculo");
    const value = input.value;

    const circunferencia = circunferenciaCirculo(value);
    alert(circunferencia);
}

function calcularAreaCirculo(){
    const input = document.getElementById("InputCirculo");
    const value = input.value;

    const area = areaCirculo(value);
    alert(area);
}

//Triangulo Isosceles 

function calcularAlturaIsosceles(){
    const inputBase = document.getElementById("InputBaseIsosceles");
    const base = inputBase.value;

    const inputLado = document.getElementById("InputLadoIsosceles");
    const lado = inputLado.value;

    const alturaT = alturaIsosceles(base, lado);
    alert("La altura es: " + alturaT);
}