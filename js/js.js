/* Datos del formulario */ 

var nombre1 = document.querySelector("#inputNombre1").value;
var nombre2 = document.querySelector("#inputNombre2").value;
var apellidos = document.querySelector("#inputApellidos").value;
var correo = document.querySelector("#inputCorreo").value;



/* programacion: */

function verificacionContrasenna(elEvento){
elEvento.preventDefault();

var contrasenna = document.querySelector("#inputContrasenna").value;
var confirmacionContrasenna = document.querySelector("#inputConfirmarContrasenna").value;
var respuesta = document.querySelector("#inputRespuesta");
var respuesta2 = document.querySelector("#inputRespuesta2");

var respuestaCorrecta = "La contraseña es correcta"
var respuestaIncorrecta = "La contraseña que escribiste no es la misma"

if(contrasenna == confirmacionContrasenna){
    respuesta.innerHTML = respuestaCorrecta;
    respuesta2.innerHTML = "";
    
}else{
    respuesta2.innerHTML = respuestaIncorrecta;
    respuesta.innerHTML = "";

    
}
}

var boton = document.querySelector("#inputFormulario");
boton.addEventListener("submit", verificacionContrasenna);