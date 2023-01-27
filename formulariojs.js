var edit = false;

var n = 0;
function agregarGustos(){
    var gustoT = document.getElementById("gusto").value;
    var fila =
        "<tr><td>" +
        gustoT +
        "</td><td>" +
        0 +
        "</td><td>" +
        '<span class="editar" onclick="editarGusto(this)" style="color: blue; cursor: pointer;">Editar</span>' +
        "</td></tr>";
    var registro = document.createElement("TR");
    registro.innerHTML = fila;
    document.getElementById("body_table_gustos").appendChild(registro);
}

function editarGusto(nodo) {
    if (edit == false) {
        var nTd = nodo.parentNode;
        var nTr = nTd.parentNode;
        var nbotones = document.getElementById("contenedor_botones");
        var nsTr = nTr.getElementsByTagName("td");
        var gusto = nsTr[0].textContent;
        var porcentaje = nsTr[1].textContent;

        var filaeditable =
            '<td><input class="input" type="text" name="gusto" id="gusto" value="' +
            gusto +
            '" size="5"></td>' +
            '<td><input class="input" type="text" name="porcentaje" id="porcentaje" value="' +
            porcentaje +
            '" size="5"</td>' +
            "</td><td>En edición</td>";
        console.log(filaeditable);
        nTr.innerHTML = filaeditable;

        nbotones.innerHTML =
            "<p>Pulse Aceptar para guardar los cambios o cancelar para anularlos</p>" +
            '<input type="submit" class="btn btn-outline-success" onclick="enviarDatos()" value="Aceptar"> <input type="reset" onclick="window.location.reload()" class="btn btn-outline-danger" value="Cancelar">';
        edit = "true";
    } else {
        alert(
            "Solo se puede editar una línea. Recargue la página para poder editar otra."
        );
    }
}

function enviarDatos(){
    var nodoboton = document.getElementById("contenedor_botones");
    nodoboton.innerHTML =
    '<form name = "formulario1" action="registronew.html" method="get" onsubmit="enviarDatos()" onreset="anular()>' +
    '<input type="hidden" name="telefono" value="' +
    document.querySelector("#telefono").value +
    '">' +
    '<input type="hidden" name="telefono" value="' +
    document.querySelector("#telefono").value +
    '">' +
    '<input type="hidden" name="email" value="' +
    document.querySelector("#email").value +
    '">' +
    '<input type="hidden" name="nombre" value="' +
    document.querySelector("#nombre").value +
    '">' +
    '<input type="submit" class="btn btn-outline-success" onclick="enviarDatos()" value="Aceptar"> <input type="reset" onclick="window.location.reload()" class="btn btn-outline-danger" value="Cancelar">';
    document.formulario.submit();
}