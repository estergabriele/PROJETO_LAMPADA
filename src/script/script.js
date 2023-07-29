let lampadaQuebrada = false;

btnAcender.addEventListener("click", acenderLampada);
function acenderLampada() {
    if (lampadaQuebrada == false) {
        imgLampada.setAttribute("src", "src/imagens/lampada-on.png");
    } else {
        btnTrocar.style.border = "2px solid red";
    }
}

btnApagar.addEventListener("click", apagarLampada);

function apagarLampada() {
    if (lampadaQuebrada == false) {
        imgLampada.setAttribute("src", "src/imagens/lampada-off.png");
    } else {
        btnTrocar.style.border = "2px solid red";
    }
}

imgLampada.addEventListener("dblclick", quebrarLampada);
function quebrarLampada() {
    imgLampada.setAttribute("src", "src/imagens/lampada-quebrada.png");
    lampadaQuebrada = true;
}

btnTrocar.addEventListener("click", trocarLampada);

function trocarLampada() {
    btnTrocar.style.border = "2px solid black";
    imgLampada.setAttribute("src", "src/imagens/lampada-off.png");
    lampadaQuebrada = false;
}