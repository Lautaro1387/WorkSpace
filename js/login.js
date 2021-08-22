//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
function verificar(usuario, contraseña){
    let user = {};
    if(usuario.trim()===""){
        alert("Indica tu nombre de usuario") ;  
    } else if (contraseña.trim()==="")
    alert("Coloca correctamente tu contraseña")
    else{
        user.nombre = usuario;
        user.contraseña = contraseña;
        user.estado = "conectado";
        localStorage.setItem("usuario",JSON.stringify(user));
        location.href="index.html";
    }
    }
    
    function desconectar() {
    localStorage.clear();
    }

    document.addEventListener("DOMContentLoaded", function(e){

    });