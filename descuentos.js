//const precioOriginal = 120;
//const descuento = 18;
//const porcentajePrecioConDescuento = 100 - descuento;

//const precioConDescuento = (precioOriginal * porcentajePrecioConDescuento) / 100;

//console.log({
//    precioOriginal,
//    descuento,
//    porcentajePrecioConDescuento,
//    precioConDescuento
//});

function calcularPrecioConDescuento(precio, descuento){
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;
    return precioConDescuento;
}

//function calcularDescuento(){
//    const inputPrice = document.getElementById("InputPrice");
//    const priceValue = inputPrice.value;
//
//    const inputDiscount = document.getElementById("InputDiscount");
//    const discountValue = inputDiscount.value;
//
//    const precioConDescuento = calcularPrecioConDescuento(priceValue, discountValue);
//    
//    const resultP = document.getElementById("ResultP");
//    resultP.innerText = "El precio con descuento es $" + precioConDescuento;
//}

//Versión con Cupones

function calcularPrecioConDescuento(precio, descuento){
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;
    return precioConDescuento;
}

function calcularDescuento(){
    const inputPrice = document.getElementById("InputPrice");
    const priceValue = inputPrice.value;

    const inputCoupon = document.getElementById("InputCoupon");
    const discountCoupon = inputCoupon.value;

    var descuento;

    switch(discountCoupon){
        case "cupon1":
            descuento = 10;
        break;

        case "cupon2":
            descuento = 20;
        break;

        case "cupon3":
            descuento = 30;
        break;
    }

    const precioConDescuento = calcularPrecioConDescuento(priceValue, descuento);
    
    const resultP = document.getElementById("ResultP");
    resultP.innerText = "El precio con descuento es $" + precioConDescuento;
}