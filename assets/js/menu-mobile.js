const menu = document.getElementById("menu-imagem-mobline");
const menuSair = document.getElementById("menu-sair");
const navegacao = document.getElementById("menu-navegacao");
const navega = document.getElementById("navega");
const logo = document.querySelector(".logo-img");

function menuE() {

    menu.style.visibility = "hidden";
    navegacao.style.display = "flex";
    navega.style.height = "100%";
    logo.style.margin = "-351px 0 0 12px";
    menuSair.style.margin = "0 0 649px 429px";

    if (menu.style.visibility === "hidden") {
        menuSair.style.visibility = "visible";
    } else {
        menu.style.visibility = "hidden";
    }

    
}

function sairMenu() {

    menuSair.style.visibility = "hidden";
    logo.style.margin = "-29px 0 0 12px";
    navega.style.height = "56px";

    if (menuSair.style.visibility === "hidden") {
        menu.style.visibility = "visible";
        navegacao.style.display = "none";
    } else {
        menuSair.style.visibility = "hidden";
    }

    
    
}

