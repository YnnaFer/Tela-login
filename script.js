
function validar() {
    var usuario = document.getElementsByName("usuario")[0];

    if (usuario.value.trim() === "" ) {
        alert("Usuário não informado");
        usuario.focus();
    }
}

