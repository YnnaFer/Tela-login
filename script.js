
function validar(){
    
    var usuario=document.getElementById("usuario");

    if(usuario.value==""){
        alert("Usuário não informado");

        usuario.focus();
    }

}