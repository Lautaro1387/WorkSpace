const ORDER_ASC_BY_NAME = "AZ";
const ORDER_DESC_BY_NAME = "ZA";
const ORDER_ASC_BY_PREC = "00"
const ORDER_DES_BY_PREC = "99"
const ORDER_BY_PROD_SOLD = "Relevancia.";
var currentProductsArray = [];
var currentSortCriteria = undefined;
var minPre = undefined;
var maxPre = undefined;

function sortProducts(criteria, array){
    let result = [];
    if (criteria === ORDER_ASC_BY_NAME)
    {
        result = array.sort(function(a, b) {
            if ( a.name < b.name ){ return -1; }
            if ( a.name > b.name ){ return 1; }
            return 0;
        });
    }else if (criteria === ORDER_DESC_BY_NAME){
        result = array.sort(function(a, b) {
            if ( a.name > b.name ){ return -1; }
            if ( a.name < b.name ){ return 1; }
            return 0;
        });
    }else if (criteria === ORDER_BY_PROD_SOLD)
    {
        result = array.sort(function(a, b) {
            let aPre = parseInt(a.soldCount);
            let bPre = parseInt(b.soldCount);

            if ( aPre > bPre ){ return -1; }
            if ( aPre < bPre ){ return 1; }
            return 0;
        });
    }else if (criteria === ORDER_ASC_BY_PREC)
    {
        result = array.sort(function(a, b) {
            if ( a.cost < b.cost ){ return -1; }
            if ( a.cost > b.cost ){ return 1; }
            return 0;
        });
    }else if (criteria === ORDER_DES_BY_PREC)

        result = array.sort(function(a, b) {
        if ( a.cost < b.cost ){ return -1; }
        if ( a.cost > b.cost ){ return 1; }
        return 0;
    });
    

    return result;
}

function showProductsList(){

    let htmlProductToAppend = "";
    for(let i = 0; i < currentProductsArray.length; i++){
        let product = currentProductsArray[i];

        if (((minPre == undefined) || (minPre != undefined && parseInt(product.cost) >= minPre)) &&
            ((maxPre == undefined) || (maxPre != undefined && parseInt(product.cost) <= maxPre))){

            htmlProductToAppend += `
            <a href="product-info.html" class="list-group-item list-group-item-action">
                <div class="row">
                    <div class="col-3">
                        <img src="` + product.imgSrc + `" alt="` + product.description + `" class="img-thumbnail">
                    </div>
                    <div class="col">
                        <div class="d-flex w-100 justify-content-between">
                            <h4 class="mb-1">`+ product.name +`</h4>
                            <small class="text-muted">` + product.soldCount + ` artículos</small>
                        </div>
                        <p class="mb-3">` + product.description + `</p>
                        <div> <h5 style="font-weight: bold" color:red >` + product.cost +` USD </h5>
                        </div>
                    </div>
                </div>
            </a>
            `
        }

        document.getElementById("prod-list-container").innerHTML = htmlProductToAppend;
    }
}

function sortAndShowProducts(sortCriteria, productsArray){
    currentSortCriteria = sortCriteria;

    if(productsArray != undefined){
        currentProductsArray = productsArray;
    }

    currentProductsArray = sortProducts(currentSortCriteria, currentProductsArray);

    showProductsList();
}

//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function(e){
    getJSONData(PRODUCTS_URL).then(function(resultObj){
        if (resultObj.status === "ok"){
            sortAndShowProducts(ORDER_ASC_BY_NAME, resultObj.data);
        }
    });

    document.getElementById("sortAsc").addEventListener("click", function(){
        sortAndShowProducts(ORDER_ASC_BY_NAME);
    });

    document.getElementById("sortDesc").addEventListener("click", function(){
        sortAndShowProducts(ORDER_DESC_BY_NAME);
    });
//-----
    document.getElementById("sortByPrec").addEventListener("click", function(){
        sortAndShowProducts(ORDER_BY_PROD_SOLD);
    });

    document.getElementById("sortByPrecioA").addEventListener("click", function(){
        sortAndShowProducts(ORDER_ASC_BY_PREC);
    });

    document.getElementById("sortByPrecioReverense").addEventListener("click", function(){
        sortAndShowProducts(ORDER_DES_BY_PREC);
    });
//------
    document.getElementById("clearRangeFilter").addEventListener("click", function(){
        document.getElementById("rangeFilterPreMin").value = "";
        document.getElementById("rangeFilterPreMax").value = "";

        minPre = undefined;
        maxPre = undefined;

        showProductsList();
    });

    document.getElementById("rangeFilterCount").addEventListener("click", function(){
      
        minPre = document.getElementById("rangeFilterPreMin").value;
        maxPre = document.getElementById("rangeFilterPreMax").value;

        if ((minPre != undefined) && (minPre != "") && (parseInt(minPre)) >= 0){
            minPre = parseInt(minPre);
        }
        else{
            minPre = undefined;
        }

        if ((maxPre != undefined) && (maxPre != "") && (parseInt(maxPre)) >= 0){
            maxPre = parseInt(maxPre);
        }
        else{
            maxPre = undefined;
        }

        showProductsList();
    });
});

function mostrar(precio){
    for(let nombre of precio)
    precios += ` <tr><tr>` + nombre + `</tr></tr>` ;
}

function ordenar(){
    precio.sort()
    mostrar(precio)
}
function reversa(){
    precio.reverse()
    mostrar(precio)
}