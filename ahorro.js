var ahorro = [];

function ahorrar(nuevoAhorro){
    const inputAhorro = document.getElementById("añadirAhorro");
    
    ahorro.push(inputAhorro.value);
    ahorroAcomulado(ahorro);
}

function ahorroAcomulado(ahorro){
    var sumaAhorro = ahorro.reduce(
        function(valorAcumulado = 0, nuevoElemento){
            return (Number(valorAcumulado) + Number(nuevoElemento));
        }
    );
    var ahorroTotal = sumaAhorro;
    const dineroAhorrado = document.getElementById("DineroAhorrado");
    dineroAhorrado.innerText = "$" + ahorroTotal;
}

