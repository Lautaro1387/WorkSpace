//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
//document.addEventListener("DOMContentLoaded", function(e){
//    });
let productCost = 0;
let productCount = 0;
let comissionPercentage = 0;
let MONEY_SYMBOL = "$";
let DOLLAR_CURRENCY = "Dólares (USD)";
let PESO_CURRENCY = "Pesos Uruguayos (UYU)";
let DOLLAR_SYMBOL = "USD ";
let PESO_SYMBOL = "UYU ";
let PERCENTAGE_SYMBOL = '%';

//Función que se utiliza para actualizar los costos de publicación
function updateTotalCosts(){
    let unitProductCostHTML = document.getElementById("productCostText");
    let comissionCostHTML = document.getElementById("comissionText");
    let totalCostHTML = document.getElementById("totalCostText");

    let unitCostToShow = MONEY_SYMBOL + productCost;
    let comissionToShow = Math.round((comissionPercentage * 100)) + PERCENTAGE_SYMBOL;
    let totalCostToShow = MONEY_SYMBOL + (Math.round(productCost * comissionPercentage * 100) / 100);

    unitProductCostHTML.innerHTML = unitCostToShow;
    comissionCostHTML.innerHTML = comissionToShow;
    totalCostHTML.innerHTML = totalCostToShow;
}

let compras = [];
function mostrarcompras (compras){

    let carro= compras.articles;
 
     for(let i = 0; i <carro.length; i++){
 
     let carros=carro[i];
     let res = document.createElement("tr")
     res.className="producto"
     let carrote = "";
 
 
         carrote +=`<tr> <td>
                 <h5>${carros.name}</h5>
                 <br> </td>
                 <td class="text-center mob-hide">
                 <img style=" width: 250px; height: 150px;" src="${carros.src}">
                 </td>
                 <td class="mob-hide">
                 <span class="order-product-price">${carros.currency}` + `${carros.unitCost}</span>
                 </td>
                 <td>
                 <input class="cantidad" type="number" name="Cantidad" min="1"  value="${carros.count}">
                 </td>
                 <td>
                 <span class="product-subtotal">${carros.currency}` + `${carros.unitCost}</span>
                 </td>
                 </tr>
                 `
     
               res.innerHTML = carrote




               let cant = res.getElementsByClassName("cantidad")[0];
               cant.addEventListener("change", function (e){ 

                let subtot = res.getElementsByClassName("product-subtotal")[0]
                subtot.textContent = `${carros.currency}` + `${carros.unitCost * cant.value}`;
               })

               document.getElementById("carrito").appendChild(res)
 }
}
    document.addEventListener("DOMContentLoaded", function(e){
        getJSONData(CART_INFO_URL_2 ).then(function(resultObj){
            if (resultObj.status === "ok")
            {
                compras = resultObj.data;
    
                mostrarcompras(compras);
            }
        });

        
        document.getElementById("goldradio").addEventListener("change", function(){
            comissionPercentage = 0.15;
            updateTotalCosts();
        });
        
        document.getElementById("premiumradio").addEventListener("change", function(){
            comissionPercentage = 0.07;
            updateTotalCosts();
        });
    
        document.getElementById("standardradio").addEventListener("change", function(){
            comissionPercentage = 0.05;
            updateTotalCosts();
        });
    });
    
function comprarconexito(){
    alert("¡Has comprado con exito!")
}


