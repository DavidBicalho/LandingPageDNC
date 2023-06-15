var setaDireita = window.document.getElementById("setadireita")
var setaEsquerda = window.document.getElementById("setaesquerda")
var Bruna = window.document.getElementById("Bruna")
var Leonardo = window.document.getElementById("Leonardo")
var Samantha = window.document.getElementById("Samantha")

function RolarParaDireita() {
    Leonardo.style ="display:none"
    Bruna.style ="display:flex"
    setaDireita.style = "display:none"
    setaEsquerda.style = "display:flex"

}

function RolarParaEsquerda() {
    Leonardo.style = "display:flex"
    Bruna.style = "display:none"
    setaDireita.style = "display:flex"
    setaEsquerda.style = "display:none"

}