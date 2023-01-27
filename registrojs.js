let parametros = new URLSearchParams(location.search);
var gusto = parametros.get("gusto");
var telefono = parametros.get("telefono");
var porcentaje = parametros.get("porcentaje");
var nombre = parametros.get("nombre");
var email = parametros.get("email")

document.getElementById("nombre").innerHTML = nombre;
document.getElementById("email").innerHTML = email;
document.getElementById("telefono").innerHTML = telefono;
document.getElementById("gusto").innerHTML = gusto;
document.getElementById("porcentaje").innerHTML = porcentaje;