/*let numero1=prompt("Ingresar numero 1");
let numero2=prompt("Ingresar numero 2");

sumar(parseInt(numero1), parseInt(numero2)); */
/*alert("la sumatoria es "+sumatoria);*/
/*let sumatoria = sumar2(parseInt(numero1), parseInt(numero2)); 
alert("el valor de la sumatoria es "+sumatoria);*/


function sumar(numero1, numero2){
    let sumatoria;
    sumatoria = numero1+numero2;
    console.log("la sumatoria en consola es "+sumatoria);
    document.write("<br /><p class='parrafo_js fw-semibold'>la sumatoria es" +sumatoria+ "</p>");
    
}

function sumar2(numero1, numero2){
    let sumatoria;
    sumatoria = numero1+numero2;
    return sumatoria    
}

//obtener valores de etiquetas y modificarlos
function sumar3(){

    console.log("ingreso a la funcion 3");
    /*obtener valores de los input pero por el id*/
    let numero1 = document.getElementById("numero1").value;
    let numero2 = document.getElementById("numero2").value;

    let sumatoria = parseInt(numero1) + parseInt(numero2);

    /*obtener valores de los input pero por la etiqueta*/
    var inputs =  document.getElementsByTagName("input");
    let numero3;
    let numero4;
    for(i=0; i<inputs.length; i++){
        console.log("input "+i+" tiene el valor "+inputs[i].value);
        if(i==0){
            numero3 = inputs[i].value;
        }else if(i==1){
            numero4 = inputs[i].value;
        }
        
    }
    sumatoria = parseInt(numero3) + parseInt(numero4);
    //cambiar texto etiqueta sin conocer el id
    //capturar todos los parrafos
    let parrafos = document.getElementsByTagName("p");
    //cantidad parrafos
    let cantidad_parrafos = parrafos.length;
    console.log("cantidad de parrafos son "+cantidad_parrafos);
    parrafos[1].innerHTML = "cambio al parrafo 2 con innerhtml";
    //cambiar texto etiqueta por id
    document.getElementById("parrafo3").innerHTML="Se cambio texto a parrafo pero por id";
}
//cambiar estilos
function sumar4(){
    let numero1 = document.getElementById("numero1").value;
    let numero2 = document.getElementById("numero2").value;
    if(numero1==''){
        //cambiar el estilo a rojo del input si el campo esta vacio
        document.getElementById("numero1").setAttribute("class", "form-control is-invalid");
        document.getElementById("validar_numero1").innerHTML ="el campo numero 1 es obligatorio";
    }else{
        document.getElementById("numero1").setAttribute("class", "form-control is-valid");
        document.getElementById("validar_numero1").innerHTML ="";
    }

    if(numero2==''){
        //cambiar el estilo a rojo del input si el campo esta vacio
        document.getElementById("numero2").setAttribute("class", "form-control is-invalid");
        document.getElementById("validar_numero2").innerHTML ="el campo numero 2 es obligatorio";
    }else{
        document.getElementById("numero2").setAttribute("class", "form-control is-valid");
        document.getElementById("validar_numero2").innerHTML ="";
    }
    if((numero1!='')&&(numero2!='')){
        let sumatoria = sumar2(parseInt(numero1), parseInt(numero2));

        let parrafos = document.getElementsByTagName("p");
        parrafos[0].innerHTML = "la suma es "+sumatoria;

        //crear nodo o etiqueta
        let crear_etiqueta = document.createElement("h5");
        //crear texto para la etiqueta o nodo
        let texto_etiqueta = document.createTextNode("la suma es "+sumatoria);
        crear_etiqueta.appendChild(texto_etiqueta);

        document.getElementById("caja_resultado").appendChild(crear_etiqueta);   

        document.getElementById("btn_sumar").setAttribute("class", "btn btn-success btn-formulario");
        document.getElementById("btn_sumar").setAttribute("disabled", "");
        document.getElementById("btn_sumar").value="Guardo";

    
    }

}

function sumar5(){
    //var formulario = document.getElementById("formulario").innerHTML;
    var formulario = document.getElementById("formulario");
    let longitud_formulario = formulario.length;

    for(i=0; i<longitud_formulario; i++){
        console.log("dato "+i+" tiene "+formulario[i].value);
    }

    alert("el campo 1 tiene el valor "+formulario[0].value);

    alert("formualario tiene "+longitud_formulario);
}

