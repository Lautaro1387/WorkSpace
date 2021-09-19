var products = {};
let lista = [];
function mostrarProductos(array){

    let htmlProductsToAppend = "";

    for(let i = 0; i < array.length; i++){
        let images = array[i];

        htmlProductsToAppend += `
        <div class="col-lg-3 col-md-4 col-6">
            <div class="d-block mb-4 h-100">
                <img class="img-fluid img-thumbnail" src="` + images + `" alt="">
            </div>
        </div>
        `

        document.getElementById("images").innerHTML = htmlProductsToAppend;
    }
}



//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function(e){
    getJSONData(PRODUCT_INFO_URL).then(function(resultObj){
        if (resultObj.status === "ok")
        {
            products = resultObj.data;

            let productNameHTML  = document.getElementById("productName");
            let productCostHTML = document.getElementById("cost");
            let productCurrencyHTML = document.getElementById("currency");
            let productDescriptionHTML = document.getElementById("productDescription");
            let productCountHTML = document.getElementById("soldCount"); //c de v
            let productCriteriaHTML = document.getElementById("category");
        
            productNameHTML.innerHTML = products.name;
            productCostHTML.innerHTML = products.cost;
            productCurrencyHTML.innerHTML = products.currency;
            productDescriptionHTML.innerHTML = products.description;
            productCountHTML.innerHTML = products.soldCount;
            productCriteriaHTML.innerHTML = products.category;

            //Muestro las imagenes en forma de galería
            mostrarProductos(products.images);
        }
    });
});


document.addEventListener("DOMContentLoaded", function(e){
    getJSONData(PRODUCT_INFO_COMMENTS_URL).then(function(resultObj){
        if (resultObj.status === "ok")
        {

            mostrarcomentarios(resultObj.data)
        }
    });
});
var comentarios = {};
function mostrarcomentarios(comentarios){

    let htmlCommentToAppend = "";

    for(let i=0;i <comentarios.length; i++){
       let comentario = comentarios[i];


      
     htmlCommentToAppend += `<tr>
     <td>` +comentario.user +` </td>
     <td> ` +comentario.description+`</td>
     <td>`+comentario.score+`</td>
     <td>`+comentario.dateTime+`</td>
     </tr>`

       document.getElementById("tabla").innerHTML = htmlCommentToAppend;
    }
    }
/* function cargar(){
    mostrar(comentarios);
    elvalor(0);
    document.getElementById("radio1").checked=false;
    document.getElementById("radio2").checked=false;
    document.getElementById("radio3").checked=false;
    document.getElementById("radio4").checked=false;
    document.getElementById("radio5").checked=false;
    document.getElementById("comment").value="";
}
var valor = "";
function elvalor(a){
    valor=a;
}
function agregar(){
    let persona ={};

    persona.nombre = document.getElementById("nombre").value
    persona.edad = parseInt(document.getElementById("edad").value)
    persona.fecha= new Date()

    if(persona.nombre.trim() == ""){
        alert("Nombre en blanco")
    } else{
        lista.push(persona);
    }
    mostrar(lista);

    document.getElementById("nombre").value="";
    document.getElementById("edad").value=""
} 
function mostrar(lista){

    let tabla = document.getElementById("tabla");
    let filas = "";

    for(let nombre of lista){
filas +=`<tr><td>`+nombre+`</td></tr>`;
    }
    tabla.innerHTML = filas
    console.log(lista);
} */