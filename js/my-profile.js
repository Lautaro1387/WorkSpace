//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
function previewFile(){
   var preview = document.querySelector("img")
   var file = document.querySelector("input[type=file]").files[0];
   var reader = new FileReader();

   reader.onloadend = function (){
       preview.src = reader.result
      document.getElementById("contenido").innerHTML = reader.result;
   }

   if(file){
       reader.readAsDataURL(file);
   } else{
       preview.src = "";
   }
}

function guardarDatos(){
    var preview = document.querySelector("img")
    let perfil = {};

perfil.nombre = document.getElementById("nombreP").value
perfil.edad = document.getElementById("edadP").value
perfil.email = document.getElementById("emailP").value
perfil.telefono = document.getElementById("phone").value
perfil.imagen = preview.src

localStorage.setItem("usuario", JSON.stringify(perfil));

}

document.addEventListener("DOMContentLoaded", function (e) {

    let perfil = JSON.parse(localStorage.getItem("usuario"))

    document.getElementById("nombreP").value = perfil.nombre
    document.getElementById("edadP").value = perfil.edad
    document.getElementById("emailP").value = perfil.email
    document.getElementById("fotito").src = perfil.imagen
    document.getElementById("phone").value = perfil.telefono
    
});