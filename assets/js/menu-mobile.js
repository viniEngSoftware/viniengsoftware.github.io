const menu = document.getElementById("menu-imagem-mobline");
const menuSair = document.getElementById("menu-sair");
const navegacao = document.getElementById("menu-navegacao");
const navega = document.getElementById("navega");
const logo = document.querySelector(".logo-img");

    function navegarPara(destino) {
        sairMenu();
    }

function menuE(){
    navegacao.style.display = "flex";
    navega.style.height= "100%"
    logo.style.margin= "-71.8% 0 0 2.5%";
    menuSair.style.margin = "-131.9% 0 0 88.5%";

    if (menu.style.visibility === "visible") {
        menu.style.visibility = "hidden";
        menuSair.style.visibility = "visible";
    } else{
        menu.style.visibility = "visible";
    }
}


function sairMenu() { 
    navega.style.height= "8%"
    logo.style.margin= "-6% 0 0 2.5%";

    if (menuSair.style.visibility === "visible") {
        menuSair.style.visibility = "hidden";
        menu.style.visibility = "visible";
        navegacao.style.display = "none";
    
    } else{
        menuSair.style.visibility = "visible";
    }

}

