let numero1=prompt("Ingresar numero 1");
let numero2=prompt("Ingresar numero 2");

sumar(parseInt(numero1), parseInt(numero2)); 
/*alert("la sumatoria es "+sumatoria);*/

function sumar(numero1, numero2){
    let sumatoria;
    sumatoria = numero1+numero2;
    console.log("la sumatoria en consola es "+sumatoria);
    document.write("<br /><p class='parrafo_js fw-semibold'>la sumatoria es" +sumatoria+ "</p>");
    
}