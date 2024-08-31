var esquerda = window.document.getElementById("esquerda")
var leonardo = window.document.getElementById("leonardo")
var bruna = window.document.getElementById("bruna")
var samantha = window.document.getElementById("samantha")
var direita = window.document.getElementById("direita")

function RolarParaDireita(){
    leonardo.style.display = "none";
    direita.style.display = "none";
    bruna.style.display = "flex";
    esquerda.style.display = "flex";
}

function RolarParaEsquerda(){
    leonardo.style.display = "flex";
    direita.style.display = "flex";
    bruna.style.display = "none";
    esquerda.style.display = "none";    
}