const resumen = document.getElementById("btn-total");
function precioSinDesc() {
    let cantidad = document.getElementById("inputCant");
    let precio = 200;
    return cantidad.value * precio;
}

function calculo() {
    let bpagar;
    let categoria = document.getElementById("inputCat").value;
    const pagar = document.getElementById("inputTotal");

    switch (categoria) {
        case "Estudiante": bpagar = precioSinDesc() * 0.20;
        break;
        case "Trainee": bpagar = precioSinDesc() * 0.5;
        break;
        default: bpagar = precioSinDesc() * 0.85;
        break;
    }
    
    return pagar.innerHTML = "Total a pagar: $" + bpagar;}

resumen.addEventListener("click", calculo);


