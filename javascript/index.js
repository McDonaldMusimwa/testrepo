import toggleMenu from "./hamburger.mjs";
import Products from "./services.mjs";
import fakeShopTemplate from "./template.mjs";
//import data from "./data.json" assert { type: "json" };
//import buldElements from "./elements.mjs";
import modalfunctionality from "./modalfunctionality.mjs";


/*******************
 * ham burger menu *
 *******************/
const openmenu = document.getElementById("humburgerBtn");
openmenu.onclick = toggleMenu;
/***********************
 * Display each Modal*
 ***********************/
document.addEventListener('DOMContentLoaded', function () {
    const products = new Products();
    const template = new fakeShopTemplate();
    //jewellery
    products.getProductsJewellery().then(datas => {
        let dom = document.querySelector('.products-container');
        template.clothsElectronics(datas, dom);
    });
    //mans clothing
    products.getProductsMans().then(datas => {
        let dom = document.querySelector('.products-container2');
        template.clothsElectronics(datas, dom);
    });

    //womans clothing
    products.getProductsWoman().then(datas => {
        let dom = document.querySelector('.products-container3');
        template.clothsElectronics(datas, dom);
    });

    //womans clothing
    products.getProductsElectronics().then(datas => {
        let dom = document.querySelector('.products-container4');
        template.clothsElectronics(datas, dom);
    });

    //womans clothing
    products.getProductsFurniture().then(datas => {
        let dom = document.querySelector('.products-container5');
        template.clothsElectronics(datas.data.products, dom);
    });

    //womans clothing
    products.getProductsAll().then(datas => {
        let dom = document.querySelector('.products-container6');
        template.clothsElectronics(datas, dom);
    });
});

/*
products.getProductsMans().then(datas=>{
    template.clothsElectronics(datas)
})
products.getProductsWoman().then(datas=>{
    template.clothsElectronics(datas)
})
products.getProductsElectronics().then(datas=>{
    template.clothsElectronics(datas)
})
products.getProductsTools().then(datas=>{
    template.toolsFurniture(datas)
})
products.getProductsFurniture().then(datas=>{
    template.toolsFurniture(datas)
})

*/
/* Get the modal
var modal = document.querySelector(".myModal");


var btn = document.querySelector(".myBtn");


var span = document.getElementsByClassName("close")[0];


btn.onclick = function () {
    modal.style.display = "block";
}


span.onclick = function () {
    modal.style.display = "none";
}


window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

*/


/**********
 * modals *
 * *******/
modalfunctionality();



/* ****************************************************
* call the build function and pass data from the json *
******************************************************/
//buldElements(data)

